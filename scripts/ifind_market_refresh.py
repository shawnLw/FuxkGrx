"""Refresh A-share and Hong Kong index data from iFinD.

Outputs:
- data/ifind-market.json: latest snapshot for the current trading day.
- data/ifind-market-history.json: daily history used when the user selects a date.

Secrets are read from local .env and are never written to generated JSON.
"""

from __future__ import annotations

import json
import os
from datetime import datetime, timedelta, timezone
from pathlib import Path
from typing import Any


PROJECT_ROOT = Path(__file__).resolve().parents[1]
DATA_DIR = PROJECT_ROOT / "data"
LATEST_FILE = DATA_DIR / "ifind-market.json"
HISTORY_FILE = DATA_DIR / "ifind-market-history.json"
ENV_FILE = PROJECT_ROOT / ".env"

INDEXES = [
    {"region": "A股", "index": "上证指数", "symbol": "000001.SH"},
    {"region": "A股", "index": "深证成指", "symbol": "399001.SZ"},
    {"region": "A股", "index": "创业板指", "symbol": "399006.SZ"},
    {"region": "A股", "index": "科创50", "symbol": "000688.SH"},
    {"region": "港股", "index": "恒生指数", "symbol": "HSI.HK"},
    {"region": "港股", "index": "恒生科技", "symbol": "HSTECH.HK"},
]

REALTIME_FIELDS = "latest;changeRatio;tradeDate;tradeTime"
HISTORY_FIELDS = "close;changeRatio;preClose;open;high;low;volume;amount"


def load_local_env() -> None:
    if not ENV_FILE.exists():
        return
    for line in ENV_FILE.read_text(encoding="utf-8").splitlines():
        line = line.strip()
        if not line or line.startswith("#") or "=" not in line:
            continue
        key, value = line.split("=", 1)
        os.environ.setdefault(key.strip(), value.strip().strip('"').strip("'"))


def login_ifind():
    try:
        from iFinDPy import THS_HD, THS_RQ, THS_iFinDLogin  # type: ignore
    except ImportError as exc:
        raise RuntimeError("没有找到 iFinDPy，请先安装 iFinDAPI。") from exc

    load_local_env()
    username = os.getenv("IFIND_USERNAME")
    password = os.getenv("IFIND_PASSWORD")
    if not username or not password:
        raise RuntimeError("请先在项目 .env 中填写 IFIND_USERNAME 和 IFIND_PASSWORD。")

    login_result = THS_iFinDLogin(username, password)
    if str(login_result) not in ("0", "None"):
        raise RuntimeError(f"iFinD 登录失败，返回值：{login_result}")

    return THS_RQ, THS_HD


def to_float(value: Any) -> float | None:
    if value in (None, "", "--"):
        return None
    try:
        return float(str(value).replace("%", "").replace(",", ""))
    except ValueError:
        return None


def normalize_ifind_result(result: Any) -> list[dict[str, Any]]:
    if isinstance(result, tuple):
        error_code, payload = result[0], result[-1]
        if str(error_code) not in ("0", "None"):
            raise RuntimeError(f"iFinD 返回错误码：{error_code}")
        result = payload

    error_code = getattr(result, "errorcode", None)
    if error_code not in (None, 0, "0"):
        message = getattr(result, "errmsg", "")
        raise RuntimeError(f"iFinD 返回错误码：{error_code} {message}")

    data = getattr(result, "data", None)
    if hasattr(data, "to_dict"):
        return data.to_dict(orient="records")
    if data is None:
        return []

    indicators = list(getattr(result, "indicators", []) or [])
    codes = list(getattr(result, "thscode", []) or [])
    rows = []
    if isinstance(data, list) and codes:
        for index, code in enumerate(codes):
            values = data[index] if index < len(data) and isinstance(data[index], list) else []
            rows.append({"thscode": code, **dict(zip(indicators, values))})
    return rows


def find_value(row: dict[str, Any], names: list[str]) -> Any:
    lowered = {str(key).lower(): value for key, value in row.items()}
    for name in names:
        if name in row:
            return row[name]
        value = lowered.get(name.lower())
        if value is not None:
            return value
    return None


