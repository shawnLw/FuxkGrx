const marketBase = {
  cn: {
    name: "A股",
    subtitle: "沪深市场",
    source: "当前为演示行情结构；实时行情、新闻和政策数据接口已预留，后续可接同花顺/Choice 导出或授权 API。",
    indexes: [
      { name: "上证指数", symbol: "000001.SS", proxySymbol: "ASHR", price: 3528.41, day: 0.42, week: 1.08, ytd: 4.9 },
      { name: "深证成指", symbol: "399001.SZ", proxySymbol: "MCHI", price: 10764.82, day: 0.73, week: 1.92, ytd: 6.8 },
      { name: "创业板指", symbol: "399006.SZ", proxySymbol: "MCHI", price: 2248.17, day: 1.36, week: 2.86, ytd: 8.7 },
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
      { name: "标普500", symbol: "^GSPC", proxySymbol: "SPY", price: 6327.18, day: 0.68, week: 1.74, ytd: 13.2 },
      { name: "纳斯达克", symbol: "^IXIC", proxySymbol: "QQQ", price: 21102.34, day: 1.12, week: 2.48, ytd: 18.5 },
      { name: "道琼斯", symbol: "^DJI", proxySymbol: "DIA", price: 44902.51, day: 0.21, week: 0.62, ytd: 6.8 },
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
      { name: "恒生指数", symbol: "^HSI", proxySymbol: "EWH", price: 24218.07, day: 0.76, week: 1.84, ytd: 5.7 },
      { name: "恒生科技", symbol: "3033.HK", proxySymbol: "EWH", price: 5298.22, day: 1.68, week: 4.26, ytd: 14.8 },
      { name: "国企指数", symbol: "^HSCE", proxySymbol: "EWH", price: 8725.64, day: 0.94, week: 2.38, ytd: 7.9 },
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
  eu: {
    name: "欧洲",
    subtitle: "欧洲市场",
    source: "当前为演示行情结构；实时行情、新闻和政策数据接口已预留，后续可接授权 API 或交易所公开数据。",
    indexes: [
      { name: "欧洲 Stoxx 50", symbol: "^STOXX50E", proxySymbol: "FEZ", price: 5438.12, day: -0.18, week: 0.34, ytd: 6.2 },
      { name: "德国 DAX", symbol: "^GDAXI", proxySymbol: "FEZ", price: 24612.45, day: 0.22, week: 0.71, ytd: 8.9 },
      { name: "英国 FTSE", symbol: "^FTSE", proxySymbol: "FEZ", price: 8954.18, day: -0.31, week: -0.12, ytd: 5.1 },
      { name: "法国 CAC40", symbol: "^FCHI", price: 7818.62, day: -0.08, week: 0.42, ytd: 3.7 },
    ],
    sectors: [
      { name: "奢侈品", day: 0.38, week: 1.16, ytd: 4.8 },
      { name: "银行", day: 0.26, week: 0.82, ytd: 9.3 },
      { name: "工业", day: -0.18, week: 0.24, ytd: 6.4 },
      { name: "能源", day: -0.52, week: -0.86, ytd: 2.6 },
      { name: "医疗", day: 0.12, week: 0.44, ytd: 5.8 },
    ],
    risk: ["温和震荡", "等待利率信号", "价值占优", "防守偏强"],
    volume: ["成交平稳", "资金分散", "结构轮动", "低波运行"],
    style: ["金融托底", "工业修复", "高股息防守", "消费分化"],
  },
  jp: {
    name: "日本",
    subtitle: "日本市场",
    source: "当前为演示行情结构；实时行情、新闻和政策数据接口已预留，后续可接授权 API 或交易所公开数据。",
    indexes: [
      { name: "日经225", symbol: "^N225", proxySymbol: "EWJ", price: 40942.28, day: 0.36, week: 1.08, ytd: 9.6 },
      { name: "东证指数", symbol: "^TOPX", proxySymbol: "EWJ", price: 2878.44, day: 0.21, week: 0.76, ytd: 7.4 },
      { name: "JPX日经400", symbol: "1599.T", price: 26980.0, day: 0.18, week: 0.62, ytd: 6.9 },
      { name: "日经半导体", symbol: "200A.T", price: 1942.5, day: 1.12, week: 2.44, ytd: 18.1 },
    ],
    sectors: [
      { name: "半导体设备", day: 1.42, week: 3.22, ytd: 20.7 },
      { name: "汽车", day: 0.48, week: 0.96, ytd: 8.2 },
      { name: "银行", day: 0.24, week: 0.88, ytd: 12.3 },
      { name: "消费电子", day: -0.16, week: 0.34, ytd: 5.4 },
      { name: "地产", day: -0.38, week: -0.72, ytd: 2.1 },
    ],
    risk: ["偏积极", "资金回流", "科技带动", "汇率扰动"],
    volume: ["温和放量", "外资活跃", "结构集中", "波动抬升"],
    style: ["半导体领涨", "金融修复", "出口链活跃", "价值重估"],
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
  { date: "2026-07-11", time: "07:50", country: "日本", title: "核心机械订单同比", actual: "--", forecast: "2.0%", previous: "1.8%", source: "日本内阁府/公开经济日历" },
  { date: "2026-07-12", time: "17:00", country: "欧洲", title: "欧元区工业产出同比", actual: "--", forecast: "-0.5%", previous: "-1.1%", source: "Eurostat/公开经济日历" },
  { date: "2026-07-12", time: "16:30", country: "中国香港", title: "外汇基金票据投标", actual: "--", forecast: "--", previous: "--", source: "香港金管局/公开经济日历" },
];

const industryData = [
  {
    name: "半导体",
    ytd: 28.6,
    summary: "从浅层看，半导体是芯片制造链；往深处看，它是算力、设备、材料、制造工艺和终端需求共同驱动的资本密集型行业。",
    pages: [
      { title: "第一页：行业概括", bullets: ["半导体产业链可以拆成设计、制造、封测、设备、材料、EDA/IP 与下游应用。不同环节的商业模式差异很大，不能只用一个估值框架覆盖全部公司。", "短期行情通常由库存周期、下游需求、价格变化和订单预期驱动；中长期空间则来自 AI 算力、汽车电子、工业控制、国产替代和先进封装。", "研究时先判断公司处在哪个环节，再看它受益的是量增、价格、国产替代、份额提升还是周期修复。"], stats: [["年初至今", "+28.6%"], ["估值观察", "偏高"], ["景气阶段", "修复期"]] },
      { title: "第二页：产业链地图", bullets: ["上游：硅片、光刻胶、电子气体、靶材、湿电子化学品、CMP 材料，以及光刻、刻蚀、薄膜沉积、检测量测等设备。", "中游：晶圆制造、封装测试、先进封装。制造端看稼动率、资本开支和制程平台；封测端看订单结构和产能利用率。", "下游：消费电子、数据中心、汽车、通信、工业、军工等。下游越分散，公司抗单一需求波动的能力越强。"], stats: [["上游", "材料/设备"], ["中游", "制造/封测"], ["下游", "AI/车/工控"]] },
      { title: "第三页：市场空间与需求", bullets: ["AI 数据中心推动 GPU、HBM、先进封装、服务器电源管理和高速互联需求，是近年半导体最重要的增量线索。", "汽车电子提升单车芯片价值量，功率半导体、MCU、传感器和模拟芯片受益，但整车价格战会影响部分环节议价能力。", "消费电子是传统大盘，库存周期改善时弹性明显，但长期增速低于 AI 和汽车电子。"], stats: [["AI 算力", "高景气"], ["汽车电子", "结构成长"], ["消费电子", "周期修复"]] },
      { title: "第四页：上市公司分层", bullets: ["设计公司：重点看产品线、客户集中度、研发效率和新产品放量节奏。轻资产带来利润弹性，但也更受价格竞争影响。", "制造/封测公司：重点看稼动率、资本开支、折旧压力、先进制程/先进封装能力，以及大客户订单稳定性。", "设备材料公司：重点看国产替代率、客户验证进度、单台价值量、耗材属性和海外限制变化。"], stats: [["设计", "产品周期"], ["制造封测", "产能利用"], ["设备材料", "验证壁垒"]] },
      { title: "第五页：财务指标怎么读", bullets: ["收入增速要拆分为行业景气、份额提升和新品放量，不能只看同比高低。", "毛利率变化通常反映产品结构、价格竞争、稼动率和良率；设备材料公司还要看规模效应。", "现金流和存货很重要。库存上升可能代表备货，也可能代表需求转弱，需要结合订单、客户和价格判断。"], stats: [["毛利率", "结构+良率"], ["存货", "周期信号"], ["现金流", "质量验证"]] },
      { title: "第六页：政策与产业逻辑", bullets: ["半导体政策重点通常围绕自主可控、产业基金、税收优惠、设备材料突破和高端人才。", "政策支持可以提高长期确定性，但短期股价仍要看订单和业绩兑现。政策主题和公司利润之间经常存在时间差。", "外部限制会带来国产替代机会，也会增加供应链不确定性，尤其是先进设备、EDA 和高端制造环节。"], stats: [["政策", "长期支持"], ["兑现", "订单验证"], ["约束", "供应链"]] },
      { title: "第七页：风险清单", bullets: ["估值风险：热门环节容易提前透支数年增长，一旦订单不及预期，回撤会很快。", "技术风险：制程、良率、客户验证和产品迭代失败，会直接影响收入和毛利率。", "周期风险：半导体有明显库存周期，错误地把周期修复当成永久成长，会导致估值误判。"], stats: [["估值", "高敏感"], ["技术", "验证风险"], ["周期", "库存波动"]] },
      { title: "第八页：跟踪清单与来源", bullets: ["每月跟踪：台积电月度营收、存储价格、北美半导体设备出货、重点公司订单和库存。", "每季跟踪：上市公司收入、毛利率、存货周转、资本开支、客户结构和研发费用率。", "公开资料来源建议：SIA/WSTS 行业数据、SEMI 设备数据、公司年报与公告、交易所问询回复、券商公开研报摘要、产业链公司业绩会纪要。"], stats: [["频率", "月度/季度"], ["来源", "公开资料"], ["重点", "订单+毛利"]] },
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
  {
    name: "新能源车",
    ytd: 12.4,
    summary: "新能源车不是单纯整车行业，而是电池、功率半导体、智能驾驶、渠道和海外市场共同决定的产业链。",
    pages: [
      { title: "行业概括", bullets: ["上游看锂、电解液、正负极材料，中游看电池和零部件，下游看整车品牌与渠道。", "价格战会压缩利润，但也会提升渗透率和行业集中度。", "智能驾驶和出海能力正在成为新的估值分水岭。"], stats: [["更新日期", "2026-07-08"], ["景气线索", "出海+智驾"], ["风险", "价格战"]] },
      { title: "上市公司观察", bullets: ["电池龙头重点看装机量、单位盈利和海外客户结构。", "整车公司重点看交付、毛利率、库存和新车型周期。", "零部件公司重点看单车价值量和客户结构。"], stats: [["核心指标", "毛利率"], ["需求", "交付量"], ["壁垒", "供应链"]] },
    ],
  },
  {
    name: "银行",
    ytd: 8.2,
    summary: "银行股核心看净息差、资产质量、拨备覆盖、分红能力和宏观信用周期。",
    pages: [
      { title: "行业概括", bullets: ["银行是典型顺周期行业，盈利与利率、信贷需求和不良率高度相关。", "高股息属性使银行在低利率环境中具有防守价值。", "不同银行差异主要来自区域经济、客户结构和风控能力。"], stats: [["更新日期", "2026-07-08"], ["关注", "净息差"], ["属性", "高股息"]] },
      { title: "研究框架", bullets: ["资产端看贷款投向、收益率和不良生成。", "负债端看存款成本和活期存款占比。", "估值上常用 PB、ROE 和分红率联动判断。"], stats: [["估值", "PB"], ["盈利", "ROE"], ["分红", "股息率"]] },
    ],
  },
  {
    name: "白酒",
    ytd: -6.6,
    summary: "白酒行业长期看品牌力、渠道库存和消费场景，短期看批价、动销和经销商信心。",
    pages: [
      { title: "行业概括", bullets: ["高端白酒更看品牌稀缺性和价格体系稳定。", "次高端弹性更强，但更受商务消费和库存周期影响。", "渠道库存和批价是观察景气度的关键前置指标。"], stats: [["更新日期", "2026-07-08"], ["核心", "批价"], ["风险", "库存"]] },
      { title: "竞争力分析", bullets: ["强品牌能维持渠道利润和价格秩序。", "产品矩阵决定公司能否覆盖不同消费场景。", "现金流和预收款变化可以验证真实动销。"], stats: [["壁垒", "品牌"], ["指标", "批价"], ["验证", "动销"]] },
    ],
  },
  {
    name: "人工智能",
    ytd: 31.5,
    summary: "AI 行业横跨算力、模型、数据、应用和终端，投资研究要区分基础设施和应用兑现。",
    pages: [
      { title: "行业概括", bullets: ["算力层关注 GPU、服务器、光模块、液冷和数据中心。", "模型层关注参数规模、推理成本、商业化和生态。", "应用层关注能否提升效率并形成付费闭环。"], stats: [["更新日期", "2026-07-08"], ["主线", "算力"], ["难点", "兑现"]] },
      { title: "投资逻辑", bullets: ["早期往往是基础设施先受益，随后才是应用收入兑现。", "估值需要和订单、收入、利润率匹配。", "警惕只讲故事、没有客户和现金流的公司。"], stats: [["先行", "算力"], ["验证", "订单"], ["风险", "泡沫"]] },
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
let selectedMacroDate = document.getElementById("macro-date").value;
let selectedMacroCountry = "all";
let selectedPeriods = { index: "day", sector: "day" };
let selectedIndustry = industryData[0].name;
let industryPage = 0;
let selectedBook = bookData[0].name;
let bookPage = 0;
let liveIndexOverrides = {};
let liveMarketSource = "";

const formatPct = (value) => `${value > 0 ? "+" : ""}${Number(value).toFixed(2)}%`;
const formatPrice = (value) => Number(value).toLocaleString("zh-CN", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const symbolAliases = {
  "000001.SH": "000001.SS",
  "000688.SH": "000688.SS",
  "HSI.HK": "^HSI",
  "HSTECH.HK": "3033.HK",
};

function setLiveIndexOverride(row) {
  if (!row.symbol || row.price == null) return;
  const payload = {
    symbol: row.symbol,
    price: row.price,
    day: row.changePct || 0,
    week: row.weekPct,
    ytd: row.ytdPct,
  };
  liveIndexOverrides[row.symbol] = payload;
  const alias = symbolAliases[row.symbol];
  if (alias) liveIndexOverrides[alias] = payload;
}

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
      const live = liveIndexOverrides[row.symbol] || liveIndexOverrides[row.proxySymbol];
      return {
        ...row,
        price: live?.price ?? vary(row.price, `${row.name}-price`, row.price * 0.006),
        day: live?.day ?? vary(row.day, `${row.name}-day`, 0.42),
        week: live?.week ?? vary(row.week, `${row.name}-week`, 1.1),
        ytd: live?.ytd ?? vary(row.ytd, `${row.name}-ytd`, 2.8),
        live: Boolean(live),
        liveSymbol: live?.symbol,
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
      <span>${item.name} · ${item.live ? `实时 ${item.liveSymbol || ""}` : "演示"}</span>
      <strong>${formatPrice(item.price)}</strong>
      <small class="${item.day >= 0 ? "up" : "down"}">${formatPct(item.day)} · ${item.symbol}</small>
    </article>
  `).join("");
}

function renderNews(container, rows) {
  container.innerHTML = rows.map((item) => `<li>${item}</li>`).join("");
}

function renderMacroCalendar() {
  const selected = new Date(`${selectedMacroDate}T00:00:00`);
  const start = new Date(selected);
  start.setDate(selected.getDate() - selected.getDay());
  const days = Array.from({ length: 7 }, (_, index) => {
    const date = new Date(start);
    date.setDate(start.getDate() + index);
    return date;
  });
  document.getElementById("calendar-days").innerHTML = days.map((date) => {
    const iso = date.toISOString().slice(0, 10);
    return `<div class="calendar-day ${iso === selectedMacroDate ? "active" : ""}"><strong>${date.getDate()}</strong><span>${["周日", "周一", "周二", "周三", "周四", "周五", "周六"][date.getDay()]}</span></div>`;
  }).join("");
  const relevant = macroEvents
    .filter((item) => item.date >= selectedMacroDate)
    .filter((item) => selectedMacroCountry === "all" || item.country === selectedMacroCountry)
    .slice(0, 6);
  document.getElementById("macro-list").innerHTML = relevant.map((item) => `
    <div class="macro-item">
      <span>${item.time}</span>
      <strong>${item.country} ${item.title}</strong>
      <span>今值 ${item.actual}</span>
      <span>预期 ${item.forecast}</span>
      <span>前值 ${item.previous}</span>
    </div>
  `).join("") || `<div class="macro-item"><span>--</span><strong>当前筛选条件暂无数据</strong><span>可接入真实经济日历 API</span><span></span><span></span></div>`;
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
  document.getElementById("market-source").textContent = `数据源：${liveMarketSource || data.source}`;
}

async function fetchMarketFromBackend() {
  try {
    const response = await fetch("/.netlify/functions/market");
    if (!response.ok) return;
    const payload = await response.json();
    liveMarketSource = payload.source?.includes("Yahoo")
      ? `${payload.source}，更新时间：${payload.updatedAt}`
      : `${payload.source || "fallback"}；当前使用演示数据`;
    (payload.markets || []).forEach(setLiveIndexOverride);
    renderMarket();
  } catch (error) {
    liveMarketSource = "本地静态预览无法调用 Netlify Function；部署后可自动请求 FMP。";
  }
}

async function fetchLocalIfindSnapshot() {
  try {
    const response = await fetch("/data/ifind-market.json", { cache: "no-store" });
    if (!response.ok) return false;
    const payload = await response.json();
    liveMarketSource = `${payload.source || "同花顺 iFinD"}，更新时间：${payload.updatedAt || "--"}`;
    (payload.markets || []).forEach(setLiveIndexOverride);
    renderMarket();
    return true;
  } catch (error) {
    return false;
  }
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
  document.getElementById("industry-updated").textContent = "数据更新：2026-07-08";
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
  document.getElementById("macro-date").addEventListener("change", (event) => {
    selectedMacroDate = event.target.value;
    renderMacroCalendar();
  });
  document.getElementById("macro-country").addEventListener("change", (event) => {
    selectedMacroCountry = event.target.value;
    renderMacroCalendar();
  });
  document.getElementById("macro-prev-week").addEventListener("click", () => shiftMacroWeek(-7));
  document.getElementById("macro-this-week").addEventListener("click", () => {
    selectedMacroDate = selectedDate;
    document.getElementById("macro-date").value = selectedMacroDate;
    renderMacroCalendar();
  });
  document.getElementById("macro-next-week").addEventListener("click", () => shiftMacroWeek(7));
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
  fetchLocalIfindSnapshot().then((hasIfindSnapshot) => {
    if (!hasIfindSnapshot) fetchMarketFromBackend();
  });
}

init();

function shiftMacroWeek(days) {
  const date = new Date(`${selectedMacroDate}T00:00:00`);
  date.setDate(date.getDate() + days);
  selectedMacroDate = date.toISOString().slice(0, 10);
  document.getElementById("macro-date").value = selectedMacroDate;
  renderMacroCalendar();
}
