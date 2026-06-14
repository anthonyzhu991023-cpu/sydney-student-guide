import { fallbackArticles, fallbackCategories } from "@/lib/fallback-content";
import { sanityClient } from "@/lib/sanity";
import type { Article, Category } from "@/types/content";

const categoryProjection = `{
  _id,
  title,
  "slug": slug.current,
  "icon": coalesce(icon, pixelIcon, "scroll"),
  description,
  "order": coalesce(order, 0)
}`;

const articleProjection = `{
  _id,
  title,
  "slug": slug.current,
  excerpt,
  "category": category->${categoryProjection},
  "tags": coalesce(tags, []),
  publishedAt,
  "readTime": coalesce(readTime, "6 分钟"),
  "featured": coalesce(featured, false),
  body
}`;

export async function getCategories(): Promise<Category[]> {
  if (!sanityClient) return fallbackCategories;

  try {
    const categories = await sanityClient.fetch<Category[]>(
      `*[_type == "category"] | order(order asc, title asc) ${categoryProjection}`,
      {},
      { next: { revalidate: 120 } }
    );
    return categories.length ? categories : fallbackCategories;
  } catch {
    return fallbackCategories;
  }
}

export async function getArticles(): Promise<Article[]> {
  if (!sanityClient) return fallbackArticles;

  try {
    const articles = await sanityClient.fetch<Article[]>(
      `*[_type == "article"] | order(publishedAt desc) ${articleProjection}`,
      {},
      { next: { revalidate: 120 } }
    );
    return articles.length ? articles : fallbackArticles;
  } catch {
    return fallbackArticles;
  }
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const articles = await getArticles();
  return articles.find((article) => article.slug === slug) ?? null;
}

export async function getCategoryBySlug(slug: string): Promise<Category | null> {
  const categories = await getCategories();
  return categories.find((category) => category.slug === slug) ?? null;
}

export function filterArticles(articles: Article[], query?: string, categorySlug?: string) {
  const normalized = query?.trim().toLowerCase();

  return articles.filter((article) => {
    const categoryMatch = categorySlug ? article.category.slug === categorySlug : true;
    if (!normalized) return categoryMatch;

    const haystack = [
      article.title,
      article.excerpt,
      article.category.title,
      ...article.tags
    ]
      .join(" ")
      .toLowerCase();

    return categoryMatch && haystack.includes(normalized);
  });
}

export function getRelatedArticles(article: Article, articles: Article[]) {
  return articles
    .filter((candidate) => candidate.slug !== article.slug)
    .filter(
      (candidate) =>
        candidate.category.slug === article.category.slug ||
        candidate.tags.some((tag) => article.tags.includes(tag))
    )
    .slice(0, 3);
}
