import Link from "next/link";
import { ArrowRight, BookOpenCheck, Edit3, Map, Sparkles } from "lucide-react";
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
          <div className="hero-hud" aria-label="站点状态">
            <span>LV.01 SYDNEY</span>
            <span>QUEST GUIDE</span>
          </div>
          <h1>悉尼留学生生存攻略</h1>
          <p>
            把落地、租房、交通、打工、医保和校园生活拆成任务。先走新手路线，再慢慢解锁城市副本。
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
          <div className="hero-admin-note">
            <Edit3 aria-hidden="true" />
            编辑文章从 <Link href="/studio">内容后台</Link> 进入，新增攻略后会自动出现在站内。
          </div>
        </div>
        <div className="pixel-map" aria-label="悉尼生活任务地图示意图">
          <div className="map-titlebar">
            <span>SYDNEY QUEST MAP</span>
            <span>ONLINE</span>
          </div>
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
          <p className="section-kicker">任务公告板</p>
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
        <div className="admin-panel">
          <div>
            <Edit3 aria-hidden="true" />
            <h2 id="newsletter-title">管理编辑怎么做</h2>
            <p>后台已经接在站内。打开内容后台，选择“攻略文章”或“分类”，填写标题、摘要、正文、标签和发布时间，发布后前台会读取。</p>
          </div>
          <ol>
            <li>进入内容后台：/studio</li>
            <li>新增或编辑攻略文章</li>
            <li>发布后回到首页检查</li>
          </ol>
          <div className="admin-actions">
            <Link href="/studio" className="button primary">
              <BookOpenCheck aria-hidden="true" />
              打开内容后台
            </Link>
            <Link href="/guides" className="button secondary">
              <Map aria-hidden="true" />
              查看全部攻略
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
