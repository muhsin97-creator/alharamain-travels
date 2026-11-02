// Blog posts are Markdown files in content/blog/<slug>.md with YAML frontmatter.
// This module reads the filesystem, so import it only from Server Components,
// route handlers, sitemap.ts and generateStaticParams (never from a 'use client' file).
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string; // ISO yyyy-mm-dd
  author: string;
  category: string;
  readTime: string;
  image?: string;
  /** Optional SEO overrides */
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string[];
  draft?: boolean;
}

export const SITE_URL = "https://alharamaintravels.com.au";

const POSTS_DIR = path.join(process.cwd(), "content", "blog");

// Posts without an image get a real photo chosen by category.
const categoryImages: Record<string, string> = {
  "Umrah Guide": "/gallery/kaaba.jpg",
  "Spiritual Guidance": "/gallery/masjid-nabawi-green-dome.jpg",
  "Travel Tips": "/trips/ytb-jabal-nour-view.jpg",
  Ramadan: "/gallery/clock-tower-dawn.jpg",
  Madinah: "/trips/ytb-green-dome.jpg",
  Makkah: "/gallery/masjid-al-haram-aerial.jpg",
};
const fallbackImage = "/gallery/haram-colonnade.jpg";

function estimateReadTime(content: string): string {
  const words = content.trim().split(/\s+/).length;
  return `${Math.max(1, Math.round(words / 220))} min read`;
}

function parsePost(file: string): BlogPost | null {
  const slug = file.replace(/\.mdx?$/, "");
  const raw = fs.readFileSync(path.join(POSTS_DIR, file), "utf8");
  const { data, content } = matter(raw);
  if (!data.title || !data.date) return null;
  const date = data.date instanceof Date ? data.date.toISOString().slice(0, 10) : String(data.date);
  return {
    slug,
    title: String(data.title),
    excerpt: String(data.excerpt ?? ""),
    content,
    date,
    author: String(data.author ?? "Al-Haramain Travels Team"),
    category: String(data.category ?? "Umrah Guide"),
    readTime: String(data.readTime ?? estimateReadTime(content)),
    image: data.image ? String(data.image) : undefined,
    metaTitle: data.metaTitle ? String(data.metaTitle) : undefined,
    metaDescription: data.metaDescription ? String(data.metaDescription) : undefined,
    keywords: Array.isArray(data.keywords) ? data.keywords.map(String) : undefined,
    draft: Boolean(data.draft),
  };
}

/** All published posts, newest first. */
export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => /\.mdx?$/.test(f) && !f.startsWith("_") && f.toLowerCase() !== "readme.md")
    .map(parsePost)
    .filter((p): p is BlogPost => Boolean(p) && !p!.draft)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return getAllPosts().find((p) => p.slug === slug);
}

/** Photo for a post: its own image if set, otherwise one chosen by category. */
export function postImage(post: Pick<BlogPost, "image" | "category">): string {
  return post.image ?? categoryImages[post.category] ?? fallbackImage;
}

/** Canonical URL for a post. */
export function postUrl(slug: string): string {
  return `${SITE_URL}/blog/${slug}`;
}

/** "15 December 2024" in Australian English, independent of the server timezone. */
export function formatDate(date: string): string {
  const [year, month, day] = date.split("-").map(Number);
  const d = new Date(Date.UTC(year, (month || 1) - 1, day || 1));
  return d.toLocaleDateString("en-AU", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

/** Newest first. ISO dates sort correctly as strings. */
export function sortPostsByDate(posts: BlogPost[]): BlogPost[] {
  return [...posts].sort((a, b) => b.date.localeCompare(a.date));
}

/** The design system allows no em or en dashes in visible copy. */
export function plainDashes(text: string): string {
  return text.replace(/\s+[–—]\s+/g, ", ").replace(/[–—]/g, "-");
}

/**
 * Light clean-up before markdown rendering: trims padding, removes dashes,
 * and gives a bold-only line its own paragraph so it reads as a sub-heading.
 */
export function prepareMarkdown(content: string): string {
  const text = plainDashes(content.trim());
  return text.replace(/^(\*\*[^*\n]+\*\*)\n(?!\n)/gm, "$1\n\n");
}
