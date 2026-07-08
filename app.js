const marketData = {
  cn: {
    name: "A股",
    subtitle: "沪深市场",
    risk: "中性偏暖",
    volume: "温和放量",
    style: "成长占优",
    indexes: [
      ["沪深300", 0.84],
      ["上证指数", 0.42],
      ["创业板指", 1.36],
      ["科创50", 1.08],
      ["中证1000", -0.18],
    ],
    sectors: [
      ["半导体", 2.48],
      ["通信", 1.72],
      ["医药", 0.92],
      ["煤炭", -0.64],
      ["地产", -1.18],
    ],
    fundamental: [
      "AI 服务器和先进封装需求延续高景气，带动电子板块估值修复。",
      "消费复苏斜率仍需观察，白酒和免税链条资金分歧加大。",
      "部分周期品价格企稳，资源板块短线波动收敛。",
    ],
    policy: [
      "资本市场改革继续聚焦长期资金入市和上市公司质量提升。",
      "新质生产力相关政策预期升温，科技成长方向关注度提高。",
      "地方稳地产政策继续落地，但市场更关注销售端实际改善。",
    ],
  },
  us: {
    name: "美股",
    subtitle: "美国市场",
    risk: "偏积极",
    volume: "结构活跃",
    style: "科技领涨",
    indexes: [
      ["纳斯达克", 1.12],
      ["标普500", 0.68],
      ["道琼斯", 0.21],
      ["罗素2000", -0.36],
      ["费城半导体", 1.94],
    ],
    sectors: [
      ["科技", 1.56],
      ["可选消费", 0.88],
      ["金融", 0.34],
      ["能源", -0.72],
      ["公用事业", -0.44],
    ],
    fundamental: [
      "大型科技公司盈利韧性仍是指数核心支撑。",
      "市场继续评估企业资本开支对 AI 产业链的传导。",
      "小盘股对利率预期更敏感，表现弱于大盘成长。",
    ],
    policy: [
      "投资者继续关注通胀数据对降息路径的影响。",
      "财政支出与产业补贴议题对制造业板块形成边际支撑。",
      "监管层对大型平台公司的竞争政策仍是潜在扰动。",
    ],
  },
  hk: {
    name: "港股",
    subtitle: "香港市场",
    risk: "震荡修复",
    volume: "低位回升",
    style: "互联网反弹",
    indexes: [
      ["恒生指数", 0.76],
      ["恒生科技", 1.68],
      ["国企指数", 0.94],
      ["红筹指数", 0.28],
      ["地产分类", -0.82],
    ],
    sectors: [
      ["互联网", 2.12],
      ["汽车", 1.24],
      ["生物科技", 0.66],
      ["内房", -1.36],
      ["银行", -0.22],
    ],
    fundamental: [
      "平台经济盈利改善和回购力度提升，支撑互联网龙头情绪。",
      "南向资金延续净流入，对高股息资产形成托底。",
      "地产链条仍受销售恢复节奏制约，估值弹性有限。",
    ],
    policy: [
      "互联互通机制优化预期提升港股流动性关注度。",
      "内地稳增长政策对顺周期和消费板块形成预期支撑。",
      "海外利率变化仍影响港股估值修复空间。",
    ],
  },
};

const industries = [
  {
    name: "半导体",
    ytd: 28.6,
    summary: "受益于 AI 算力需求扩张、国产替代推进与库存周期改善，行业年内表现领先。",
    points: ["关注晶圆代工稼动率变化。", "观察先进封装、HBM 与设备材料订单。", "警惕高估值下业绩兑现节奏。"],
  },
  {
    name: "通信设备",
    ytd: 22.4,
    summary: "算力网络、光模块和数据中心建设是核心线索，订单能见度决定行情持续性。",
    points: ["跟踪海外云厂商资本开支。", "关注 800G/1.6T 光模块渗透。", "比较龙头公司毛利率变化。"],
  },
  {
    name: "创新药",
    ytd: 15.8,
    summary: "估值处于修复阶段，出海授权、临床进展和医保政策共同影响风险偏好。",
    points: ["优先看现金流和管线质量。", "关注 BD 交易条款和里程碑付款。", "回避单一管线失败风险过高的公司。"],
  },
  {
    name: "家电",
    ytd: 9.7,
    summary: "高分红、出口韧性与产品结构升级推动板块保持稳健表现。",
    points: ["比较内销和外销收入增速。", "关注原材料价格对毛利率影响。", "观察以旧换新政策实际拉动。"],
  },
  {
    name: "房地产",
    ytd: -12.3,
    summary: "行业仍处出清期，政策宽松预期较强，但基本面验证需要销售和现金流改善。",
    points: ["销售面积与价格是先行指标。", "关注优质房企融资成本。", "避免只看政策博弈忽略资产负债表。"],
  },
];