def fetch_realtime_rows(THS_RQ) -> list[dict[str, Any]]:
    rows = []
    skipped = []
    for item in INDEXES:
        try:
            result = THS_RQ(item["symbol"], REALTIME_FIELDS)
            rows.extend(normalize_ifind_result(result))
        except RuntimeError as exc:
            skipped.append(f"{item['symbol']} {item['index']}：{exc}")
    if skipped:
        print("以下实时指数暂时跳过：")
        for item in skipped:
            print(f"- {item}")
    return rows


def fetch_history_rows(THS_HD, days: int = 90) -> list[dict[str, Any]]:
    end = datetime.now(timezone(timedelta(hours=8))).date()
    start = end - timedelta(days=days)
    rows = []
    skipped = []
    for item in INDEXES:
        try:
            result = THS_HD(item["symbol"], HISTORY_FIELDS, "", start.isoformat(), end.isoformat())
            for row in normalize_ifind_result(result):
                row.setdefault("thscode", item["symbol"])
                rows.append(row)
        except RuntimeError as exc:
            skipped.append(f"{item['symbol']} {item['index']}：{exc}")
    if skipped:
        print("以下历史指数暂时跳过：")
        for item in skipped:
            print(f"- {item}")
    return rows


def build_latest_snapshot(rows: list[dict[str, Any]]) -> dict[str, Any]:
    by_symbol = {}
    for row in rows:
        symbol = find_value(row, ["thscode", "thsCode", "code", "symbol", "证券代码"])
        if symbol:
            by_symbol[str(symbol).upper()] = row

    markets = []
    for meta in INDEXES:
        row = by_symbol.get(meta["symbol"].upper(), {})
        markets.append(
            {
                **meta,
                "price": to_float(find_value(row, ["latest", "最新价", "最新"])),
                "changePct": to_float(find_value(row, ["changeRatio", "涨跌幅"])),
                "tradeDate": str(find_value(row, ["tradeDate", "交易日期"]) or ""),
                "tradeTime": str(find_value(row, ["tradeTime", "交易时间"]) or ""),
            }
        )

    tz = timezone(timedelta(hours=8))
    return {
        "updatedAt": datetime.now(tz).isoformat(timespec="seconds"),
        "source": "同花顺 iFinD THS_RQ 本机脚本生成",
        "markets": [item for item in markets if item["price"] is not None],
    }


def build_history_snapshot(rows: list[dict[str, Any]]) -> dict[str, Any]:
    by_date: dict[str, list[dict[str, Any]]] = {}
    meta_by_symbol = {item["symbol"].upper(): item for item in INDEXES}

    for row in rows:
        symbol = str(find_value(row, ["thscode", "thsCode", "code", "symbol", "证券代码"]) or "").upper()
        meta = meta_by_symbol.get(symbol)
        if not meta:
            continue
        date = str(find_value(row, ["time", "date", "tradeDate", "交易日期"]) or "")[:10]
        close = to_float(find_value(row, ["close", "收盘价"]))
        if not date or close is None:
            continue
        by_date.setdefault(date, []).append(
            {
                **meta,
                "price": close,
                "changePct": to_float(find_value(row, ["changeRatio", "涨跌幅"])),
            }
        )

    return {
        "updatedAt": datetime.now(timezone(timedelta(hours=8))).isoformat(timespec="seconds"),
        "source": "同花顺 iFinD THS_HD 本机脚本生成",
        "dates": by_date,
    }


def write_json(path: Path, payload: dict[str, Any]) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(payload, ensure_ascii=False, indent=2), encoding="utf-8")


def main() -> None:
    THS_RQ, THS_HD = login_ifind()
    latest = build_latest_snapshot(fetch_realtime_rows(THS_RQ))
    history = build_history_snapshot(fetch_history_rows(THS_HD))

    write_json(LATEST_FILE, latest)
    write_json(HISTORY_FILE, history)

    print(f"已生成 {LATEST_FILE}")
    print(f"实时指数数量：{len(latest['markets'])}")
    print(f"已生成 {HISTORY_FILE}")
    print(f"历史日期数量：{len(history['dates'])}")


if __name__ == "__main__":
    main()
