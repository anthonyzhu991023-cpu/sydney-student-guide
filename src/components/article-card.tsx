import Link from "next/link";
import { Clock } from "lucide-react";
import { formatDate } from "@/lib/format";
import type { Article } from "@/types/content";

export function ArticleCard({ article, featured = false }: { article: Article; featured?: boolean }) {
  return (
    <article className={featured ? "article-card featured" : "article-card"}>
      <div className="article-card-top">
        <Link className="category-chip" href={`/categories/${article.category.slug}`}>
          {article.category.title}
        </Link>
        <span className="read-time">
          <Clock aria-hidden="true" />
          {article.readTime}
        </span>
      </div>
      <h3>
        <Link href={`/guides/${article.slug}`}>{article.title}</Link>
      </h3>
      <p>{article.excerpt}</p>
      <div className="article-meta">
        <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
        <span>{article.tags.slice(0, 2).join(" / ")}</span>
      </div>
    </article>
  );
}
