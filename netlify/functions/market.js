const fallback = {
  updatedAt: "2026-07-08",
  source: "fallback-demo",
  markets: [
    { region: "A股", index: "上证指数", price: 3528.41, changePct: 0.42 },
    { region: "美股", index: "标普500", price: 6327.18, changePct: 0.68 },
    { region: "港股", index: "恒生指数", price: 24218.07, changePct: 0.76 },
  ],
};

exports.handler = async function handler() {
  const apiKey = process.env.FMP_API_KEY;

  if (!apiKey) {
    return json({
      ...fallback,
      note: "Set FMP_API_KEY in Netlify environment variables to enable live data.",
    });
  }

  try {
    const symbols = ["SPY", "QQQ", "DIA", "ASHR", "MCHI", "EWH", "EWJ", "FEZ"];
    const url = `https://financialmodelingprep.com/stable/quote?symbol=${encodeURIComponent(symbols.join(","))}&apikey=${apiKey}`;
    const response = await fetch(url);

    if (!response.ok) {
      const detail = await response.text();
      return json({
        ...fallback,
        source: "fallback-after-api-error",
        status: response.status,
        note: "FMP_API_KEY is present, but FMP rejected the quote request. Check plan permissions, quota, or supported symbols.",
        detail: detail.slice(0, 240),
      }, 200);
    }

    const rows = await response.json();
    return json({
      updatedAt: new Date().toISOString(),
      source: "Financial Modeling Prep",
      markets: rows.map((row) => ({
        region: inferRegion(row.symbol),
        index: displayName(row.symbol, row.name),
        symbol: row.symbol,
        price: row.price,
        changePct: row.changesPercentage ?? row.changePercentage ?? row.changePercent ?? 0,
      })),
    });
  } catch (error) {
    return json({ ...fallback, source: "fallback-after-exception", error: error.message }, 200);
  }
};

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
