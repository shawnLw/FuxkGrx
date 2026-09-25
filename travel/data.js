const PLACES = {
  hkg: { name: '香港国际机场', kind: '交通', address: '香港新界大屿山赤鱲角', area: true, description: '去程 HB322、回程 HB323。请以电子机票和航司通知核对航站楼。', query: 'Hong Kong International Airport' },
  nrt: { name: '成田机场 T2', kind: '交通', address: '千葉県成田市古込', area: true, description: '去程抵达与回程出发的机场。N\'EX 车站位于航站楼地下。', query: 'Narita International Airport Terminal 2' },
  yokohamaStation: { name: '横滨站', kind: '交通', address: '神奈川県横浜市西区高島2丁目', area: true, description: 'N\'EX、东海道线与市内交通换乘点。', query: '横浜駅' },
  hadanoStation: { name: '秦野站南口', kind: '交通', address: '神奈川県秦野市尾尻931', description: '《重启人生》秦野取景地步行线的起点。横滨出发可经海老名换乘小田急线，实际车次请当天查询。', query: '秦野駅 南口', source: 'https://hiyori.cc/article/brushuplife_ntv' },
  shimodaStation: { name: '伊豆急下田站', kind: '交通', address: '静岡県下田市東本郷1丁目', area: true, description: '踊り子号终点。站前可换乘东海巴士或酒店接驳。', query: '伊豆急下田駅' },
  naganoStation: { name: '长野站', kind: '交通', address: '長野県長野市栗田', area: true, description: '长野段交通枢纽，白马与户隐巴士也从这里出发。', query: '長野駅' },
  hakubaBus: { name: '白马八方巴士总站', kind: '交通', address: '長野県北安曇郡白馬村北城', area: true, description: '长野往返白马的特急巴士停靠点。', query: '白馬八方バスターミナル', source: 'https://www.alpico.co.jp/traffic/express/nagano_hakuba/' },

  fresa: { name: '相铁 FRESA INN 横滨站东口', kind: '酒店', address: '神奈川県横浜市神奈川区金港町5-10', description: '已订 9/27 一晚。横滨站北东口 A 步行约 2 分钟，适合晚抵达后直接休息。', query: '相鉄フレッサイン 横浜駅東口', source: 'https://sotetsu-hotels.com/fresa-inn/yokohama-higashiguchi/' },
  shimodaHotel: { name: '下田东急酒店', kind: '酒店', address: '静岡県下田市5-12-1', description: '已订 9/28–9/30 两晚。面向大浦海湾，可向酒店确认伊豆急下田站接驳。', query: '下田東急ホテル', source: 'https://www.tokyuhotels.co.jp/en/shimoda-h/information/index.html' },
  inatoriso: { name: '稻取庄 Inatoriso', kind: '酒店', address: '静岡県賀茂郡東伊豆町稲取1531', description: '已订 9/30 一晚，行程注明包含早餐与两份晚餐。海景温泉与金目鲷是这一晚的重点。', query: 'いなとり荘', source: 'https://inatorionsen.or.jp/hotel/inatorisou-2/' },
  jal: { name: 'Hotel JAL City Nagano', kind: '酒店', address: '長野県長野市問御所町1221', description: '已订 10/1–10/4 三晚，长野站善光寺口步行约 7 分钟。', query: 'ホテルJALシティ長野', source: 'https://www.nagano.jalcity.co.jp/en/' },
  intercon: { name: '横滨洲际大酒店', kind: '酒店', address: '神奈川県横浜市西区みなとみらい1-1-1', description: '已订 10/4–10/6 两晚。港景高楼层客房，以预订确认单为准。', query: 'ヨコハマ グランド インターコンチネンタル ホテル', source: 'https://www.icyokohama-grand.com/en/access/' },

  perry: { name: '佩里之路', kind: '景点', address: '静岡県下田市3-13-12', description: '约 400 米的石板路、柳树和旧式建筑。适合下田第一天下午慢慢逛。', query: 'ペリーロード 下田', source: 'https://shimoda-city.com/en/spots/5' },
  ryosenji: { name: '了仙寺 · 黑船资料馆', kind: '景点', address: '静岡県下田市12-12', description: '开港历史的现场。寺院与黑船资料馆相邻，雨天可把重点放在室内展陈。', query: '了仙寺 下田', source: 'https://shimoda-city.com/en/spots/87' },
  shimodaPort: { name: '下田港 / 开国下田港道之驿', kind: '景点', address: '静岡県下田市外ヶ岡1-1', description: '可看港口、买伴手礼；当地海鲜餐厅也集中在此。', query: '道の駅 開国下田みなと', source: 'https://www.kaikokushimodaminato.co.jp/sakanadonua' },
  shirahama: { name: '白滨大滨海岸', kind: '景点', address: '静岡県下田市白浜', area: true, description: '伊豆代表性的白沙滩。海况不佳时只在安全区域观景。', query: '白浜大浜海水浴場', source: 'https://shimoda-city.com/en/spots/57?page=1&select_area=0&select_spot_category=0' },
  ryugu: { name: '龙宫窟', kind: '景点', address: '静岡県下田市田牛', area: true, description: '海蚀洞与天然天窗，步道湿滑时注意脚下。', query: '龍宮窟 下田', source: 'https://shimoda-city.com/en/spots/11' },
  irozaki: { name: '石廊崎海洋公园', kind: '景点', address: '静岡県賀茂郡南伊豆町石廊崎546-5', description: '伊豆半岛南端的海岬。可从园区步行至灯塔与石室神社。', query: '石廊崎オーシャンパーク', source: 'https://irou-ocean.or.jp/access' },
  omuro: { name: '大室山缆车', kind: '景点', address: '静岡県伊東市池672-2', description: '登山缆车上火山口，晴天可沿山顶环步道看伊豆海岸。运营受风雨影响。', query: '大室山登山リフト', source: 'https://itospa.com/spot/detail_54003.html' },
  jogasaki: { name: '城崎海岸 · 门胁吊桥', kind: '景点', address: '静岡県伊東市富戸', area: true, description: '火山熔岩形成的断崖海岸，门胁吊桥是最便于短时间打卡的一段。', query: '城ヶ崎海岸 門脇つり橋', source: 'https://itospa.com/spot/detail_54002.html' },
  kadowakiParking: { name: '伊东市门胁停车场 / 步道入口', kind: '交通', address: '静岡県伊東市富戸', area: true, description: '门胁灯台和吊桥的短走入口；不开车可从城崎海岸站步行约 35 分钟，或在站前乘出租车。', query: '伊東市門脇駐車場', source: 'https://itospa.com/spot/detail_54002.html' },
  kadowakiBridge: { name: '门胁吊桥', kind: '景点', address: '静岡県伊東市富戸 城ヶ崎海岸', area: true, description: '城崎海岸的招牌景点：长约 48 米、高约 23 米。站在桥上看熔岩断崖，强风雨天不要勉强通行。', query: '門脇つり橋 城ヶ崎海岸', source: 'https://itospa.com/spot/detail_54002.html' },
  kadowakiLighthouse: { name: '门胁埼灯台', kind: '景点', address: '静岡県伊東市富戸842', description: '吊桥旁的白色灯台，展望台可望向伊豆七岛；开放情况以现场公告为准。', query: '門脇埼灯台', source: 'https://www.kaiho.mlit.go.jp/soshiki/koutsuu/toudai/oasis/3-kadowaki.html' },
  sakuranosato: { name: '樱之里 · 大室山山脚', kind: '景点', address: '静岡県伊東市富戸1317-4', description: '大室山脚下的开阔草地，适合缆车排队较长时短暂停留。秋季不以樱花为主。', query: 'さくらの里 伊東', source: 'https://itospa.com/spot/detail_54002.html' },
  hadanoBridge: { name: '鹤卷桥', kind: '取景地', address: '神奈川県秦野市尾尻367 付近', area: true, description: '剧中反复出现的上学路小桥，桥上可看室川与小田急线方向。请只在人行公共区域拍照。', mapQuery: '35.366766,139.228558', scene: '麻美与朋友们反复经过的上学路', source: 'https://hiyori.cc/article/brushuplife_ntv' },
  hadanoStationSteps: { name: '秦野站南口阶梯', kind: '取景地', address: '神奈川県秦野市大秦町1 秦野駅南口', area: true, description: '麻美与真里相遇的车站阶梯。抵达秦野后即可顺路打卡，不额外绕路。', query: '秦野駅 南口 階段', scene: '车站阶梯上的相遇', source: 'https://timessemibold.hatenablog.com/entry/2023/03/25/112525' },
  hadanoOzakiBridge: { name: '尾崎桥', kind: '取景地', address: '神奈川県秦野市尾尻167 付近', area: true, description: '与鹤卷桥距离不远，剧中梦境追逐场景曾在此拍摄。桥面通行时不要停留挡路。', mapQuery: '35.366779,139.227753', scene: '梦境里的桥上追逐', source: 'https://location.la.coocan.jp/brushuplife.html' },
  hadanoTunnel: { name: '小田急线下通学隧道', kind: '取景地', address: '神奈川県秦野市尾尻368 付近', area: true, description: '鹤卷桥旁的铁路下穿通道，也是四人同行的经典画面。留意自行车与行人通行。', mapQuery: '35.366844,139.228958', scene: '不同人生周目里，朋友们一起走过的隧道', source: 'https://hiyori.cc/article/brushuplife_ntv' },
  hadanoPark: { name: 'おじりつるまきざか公园', kind: '取景地', address: '神奈川県秦野市尾尻338 付近', area: true, description: '三人交换贴纸的小公园。位于安静住宅区，拍照时请勿对着民宅或制造噪音。', query: 'おじりつるまきざか公園', scene: '小时候交换贴纸的公园', source: 'https://hiyori.cc/article/brushuplife_ntv' },
  hadanoStairs: { name: '今泉台二丁目长阶梯', kind: '取景地', address: '神奈川県秦野市今泉台2丁目1番と2番の間', area: true, description: '麻美夜间奔走、后来与真里练体力的长阶梯。电话亭是拍摄道具，现场并不存在。', mapQuery: '35.364632,139.221153', scene: '深夜奔向电话亭，以及后来的体能训练', source: 'https://hiyori.cc/article/brushuplife_ntv' },
  yumeanHadano: { name: '梦庵 秦野インター店', kind: '餐厅', address: '神奈川県秦野市西大竹25-1', description: '麻美为了改变玲奈的相遇而久坐等待的家庭餐厅。适合巡礼终点兼午餐；营业以门店当天公告为准。', query: '夢庵 秦野インター店', scene: '麻美等待玲奈与宫冈彻的餐厅', source: 'https://store-info.skylark.co.jp/yumean/map/130137/' },
  hadanoCulturePark: { name: '秦野市文化公园野餐广场', kind: '取景地', address: '神奈川県秦野市平沢148', area: true, description: '剧中电话亭场景的拍摄区域；电话亭是道具，现场没有。离秦野站南口步行主线较远，仅作加映备选。', query: '秦野市カルチャーパーク ピクニック広場', scene: '夜间电话亭的拍摄区域（道具已撤）', source: 'https://www.city.hadano.kanagawa.jp/soshiki/9/1062/1/3755.html' },
  zenkoji: { name: '善光寺', kind: '景点', address: '長野県長野市元善町491-イ', description: '长野的标志性古寺。从长野站可沿中央通慢行到门前町。', query: '善光寺 長野', source: 'https://en.nagano-cvb.or.jp/modules/sightseeing/page/1' },
  obuse: { name: '小布施 · 北斋馆', kind: '景点', address: '長野県上高井郡小布施町小布施485', description: '可选绕行：看葛饰北斋晚年作品，顺路逛栗子点心街。', query: '北斎館 小布施', source: 'https://www.obusekanko.jp/spot/hokusaikan' },
  iwatake: { name: '白马岩岳缆车', kind: '景点', address: '長野県北安曇郡白馬村北城12056', description: '从山麓乘缆车上山，出发前查看当天风况与运营公告。', query: '白馬岩岳マウンテンリゾート ゴンドラ', source: 'https://iwatake-mountain-resort.com/green' },
  harbor: { name: 'HAKUBA MOUNTAIN HARBOR', kind: '景点', address: '長野県北安曇郡白馬村北城12056', description: '山顶露台正对北阿尔卑斯山，白马段最值得慢坐的一站。', query: 'HAKUBA MOUNTAIN HARBOR', source: 'https://iwatake-mountain-resort.com/hmh' },
  togakushiStart: { name: '户隐奥社参道入口', kind: '景点', address: '長野県長野市戸隠奥社入口', area: true, description: '从巴士站进入奥社参道；往返全程步行量较大，穿防滑鞋。', query: '戸隠神社 奥社参道入口', source: 'https://togakushi-21.jp/kodo/' },
  zuishinmon: { name: '随神门 · 杉木参道', kind: '景点', address: '長野県長野市戸隠 奥社参道', area: true, description: '参道中途的朱红色门楼，门后是高大杉木成列的步道。', query: '戸隠神社 随神門', source: 'https://togakushi-21.jp/kodo/' },
  togakushiOkusha: { name: '户隐神社奥社', kind: '景点', address: '長野県長野市戸隠3506', description: '参道深处的奥社。建议按天气、体力和返程巴士决定是否走到底。', query: '戸隠神社 奥社', source: 'https://togakushi-21.jp/spot/346/' },
  togakushiChusha: { name: '户隐神社中社', kind: '景点', address: '長野県長野市戸隠3506', description: '与奥社路线可组合，也适合作为低步行量方案的主站。', query: '戸隠神社 中社', source: 'https://togakushi-21.jp/spot/346/' },
  minatomirai: { name: '港未来海边步道', kind: '景点', address: '神奈川県横浜市西区みなとみらい', area: true, description: '酒店外就是海港景观，傍晚适合以摩天轮和滨水线为背景散步。', query: 'みなとみらい 横浜 臨港パーク', source: 'https://www.icyokohama-grand.com/en/access/' },
  redbrick: { name: '横滨红砖仓库', kind: '景点', address: '神奈川県横浜市中区新港1-1-1', description: '由旧港口仓库改造的商店和餐饮区，夜景也很适合散步。', query: '横浜赤レンガ倉庫', source: 'https://www.yokohama-akarenga.jp/company/' },
  yamashita: { name: '山下公园', kind: '景点', address: '神奈川県横浜市中区山下町279', description: '约 700 米海滨公园，可以望见横滨港与停泊船只。', query: '山下公園 横浜', source: 'https://www.yokohamajapan.com/article/what-to-do/' },
  chinatown: { name: '横滨中华街', kind: '景点', address: '神奈川県横浜市中区山下町', area: true, description: '牌楼、点心与老字号集中。建议把这里与山下公园连成一段步行。', query: '横浜中華街 善隣門', source: 'https://www.yokohamajapan.com/article/what-to-do/' },
  marinewalk: { name: 'MARINE & WALK', kind: '景点', address: '神奈川県横浜市中区新港1-3-1', description: '红砖仓库旁的海边商业街，适合午餐、咖啡与轻购物。', query: 'MARINE & WALK YOKOHAMA', source: 'https://marineandwalk.jp/faq/' },
  cupmuseum: { name: '杯面博物馆', kind: '景点', address: '神奈川県横浜市中区新港2-3-4', description: '互动展览与自制杯面体验，适合作为雨天或亲子备选。', query: 'カップヌードルミュージアム 横浜', source: 'https://www.cupnoodles-museum.jp/ja/yokohama/guide/access/' },

  kiyoken: { name: '崎阳轩中華食堂', kind: '餐厅', address: '神奈川県横浜市西区高島2-16-B1 横浜ポルタ', description: '横滨本地经典：烧卖与横滨发祥的生码面。晚抵达时比跨城找餐厅轻松。', query: '崎陽軒 中華食堂 横浜ポルタ', source: 'https://kiyoken-restaurant.com/chuka/' },
  kinmeya: { name: '下田料理 きんめ屋', kind: '餐厅', address: '静岡県下田市東本郷1-4-3 1F', description: '车站旁吃金目鲷与地鱼海鲜丼，适合刚到下田的午餐或晚餐。', query: '下田料理 きんめ屋', source: 'https://shimoda-kinmeya.com/' },
  sakanadonya: { name: '地魚回転寿司 魚どんや', kind: '餐厅', address: '静岡県下田市外ヶ岡1-1 2F', description: '港口道之驿二楼，主打当日地鱼和金目鲷握寿司。', query: '地魚回転寿司 魚どんや', source: 'https://www.kaikokushimodaminato.co.jp/sakanadonua' },
  shinden: { name: '新田', kind: '餐厅', address: '静岡県下田市3-2-12', description: '佩里之路附近的和食店，可尝金目鲷或地鱼料理。', query: '新田 下田 金目鯛', source: 'https://shimoda-city.com/en/spots/32' },
  inatoriDinner: { name: '稻取庄旅馆晚餐', kind: '餐厅', address: '静岡県賀茂郡東伊豆町稲取1531', description: '原行程已含晚餐，以预订套餐和上菜时间为准。入住后先确认用餐时段。', query: 'いなとり荘', source: 'https://inatoriso.com/p-1536/' },
  kitanoya: { name: 'そば処 北野家', kind: '餐厅', address: '長野県長野市東之門町393', description: '善光寺东参道的百年荞麦面店，适合参拜后坐下来吃一碗。', query: 'そば処 北野家', source: 'https://www.nagano-cvb.or.jp/modules/sightseeing/page/186' },
  daimarusoba: { name: 'かどの大丸', kind: '餐厅', address: '長野県長野市大門町504', description: '善光寺门前老店，店外可看到荞麦面制作；适合作为白天加餐。', query: 'かどの大丸 善光寺', source: 'https://www.nagano-cvb.or.jp/modules/member/page/398' },
  citybakery: { name: 'THE CITY BAKERY 白马', kind: '餐厅', address: '長野県北安曇郡白馬村北城12056', description: '山顶露台旁喝咖啡、吃面包，把午餐与山景合在一起。', query: 'THE CITY BAKERY 白馬マウンテンハーバー', source: 'https://iwatake-mountain-resort.com/hmh' },
  uzuraya: { name: 'うずら家', kind: '餐厅', address: '長野県長野市戸隠3229', description: '户隐荞麦面代表店之一，常有等位，建议把午餐留出机动时间。', query: 'うずら家 戸隠', source: 'https://en.nagano-cvb.or.jp/modules/sightseeing/page/196' },
  ymaguchiya: { name: '戸隠そば 山口屋', kind: '餐厅', address: '長野県長野市戸隠3423', description: '户隐中社区域的另一家荞麦面选择，适合与中社路线配合。', query: '戸隠そば 山口屋', source: 'https://www.nagano-cvb.or.jp/modules/member/page/408' },
  oceanterrace: { name: 'Ocean Terrace', kind: '餐厅', address: '神奈川県横浜市西区みなとみらい1-1-1 1F', description: '横滨洲际酒店内的自助餐厅，回城后不想再转车时很方便。', query: 'オーシャンテラス ヨコハマ グランド インターコンチネンタル', source: 'https://www.icyokohama-grand.com/en/restaurant/' },
  bills: { name: 'bills 横滨红砖仓库', kind: '餐厅', address: '神奈川県横浜市中区新港1-1-2 横浜赤レンガ倉庫2号館', description: '海边步行线上的轻食与咖啡，适合把午餐安排在红砖仓库一带。', query: 'bills 横浜赤レンガ倉庫', source: 'https://www.yokohamajapan.com/things-to-do/detail.php?id=14' },
  kaseiro: { name: '華正樓 本店', kind: '餐厅', address: '神奈川県横浜市中区山下町186', description: '中华街老牌餐厅，以上海、北京菜和海鲜料理见长。', query: '華正樓 本店 横浜中華街', source: 'https://www.yokohamajapan.com/things-to-do/detail.php?id=486' },
  araiya: { name: '荒井屋 SOGO 横滨店', kind: '餐厅', address: '神奈川県横浜市西区高島2-18-1 そごう横浜店10F', description: '横滨牛锅料理，适合回程前想吃一顿本地特色正餐时预约。', query: '荒井屋 そごう横浜店', source: 'https://www.yokohamajapan.com/things-to-do/detail.php?id=508' },
  obuseSweet: { name: '桜井甘精堂 本店', kind: '餐厅', address: '長野県上高井郡小布施町小布施774', description: '小布施栗菓子老铺，适合小布施支线中短暂停留。', query: '桜井甘精堂 本店', source: 'https://www.obusekanko.jp/spot/kanseidohonten' }
};

