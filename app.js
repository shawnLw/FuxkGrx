const marketBase = {
  cn: {
    name: "A股",
    subtitle: "沪深市场",
    source: "当前为演示行情结构；实时行情、新闻和政策数据接口已预留，后续可接同花顺/Choice 导出或授权 API。",
    indexes: [
      { name: "上证指数", symbol: "000001.SS", price: 3528.41, day: 0.42, week: 1.08, ytd: 4.9 },
      { name: "深证成指", symbol: "399001.SZ", price: 10764.82, day: 0.73, week: 1.92, ytd: 6.8 },
      { name: "创业板指", symbol: "399006.SZ", price: 2248.17, day: 1.36, week: 2.86, ytd: 8.7 },
      { name: "科创50", symbol: "000688.SS", price: 985.26, day: 1.08, week: 3.24, ytd: 12.6 },
    ],
    sectors: [
      { name: "半导体", day: 2.48, week: 5.82, ytd: 28.6 },
      { name: "通信", day: 1.72, week: 4.28, ytd: 22.4 },
      { name: "医药", day: 0.92, week: 1.66, ytd: 15.8 },
      { name: "煤炭", day: -0.64, week: -1.24, ytd: 7.6 },
      { name: "地产", day: -1.18, week: -2.86, ytd: -12.3 },
    ],
    risk: ["中性偏暖", "震荡修复", "风险偏好回升", "短线分歧"],
    volume: ["温和放量", "缩量整理", "结构活跃", "资金回流"],
    style: ["成长占优", "红利防守", "科技领涨", "周期轮动"],
  },
  us: {
    name: "美股",
    subtitle: "美国市场",
    source: "当前为演示行情结构；实时行情、新闻和政策数据接口已预留，后续可接公开行情源或授权 API。",
    indexes: [
      { name: "标普500", symbol: "^GSPC", price: 6327.18, day: 0.68, week: 1.74, ytd: 13.2 },
      { name: "纳斯达克", symbol: "^IXIC", price: 21102.34, day: 1.12, week: 2.48, ytd: 18.5 },
      { name: "道琼斯", symbol: "^DJI", price: 44902.51, day: 0.21, week: 0.62, ytd: 6.8 },
      { name: "费城半导体", symbol: "^SOX", price: 6128.42, day: 1.94, week: 4.36, ytd: 26.2 },
    ],
    sectors: [
      { name: "科技", day: 1.56, week: 3.42, ytd: 21.4 },
      { name: "可选消费", day: 0.88, week: 1.96, ytd: 10.5 },
      { name: "金融", day: 0.34, week: 0.74, ytd: 8.8 },
      { name: "能源", day: -0.72, week: -1.12, ytd: 4.6 },
      { name: "公用事业", day: -0.44, week: 0.18, ytd: 3.3 },
    ],
    risk: ["偏积极", "高位震荡", "风险偏好较强", "等待数据"],
    volume: ["结构活跃", "温和放量", "科技集中", "小盘偏弱"],
    style: ["科技领涨", "AI 主线", "大盘成长", "质量风格"],
  },
  hk: {
    name: "港股",
    subtitle: "香港市场",
    source: "当前为演示行情结构；实时行情、新闻和政策数据接口已预留，后续可接港交所、公开新闻源或授权 API。",
    indexes: [
      { name: "恒生指数", symbol: "^HSI", price: 24218.07, day: 0.76, week: 1.84, ytd: 5.7 },
      { name: "恒生科技", symbol: "3033.HK", price: 5298.22, day: 1.68, week: 4.26, ytd: 14.8 },
      { name: "国企指数", symbol: "^HSCE", price: 8725.64, day: 0.94, week: 2.38, ytd: 7.9 },
      { name: "红筹指数", symbol: "^HSCC", price: 4216.31, day: 0.28, week: 0.86, ytd: 4.2 },
    ],
    sectors: [
      { name: "互联网", day: 2.12, week: 5.16, ytd: 16.9 },
      { name: "汽车", day: 1.24, week: 2.42, ytd: 11.2 },
      { name: "生物科技", day: 0.66, week: 1.28, ytd: 6.5 },
      { name: "内房", day: -1.36, week: -3.48, ytd: -18.4 },
      { name: "银行", day: -0.22, week: 0.52, ytd: 5.1 },
    ],
    risk: ["震荡修复", "低位反弹", "情绪回暖", "资金分歧"],
    volume: ["低位回升", "南向活跃", "成交改善", "缩量等待"],
    style: ["互联网反弹", "高股息托底", "汽车活跃", "内房承压"],
  },
};

