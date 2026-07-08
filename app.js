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
  { date: "2026-06-30", time: "09:30", country: "中国", title: "6月官方制造业PMI", actual: "--", forecast: "--", previous: "49.5", source: "国家统计局", url: "https://www.stats.gov.cn/sj/" },
  { date: "2026-06-30", time: "09:30", country: "中国", title: "6月官方非制造业商务活动指数", actual: "--", forecast: "--", previous: "50.3", source: "国家统计局", url: "https://www.stats.gov.cn/sj/" },
  { date: "2026-07-01", time: "09:45", country: "中国", title: "6月财新制造业PMI", actual: "--", forecast: "--", previous: "50.6", source: "财新/公开报道", url: "https://www.caixin.com/" },
  { date: "2026-07-03", time: "09:45", country: "中国", title: "6月财新服务业PMI", actual: "--", forecast: "--", previous: "51.1", source: "财新/公开报道", url: "https://www.caixin.com/" },
  { date: "2026-07-07", time: "20:30", country: "美国", title: "6月非农就业人数", actual: "--", forecast: "--", previous: "--", source: "美国劳工统计局", url: "https://www.bls.gov/schedule/news_release/" },
  { date: "2026-07-08", time: "待定", country: "中国香港", title: "外汇基金票据投标", actual: "--", forecast: "--", previous: "--", source: "香港金管局", url: "https://www.hkma.gov.hk/gb_chi/news-and-media/press-releases/" },
  { date: "2026-07-09", time: "09:30", country: "中国", title: "6月CPI同比", actual: "--", forecast: "1.1%", previous: "1.2%", source: "国家统计局发布日程", url: "https://www.stats.gov.cn/sj/fbrc/" },
  { date: "2026-07-09", time: "09:30", country: "中国", title: "6月PPI同比", actual: "--", forecast: "4.1%", previous: "3.9%", source: "国家统计局发布日程", url: "https://www.stats.gov.cn/sj/fbrc/" },
  { date: "2026-07-10", time: "20:30", country: "美国", title: "初请失业金人数", actual: "--", forecast: "22.8万", previous: "22.4万", source: "美国劳工部", url: "https://www.dol.gov/ui/data.pdf" },
  { date: "2026-07-11", time: "待定", country: "中国", title: "6月金融统计数据M2/社融/新增人民币贷款", actual: "--", forecast: "--", previous: "--", source: "中国人民银行", url: "https://www.pbc.gov.cn/diaochatongjisi/116219/index.html" },
  { date: "2026-07-14", time: "待定", country: "中国", title: "6月进出口数据", actual: "--", forecast: "--", previous: "--", source: "海关总署", url: "http://www.customs.gov.cn/customs/302249/zfxxgk/2799825/302274/302277/index.html" },
  { date: "2026-07-15", time: "09:30", country: "中国", title: "二季度GDP、6月工业增加值/社零/固定资产投资", actual: "--", forecast: "--", previous: "--", source: "国家统计局发布日程", url: "https://www.stats.gov.cn/sj/fbrc/" },
  { date: "2026-07-21", time: "16:30", country: "中国香港", title: "6月综合CPI", actual: "--", forecast: "--", previous: "--", source: "香港政府统计处", url: "https://www.censtatd.gov.hk/en/press_release.html" },
  { date: "2026-07-22", time: "16:30", country: "中国香港", title: "4-6月失业率", actual: "--", forecast: "--", previous: "--", source: "香港政府统计处", url: "https://www.censtatd.gov.hk/en/press_release.html" },
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
    name: "通货膨胀",
    subtitle: "今天的金融知识",
    summary: "通货膨胀不是一个抽象名词，它就是同样的钱，能买到的东西变少了。今天先学会看 CPI、PPI、核心 CPI、工资和利率这几根温度计。",
    pages: [
      {
        title: "第一幕：一杯咖啡为什么越来越贵",
        diagram: "inflation",
        bullets: [
          "把经济想成一家很大的咖啡店：咖啡豆、房租、人工、物流、电费都在涨，老板就会把一部分成本放进售价里。你看到的价格上涨，就是通胀在生活里的样子。",
          "通胀不是所有东西一起涨，也不是涨一次就叫长期通胀。真正需要警惕的是价格上涨从少数商品扩散到服务、工资、房租和预期里。",
          "所以看通胀，不能只问今天猪肉涨没涨、油价涨没涨，而要问：涨价是不是越来越广，持续时间是不是越来越长。"
        ],
        stats: [["核心问题", "钱的购买力"], ["生活体感", "同钱少买"], ["市场关注", "持续性"]],
      },
      {
        title: "第二幕：要看哪几个指标",
        diagram: "indicator",
        bullets: [
          "CPI 是居民消费价格指数，像一只生活购物篮，装着食品、交通、居住、教育、医疗等项目。它回答的是：普通人买东西的价格整体涨了多少。",
          "PPI 是工业生产者出厂价格指数，更靠近工厂和上游原材料。PPI 先涨，可能说明企业成本压力上升；但它不一定完全传导到 CPI，因为企业可能自己消化一部分。",
          "核心 CPI 通常剔除食品和能源，因为这两类价格波动很大。它更适合观察通胀的底层黏性，也更容易影响央行对利率的判断。"
        ],
        stats: [["CPI", "居民购物篮"], ["PPI", "工厂成本"], ["核心CPI", "底层黏性"]],
      },
      {
        title: "第三幕：它怎么影响股债汇",
        diagram: "market",
        bullets: [
          "温和通胀通常代表需求还可以，企业收入容易增长；但高通胀会挤压居民消费，也会逼迫央行提高利率，估值就容易承压。",
          "债券最怕通胀上行。因为债券利息是固定的，物价涨得越快，未来收到的钱越不值钱，债券价格往往会下跌、收益率上行。",
          "汇率要看相对通胀和相对利率。如果一个国家通胀高、利率也高，短期可能吸引资金；但如果通胀失控、信用受损，货币反而会承压。"
        ],
        stats: [["股票", "看盈利+估值"], ["债券", "怕高通胀"], ["汇率", "看相对利率"]],
      },
      {
        title: "第四幕：投资者怎么用",
        diagram: "checklist",
        bullets: [
          "第一步看方向：CPI、核心 CPI、PPI 是上行还是下行。第二步看结构：是食品能源带动，还是服务和工资也在涨。第三步看政策：央行会不会因此加息或降息。",
          "如果通胀上行但经济也强，周期、资源、金融可能相对占优；如果通胀上行而经济转弱，就是滞胀压力，权益资产会更难受。",
          "如果通胀持续下行，市场会交易降息预期，成长股和债券可能受益；但如果下行来自需求太弱，企业盈利也可能一起变差。"
        ],
        stats: [["第一步", "看方向"], ["第二步", "看结构"], ["第三步", "看政策"]],
      },
      {
        title: "第五幕：今天的复盘问题",
        diagram: "questions",
        bullets: [
          "看一眼最近一次 CPI：同比是多少，环比是多少，核心 CPI 是升还是降？",
          "再看 PPI：它比 CPI 更强还是更弱？这说明成本压力在上游还是消费端？",
          "最后问自己一句：这组通胀数据会让央行更想降息、更想加息，还是继续观察？这就是金融知识真正落到投资判断里的地方。"
        ],
        stats: [["复盘1", "同比/环比"], ["复盘2", "CPI vs PPI"], ["复盘3", "央行反应"]],
        sources: [
          ["国家统计局数据", "https://www.stats.gov.cn/sj/"],
          ["中国人民银行货币政策", "https://www.pbc.gov.cn/zhengcehuobisi/125207/index.html"],
        ],
      },
    ],
  },
  {
    name: "利率",
    subtitle: "知识库积累",
    summary: "利率是资金的价格。它影响房贷、企业融资、债券价格、股票估值，也影响市场愿意为未来增长付多少钱。",
    pages: [
      {
        title: "第一页：钱也有价格",
        diagram: "rate",
        bullets: [
          "利率可以理解为借钱的价格。你今天借到一笔钱，未来要多还的那部分，就是资金使用的成本。",
          "经济强、融资需求旺时，利率往往有上行压力；经济弱、需求不足时，央行可能通过降息降低融资成本。",
          "投资里最重要的一句话是：利率越高，未来现金流折现到今天就越不值钱。"
        ],
        stats: [["本质", "资金价格"], ["影响", "融资成本"], ["资产", "估值折现"]],
      },
      {
        title: "第二页：为什么利率影响股票估值",
        diagram: "discount",
        bullets: [
          "股票价格本质上是未来现金流的折现。利率上升，相当于折现率上升，远期利润的现值会下降。",
          "成长股的利润更偏未来，因此通常更怕利率快速上行；高股息和现金流稳定的公司相对更抗压。",
          "但利率上升有时也代表经济强，企业盈利改善。因此不能只看利率方向，还要看利率为什么变。"
        ],
        stats: [["成长股", "怕折现率"], ["高股息", "重现金流"], ["关键", "利率原因"]],
      },
      {
        title: "第三页：每天怎么跟踪",
        diagram: "rate-watch",
        bullets: [
          "看央行政策利率、银行间资金利率、国债收益率曲线，以及信用债利差。",
          "如果短端利率上升，说明流动性可能偏紧；如果长端利率上升，说明增长或通胀预期可能升温。",
          "利率不是孤立指标，要和通胀、就业、信用、汇率一起看。"
        ],
        stats: [["短端", "流动性"], ["长端", "增长/通胀"], ["利差", "信用风险"]],
      },
    ],
  },
  {
    name: "汇率",
    subtitle: "知识库积累",
    summary: "汇率是一国货币和另一国货币的交换比例。它背后是利率、通胀、贸易、资本流动和市场预期的合力。",
    pages: [
      {
        title: "第一页：汇率是一张国家报价单",
        diagram: "fx",
        bullets: [
          "汇率上涨或下跌，本质上是在重新给一国资产和商品定价。",
          "本币贬值有利于出口价格竞争力，但会推高进口成本；本币升值有利于进口和海外消费，但出口企业可能承压。",
          "股票投资里，汇率会影响外资流向、企业汇兑损益和市场风险偏好。"
        ],
        stats: [["出口", "看价格竞争"], ["进口", "看成本"], ["资产", "看资金流"]],
      },
      {
        title: "第二页：看汇率要看什么",
        diagram: "fx-watch",
        bullets: [
          "第一看利差：谁的利率更高，短期资金更容易流向哪里。",
          "第二看通胀：高通胀会削弱购买力，长期会影响货币信用。",
          "第三看贸易和资本流动：顺差、外资流入、企业结汇都会影响供需。"
        ],
        stats: [["利差", "短期资金"], ["通胀", "购买力"], ["贸易", "货币供需"]],
      },
    ],
  },
];

