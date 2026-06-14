# 悉尼生存攻略

中文内容门户，服务准备来悉尼或已经在悉尼的留学生。首版使用 Next.js、TypeScript 和 Sanity CMS，视觉方向是“悉尼任务地图 + 地牢像素风”，正文保持清晰可读。

## 本地运行

```bash
npm install
npm run dev
```

打开 `http://localhost:3000`。

## Sanity

复制 `.env.example` 为 `.env.local`，填入 Sanity 项目信息。没有配置 Sanity 时，网站会自动使用内置示例内容，方便先开发和部署前端。

## Render

`render.yaml` 已包含 Web Service 配置。Render API key 不应写入仓库；部署时只在本机环境变量或 Render Dashboard 中使用。
