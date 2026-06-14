import type { PortableTextBlock } from "sanity";

export type Category = {
  _id: string;
  title: string;
  slug: string;
  icon: string;
  description: string;
  order: number;
};

export type Article = {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: Category;
  tags: string[];
  publishedAt: string;
  readTime: string;
  featured?: boolean;
  body?: PortableTextBlock[];
  fallbackBody?: string[];
};