const periodLabels = { day: "单日", week: "较上周", ytd: "较年初" };
let selectedMarket = "cn";
let selectedDate = document.getElementById("report-date").value;
let selectedMacroDate = document.getElementById("macro-date").value;
let selectedMacroCountry = "all";
let selectedPeriods = { index: "day", sector: "day" };
let selectedIndustry = "";
let industryPage = 0;
let selectedBook = bookData[0].name;
let bookPage = 0;
let liveIndexOverrides = {};
let liveMarketSource = "";
let latestIfindDate = "";
let historyMarketSnapshots = {};
const activeMarketKeys = ["cn", "hk"];

const formatPct = (value) => `${value > 0 ? "+" : ""}${Number(value).toFixed(2)}%`;
const formatPrice = (value) => Number(value).toLocaleString("zh-CN", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const dateToISO = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};
const symbolAliases = {
  "000001.SH": "000001.SS",
  "000688.SH": "000688.SS",
  "HSI.HK": "^HSI",
  "HSTECH.HK": "3033.HK",
};

const curatedNews = {
  cn: {
    fundamental: [
      { title: "A股缩量调整，半导体产业链和游戏股相对活跃", source: "每日经济新闻", date: "2026-07-08", url: "https://www.nbd.com.cn/articles/2026-07-07/4459883.html" },
      { title: "东方财富大盘分析持续跟踪A股市场主线与板块轮动", source: "东方财富", date: "2026-07-08", url: "https://stock.eastmoney.com/a/cdpfx.html" },
      { title: "国家统计局数据栏目：PMI、工业企业利润、生产资料价格等官方数据", source: "国家统计局", date: "官方数据", url: "https://www.stats.gov.cn/sj/" },
    ],
    policy: [
      { title: "7月9日国家统计局将公布6月CPI、PPI数据", source: "财联社", date: "2026-07-06", url: "https://www.cls.cn/detail/2417395" },
      { title: "国家统计局最新统计信息发布日程", source: "国家统计局", date: "官方日程", url: "https://www.stats.gov.cn/sj/fbrc/" },
      { title: "国家统计局解读5月份CPI和PPI数据，作为6月数据跟踪基准", source: "国家统计局", date: "2026-06-10", url: "https://www.stats.gov.cn/sj/sjjd/202606/t20260610_1963924.html" },
    ],
  },
  hk: {
    fundamental: [
      { title: "港股高开：科技硬件领涨，半导体新股首日表现亮眼", source: "证券时报", date: "2026-07-08", url: "https://www.stcn.com/article/detail/4005615.html" },
      { title: "港股三大指数持续上涨，恒生科技指数涨幅扩大", source: "新浪财经", date: "2026-07-08", url: "https://finance.sina.com.cn/stock/hkstock/2026-07-08/doc-inihaiea8215514.shtml" },
      { title: "港股高开高走，恒生科技指数涨逾3%", source: "中国基金报", date: "2026-07-08", url: "https://www.chnfund.com/article/95ac2774-c3df-35ef-7fb1-3a2251e1e50d" },
    ],
    policy: [
      { title: "国家统计局数据栏目：宏观数据发布与经济运行信息", source: "国家统计局", date: "官方数据", url: "https://www.stats.gov.cn/sj/" },
      { title: "最新统计信息发布日程，跟踪CPI、PPI、PMI等公布时间", source: "国家统计局", date: "官方日程", url: "https://www.stats.gov.cn/sj/fbrc/" },
      { title: "港股速报：核心指数上涨，科技硬件与PCB方向活跃", source: "每日经济新闻", date: "2026-07-08", url: "https://www.nbd.com.cn/articles/2026-07-08/4460233.html" },
    ],
  },
};

