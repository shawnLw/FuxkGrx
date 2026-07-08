const fallback = {
  updatedAt: "2026-07-08",
  source: "fallback-demo",
  markets: [
    { region: "A股", index: "上证指数", symbol: "000001.SS", price: 3528.41, changePct: 0.42 },
    { region: "美股", index: "标普500", symbol: "^GSPC", price: 6327.18, changePct: 0.68 },
    { region: "港股", index: "恒生指数", symbol: "^HSI", price: 24218.07, changePct: 0.76 },
  ],
};

const symbols = ["SPY", "QQQ", "DIA", "ASHR", "MCHI", "EWH", "EWJ", "FEZ"];

exports.handler = async function handler() {
  try {
    const markets = await Promise.all(symbols.map(fetchYahooChart));
    const validMarkets = markets.filter(Boolean);

    if (!validMarkets.length) {
      return json({ ...fallback, source: "fallback-after-yahoo-empty" });
    }

    return json({
      updatedAt: new Date().toISOString(),
      source: "Yahoo Finance Chart API (unofficial, ETF proxies)",
      markets: validMarkets,
    });
  } catch (error) {
    return json({
      ...fallback,
      source: "fallback-after-yahoo-exception",
      error: error.message,
    });
  }
};

async function fetchYahooChart(symbol) {
  const url = `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(symbol)}?range=5d&interval=1d`;
  const response = await fetch(url, {
    headers: {
      "User-Agent": "Mozilla/5.0",
      "Accept": "application/json",
    },
  });

  if (!response.ok) return null;

  const payload = await response.json();
  const result = payload.chart?.result?.[0];
  if (!result) return null;

  const meta = result.meta || {};
  const closes = (result.indicators?.quote?.[0]?.close || []).filter((value) => typeof value === "number");
  const current = meta.regularMarketPrice || closes[closes.length - 1];
  const previous = closes.length >= 2 ? closes[closes.length - 2] : meta.chartPreviousClose;
  const changePct = previous ? ((current - previous) / previous) * 100 : 0;

  return {
    region: inferRegion(symbol),
    index: displayName(symbol, meta.longName),
    symbol,
    price: current,
    changePct,
  };
}

function inferRegion(symbol = "") {
  if (["SPY", "QQQ", "DIA"].includes(symbol)) return "美股";
  if (["ASHR", "MCHI"].includes(symbol)) return "A股";
  if (symbol === "EWH") return "港股";
  if (symbol === "EWJ") return "日本";
  if (symbol === "FEZ") return "欧洲";
  return "全球";
}

function displayName(symbol = "", fallbackName = "") {
  const names = {
    SPY: "标普500 ETF",
    QQQ: "纳斯达克100 ETF",
    DIA: "道琼斯 ETF",
    ASHR: "沪深300 ETF",
    MCHI: "中国股票 ETF",
    EWH: "香港 ETF",
    EWJ: "日本 ETF",
    FEZ: "欧洲 Stoxx 50 ETF",
  };
  return names[symbol] || fallbackName || symbol;
}

function json(body, statusCode = 200) {
  return {
    statusCode,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=60",
    },
    body: JSON.stringify(body),
  };
}
