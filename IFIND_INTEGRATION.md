# 同花顺 iFinD 数据接入说明

## 当前判断

你刚刚从“超级命令”里复制出来的是一条取数命令，不是数据结果：

```python
THS_RQ("证券代码列表", "指标列表")
```

它选了全市场股票和大量实时行情字段，适合做选股或全市场扫描，但不适合直接塞进网站首页。每日市场页第一步建议只取重要指数，否则速度慢、额度消耗也大。

## 网站现在怎么读数据

前端读取顺序是：

1. 优先读取 `data/ifind-market.json`
2. 如果没有这个文件，再请求 `/.netlify/functions/market`
3. 如果接口失败，再显示演示数据

## 本机更新 iFinD 快照

先确保你的电脑可以运行 iFinD Python SDK。然后在项目目录执行：

```powershell
python scripts\ifind_market_refresh.py
```

成功后会生成：

```text
data/ifind-market.json
```

这个 JSON 不包含账号、密码、Refresh Token 或 Access Token，可以提交到 GitHub，让 Netlify 自动发布。

## 推荐的取数字段

每日市场首页先取这些字段就够了：

```text
latest;changeRatio;chg_5d;chg_year;tradeDate;tradeTime
```

对应网站展示：

- `latest`：指数点位
- `changeRatio`：单日涨跌幅
- `chg_5d`：较上周
- `chg_year`：较年初
- `tradeDate/tradeTime`：数据更新时间

## 推荐的指数范围

第一版先取这些：

```text
000001.SH 上证指数
399001.SZ 深证成指
399006.SZ 创业板指
000688.SH 科创50
HSI.HI 恒生指数
HSTECH.HI 恒生科技
SPX.GI 标普500
IXIC.GI 纳斯达克
DJI.GI 道琼斯
N225.GI 日经225
SX5E.GI 欧洲Stoxx50
```

如果某个海外指数代码在你的 iFinD 账号里报错，就在“超级命令”网页里搜索该指数，用网页生成的正确代码替换脚本里的 `INDEXES`。

## 更新网站

每次想更新数据：

```powershell
python scripts\ifind_market_refresh.py
git add data/ifind-market.json
git commit -m "Update iFinD market snapshot"
git push
```

Netlify 会自动重新部署，公开网站随之更新。