industryData[0].pages = [
  ...industryData[0].pages,
  { title: "第九页：需求底层逻辑", bullets: ["半导体需求不是单一终端驱动，而是云端AI训练、AI推理、智能汽车、工业控制、消费电子换机和国产替代共同叠加。研究时要把需求拆成算力、存储、模拟、功率、射频、传感器等不同赛道。", "AI服务器对先进制程、HBM、先进封装、高速互连和电源管理提出更高要求；汽车电子更重视可靠性、认证周期和长生命周期；消费电子则更受库存周期和新品周期影响。", "判断景气度时不要只看某一家公司订单，而要同时看晶圆厂稼动率、设备招标、封测排产、存储价格、渠道库存和终端出货。"], stats: [["核心变量", "需求扩散"], ["跟踪频率", "月度/季度"], ["风险", "库存反复"]] },
  { title: "第十页：产业链与利润分配", bullets: ["设计公司轻资产、弹性大，但产品迭代快、客户集中度和价格竞争会影响利润率；制造环节资本开支重，核心看制程能力、良率、产能利用率和客户结构。", "设备和材料环节具备更强国产替代逻辑，但验证周期长，短期收入确认可能滞后于订单；封测环节更贴近下游需求，先进封装是观察AI链条的重要窗口。", "利润并不平均分布。高壁垒环节通常体现在技术、客户认证、工艺经验、良率数据和供应稳定性，而不是简单的市场规模大。"], stats: [["高壁垒", "设备/材料/制造"], ["高弹性", "设计/封测"], ["关键指标", "良率"]] },
  { title: "第十一页：估值框架", bullets: ["周期底部适合看PB、重置成本和资产利用率；景气上行期更适合看PE、PEG和订单增速；主题扩散期还要警惕估值先行透支。", "设计类公司要看新品放量、客户拓展和毛利率趋势；设备材料类公司要看订单、在手订单、国产化率和验证节点；制造封测类公司要看产能利用率和资本开支节奏。", "估值要与周期位置匹配。若价格、库存、稼动率尚未改善，而股价已充分反映强复苏预期，安全边际会下降。"], stats: [["周期底部", "PB/稼动率"], ["上行阶段", "PE/订单"], ["主题阶段", "预期差"]] },
  { title: "第十二页：政策与国产替代", bullets: ["国产替代的核心不是简单替代进口，而是在供应安全、工艺验证、客户导入、规模化量产之间形成闭环。能进入核心客户供应链并持续迭代的公司更值得跟踪。", "政策支持会改善长期资本开支预期，但公司兑现仍取决于产品性能、良率、交付稳定性和成本曲线。政策是方向，订单和财务数据才是验证。", "外部限制可能带来国产链条机会，也可能造成先进设备、EDA、IP和高端材料瓶颈。研究时要同时看受益和约束两面。"], stats: [["政策主线", "自主可控"], ["验证方式", "订单/良率"], ["约束", "高端环节"]] },
];