const HADANO_SCENES = [
  { place: 'hadanoStationSteps', number: '01', shot: '车站阶梯的相遇', detail: '一出秦野站南口即可看到，不耽误转场。', still: 'https://www.ntv.co.jp/brushup-life/story/' },
  { place: 'hadanoBridge', number: '02', shot: '放学路上的小桥', detail: '从车站往室川上的鹤卷桥走。桥和旁边的隧道几乎连在一起，是这趟巡礼最值得认真拍的一组画面。', still: 'https://www.ntv.co.jp/brushup-life/story/' },
  { place: 'hadanoTunnel', number: '03', shot: '一起穿过的隧道', detail: '从桥边转入小田急线下的通道。可以试着在通道口拍“走向光亮”的构图，但不要挡住通勤者。', still: 'https://www.ntv.co.jp/brushup-life/story/' },
  { place: 'hadanoOzakiBridge', number: '04', shot: '梦境里的另一座桥', detail: '沿室川再走一小段，看麻美的梦境追逐画面取景处。', still: 'https://www.ntv.co.jp/brushup-life/story/' },
  { place: 'hadanoPark', number: '05', shot: '交换贴纸的小公园', detail: '公园不大，更像住宅区里的小展望处。这里适合拍一张朋友并肩坐着的合影。', still: 'https://www.ntv.co.jp/brushup-life/story/' },
  { place: 'hadanoStairs', number: '06', shot: '奔跑与练体力的长阶梯', detail: '这里的坡度比镜头里更有存在感。阶梯旁不存在剧中的电话亭，不要白找。', still: 'https://www.ntv.co.jp/brushup-life/story/' },
  { place: 'yumeanHadano', number: '07', shot: '麻美守候的家庭餐厅', detail: '最后到真实营业的梦庵吃午饭。这里与桥、隧道不在同一小圈内，建议把它放在巡礼收尾。', still: 'https://www.ntv.co.jp/brushup-life/story/' },
  { place: 'hadanoCulturePark', number: '+', shot: '加映：电话亭场景', detail: '文化公园离主线较远，只有提早到达、余力充足才去。道具电话亭已撤，不要按剧照寻找实体电话亭。', still: 'https://www.ntv.co.jp/brushup-life/story/' }
];

