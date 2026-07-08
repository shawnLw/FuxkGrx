"""Refresh market index data from iFinD and write a static JSON snapshot.

Run locally after logging in to iFinD or configuring the iFinD Python SDK.
The generated data/ifind-market.json is intentionally git-ignored because it
is an operational snapshot, not source code.
"""

from __future__ import annotations

import json
from datetime import datetime, timezone, timedelta
from pathlib import Path
from typing import Any


PROJECT_ROOT = Path(__file__).resolve().parents[1]
OUTPUT_FILE = PROJECT_ROOT / "data" / "ifind-market.json"

INDEXES = [
    {"region": "A股", "index": "上证指数", "symbol": "000001.SH"},
    {"region": "A股", "index": "深证成指", "symbol": "399001.SZ"},
    {"region": "A股", "index": "创业板指", "symbol": "399006.SZ"},
    {"region": "A股", "index": "科创50", "symbol": "000688.SH"},
    {"region": "港股", "index": "恒生指数", "symbol": "HSI.HI"},
    {"region": "港股", "index": "恒生科技", "symbol": "HSTECH.HI"},
    {"region": "美股", "index": "标普500", "symbol": "SPX.GI"},
    {"region": "美股", "index": "纳斯达克", "symbol": "IXIC.GI"},
    {"region": "美股", "index": "道琼斯", "symbol": "DJI.GI"},
    {"region": "日本", "index": "日经225", "symbol": "N225.GI"},
    {"region": "欧洲", "index": "欧洲Stoxx50", "symbol": "SX5E.GI"},
]

FIELDS = [
    "latest",
    "changeRatio",
    "chg_5d",
    "chg_year",
    "tradeDate",
    "tradeTime",
]


def to_float(value: Any) -> float | None:
    if value in (None, "", "--"):
        return None
    try:
        return float(str(value).replace("%", "").replace(",", ""))
    except ValueError:
        return None


def dataframe_to_records(df: Any) -> list[dict[str, Any]]:
    """Normalize common iFinD dataframe layouts into row dictionaries."""
    if hasattr(df, "to_dict"):
        records = df.to_dict(orient="records")
        if records:
            return records
    raise RuntimeError("iFinD returned an empty or unsupported dataframe.")


def fetch_ifind_rows() -> list[dict[str, Any]]:
    try:
        from iFinDPy import THS_RQ  # type: ignore
    except ImportError as exc:
        raise RuntimeError(
            "没有找到 iFinDPy。请先安装/配置同花顺 iFinD Python SDK。"
        ) from exc

    symbols = ",".join(item["symbol"] for item in INDEXES)
    fields = ";".join(FIELDS)
    result = THS_RQ(symbols, fields)

    if isinstance(result, tuple):
        # Some iFinD installs return (error_code, dataframe).
        error_code, payload = result[0], result[-1]
        if str(error_code) not in ("0", "None"):
            raise RuntimeError(f"iFinD 返回错误码：{error_code}")
        result = payload

    return dataframe_to_records(result)


def find_value(row: dict[str, Any], names: list[str]) -> Any:
    lowered = {str(key).lower(): value for key, value in row.items()}
    for name in names:
        if name in row:
            return row[name]
        value = lowered.get(name.lower())
        if value is not None:
            return value
    return None


def build_snapshot(rows: list[dict[str, Any]]) -> dict[str, Any]:
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
                "weekPct": to_float(find_value(row, ["chg_5d", "5日涨跌幅"])),
                "ytdPct": to_float(find_value(row, ["chg_year", "年初至今涨跌幅"])),
            }
        )

    tz = timezone(timedelta(hours=8))
    return {
        "updatedAt": datetime.now(tz).isoformat(timespec="seconds"),
        "source": "同花顺 iFinD THS_RQ 本机脚本生成",
        "markets": [item for item in markets if item["price"] is not None],
    }


def main() -> None:
    snapshot = build_snapshot(fetch_ifind_rows())
    OUTPUT_FILE.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT_FILE.write_text(json.dumps(snapshot, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"已生成 {OUTPUT_FILE}")
    print(f"指数数量：{len(snapshot['markets'])}")


if __name__ == "__main__":
    main()