industryData.unshift({
  name: "光伏泛半导体",
  ytd: 18.9,
  summary: "参考国金证券光伏“泛半导体”专题的研究框架：底层材料与工艺同源，光伏设备及材料龙头通过半导体国产替代、先进封装和高端耗材打开第二成长曲线。",
  pages: [
    {
      title: "第一页：核心投资逻辑",
      bullets: [
        "光伏行业经营承压超过两年后，部分设备和材料龙头开始寻找第二成长曲线。若光伏主业估值已经被压缩，而半导体相关业务进入产品突破、客户验证和订单兑现阶段，公司可能出现价值重估。",
        "这不是简单跨界概念。光伏电池和半导体器件都围绕硅基材料、PN结构、载流子调控、洁净加工和精密制程展开，底层能力存在迁移基础。",
        "研究抓手应从三个层面展开：第一性原理是否相通，材料和工艺是否能迁移，公司是否具备研发、客户验证和财务稳定性。",
      ],
      stats: [["研报框架", "产业迁移"], ["核心线索", "第二曲线"], ["验证阶段", "订单兑现"]],
    },
    {
      title: "第二页：第一性原理同源",
      bullets: [
        "光伏电池的核心是PN结，光生电子-空穴对在内建电场下分离并形成电流；MOSFET等半导体器件同样依靠掺杂和PN结构实现导通与关断控制。",
        "两类产品的目标不同，但都需要对硅材料、载流子、掺杂浓度、界面质量和电学性能进行精密控制。因此，光伏企业长期积累的晶体生长、清洗、镀膜、激光和检测能力具备横向延展基础。",
        "从P型到N型、从PERC到TOPCon/BC，光伏高效化本质上不断提高对洁净度、低氧控制、薄膜质量和图形精度的要求，技术边界逐步靠近半导体。",
      ],
      stats: [["共性", "PN结构"], ["迁移能力", "载流子控制"], ["技术趋势", "高效化"]],
    },
    {
      title: "第三页：底层材料同源",
      bullets: [
        "光伏与半导体都以高纯多晶硅、单晶硅棒和硅片加工为基础。不同之处在于半导体对纯度、氧碳含量、金属杂质、颗粒控制和表面平坦度要求更高。",
        "半导体级多晶硅、石英坩埚、硅片、电子特气、光刻胶、空白掩膜版、PSPI等方向，是光伏材料企业延伸时更值得跟踪的细分。",
        "材料端的验证周期长，客户认证门槛高，短期收入可能慢于市场预期；但一旦导入，粘性和壁垒通常强于普通周期品。",
      ],
      stats: [["材料基础", "硅链"], ["关键门槛", "纯度/颗粒"], ["商业特征", "长验证"]],
    },
    {
      title: "第四页：工艺制程同源",
      bullets: [
        "高效光伏电池大量使用或接近半导体制程，包括CVD、PVD、ALD薄膜沉积，离子注入，激光图形化，湿法清洗与刻蚀等。",
        "TOPCon、BC和先进封装相关工艺，都要求更高的膜厚均匀性、表面洁净度、图形精度和长期稳定性。这为光伏设备企业进入半导体前道、先进封装和检测设备提供切入点。",
        "设备端研究要看产品是否真正进入半导体客户验证，而不是只看公司是否宣布布局。验证通过、重复订单和收入确认是三个递进信号。",
      ],
      stats: [["设备方向", "沉积/激光/湿法"], ["验证信号", "客户导入"], ["兑现", "收入确认"]],
    },
    {
      title: "第五页：设备企业观察",
      bullets: [
        "研报梳理的设备端主线包括：迈为股份切入半导体前道设备，帝尔激光布局TGV玻璃基板工艺，奥特维光模块AOI检测设备放量，高测股份具备切、倒、磨一体化能力。",
        "这类公司的核心问题是：现有光伏设备能力能否迁移到更高壁垒场景，半导体客户验证是否真实推进，半导体业务毛利率是否高于主业并逐步放量。",
        "如果光伏主业仍承压，但半导体业务占比提升，市场可能从周期股估值切换到平台型设备公司估值。",
      ],
      stats: [["设备龙头", "平台化"], ["新业务", "前道/先进封装"], ["重估条件", "占比提升"]],
    },
    {
      title: "第六页：材料企业观察",
      bullets: [
        "研报梳理的材料端主线包括：福斯特高端感光干膜，聚和材料空白掩膜版和光刻胶，奥来德PSPI材料，欧晶科技半导体坩埚，联泓新科电子特气，TCL中环半导体硅片。",
        "材料企业的关键不是概念数量，而是产品认证、送样进度、批量供货、客户质量和单位价值量。越接近关键耗材和高端材料，验证越慢但壁垒越高。",
        "投资上要警惕光伏主业盈利下行掩盖第二曲线进展，也要警惕第二曲线收入体量太小、短期难以支撑整体估值。",
      ],
      stats: [["材料方向", "干膜/特气/坩埚"], ["验证", "送样到批供"], ["风险", "体量偏小"]],
    },
    {
      title: "第七页：研究清单",
      bullets: [
        "第一步：确认公司半导体业务对应的具体产品和工艺位置，是前道、封装、检测、材料还是耗材；不要只看泛半导体四个字。",
        "第二步：确认客户验证阶段，区分研发样品、送样测试、小批量验证、批量供货和稳定复购。不同阶段对应的估值可靠性完全不同。",
        "第三步：把半导体业务拆成收入占比、毛利率、资本开支、研发投入、客户集中度和订单可见度，再与光伏主业周期位置合并判断。",
      ],
      stats: [["清单1", "产品位置"], ["清单2", "验证阶段"], ["清单3", "财务拆分"]],
    },
  ],
});