const IZU_HIGHLIGHTS = [
  { place: 'shirahama', day: 'D03', priority: '白沙海岸', tip: '上午光线好，先看海色。' },
  { place: 'ryugu', day: 'D03', priority: '海蚀洞', tip: '走到高处再看天然天窗。' },
  { place: 'irozaki', day: 'D03', priority: '半岛最南端', tip: '留出巴士接驳与步行时间。' },
  { place: 'omuro', day: 'D04', priority: '火山口', tip: '缆车受风影响，早上先确认运营。' },
  { place: 'kadowakiLighthouse', day: 'D04', priority: '白色灯塔', tip: '与门胁吊桥相邻，可一起走。' },
  { place: 'kadowakiBridge', day: 'D04', priority: '海上吊桥', tip: '从门胁停车场短走最省力。' }
];

const step = (time, place, note = '') => ({ time, place, note });
const DAYS = [
  {
    id: 'd1', date: '9月27日', week: '周日', area: '横滨', title: '从香港出发，抵达横滨', subtitle: '落地后的第一件事，是把行李放好。', hotel: 'fresa', stay: '9/27 入住 · 9/28 退房', food: ['kiyoken'],
    note: '已订 HB322：11:55 香港 T2 → 17:25 成田 T2；N\'EX 46：18:48 → 20:19 横滨，1号车 3A/3B。请按机票与车票复核。',
    plans: {
      A: { name: '原定路线', mood: '航班 · N\'EX · 轻晚餐', stops: [step('11:55', 'hkg', 'HB322 出发'), step('17:25', 'nrt', '入境、取行李'), step('18:48', 'nrt', '乘 N\'EX 46'), step('20:19', 'yokohamaStation', '抵达横滨'), step('20:30', 'fresa', '办理入住'), step('21:00', 'kiyoken', '时间充裕再吃') ] },
      B: { name: '落地省力', mood: '直达酒店，早些休息', stops: [step('17:25', 'nrt', '入境、取行李；18:48 乘 N\'EX'), step('20:19', 'yokohamaStation', '抵达横滨'), step('20:30', 'fresa', '附近简餐后休息')] },
      C: { name: '航班延误', mood: '优先完成跨城交通', stops: [step('17:25', 'nrt', '先看实际抵达时刻'), step('20:00', 'yokohamaStation', '根据可乘车次调整'), step('21:30', 'fresa', '抵达后直接入住')] }
    }
  },
  {
    id: 'd2', date: '9月28日', week: '周一', area: '下田', title: '坐踊り子号去海边', subtitle: '佩里之路和港口，适合慢一点逛。', hotel: 'shimodaHotel', stay: '9/28 入住 · 9/30 退房', food: ['kinmeya', 'sakanadonya'],
    note: '已订 JR 踊り子1号：横滨 09:24 → 伊豆急下田 11:39，8号车 10A/10B。下田东急酒店住两晚。',
    plans: {
      A: { name: '原定路线', mood: '港口旧街 · 不赶时间', stops: [step('09:24', 'yokohamaStation', '踊り子1号出发'), step('11:39', 'shimodaStation', '抵达、寄存行李'), step('12:10', 'kinmeya', '金目鲷午餐'), step('14:00', 'perry', '石板路慢走'), step('15:00', 'ryosenji', '开港历史'), step('17:00', 'shimodaHotel', '办理入住')] },
      B: { name: '海边慢游', mood: '少走景点，多看海', stops: [step('11:39', 'shimodaStation'), step('12:30', 'shimodaPort', '港边午餐与闲逛'), step('15:00', 'shimodaHotel', '酒店海景与温泉')] },
      C: { name: '雨天文化线', mood: '旧街短走 · 室内展览', stops: [step('11:39', 'shimodaStation'), step('12:20', 'kinmeya'), step('14:00', 'ryosenji', '黑船资料馆'), step('16:00', 'shimodaHotel')] }
    }
  },
  {
    id: 'd3', date: '9月29日', week: '周二', area: '南伊豆', title: '沿着伊豆海岸往南', subtitle: '白沙、海蚀洞与最南端的风。', hotel: 'shimodaHotel', stay: '续住第 2 晚', food: ['sakanadonya', 'shinden'],
    note: '原行程建议以东海巴士或出租车为主；白滨、龙宫窟、石廊崎分散，A 方案需早出发并核对班次。',
    plans: {
      A: { name: '海岸完整版', mood: '白滨 · 龙宫窟 · 石廊崎', stops: [step('08:30', 'shimodaHotel', '早餐后出发'), step('09:15', 'shirahama', '看白沙和海色'), step('11:00', 'ryugu', '海蚀洞短走'), step('13:30', 'irozaki', '以巴士班次和天气为准'), step('17:30', 'sakanadonya', '回下田吃港口地鱼'), step('19:00', 'shimodaHotel', '回酒店休息')] },
      B: { name: '轻松看海', mood: '只选两站，留时间泡汤', stops: [step('09:30', 'shimodaHotel'), step('10:30', 'shirahama'), step('13:00', 'sakanadonya'), step('15:00', 'ryugu'), step('17:00', 'shimodaHotel')] },
      C: { name: '风雨弹性', mood: '港口与历史馆', stops: [step('10:00', 'shimodaHotel'), step('11:00', 'shimodaPort'), step('12:00', 'sakanadonya'), step('14:00', 'ryosenji', '室内展览优先'), step('16:00', 'shimodaHotel')] }
    }
  },
  {
    id: 'd4', date: '9月30日', week: '周三', area: '伊豆高原 · 稻取', title: '大室山与门胁吊桥', subtitle: '火山口、灯塔、海上吊桥，再回温泉旅馆。', hotel: 'inatoriso', stay: '9/30 入住 · 10/1 退房', food: ['inatoriDinner'],
    note: '今天带行李换酒店。A 方案跨越下田、伊东和稻取，建议包车或出租车分段接驳，并先与旅馆确认晚餐最晚到达时间；公交慢或天气差就选 B/C。',
    plans: {
      A: { name: '伊豆必打卡', mood: '大室山 · 灯塔 · 吊桥 · 温泉', stops: [step('08:15', 'shimodaHotel', '退房；建议提前安排接驳'), step('10:15', 'omuro', '乘缆车绕火山口；遇强风改 B'), step('11:30', 'sakuranosato', '山脚短歇，可按时间跳过'), step('13:00', 'kadowakiParking', '抵达门胁短走入口'), step('13:15', 'kadowakiLighthouse', '先看灯塔和海岸线'), step('13:40', 'kadowakiBridge', '走 48 米海上吊桥'), step('16:30', 'inatoriso', '务必赶上晚餐入住'), step('18:30', 'inatoriDinner', '以旅馆确认时间为准')] },
      B: { name: '公共交通轻量', mood: '只去门胁吊桥，减少折返', stops: [step('08:30', 'shimodaHotel', '退房，坐伊豆急行北上'), step('11:00', 'kadowakiParking', '城崎海岸站步行约 35 分钟或打车'), step('11:15', 'kadowakiLighthouse', '展望台视开放情况'), step('11:40', 'kadowakiBridge', '吊桥与熔岩海岸'), step('14:30', 'inatoriso', '回稻取，提前办理入住或寄存'), step('18:00', 'inatoriDinner')] },
      C: { name: '风雨与温泉', mood: '取消海边栈道，早回旅馆', stops: [step('09:30', 'shimodaHotel', '退房'), step('12:00', 'inatoriso', '寄存行李，周边散步'), step('15:00', 'inatoriso', '入住、泡汤'), step('18:00', 'inatoriDinner')] }
    }
  },
  {
    id: 'd5', date: '10月1日', week: '周四', area: '长野', title: '从海边向山城移动', subtitle: '今天留给列车、善光寺和一碗荞麦面。', hotel: 'jal', stay: '10/1 入住 · 10/4 退房', food: ['kitanoya', 'daimarusoba', 'obuseSweet'],
    note: '稻取到长野为长距离转乘，原行程估计约 4–4.5 小时。小布施支线仅在到达够早、体力允许时考虑。',
    plans: {
      A: { name: '原定路线', mood: '抵达长野后短游', stops: [step('08:30', 'inatoriso', '退房'), step('14:30', 'naganoStation', '抵达长野'), step('15:00', 'jal', '办理入住'), step('16:00', 'zenkoji', '门前町散步'), step('18:00', 'kitanoya', '荞麦面晚餐')] },
      B: { name: '转车省力', mood: '酒店周边休息', stops: [step('09:00', 'inatoriso'), step('15:00', 'naganoStation'), step('15:30', 'jal', '休整行李'), step('18:00', 'kitanoya')] },
      C: { name: '小布施支线', mood: '只在到达够早时选', stops: [step('08:00', 'inatoriso'), step('13:30', 'naganoStation'), step('14:30', 'obuse', '北斋馆'), step('15:30', 'obuseSweet', '栗子点心'), step('18:00', 'jal', '返回长野入住')] }
    }
  },
  {
    id: 'd6', date: '10月2日', week: '周五', area: '白马', title: '上山看白马三山', subtitle: '山顶露台、咖啡和不着急的下午。', hotel: 'jal', stay: '续住第 2 晚', food: ['citybakery', 'kitanoya'],
    note: '长野—白马特急巴士春夏秋班次与岩岳缆车 2026 运营期已在运营方官网公布；当天仍需看风况、巴士班次。',
    plans: {
      A: { name: '山景完整版', mood: '巴士 · 缆车 · 山顶露台', stops: [step('08:00', 'jal'), step('09:40', 'hakubaBus', '转山麓交通'), step('10:30', 'iwatake', '乘缆车'), step('11:00', 'harbor', '看北阿尔卑斯山'), step('12:30', 'citybakery', '咖啡与面包'), step('17:30', 'jal', '返回长野')] },
      B: { name: '山顶慢坐', mood: '只去露台，不加徒步', stops: [step('09:00', 'jal'), step('11:00', 'iwatake'), step('11:30', 'harbor'), step('12:30', 'citybakery'), step('16:30', 'jal')] },
      C: { name: '缆车停运', mood: '留在长野市区', stops: [step('10:00', 'jal'), step('11:00', 'zenkoji'), step('12:30', 'daimarusoba'), step('15:00', 'jal', '城市慢行')] }
    }
  },
  {
    id: 'd7', date: '10月3日', week: '周六', area: '户隐', title: '走进杉木参道', subtitle: '从随神门，往奥社深处去。', hotel: 'jal', stay: '续住第 3 晚', food: ['uzuraya', 'ymaguchiya'],
    note: '长野—户隐旅游特急巴士部分班次需预约；奥社参道单程约 2 公里，路面不平，B 方案适合减少步行。',
    plans: {
      A: { name: '参道完整版', mood: '奥社 · 杉木 · 中社', stops: [step('08:00', 'jal'), step('09:30', 'togakushiStart', '奥社入口下车'), step('10:15', 'zuishinmon', '进入杉木参道'), step('11:00', 'togakushiOkusha', '按体力抵达'), step('13:30', 'togakushiChusha'), step('14:00', 'uzuraya', '荞麦面午餐'), step('18:00', 'jal')] },
      B: { name: '杉林轻徒步', mood: '走到随神门就折返', stops: [step('09:00', 'jal'), step('10:30', 'togakushiStart'), step('11:00', 'zuishinmon', '往返杉木参道'), step('13:00', 'togakushiChusha'), step('13:30', 'ymaguchiya'), step('17:00', 'jal')] },
      C: { name: '少走路', mood: '中社与荞麦面', stops: [step('09:30', 'jal'), step('11:00', 'togakushiChusha'), step('12:00', 'uzuraya'), step('15:30', 'jal')] }
    }
  },
  {
    id: 'd8', date: '10月4日', week: '周日', area: '长野 → 秦野 → 横滨', title: '在回横滨途中，重启人生', subtitle: '长野出发，走过秦野的桥与隧道，傍晚抵达海港。', hotel: 'intercon', stay: '10/4 入住 · 10/6 退房', food: ['yumeanHadano', 'oceanterrace'],
    note: 'A 方案跨城又步行，须早出发。建议前一天联系长野酒店寄送大件行李至横滨酒店，并确认次日送达；或在秦野站核实寄存柜，柜满则改 B。车次与所需时间请出发前重新查。',
    plans: {
      A: { name: '秦野取景地巡礼', mood: '长野 · 上学路 · 贴纸公园 · 横滨', stops: [step('07:45', 'jal', '退房；大件行李提前寄送或在秦野站寄存'), step('11:30', 'hadanoStation', '东京方向转小田急；到达时间以实际车次为准'), step('11:35', 'hadanoStationSteps', '南口阶梯顺路拍照'), step('11:50', 'hadanoBridge', '站在公共道路取景'), step('12:05', 'hadanoTunnel', '桥边下穿铁路的通学道'), step('12:20', 'hadanoOzakiBridge', '梦境中的另一座桥'), step('12:45', 'hadanoPark', '小公园与贴纸回忆'), step('13:20', 'hadanoStairs', '长阶梯；时间紧可跳过'), step('14:15', 'yumeanHadano', '家庭餐厅午餐'), step('16:00', 'hadanoStation', '转车去横滨'), step('18:00', 'intercon', '办理入住，核对行李送达')] },
      B: { name: '早到横滨', mood: '省力转车 · 港边散步', stops: [step('09:00', 'jal', '退房'), step('13:00', 'yokohamaStation'), step('14:00', 'intercon', '入住或寄存行李'), step('16:00', 'minatomirai', '海边散步'), step('18:30', 'oceanterrace', '酒店晚餐可选')] },
      C: { name: '交通延误 / 雨天', mood: '直接入住 · 室内休息', stops: [step('09:30', 'jal', '退房'), step('14:00', 'yokohamaStation', '预留换乘缓冲'), step('15:00', 'intercon', '办理入住'), step('18:00', 'oceanterrace', '酒店内晚餐')] }
    }
  },
  {
    id: 'd9', date: '10月5日', week: '周一', area: '横滨', title: '横滨的一整天', subtitle: '海滨公园、中华街和红砖仓库。', hotel: 'intercon', stay: '续住第 2 晚', food: ['kaseiro', 'bills', 'oceanterrace'],
    note: '前一天若已走秦野，今天适合放慢脚步。杯面博物馆体验项目有独立预约规则；餐厅营业与节假日情况请行前复核。',
    plans: {
      A: { name: '经典海港线', mood: '公园 · 中华街 · 红砖', stops: [step('09:30', 'intercon'), step('10:00', 'yamashita', '沿海岸慢走'), step('11:30', 'chinatown', '逛牌楼与街巷'), step('12:30', 'kaseiro', '中餐午餐'), step('15:00', 'redbrick'), step('16:00', 'marinewalk', '咖啡与购物'), step('19:00', 'intercon')] },
      B: { name: '海边松弛线', mood: '少转场，多坐一会儿', stops: [step('10:00', 'intercon'), step('11:00', 'marinewalk'), step('12:00', 'bills', '海边午餐'), step('14:00', 'redbrick'), step('16:00', 'minatomirai'), step('18:00', 'intercon')] },
      C: { name: '雨天室内线', mood: '杯面博物馆 · 中华街', stops: [step('10:00', 'intercon'), step('10:30', 'cupmuseum', '留意体验预约'), step('13:00', 'kaseiro'), step('15:00', 'redbrick', '室内商店'), step('17:00', 'intercon')] }
    }
  },
  {
    id: 'd10', date: '10月6日', week: '周二', area: '返程', title: '带着海港记忆回家', subtitle: '给成田机场留够时间。', hotel: 'intercon', stay: '10/6 退房', food: ['oceanterrace', 'araiya'],
    note: '原行程写回程 HB323：20:25 成田 T2 → 次日 00:20 香港 T1；N\'EX 回程具体车次仍需确认。建议至少提前 3 小时到机场。',
    plans: {
      A: { name: '稳妥返程', mood: '午后出发，预留机场缓冲', stops: [step('09:00', 'oceanterrace', '早餐可选'), step('11:00', 'intercon', '退房收行李'), step('14:00', 'yokohamaStation', '乘 N\'EX'), step('16:00', 'nrt', '值机与安检'), step('20:25', 'nrt', 'HB323 起飞'), step('次日 00:20', 'hkg', '抵达香港')] },
      B: { name: '更早到机场', mood: '少一站，缓冲更多', stops: [step('09:00', 'intercon', '早餐后退房'), step('12:00', 'yokohamaStation'), step('14:00', 'nrt', '机场用餐与候机'), step('20:25', 'nrt', 'HB323 起飞'), step('次日 00:20', 'hkg', '抵达香港')] },
      C: { name: '市区午餐后走', mood: '仅在车次充裕时选择', stops: [step('09:00', 'intercon'), step('11:30', 'araiya', '横滨牛锅，建议预约'), step('14:00', 'yokohamaStation'), step('16:00', 'nrt'), step('20:25', 'nrt', 'HB323 起飞'), step('次日 00:20', 'hkg', '抵达香港')] }
    }
  }
];

