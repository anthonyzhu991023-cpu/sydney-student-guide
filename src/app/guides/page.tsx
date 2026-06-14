import Link from "next/link";
import { ArticleCard } from "@/components/article-card";
import { SearchBox } from "@/components/search-box";
import { filterArticles, getArticles, getCategories } from "@/lib/content";

type GuidesPageProps = {
  searchParams: Promise<{
    q?: string;
    category?: string;
  }>;
};

export const metadata = {
  title: "全部攻略"
};

export default async function GuidesPage({ searchParams }: GuidesPageProps) {
  const params = await searchParams;
  const [articles, categories] = await Promise.all([getArticles(), getCategories()]);
  const filtered = filterArticles(articles, params.q, params.category);

  return (
    <section className="page-shell">
      <div className="page-heading">
        <h1>攻略图书馆</h1>
        <p>搜索租房、Opal、TFN、OSHC 或按分类进入对应任务。</p>
      </div>

      <SearchBox defaultValue={params.q} />

      <div className="filter-row" aria-label="分类筛选">
        <Link className={!params.category ? "active" : ""} href="/guides">
          全部
        </Link>
        {categories.map((category) => (
          <Link
            key={category.slug}
            className={params.category === category.slug ? "active" : ""}
            href={`/guides?category=${category.slug}`}
          >
            {category.title}
          </Link>
        ))}
      </div>

      {filtered.length ? (
        <div className="article-list">
          {filtered.map((article) => (
            <ArticleCard article={article} key={article.slug} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <h2>没有找到对应攻略</h2>
          <p>换一个关键词试试，比如 “租房”、“Opal” 或 “打工”。</p>
        </div>
      )}
    </section>
  );
}