industryData.unshift({
  name: "AI算力基础设施",
  ytd: 31.5,
  subtitle: "热门行业深度",
  summary: "这是一篇报告式行业拆解：AI算力不是只买GPU，而是一条从电力、土地、数据中心、服务器、GPU/HBM、光模块、交换机、云厂商到应用收费的长链条。研究重点不是谁的故事最大，而是谁在真实资本开支里拿到订单、形成利润、穿越价格竞争。",
  pages: [
    {
      title: "封面结论：AI算力是一座新型发电厂",
      kicker: "一句话结论",
      diagram: "ai-chain",
      bullets: [
        "如果把AI应用比作城市里的灯，算力基础设施就是背后的发电厂、输电网和变电站。模型越大、推理越多，越需要GPU、HBM、服务器、光模块、交换机、液冷、电力和数据中心协同扩张。",
        "这个行业最容易误读的地方是：市场总喜欢盯着一个环节，比如GPU或光模块；但真正的投资框架应该看整条链条的瓶颈在哪里、利润留在哪里、订单传导到哪里。",
        "目前更值得跟踪的是三条线：云厂商资本开支是否继续扩张，AI服务器与网络互联订单是否兑现，电力和散热是否成为下一轮基础设施约束。"
      ],
      stats: [["核心矛盾", "需求快于供给"], ["研究方法", "沿订单追利润"], ["关键风险", "资本开支放缓"]],
      sources: [["NVIDIA投资者关系", "https://investor.nvidia.com/"], ["Microsoft投资者关系", "https://www.microsoft.com/en-us/Investor/"], ["Google投资者关系", "https://abc.xyz/investor/"]],
    },
    {
      title: "产业地图：从一度电到一次回答",
      kicker: "产业链总览",
      diagram: "ai-map",
      bullets: [
        "第一层是资源层：电力、土地、机房、冷却、水资源和并网能力。AI数据中心不是普通机房，它对单机柜功率密度、供电稳定性和散热效率提出更高要求。",
        "第二层是硬件层：GPU/ASIC、HBM、CPU、主板、电源、连接器、PCB、服务器整机。这里决定单台服务器的算力密度，也决定供应链的主要成本。",
        "第三层是网络层：光模块、交换机、光芯片、DSP、光纤连接。AI训练不是一张卡单打独斗，而是成千上万张卡组成集群，网络质量会直接影响训练效率。",
        "第四层是平台层：云厂商、模型公司和应用公司。最终能不能赚钱，要看算力成本是否能被订阅、API调用、广告、电商、办公软件和企业服务吸收。"
      ],
      stats: [["资源层", "电力/机房"], ["硬件层", "GPU/HBM"], ["网络层", "光模块/交换机"]],
      sources: [["Uptime Institute", "https://uptimeinstitute.com/"], ["Dell投资者关系", "https://investors.delltechnologies.com/"]],
    },
    {
      title: "需求逻辑：训练是建厂，推理是开店",
      kicker: "需求从哪里来",
      diagram: "train-infer",
      bullets: [
        "训练需求像建一座工厂：前期投入巨大，集中采购高端GPU、存储、网络和电力资源。大模型参数越多、数据越多，训练集群越复杂。",
        "推理需求像开连锁店：每一次用户提问、生成图片、写代码、调用智能体，都会消耗算力。推理的特点是频率高、持续发生、对成本更敏感。",
        "行业从训练驱动走向训练与推理共同驱动后，投资重点会从单纯的高端GPU，扩散到低成本推理芯片、液冷、边缘算力、网络优化和软件调度。"
      ],
      stats: [["训练", "一次性大投入"], ["推理", "高频持续消耗"], ["瓶颈", "成本/能效"]],
      sources: [["OpenAI API文档", "https://platform.openai.com/docs/"], ["Meta投资者关系", "https://investor.fb.com/"]],
    },
    {
      title: "供给瓶颈：不是只有芯片不够",
      kicker: "瓶颈拆解",
      diagram: "bottleneck",
      bullets: [
        "第一类瓶颈是先进芯片和先进封装。GPU需要高端制程、CoWoS等先进封装和HBM配合，任何一个环节紧张，都会影响整机交付。",
        "第二类瓶颈是网络互联。集群规模越大，卡与卡之间的数据交换越重要，光模块、交换机、连接器和高速PCB的价值量会提升。",
        "第三类瓶颈是电力和散热。高功率机柜会让传统风冷接近极限，液冷、电源模块、配电设备和数据中心选址成为基础设施投资重点。"
      ],
      stats: [["芯片瓶颈", "制程+封装"], ["网络瓶颈", "高速互联"], ["机房瓶颈", "电力+散热"]],
      sources: [["TSMC投资者关系", "https://investor.tsmc.com/"], ["SK hynix投资者关系", "https://www.skhynix.com/ir/index.jsp"]],
    },
    {
      title: "利润分配：钱不一定留在最热的地方",
      kicker: "商业模式",
      diagram: "profit-pool",
      bullets: [
        "芯片龙头掌握核心稀缺性，通常拿走产业链中最厚的一层利润；但它的估值也最容易提前反映未来增长。",
        "服务器整机和代工环节收入规模大，但毛利率通常较薄，研究时要看客户结构、交付节奏、库存风险和现金流，而不是只看收入增长。",
        "光模块、液冷、电源、连接器等环节可能在阶段性瓶颈中获得超额利润，但一旦供给扩张和价格竞争加剧，毛利率会承压。",
        "云厂商承担巨额资本开支，最终能否赚钱取决于算力利用率、模型收费能力、企业客户渗透率和单位推理成本下降速度。"
      ],
      stats: [["厚利润", "核心芯片"], ["薄利润", "整机制造"], ["弹性环节", "瓶颈零部件"]],
      sources: [["Amazon投资者关系", "https://ir.aboutamazon.com/"], ["Arista投资者关系", "https://investors.arista.com/"]],
    },
    {
      title: "A股与港股怎么映射",
      kicker: "上市公司观察",
      diagram: "cn-hk-map",
      bullets: [
        "A股通常更容易映射到服务器、电源、PCB、连接器、液冷、光模块、工业富联类制造链、半导体设备材料和数据中心配套。研究要重点看真实订单、客户认证和毛利率变化。",
        "港股通常更容易映射到云厂商、互联网平台、运营商、数据中心资产和应用生态。研究要看资本开支、云收入、AI产品商业化和广告/电商/游戏等业务效率改善。",
        "不要把所有AI公司放进一个篮子。上游硬件看订单和交付，中游云平台看资本开支和利用率，下游应用看付费转化和留存。"
      ],
      stats: [["A股映射", "硬件/制造"], ["港股映射", "云/平台"], ["共同验证", "订单+利润"]],
      sources: [["港交所披露易", "https://www1.hkexnews.hk/search/titlesearch.xhtml"], ["巨潮资讯", "http://www.cninfo.com.cn/"]],
    },
    {
      title: "财务指标：一眼看穿真假景气",
      kicker: "财报读法",
      diagram: "financials",
      bullets: [
        "收入增长要拆成量、价、客户和产品结构。只要收入高增但毛利率持续下滑，就要问是不是价格竞争已经开始。",
        "存货和应收账款是AI硬件链的预警器。存货快速上升可能代表备货，也可能代表订单不及预期；应收账款拉长说明客户回款压力变大。",
        "资本开支是云厂商的投票器。微软、谷歌、亚马逊、Meta等巨头如果持续提高AI相关资本开支，硬件链订单更有支撑；反之则要警惕景气预期回落。",
        "自由现金流决定长期质量。一个行业再热门，如果公司把利润都压在库存、设备和应收账款里，股东真正拿到的现金未必漂亮。"
      ],
      stats: [["收入", "量价结构"], ["存货", "景气预警"], ["现金流", "质量验证"]],
      sources: [["SEC公司披露", "https://www.sec.gov/edgar/search/"], ["东方财富财报", "https://data.eastmoney.com/bbsj/"]],
    },
    {
      title: "估值框架：用三把尺子量同一家公司",
      kicker: "估值方法",
      diagram: "valuation",
      bullets: [
        "第一把尺子是成长：未来两三年收入和利润能不能持续高增。适合看芯片、光模块、液冷、电源等订单弹性强的公司。",
        "第二把尺子是周期：景气从低谷修复到高位时，估值往往先涨，业绩后兑现；一旦景气见顶，估值会先收缩。",
        "第三把尺子是壁垒：客户认证、技术路线、规模效应、软件生态和供应链掌控力决定公司能不能把增长变成长期利润。",
        "热门行业最危险的阶段，是所有公司都被按龙头逻辑估值。真正做研究，要把公司分成核心稀缺、阶段瓶颈、制造放量、主题跟随四类。"
      ],
      stats: [["成长尺", "收入/利润"], ["周期尺", "景气位置"], ["壁垒尺", "利润留存"]],
      sources: [["Nasdaq财报日历", "https://www.nasdaq.com/market-activity/earnings"], ["中证指数", "https://www.csindex.com.cn/"]],
    },
    {
      title: "风险清单：热闹背后的五个刹车",
      kicker: "风险管理",
      diagram: "risk",
      bullets: [
        "第一，资本开支放缓。如果云厂商发现AI收入不能覆盖投入，硬件订单会首先降温。",
        "第二，价格竞争。光模块、服务器、液冷等环节一旦供给快速扩张，毛利率可能比收入更早见顶。",
        "第三，技术路线变化。自研芯片、低成本推理、模型压缩和软件优化，都可能改变硬件需求结构。",
        "第四，出口管制与供应链限制。先进芯片、HBM、设备材料和海外客户都可能受到政策影响。",
        "第五，电力约束。电价、并网速度、能耗指标和水资源，会限制数据中心扩张速度。"
      ],
      stats: [["风险1", "Capex放缓"], ["风险2", "价格竞争"], ["风险3", "技术变化"]],
      sources: [["美国商务部BIS", "https://www.bis.gov/"], ["IEA数据中心与能源", "https://www.iea.org/"]],
    },
    {
      title: "每日跟踪表：用十个问题复盘",
      kicker: "跟踪体系",
      diagram: "tracker",
      bullets: [
        "一看云厂商资本开支，二看GPU/HBM交付，三看先进封装产能，四看光模块价格，五看交换机与网络设备订单。",
        "六看液冷渗透率，七看数据中心电力指标，八看服务器厂商存货，九看应用端付费转化，十看龙头公司业绩指引。",
        "如果十个问题里，上游订单强、毛利率稳、下游收入能兑现，行业仍在健康扩张；如果只有主题热度，没有财务验证，就要降低预期。"
      ],
      stats: [["跟踪频率", "月度/季度"], ["核心线索", "订单到利润"], ["最终验证", "现金流"]],
      sources: [["公司公告检索", "http://www.cninfo.com.cn/"], ["港股公告检索", "https://www1.hkexnews.hk/search/titlesearch.xhtml"], ["SEC披露", "https://www.sec.gov/edgar/search/"]],
    },
  ],
});
selectedIndustry = industryData[0].name;

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
      const useHistory = selectedDate !== latestIfindDate;
      const historical = useHistory ? historyMarketSnapshots[selectedDate]?.[row.symbol] || historyMarketSnapshots[selectedDate]?.[row.proxySymbol] : null;
      const live = historical || liveIndexOverrides[row.symbol] || liveIndexOverrides[row.proxySymbol];
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

