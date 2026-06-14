import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleCard } from "@/components/article-card";
import { PixelIcon } from "@/components/icons";
import { getArticles, getCategoryBySlug } from "@/lib/content";

type CategoryPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = await getCategoryBySlug(slug);

  if (!category) return { title: "分类不存在" };

  return {
    title: category.title,
    description: category.description
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const [category, articles] = await Promise.all([getCategoryBySlug(slug), getArticles()]);

  if (!category) notFound();

  const categoryArticles = articles.filter((article) => article.category.slug === category.slug);

  return (
    <section className="page-shell">
      <div className="category-hero">
        <span className="node-icon large">
          <PixelIcon name={category.icon} />
        </span>
        <div>
          <h1>{category.title}</h1>
          <p>{category.description}</p>
        </div>
      </div>

      <div className="article-list">
        {categoryArticles.map((article) => (
          <ArticleCard article={article} key={article.slug} />
        ))}
      </div>
    </section>
  );
}
