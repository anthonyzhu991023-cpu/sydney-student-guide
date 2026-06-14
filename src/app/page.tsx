import Link from "next/link";
import { ArrowRight, Map, Sparkles } from "lucide-react";
import { ArticleCard } from "@/components/article-card";
import { CategoryMap } from "@/components/category-map";
import { PixelIcon } from "@/components/icons";
import { QuestLog } from "@/components/quest-log";
import { SearchBox } from "@/components/search-box";
import { getArticles, getCategories } from "@/lib/content";

export default async function HomePage() {
  const [categories, articles] = await Promise.all([getCategories(), getArticles()]);
  const featured = articles.filter((article) => article.featured).slice(0, 3);
  const latest = articles.slice(0, 4);

  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <h1>悉尼留学生生存攻略</h1>
          <p>
            从落地第一天到租房、交通、打工和校园生活，用任务地图一步步通关。
          </p>
          <div className="hero-actions">
            <Link href="/categories/arrival" className="button primary">
              开始新手任务
              <ArrowRight aria-hidden="true" />
            </Link>
            <Link href="/guides" className="button secondary">
              搜索攻略
            </Link>
          </div>
          <SearchBox compact />
        </div>
        <div className="pixel-map" aria-label="悉尼生活任务地图示意图">
          <div className="map-skyline">
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="map-grid">
            <div className="map-tile tile-water">Harbour</div>
            <div className="map-tile tile-campus">Campus</div>
            <div className="map-tile tile-home">Rent</div>
            <div className="map-tile tile-train">Opal</div>
            <div className="map-tile tile-work">TFN</div>
            <div className="map-tile tile-shop">Market</div>
          </div>
          <div className="map-status">
            <Sparkles aria-hidden="true" />
            新手村任务已解锁
          </div>
        </div>
      </section>

      <CategoryMap categories={categories} />

      <section className="section articles-section" aria-labelledby="featured-title">
        <div className="section-heading">
          <p className="section-kicker">最新攻略</p>
          <h2 id="featured-title">先看这些高频问题</h2>
          <p>围绕刚到悉尼最容易踩坑的场景，先把关键路径跑通。</p>
        </div>
        <div className="article-grid">
          {(featured.length ? featured : latest.slice(0, 3)).map((article) => (
            <ArticleCard article={article} featured key={article.slug} />
          ))}
        </div>
      </section>

      <QuestLog />

      <section className="section city-section" aria-labelledby="city-title">
        <div className="city-card">
          <div>
            <p className="section-kicker">城市副本</p>
            <h2 id="city-title">从学校到街区，建立自己的安全路线</h2>
            <p>
              把学校、住处、车站、超市和诊所连成日常路线。熟悉这些点，比背一堆零散攻略更有用。
            </p>
          </div>
          <div className="city-list">
            {categories.slice(0, 6).map((category) => (
              <Link href={`/categories/${category.slug}`} key={category.slug}>
                <PixelIcon name={category.icon} />
                <span>{category.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section newsletter" aria-labelledby="newsletter-title">
        <Map aria-hidden="true" />
        <h2 id="newsletter-title">把下一篇攻略放进任务日志</h2>
        <p>首版已接入 CMS 结构，可以持续发布悉尼租房、交通、打工和校园生活内容。</p>
        <Link href="/guides" className="button primary">
          查看全部攻略
        </Link>
      </section>
    </>
  );
}