function renderIndustryDirectory(industry) {
  const container = document.getElementById("industry-list");
  container.innerHTML = `
    <label class="report-picker">
      <span>切换行业报告</span>
      <select id="industry-report-select">
        ${industryData.map((item) => `<option value="${item.name}" ${item.name === industry.name ? "selected" : ""}>${item.name}</option>`).join("")}
      </select>
    </label>
    <div class="toc-list">
      ${industry.pages.map((page, index) => `
        <button class="toc-card ${index === industryPage ? "active" : ""}" data-page="${index}">
          <span>${String(index + 1).padStart(2, "0")}</span>
          <strong>${page.title.replace(/^第.页：/, "").replace(/^第..页：/, "")}</strong>
        </button>
      `).join("")}
    </div>
  `;
  document.getElementById("industry-report-select").addEventListener("change", (event) => {
    selectedIndustry = event.target.value;
    industryPage = 0;
    renderIndustry();
  });
  container.querySelectorAll(".toc-card").forEach((button) => button.addEventListener("click", () => {
    industryPage = Number(button.dataset.page);
    renderIndustry();
  }));
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
  container.innerHTML = rows.map((item) => {
    if (typeof item === "string") {
      return `
        <li>
          <a href="https://www.baidu.com/s?wd=${encodeURIComponent(item)}" target="_blank" rel="noopener noreferrer">${item}</a>
          <span class="news-source">公开信息检索 · 待接入新闻源 API</span>
        </li>
      `;
    }
    return `
      <li>
        <a href="${item.url}" target="_blank" rel="noopener noreferrer">${item.title}</a>
        <span class="news-source">${item.source || ""}${item.date ? ` · ${item.date}` : ""}</span>
      </li>
    `;
  }).join("");
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
    const iso = dateToISO(date);
    return `<button class="calendar-day ${iso === selectedMacroDate ? "active" : ""}" data-date="${iso}" type="button"><strong>${date.getDate()}</strong><span>${["周日", "周一", "周二", "周三", "周四", "周五", "周六"][date.getDay()]}</span></button>`;
  }).join("");
  document.querySelectorAll(".calendar-day").forEach((button) => {
    button.addEventListener("click", () => {
      selectedMacroDate = button.dataset.date;
      document.getElementById("macro-date").value = selectedMacroDate;
      renderMacroCalendar();
    });
  });
  const relevant = macroEvents
    .filter((item) => item.date === selectedMacroDate)
    .filter((item) => selectedMacroCountry === "all" || item.country === selectedMacroCountry)
    .slice(0, 6);
  document.getElementById("macro-list").innerHTML = relevant.map((item) => `
    <div class="macro-item">
      <span>${item.time}</span>
      <strong>${item.country} ${item.title}</strong>
      <span>今值 ${item.actual}</span>
      <span>预期 ${item.forecast}</span>
      <span>前值 ${item.previous}</span>
      <a href="${item.url}" target="_blank" rel="noopener noreferrer">${item.source}</a>
    </div>
  `).join("") || `<div class="macro-item"><span>--</span><strong>当前筛选条件暂无数据</strong><span>可接入真实经济日历 API</span><span></span><span></span></div>`;
}