const newsLibrary = {
  cn: {
    fundamental: ["AI 服务器和先进封装需求延续高景气，电子板块资金关注度提升。", "消费复苏斜率仍需观察，白酒、免税和可选消费走势分化。", "部分周期品价格企稳，资源板块短线波动收敛。"],
    policy: ["资本市场改革继续聚焦长期资金入市和上市公司质量提升。", "新质生产力相关政策预期升温，科技成长方向关注度提高。", "地方稳地产政策继续落地，但市场更关注销售端实际改善。"],
  },
  us: {
    fundamental: ["大型科技公司盈利韧性仍是指数核心支撑。", "市场继续评估企业资本开支对 AI 产业链的传导。", "小盘股对利率预期更敏感，表现弱于大盘成长。"],
    policy: ["投资者继续关注通胀数据对降息路径的影响。", "财政支出与产业补贴议题对制造业板块形成边际支撑。", "监管层对大型平台公司的竞争政策仍是潜在扰动。"],
  },
  hk: {
    fundamental: ["平台经济盈利改善和回购力度提升，支撑互联网龙头情绪。", "南向资金延续净流入，对高股息资产形成托底。", "地产链条仍受销售恢复节奏制约，估值弹性有限。"],
    policy: ["互联互通机制优化预期提升港股流动性关注度。", "内地稳增长政策对顺周期和消费板块形成预期支撑。", "海外利率变化仍影响港股估值修复空间。"],
  },
};

const macroEvents = [
  { date: "2026-07-09", time: "09:30", country: "中国", title: "6月 CPI 同比", actual: "--", forecast: "1.1%", previous: "1.2%", source: "国家统计局/公开经济日历" },
  { date: "2026-07-09", time: "09:30", country: "中国", title: "6月 PPI 同比", actual: "--", forecast: "4.1%", previous: "3.9%", source: "国家统计局/公开经济日历" },
  { date: "2026-07-10", time: "20:30", country: "美国", title: "初请失业金人数", actual: "--", forecast: "22.8万", previous: "22.4万", source: "美国劳工部/公开经济日历" },
  { date: "2026-07-11", time: "待定", country: "中国", title: "6月 M0 货币供应同比", actual: "--", forecast: "--", previous: "11.9%", source: "中国人民银行/公开经济日历" },
];

const industryData = [
  {
    name: "半导体",
    ytd: 28.6,
    summary: "从浅层看，半导体是芯片制造链；往深处看，它是算力、设备、材料、制造工艺和终端需求共同驱动的资本密集型行业。",
    pages: [
      { title: "第一页：行业概括", bullets: ["核心链条包括设计、制造、封测、设备、材料和下游应用。", "AI 算力、国产替代和库存周期是近期最重要的三条线索。", "行业波动大，投资上要同时看景气度、估值和订单能见度。"], stats: [["年初至今", "+28.6%"], ["估值观察", "偏高"], ["景气阶段", "修复期"]] },
      { title: "第二页：上市公司结构", bullets: ["设计公司更轻资产，但受产品周期和客户集中度影响明显。", "制造与封测更资本密集，稼动率和资本开支决定利润弹性。", "设备材料公司受国产替代推动，但验证周期和客户认证很关键。"], stats: [["设计", "弹性高"], ["制造", "重资产"], ["设备材料", "国产化"]] },
      { title: "第三页：市场与政策逻辑", bullets: ["先进制程、先进封装和高带宽存储是 AI 链条的重要方向。", "政策支持通常体现在产业基金、税收、采购和研发补贴。", "政策利好不等于立刻兑现利润，需要跟踪订单、毛利率和现金流。"], stats: [["政策", "强支持"], ["订单", "需验证"], ["风险", "高波动"]] },
      { title: "第四页：竞争力分析", bullets: ["真正的壁垒来自技术迭代、客户认证、工艺经验和供应链协同。", "观察公司时优先看研发费用率、核心客户、产品良率和产能利用率。", "避免只因为概念热度买入，最好能落到具体产品和利润贡献。"], stats: [["壁垒", "认证+工艺"], ["核心指标", "良率"], ["投资要点", "兑现"]] },
    ],
  },
  {
    name: "通信设备",
    ytd: 22.4,
    summary: "通信设备连接算力和网络，光模块、交换机、数据中心互联是 AI 时代的关键基础设施。",
    pages: [
      { title: "行业概括", bullets: ["需求来自云厂商资本开支、运营商网络建设和数据中心升级。", "高速光模块是当前市场最关注的细分方向。", "订单节奏和价格压力会影响短期利润。"], stats: [["年初至今", "+22.4%"], ["主线", "AI 网络"], ["风险", "降价"]] },
    ],
  },
  {
    name: "创新药",
    ytd: 15.8,
    summary: "创新药看的是管线质量、临床进展、出海授权和现金流安全边际。",
    pages: [
      { title: "行业概括", bullets: ["研发周期长、失败率高，因此单一管线风险很大。", "BD 授权可以验证管线价值，也能改善现金流。", "估值既看未来空间，也看资金消耗速度。"], stats: [["年初至今", "+15.8%"], ["关键", "管线"], ["风险", "临床失败"]] },
    ],
  },
];

