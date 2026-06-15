"use client";

import Link from "next/link";
import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";

export default function StudioPage() {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  const hasProject = Boolean(projectId && projectId !== "replace-me");

  if (!hasProject) {
    return (
      <section className="studio-setup" aria-labelledby="studio-setup-title">
        <div>
          <p className="section-kicker">内容后台</p>
          <h1 id="studio-setup-title">先连接 Sanity，才能在线编辑攻略</h1>
          <p>
            网站前台现在会用内置示例内容运行。要在后台新增、编辑和发布文章，需要创建 Sanity 项目，
            然后把项目 ID 填到本地和 Render 环境变量里。
          </p>
        </div>
        <ol>
          <li>在 Sanity 创建项目，记录 Project ID。</li>
          <li>本地 `.env.local` 填 `NEXT_PUBLIC_SANITY_PROJECT_ID`。</li>
          <li>Render 的 Environment 里填同样的变量。</li>
          <li>重新部署后回到 `/studio` 编辑文章。</li>
        </ol>
        <div className="studio-code">
          <span>NEXT_PUBLIC_SANITY_PROJECT_ID=你的项目ID</span>
          <span>NEXT_PUBLIC_SANITY_DATASET=production</span>
          <span>NEXT_PUBLIC_SANITY_API_VERSION=2025-01-01</span>
        </div>
        <div className="hero-actions">
          <Link href="/" className="button primary">
            回首页
          </Link>
          <Link href="/guides" className="button secondary">
            先看现有攻略
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="studio-frame" aria-label="内容编辑后台">
      <NextStudio config={config} />
    </section>
  );
}
