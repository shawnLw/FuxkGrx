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
    const symbols = ["^GSPC", "^IXIC", "^DJI"];
    const url = `https://financialmodelingprep.com/api/v3/quote/${symbols.join(",")}?apikey=${apiKey}`;
    const response = await fetch(url);

    if (!response.ok) {
      return json({ ...fallback, source: "fallback-after-api-error", status: response.status }, 200);
    }

    const rows = await response.json();
    return json({
      updatedAt: new Date().toISOString(),
      source: "Financial Modeling Prep",
      markets: rows.map((row) => ({
        region: "美股",
        index: row.name || row.symbol,
        symbol: row.symbol,
        price: row.price,
        changePct: row.changesPercentage,
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