const bookData = [
  {
    name: "日本蜡烛图技术",
    author: "史蒂夫·尼森",
    summary: "基于你提供的 PDF 提取目录结构，网页中展示学习摘要和图解，不公开整本书原文。",
    pages: [
      { title: "第一页：目录地图", bullets: ["引论与历史背景。", "基础知识：蜡烛图绘制方法、反转形态、星线、持续形态、十字线。", "多技术共同参照：趋势线、回撤、均线、摆动指数、交易量和价格目标。"] },
      { title: "第二页：蜡烛图为什么有用", bullets: ["蜡烛图把开盘、收盘、最高、最低放在一个图形里，能快速表达多空力量。", "单根 K 线不应孤立使用，位置、趋势和成交量同样重要。", "学习重点不是背形态，而是理解形态背后的供需变化。"] },
      { title: "第三页：反转形态", bullets: ["锤子线、上吊线、吞没形态、乌云盖顶、刺透形态都属于反转观察工具。", "反转不是预测立刻反向，而是提醒原趋势可能衰竭。", "确认信号通常来自后续价格行为或其他技术指标共振。"] },
      { title: "第四页：星线与十字线", bullets: ["启明星和黄昏星强调趋势末端的情绪转折。", "十字线代表开收盘接近，常意味着多空暂时均衡。", "在关键支撑阻力位出现时，信号更值得重视。"] },
      { title: "第五页：如何实践", bullets: ["先判断趋势和位置，再识别形态。", "把蜡烛图与均线、成交量、回撤位结合，而不是只看单一图形。", "用复盘表记录形态出现后的 1 日、3 日、5 日表现，逐步建立自己的统计感。"] },
    ],
  },
];

const periodLabels = { day: "单日", week: "较上周", ytd: "较年初" };
let selectedMarket = "cn";
let selectedDate = document.getElementById("report-date").value;
let selectedPeriods = { index: "day", sector: "day" };
let selectedIndustry = industryData[0].name;
let industryPage = 0;
let selectedBook = bookData[0].name;
let bookPage = 0;
let liveIndexOverrides = {};

