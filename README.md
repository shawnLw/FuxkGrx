# 投资研究网站

这是一个静态网站，可以部署到 Vercel、Netlify、Cloudflare Pages 或 GitHub Pages。

## 本地预览

```bash
node server.js
```

然后打开：

```text
http://127.0.0.1:5173/
```

## 最快发布方式：Netlify 拖拽上传

1. 打开 https://app.netlify.com/drop
2. 登录 Netlify。
3. 把整个 `网站制作` 文件夹拖进去。
4. 等待上传完成，会得到一个 `https://xxx.netlify.app` 地址。

## Vercel 发布

1. 打开 https://vercel.com/new
2. 导入这个项目文件夹对应的 Git 仓库。
3. Framework Preset 选择 `Other`。
4. Build Command 留空。
5. Output Directory 填 `.`。
6. 部署后会得到一个 `https://xxx.vercel.app` 地址。

## GitHub Pages 发布

1. 新建一个 GitHub 仓库。
2. 上传这些文件。
3. 进入仓库 Settings -> Pages。
4. Source 选择 `Deploy from a branch`。
5. Branch 选择 `main`，目录选择 `/root`。
6. 保存后等待几分钟，会得到一个 GitHub Pages 地址。