function renderMarket() {
  const data = getMarketData();
  const activeMarkets = activeMarketKeys.map((key) => ({ key, ...marketBase[key] }));
  renderList(document.getElementById("market-list"), activeMarkets, data.name, (name) => {
    const found = activeMarketKeys.map((key) => [key, marketBase[key]]).find(([, value]) => value.name === name);
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
  renderNews(document.getElementById("fundamental-news"), (curatedNews[selectedMarket] || newsLibrary[selectedMarket]).fundamental);
  renderNews(document.getElementById("policy-news"), (curatedNews[selectedMarket] || newsLibrary[selectedMarket]).policy);
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
    latestIfindDate = (payload.updatedAt || "").slice(0, 10);
    liveMarketSource = `${payload.source || "同花顺 iFinD"}，更新时间：${payload.updatedAt || "--"}`;
    (payload.markets || []).forEach(setLiveIndexOverride);
    renderMarket();
    return true;
  } catch (error) {
    return false;
  }
}

async function fetchLocalIfindHistory() {
  try {
    const response = await fetch("/data/ifind-market-history.json", { cache: "no-store" });
    if (!response.ok) return false;
    const payload = await response.json();
    historyMarketSnapshots = {};
    Object.entries(payload.dates || {}).forEach(([date, rows]) => {
      historyMarketSnapshots[date] = {};
      (rows || []).forEach((row) => {
        if (row.symbol && row.price != null) setHistoricalIndexOverride(date, row);
      });
    });
    renderMarket();
    return true;
  } catch (error) {
    return false;
  }
}

function setHistoricalIndexOverride(date, row) {
  const payload = {
    symbol: row.symbol,
    price: row.price,
    day: row.changePct || 0,
    week: row.weekPct,
    ytd: row.ytdPct,
  };
  historyMarketSnapshots[date][row.symbol] = payload;
  const alias = symbolAliases[row.symbol];
  if (alias) historyMarketSnapshots[date][alias] = payload;
}

function renderSourceLinks(sources = []) {
  if (!sources.length) return "";
  return `
    <div class="source-links">
      ${sources.map(([label, url]) => `<a href="${url}" target="_blank" rel="noopener noreferrer">${label}</a>`).join("")}
    </div>
  `;
}

function renderConceptDiagram(type) {
  const diagrams = {
    "ai-chain": [
      ["电力", "土地机房", "AI服务器", "GPU/HBM", "光模块", "云平台", "AI应用"],
    ],
    "ai-map": [
      ["资源层", "电力/水/土地"],
      ["硬件层", "GPU/HBM/服务器"],
      ["网络层", "光模块/交换机"],
      ["平台层", "云/模型/应用"],
    ],
    "train-infer": [
      ["训练", "一次性大集群投入"],
      ["推理", "每天持续消耗算力"],
      ["优化", "把单位成本打下来"],
    ],
    bottleneck: [
      ["芯片", "制程+封装"],
      ["网络", "高速互联"],
      ["机房", "电力+散热"],
    ],
    "profit-pool": [
      ["厚利润", "核心芯片"],
      ["弹性", "瓶颈零部件"],
      ["规模", "服务器整机"],
      ["终局", "云与应用收费"],
    ],
    "cn-hk-map": [
      ["A股", "硬件制造链"],
      ["港股", "平台与云"],
      ["验证", "订单+毛利+现金流"],
    ],
    financials: [
      ["收入", "量价结构"],
      ["毛利率", "竞争强度"],
      ["存货", "景气预警"],
      ["现金流", "质量验证"],
    ],
    valuation: [
      ["成长", "收入利润"],
      ["周期", "景气位置"],
      ["壁垒", "利润留存"],
    ],
    risk: [
      ["Capex", "放缓"],
      ["价格", "竞争"],
      ["路线", "变化"],
      ["政策", "限制"],
      ["电力", "约束"],
    ],
    tracker: [
      ["云厂商", "资本开支"],
      ["硬件链", "交付订单"],
      ["应用端", "付费转化"],
      ["财务端", "现金流"],
    ],
    inflation: [
      ["成本上涨", "原料/工资/物流"],
      ["价格传导", "商品与服务涨价"],
      ["购买力下降", "同样的钱买得更少"],
    ],
    indicator: [
      ["CPI", "居民购物篮"],
      ["PPI", "工厂出厂价"],
      ["核心CPI", "剔除食品能源"],
    ],
    market: [
      ["股票", "盈利与估值"],
      ["债券", "利率与实际收益"],
      ["汇率", "相对通胀与利率"],
    ],
    checklist: [
      ["方向", "升还是降"],
      ["结构", "谁在涨"],
      ["政策", "央行怎么反应"],
    ],
    questions: [
      ["同比/环比", "看趋势"],
      ["CPI/PPI", "看传导"],
      ["央行反应", "看资产影响"],
    ],
    rate: [
      ["央行", "政策利率"],
      ["银行", "贷款报价"],
      ["企业", "融资成本"],
      ["资产", "估值折现"],
    ],
    discount: [
      ["未来利润", "现金流"],
      ["折现率", "利率+风险"],
      ["今天价值", "估值"],
    ],
    "rate-watch": [
      ["短端利率", "流动性"],
      ["长端利率", "增长预期"],
      ["信用利差", "风险偏好"],
    ],
    fx: [
      ["本币", "资产报价"],
      ["外币", "全球比较"],
      ["资本流动", "买卖力量"],
    ],
    "fx-watch": [
      ["利差", "资金去向"],
      ["通胀", "购买力"],
      ["贸易", "货币供需"],
    ],
  };
  const rows = diagrams[type];
  if (!rows) return "";
  const isFlow = rows.length === 1;
  const nodes = isFlow ? rows[0].map((label) => [label, ""]) : rows;
  return `
    <div class="concept-diagram ${isFlow ? "flow-diagram" : ""}">
      ${nodes.map(([label, value], index) => `
        <div class="diagram-node">
          <span>${String(index + 1).padStart(2, "0")}</span>
          <strong>${label}</strong>
          ${value ? `<em>${value}</em>` : ""}
        </div>
      `).join("")}
    </div>
  `;
}

function renderKnowledgeVisual(page, topic) {
  const visual = document.getElementById("knowledge-visual");
  const visualMeta = {
    inflation: ["CPI", "物价温度计", "同样的钱，能买到的东西变少了"],
    indicator: ["CPI/PPI", "指标仪表盘", "一个看生活价格，一个看工厂成本"],
    market: ["股债汇", "资产传导图", "通胀会沿着利率影响各类资产"],
    checklist: ["三步法", "投资检查表", "方向、结构、政策反应一起看"],
    questions: ["复盘", "今日三问", "把概念落到每天的数据里"],
    rate: ["RATE", "资金价格牌", "利率越高，借钱越贵"],
    discount: ["DCF", "估值折现器", "未来的钱要折回今天看"],
    "rate-watch": ["YIELD", "利率曲线", "短端看流动性，长端看预期"],
    fx: ["FX", "货币天平", "汇率是两个经济体的相对报价"],
    "fx-watch": ["FLOW", "资金流向图", "利差、通胀、贸易一起决定方向"],
  };
  const [code, title, subtitle] = visualMeta[page.diagram] || [topic.name, page.title, topic.summary];
  const nodes = {
    inflation: ["成本", "售价", "购买力"],
    indicator: ["CPI", "PPI", "核心CPI"],
    market: ["股票", "债券", "汇率"],
    checklist: ["方向", "结构", "政策"],
    questions: ["同比", "传导", "央行"],
    rate: ["央行", "银行", "企业", "资产"],
    discount: ["现金流", "折现率", "现值"],
    "rate-watch": ["短端", "长端", "利差"],
    fx: ["利率", "通胀", "资金"],
    "fx-watch": ["利差", "贸易", "预期"],
  }[page.diagram] || ["概念", "指标", "影响"];
  visual.dataset.visual = page.diagram || "default";
  visual.innerHTML = `
    <div class="lesson-visual">
      <span>${code}</span>
      <strong>${title}</strong>
      <p>${subtitle}</p>
      <div class="visual-nodes">
        ${nodes.map((item) => `<i>${item}</i>`).join("")}
      </div>
    </div>
  `;
}

function renderStudyPage(page) {
  return `
    <div class="report-page">
      <div class="report-heading">
        ${page.kicker ? `<span>${page.kicker}</span>` : ""}
        <h3>${page.title}</h3>
      </div>
      ${renderConceptDiagram(page.diagram)}
      <ul>${page.bullets.map((item) => `<li>${item}</li>`).join("")}</ul>
      <div class="mini-grid">${(page.stats || []).map(([label, value]) => `<div class="mini-stat"><strong>${value}</strong><span>${label}</span></div>`).join("")}</div>
      ${renderSourceLinks(page.sources)}
    </div>
  `;
}

function renderIndustry() {
  const industry = industryData.find((item) => item.name === selectedIndustry) || industryData[0];
  industryPage = Math.min(industryPage, industry.pages.length - 1);
  const page = industry.pages[industryPage];
  renderIndustryDirectory(industry);
  document.getElementById("industry-title").textContent = industry.name;
  document.getElementById("industry-updated").textContent = "数据更新：2026-07-08";
  document.getElementById("industry-summary").textContent = industry.summary;
  document.getElementById("industry-page-label").textContent = `${industryPage + 1} / ${industry.pages.length}`;
  document.getElementById("industry-page-body").innerHTML = renderStudyPage(page);
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
  renderKnowledgeVisual(page, book);
  document.getElementById("book-page-body").innerHTML = renderStudyPage(page);
}

async function shareSite() {
  const shareData = {
    title: "ShawnLW 投资辅助网站",
    text: "每日市场、行业研究和金融知识学习。",
    url: window.location.href,
  };
  const button = document.getElementById("share-site");
  try {
    if (navigator.share) {
      await navigator.share(shareData);
      return;
    }
    await navigator.clipboard.writeText(shareData.url);
    const oldText = button.textContent;
    button.textContent = "已复制链接";
    window.setTimeout(() => { button.textContent = oldText; }, 1800);
  } catch (error) {
    if (navigator.clipboard) await navigator.clipboard.writeText(shareData.url);
  }
}

function switchPanel(panelName) {
  const meta = {
    market: ["Daily Market Review", "把市场噪声整理成可阅读的线索。", "聚合全球重要指数、行业表现、基本面新闻、政策线索和宏观数据日历。"],
    industry: ["Industry Deep Dive", "每天拆开一个行业，看见价格背后的结构。", "从概览、上市公司、估值表现，到政策、逻辑和竞争力逐页展开。"],
    learning: ["Daily Finance Lesson", "每天拆开一个金融知识点，让概念变成能看懂市场的工具。", "用生活场景、指标地图和资产影响图，理解通胀、利率、汇率、信用、估值这些关键词。"],
  };
  document.getElementById("app-shell").dataset.panel = panelName;
  document.getElementById("panel-kicker").textContent = meta[panelName][0];
  document.getElementById("page-title").textContent = meta[panelName][1];
  document.getElementById("page-subtitle").textContent = meta[panelName][2];
  document.querySelectorAll(".nav-pill").forEach((item) => item.classList.toggle("active", item.dataset.panel === panelName));
  document.querySelectorAll(".panel").forEach((panel) => panel.classList.toggle("panel-visible", panel.id === `${panelName}-panel`));
  if (panelName === "industry") renderIndustry();
  if (panelName === "learning") renderBook();
}

function init() {
  document.querySelectorAll(".nav-pill[data-panel]").forEach((button) => button.addEventListener("click", () => switchPanel(button.dataset.panel)));
  document.getElementById("share-site").addEventListener("click", shareSite);
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
    selectedMacroDate = selectedDate;
    document.getElementById("macro-date").value = selectedMacroDate;
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
  fetchLocalIfindHistory();
  fetchLocalIfindSnapshot().then((hasIfindSnapshot) => {
    if (!hasIfindSnapshot) fetchMarketFromBackend();
  });
  window.setInterval(() => {
    fetchLocalIfindSnapshot();
    fetchLocalIfindHistory();
  }, 60000);
}

init();

function shiftMacroWeek(days) {
  const date = new Date(`${selectedMacroDate}T00:00:00`);
  date.setDate(date.getDate() + days);
  selectedMacroDate = date.toISOString().slice(0, 10);
  document.getElementById("macro-date").value = selectedMacroDate;
  renderMacroCalendar();
}