const books = [
  {
    name: "聪明的投资者",
    author: "本杰明·格雷厄姆",
    summary: "价值投资的经典入口，重点建立安全边际、市场先生和企业所有权视角。",
    notes: ["价格波动不是风险本身，永久性损失才是。", "安全边际来自保守估值、分散和耐心。", "投资者要区分企业价值与市场情绪。"],
    prompts: ["我买入的理由是否能用企业价值解释？", "如果市场明天关闭一年，我还愿意持有吗？", "当前价格给了我多少容错空间？"],
  },
  {
    name: "证券分析",
    author: "格雷厄姆 / 多德",
    summary: "更系统地训练财务报表、债券、股票和估值分析框架，适合深入研究者。",
    notes: ["分析应从资产、盈利能力和资本结构同时入手。", "历史利润需要结合周期位置重新解释。", "优先寻找可验证的事实，而非漂亮叙事。"],
    prompts: ["这家公司最关键的三项资产是什么？", "利润增长来自价格、销量还是会计口径？", "债务结构在压力场景下是否可承受？"],
  },
  {
    name: "周期",
    author: "霍华德·马克斯",
    summary: "帮助识别信用、情绪、盈利和估值周期的位置，避免在线性外推中犯错。",
    notes: ["周期无法精准预测，但可以判断大致位置。", "极端乐观和极端悲观都是重要信号。", "防守和进攻应随赔率变化动态调整。"],
    prompts: ["当前市场更像周期早期、中期还是后期？", "我的组合是否过度依赖单一宏观假设？", "哪些资产已经反映了过度悲观？"],
  },
  {
    name: "投资最重要的事",
    author: "霍华德·马克斯",
    summary: "强调第二层思维、风险控制、逆向投资和市场心理，是组合管理的重要读物。",
    notes: ["好资产不等于好投资，价格决定回报。", "风险往往在人人看不到风险时最高。", "逆向需要事实支持，不是为了不同而不同。"],
    prompts: ["我的观点和市场共识差异在哪里？", "如果判断错误，最大损失是什么？", "这笔交易的赔率是否足够补偿不确定性？"],
  },
];

let selectedMarket = "cn";
let selectedIndustry = industries[0].name;
let selectedBook = books[0].name;

const formatPct = (value) => `${value > 0 ? "+" : ""}${value.toFixed(2)}%`;

function renderBars(container, rows) {
  const max = Math.max(...rows.map(([, value]) => Math.abs(value)), 1);
  container.innerHTML = rows
    .map(([name, value]) => {
      const width = Math.max((Math.abs(value) / max) * 50, 3);
      const direction = value >= 0 ? "positive" : "negative";
      const style = value >= 0 ? `left: 50%; width: ${width}%;` : `left: 50%; width: ${width}%;`;
      return `
        <div class="bar-row">
          <span class="bar-name">${name}</span>
          <span class="track"><span class="bar ${direction}" style="${style}"></span></span>
          <span class="bar-value">${formatPct(value)}</span>
        </div>
      `;
    })
    .join("");
}

function renderList(container, items, activeName, onClick) {
  container.innerHTML = items
    .map(
      (item) => `
        <button class="select-card ${item.name === activeName ? "active" : ""}" data-name="${item.name}">
          <strong>${item.name}</strong>
          <span>${item.subtitle || item.author || formatPct(item.ytd)}</span>
        </button>
      `
    )
    .join("");

  container.querySelectorAll(".select-card").forEach((button) => {
    button.addEventListener("click", () => onClick(button.dataset.name));
  });
}

function renderNews(container, rows) {
  container.innerHTML = rows.map((item) => `<li>${item}</li>`).join("");
}

function renderMarket() {
  const data = marketData[selectedMarket];
  const markets = Object.entries(marketData).map(([key, value]) => ({ key, ...value }));
  const marketList = document.getElementById("market-list");
  marketList.innerHTML = markets
    .map(
      (item) => `
        <button class="select-card ${item.key === selectedMarket ? "active" : ""}" data-key="${item.key}">
          <strong>${item.name}</strong>
          <span>${item.subtitle}</span>
        </button>
      `
    )
    .join("");
  marketList.querySelectorAll(".select-card").forEach((button) => {
    button.addEventListener("click", () => {
      selectedMarket = button.dataset.key;
      renderMarket();
    });
  });

  document.getElementById("market-name").textContent = data.name;
  document.getElementById("risk-label").textContent = data.risk;
  document.getElementById("volume-label").textContent = data.volume;
  document.getElementById("style-label").textContent = data.style;
  renderBars(document.getElementById("index-chart"), data.indexes);
  renderBars(document.getElementById("sector-chart"), data.sectors);
  renderNews(document.getElementById("fundamental-news"), data.fundamental);
  renderNews(document.getElementById("policy-news"), data.policy);
}

function renderIndustry() {
  const industry = industries.find((item) => item.name === selectedIndustry) || industries[0];
  renderList(document.getElementById("industry-list"), industries, selectedIndustry, (name) => {
    selectedIndustry = name;
    renderIndustry();
  });

  document.getElementById("industry-title").textContent = industry.name;
  document.getElementById("industry-summary").textContent = industry.summary;
  renderBars(
    document.getElementById("industry-chart"),
    industries.map((item) => [item.name, item.ytd])
  );
  renderNews(document.getElementById("industry-points"), industry.points);
}

function renderBook() {
  const book = books.find((item) => item.name === selectedBook) || books[0];
  renderList(document.getElementById("book-list"), books, selectedBook, (name) => {
    selectedBook = name;
    renderBook();
  });

  document.getElementById("book-title").textContent = book.name;
  document.getElementById("book-summary").textContent = book.summary;
  renderNews(document.getElementById("book-notes"), book.notes);
  renderNews(document.getElementById("book-prompts"), book.prompts);
}

function switchPanel(panelName) {
  const titleMap = {
    market: "每日市场回顾",
    industry: "每日了解一个行业",
    learning: "投资知识精进",
  };

  document.getElementById("page-title").textContent = titleMap[panelName];
  document.querySelectorAll(".nav-item").forEach((item) => {
    item.classList.toggle("active", item.dataset.panel === panelName);
  });
  document.querySelectorAll(".panel-grid").forEach((panel) => {
    panel.classList.toggle("panel-visible", panel.id === `${panelName}-panel`);
  });
}

function init() {
  document.querySelectorAll(".nav-item").forEach((button) => {
    button.addEventListener("click", () => switchPanel(button.dataset.panel));
  });

  renderMarket();
  renderIndustry();
  renderBook();
}

init();