const STAYS = [
  { place: 'fresa', dates: '9/27 — 9/28', nights: '1 晚' },
  { place: 'shimodaHotel', dates: '9/28 — 9/30', nights: '2 晚' },
  { place: 'inatoriso', dates: '9/30 — 10/1', nights: '1 晚' },
  { place: 'jal', dates: '10/1 — 10/4', nights: '3 晚' },
  { place: 'intercon', dates: '10/4 — 10/6', nights: '2 晚' }
];

const RAIL_TICKETS = [
  {
    id: 'nex', day: 'D01 · 9月27日', name: "N'EX 46 / 成田特快", product: "N'EX TOKYO Round Trip Ticket",
    reservation: 'E51915', pickupCode: '29472411991521248',
    from: '成田机场第 2·3 航站楼', to: '横滨', departure: '18:48', arrival: '20:19',
    seats: '1 号车 · 3A、3B', travelers: '成人 2 位',
    notice: '订单显示往返票 14 天内有效；这里记录的是去程指定席。返程日期和座位请在 JR 原订单中另行确认。',
    pickup: ['在 JR 东日本指定席售票机选择语言。', '选择「QR code or pickup code」，打开原始订单中的取票二维码或取票码。', '按机器提示读取预订所用的有效 IC 芯片护照，领取车票；找不到合适设备时咨询 JR 服务中心。']
  },
  {
    id: 'odoriko', day: 'D02 · 9月28日', name: '踊り子 1 号', product: 'Odoriko (ITO) 1',
    reservation: 'E23382', pickupCode: '29472422671521298',
    from: '横滨', to: '伊豆急下田', departure: '09:24', arrival: '11:39',
    seats: '8 号车 · 10A、10B', travelers: '成人 2 位',
    notice: '原始订单显示为已预订指定席。取票用二维码不是直接过闸用的乘车二维码，请按页面说明先领纸质车票。',
    pickup: ['在原始 JR 订单中打开「领取个别取票专用二维码」。', '到站后在支持取票的指定席售票机选择二维码或取票码方式。', '扫描原始二维码，或按屏幕提示输入取票码；取出两位乘客的车票并核对车次、日期和座位。']
  }
];
