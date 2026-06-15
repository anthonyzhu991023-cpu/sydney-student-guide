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

## 内容编辑

后台地址：

- 本地：`http://localhost:3000/studio`
- 线上：`https://sydney-student-guide.onrender.com/studio`

编辑流程：

1. 打开 `/studio`。
2. 选择“攻略文章”新增或编辑文章。
3. 填写标题、摘要、正文、分类、标签、阅读时间和发布时间。
4. 点击发布。
5. 回到前台首页或“全部攻略”检查显示效果。

如果 `/studio` 提示 Sanity 项目未配置，需要先在 `.env.local` 和 Render 环境变量里填：

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=你的项目ID
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-01-01
```

## Render

`render.yaml` 已包含 Web Service 配置。Render API key 不应写入仓库；部署时只在本机环境变量或 Render Dashboard 中使用。
