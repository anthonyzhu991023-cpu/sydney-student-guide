import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleCard } from "@/components/article-card";
import { PortableBody } from "@/components/portable-body";
import { formatDate } from "@/lib/format";
import { getArticleBySlug, getArticles, getRelatedArticles } from "@/lib/content";

type ArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) return { title: "攻略不存在" };

  return {
    title: article.title,
    description: article.excerpt
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const [article, articles] = await Promise.all([getArticleBySlug(slug), getArticles()]);

  if (!article) notFound();

  const related = getRelatedArticles(article, articles);

  return (
    <article className="article-page">
      <div className="article-hero">
        <Link href={`/categories/${article.category.slug}`} className="category-chip">
          {article.category.title}
        </Link>
        <h1>{article.title}</h1>
        <p>{article.excerpt}</p>
        <div className="article-hero-meta">
          <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
          <span>{article.readTime}</span>
          <span>{article.tags.join(" / ")}</span>
        </div>
      </div>

      <div className="article-content">
        <PortableBody article={article} />
      </div>

      {related.length ? (
        <section className="related-section" aria-labelledby="related-title">
          <h2 id="related-title">继续通关</h2>
          <div className="article-grid">
            {related.map((item) => (
              <ArticleCard article={item} key={item.slug} />
            ))}
          </div>
        </section>
      ) : null}
    </article>
  );
}