const formatPct = (value) => `${value > 0 ? "+" : ""}${Number(value).toFixed(2)}%`;
const formatPrice = (value) => Number(value).toLocaleString("zh-CN", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

function hashString(value) {
  let hash = 0;
  for (let index = 0; index < value.length; index += 1) hash = (hash * 31 + value.charCodeAt(index)) % 100000;
  return hash;
}

function vary(value, key, scale) {
  const hash = hashString(`${selectedDate}-${selectedMarket}-${key}`);
  return Number((value + (((hash % 200) - 100) / 100) * scale).toFixed(2));
}

function getMarketData() {
  const base = marketBase[selectedMarket];
  const shift = hashString(`${selectedDate}-${selectedMarket}`);
  return {
    ...base,
    riskLabel: base.risk[shift % base.risk.length],
    volumeLabel: base.volume[(shift + 1) % base.volume.length],
    styleLabel: base.style[(shift + 2) % base.style.length],
    indexes: base.indexes.map((row) => {
      const live = liveIndexOverrides[row.symbol];
      return {
        ...row,
        price: live?.price ?? vary(row.price, `${row.name}-price`, row.price * 0.006),
        day: live?.day ?? vary(row.day, `${row.name}-day`, 0.42),
        week: vary(row.week, `${row.name}-week`, 1.1),
        ytd: vary(row.ytd, `${row.name}-ytd`, 2.8),
        live: Boolean(live),
      };
    }),
    sectors: base.sectors.map((row) => ({
      ...row,
      day: vary(row.day, `${row.name}-day`, 0.55),
      week: vary(row.week, `${row.name}-week`, 1.15),
      ytd: vary(row.ytd, `${row.name}-ytd`, 3.4),
    })),
  };
}

function renderList(container, items, activeName, onClick) {
  container.innerHTML = items.map((item) => `
    <button class="select-card ${item.name === activeName ? "active" : ""}" data-name="${item.name}">
      <strong>${item.name}</strong>
      <span>${item.subtitle || item.author || formatPct(item.ytd)}</span>
    </button>
  `).join("");
  container.querySelectorAll(".select-card").forEach((button) => button.addEventListener("click", () => onClick(button.dataset.name)));
}

function renderBars(container, rows, activePeriod) {
  const max = Math.max(...rows.map((row) => Math.abs(row[activePeriod])), 1);
  container.innerHTML = rows.map((row) => {
    const value = row[activePeriod];
    const width = Math.max((Math.abs(value) / max) * 50, 3);
    const direction = value >= 0 ? "positive" : "negative";
    return `
      <div class="bar-row">
        <span class="bar-name">${row.name}</span>
        <span class="track"><span class="bar ${direction}" data-width="${width}" style="width: 0%;"></span></span>
        <span class="bar-values">
          ${Object.keys(periodLabels).map((period) => {
            const chipDirection = row[period] >= 0 ? "positive" : "negative";
            return `<span class="pct-chip ${period === activePeriod ? `active ${chipDirection}` : ""}">${periodLabels[period]} ${formatPct(row[period])}</span>`;
          }).join("")}
        </span>
      </div>
    `;
  }).join("");
  requestAnimationFrame(() => container.querySelectorAll(".bar").forEach((bar) => { bar.style.width = `${bar.dataset.width}%`; }));
}

function renderIndexStrip(indexes) {
  document.getElementById("index-strip").innerHTML = indexes.map((item) => `
    <article class="glass-panel index-card">
      <span>${item.name} · 演示</span>
      <strong>${formatPrice(item.price)}</strong>
      <small class="${item.day >= 0 ? "up" : "down"}">${formatPct(item.day)} · ${item.symbol}</small>
    </article>
  `).join("");
}

function renderNews(container, rows) {
  container.innerHTML = rows.map((item) => `<li>${item}</li>`).join("");
}

function renderMacroCalendar() {
  const selected = new Date(`${selectedDate}T00:00:00`);
  const start = new Date(selected);
  start.setDate(selected.getDate() - selected.getDay());
  const days = Array.from({ length: 7 }, (_, index) => {
    const date = new Date(start);
    date.setDate(start.getDate() + index);
    return date;
  });
  document.getElementById("calendar-days").innerHTML = days.map((date) => {
    const iso = date.toISOString().slice(0, 10);
    return `<div class="calendar-day ${iso === selectedDate ? "active" : ""}"><strong>${date.getDate()}</strong><span>${["周日", "周一", "周二", "周三", "周四", "周五", "周六"][date.getDay()]}</span></div>`;
  }).join("");
  const relevant = macroEvents.filter((item) => item.date >= selectedDate).slice(0, 4);
  document.getElementById("macro-list").innerHTML = relevant.map((item) => `
    <div class="macro-item">
      <span>${item.time}</span>
      <strong>${item.country} ${item.title}</strong>
      <span>今值 ${item.actual}</span>
      <span>预期 ${item.forecast}</span>
      <span>前值 ${item.previous}</span>
    </div>
  `).join("");
}

function renderMarket() {
  const data = getMarketData();
  renderList(document.getElementById("market-list"), Object.entries(marketBase).map(([key, value]) => ({ key, ...value })), data.name, (name) => {
    const found = Object.entries(marketBase).find(([, value]) => value.name === name);
    selectedMarket = found?.[0] || selectedMarket;
    renderMarket();
  });
  document.getElementById("market-name").textContent = `${data.name} · ${selectedDate}`;
  document.getElementById("risk-label").textContent = data.riskLabel;
  document.getElementById("volume-label").textContent = data.volumeLabel;
  document.getElementById("style-label").textContent = data.styleLabel;
  renderIndexStrip(data.indexes);
  renderBars(document.getElementById("index-chart"), data.indexes, selectedPeriods.index);
  renderBars(document.getElementById("sector-chart"), data.sectors, selectedPeriods.sector);
  renderMacroCalendar();
  renderNews(document.getElementById("fundamental-news"), newsLibrary[selectedMarket].fundamental);
  renderNews(document.getElementById("policy-news"), newsLibrary[selectedMarket].policy);
  document.getElementById("market-source").textContent = `数据源：${data.source}`;
}

function renderIndustry() {
  const industry = industryData.find((item) => item.name === selectedIndustry) || industryData[0];
  industryPage = Math.min(industryPage, industry.pages.length - 1);
  const page = industry.pages[industryPage];
  renderList(document.getElementById("industry-list"), industryData, selectedIndustry, (name) => {
    selectedIndustry = name;
    industryPage = 0;
    renderIndustry();
  });
  document.getElementById("industry-title").textContent = industry.name;
  document.getElementById("industry-summary").textContent = industry.summary;
  document.getElementById("industry-page-label").textContent = `${industryPage + 1} / ${industry.pages.length}`;
  document.getElementById("industry-page-body").innerHTML = `
    <h3>${page.title}</h3>
    <ul>${page.bullets.map((item) => `<li>${item}</li>`).join("")}</ul>
    <div class="mini-grid">${(page.stats || []).map(([label, value]) => `<div class="mini-stat"><strong>${value}</strong><span>${label}</span></div>`).join("")}</div>
  `;
}

function renderBook() {
  const book = bookData.find((item) => item.name === selectedBook) || bookData[0];
  bookPage = Math.min(bookPage, book.pages.length - 1);
  const page = book.pages[bookPage];
  renderList(document.getElementById("book-list"), bookData, selectedBook, (name) => {
    selectedBook = name;
    bookPage = 0;
    renderBook();
  });
  document.getElementById("book-title").textContent = book.name;
  document.getElementById("book-summary").textContent = book.summary;
  document.getElementById("book-page-label").textContent = `${bookPage + 1} / ${book.pages.length}`;
  document.getElementById("book-page-body").innerHTML = `<h3>${page.title}</h3><ul>${page.bullets.map((item) => `<li>${item}</li>`).join("")}</ul>`;
}

function switchPanel(panelName) {
  const meta = {
    market: ["Daily Market Review", "把市场噪声整理成可阅读的线索。", "聚合全球重要指数、行业表现、基本面新闻、政策线索和宏观数据日历。"],
    industry: ["Industry Deep Dive", "每天拆开一个行业，看见价格背后的结构。", "从概览、上市公司、估值表现，到政策、逻辑和竞争力逐页展开。"],
    learning: ["Investment Knowledge", "把经典书变成可以翻阅的投资训练卡。", "先从《日本蜡烛图技术》开始，用目录、摘要和图解建立交易语言。"],
  };
  document.getElementById("app-shell").dataset.panel = panelName;
  document.getElementById("panel-kicker").textContent = meta[panelName][0];
  document.getElementById("page-title").textContent = meta[panelName][1];
  document.getElementById("page-subtitle").textContent = meta[panelName][2];
  document.querySelectorAll(".nav-pill").forEach((item) => item.classList.toggle("active", item.dataset.panel === panelName));
  document.querySelectorAll(".panel").forEach((panel) => panel.classList.toggle("panel-visible", panel.id === `${panelName}-panel`));
}

function init() {
  document.querySelectorAll(".nav-pill").forEach((button) => button.addEventListener("click", () => switchPanel(button.dataset.panel)));
  document.querySelectorAll(".period-tab").forEach((button) => {
    button.addEventListener("click", () => {
      const chart = button.dataset.chart;
      selectedPeriods[chart] = button.dataset.period;
      document.querySelectorAll(`.period-tab[data-chart="${chart}"]`).forEach((item) => item.classList.toggle("active", item === button));
      renderMarket();
    });
  });
  document.getElementById("report-date").addEventListener("change", (event) => {
    selectedDate = event.target.value;
    renderMarket();
  });
  document.getElementById("industry-prev").addEventListener("click", () => {
    industryPage = Math.max(0, industryPage - 1);
    renderIndustry();
  });
  document.getElementById("industry-next").addEventListener("click", () => {
    const industry = industryData.find((item) => item.name === selectedIndustry) || industryData[0];
    industryPage = Math.min(industry.pages.length - 1, industryPage + 1);
    renderIndustry();
  });
  document.getElementById("book-prev").addEventListener("click", () => {
    bookPage = Math.max(0, bookPage - 1);
    renderBook();
  });
  document.getElementById("book-next").addEventListener("click", () => {
    const book = bookData.find((item) => item.name === selectedBook) || bookData[0];
    bookPage = Math.min(book.pages.length - 1, bookPage + 1);
    renderBook();
  });
  switchPanel("market");
  renderMarket();
  renderIndustry();
  renderBook();
}

init();
