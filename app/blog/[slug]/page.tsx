import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { CalendarDays, ChevronRight, Clock, UserRound } from "lucide-react";
import { HeroHeader } from "@/components/header";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/ui/reveal";
import { Button, buttonVariants } from "@/components/ui/button";
import { CTABand } from "@/components/sections/CTABand";
import { Footer } from "@/components/sections/Footer";
import {
  SITE_URL,
  formatDate,
  getAllPosts,
  getPostBySlug,
  postImage,
  postUrl,
  prepareMarkdown,
  type BlogPost,
} from "@/lib/blog";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: "Post not found" };
  }

  const title = post.metaTitle ?? post.title;
  const description = post.metaDescription ?? post.excerpt;

  return {
    title,
    description,
    keywords: post.keywords,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title,
      description,
      url: `/blog/${post.slug}`,
      images: [postImage(post)],
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

function jsonLd(data: object) {
  return { __html: JSON.stringify(data).replace(/</g, "\\u003c") };
}

// UK .post-card used for "Keep reading"
function PostCard({ post }: { post: BlogPost }) {
  const href = `/blog/${post.slug}`;
  return (
    <article className="lift group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card hover:border-primary">
      <Link href={href} className="relative block aspect-[3/2] overflow-hidden" aria-hidden="true" tabIndex={-1}>
        <Image
          src={postImage(post)}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
        />
        <span className="absolute left-3.5 top-3.5 rounded-full bg-primary px-3 py-1.5 font-display text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-white">
          {post.category}
        </span>
      </Link>
      <div className="flex flex-1 flex-col p-6 pb-[26px]">
        <h3 className="font-display text-[1.15rem] font-semibold leading-snug text-ink">
          <Link href={href} className="transition-colors hover:text-gold-deep">
            {post.title}
          </Link>
        </h3>
        <p className="mb-[18px] mt-2 line-clamp-3 text-[0.95rem] leading-relaxed text-muted-foreground">
          {post.excerpt}
        </p>
        <div className="mt-auto flex flex-wrap items-center gap-x-[18px] gap-y-2.5 text-[0.82rem] font-medium text-muted-foreground">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span aria-hidden="true" className="size-1 rounded-full bg-current opacity-50" />
          <span>{post.readTime}</span>
        </div>
      </div>
    </article>
  );
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const image = postImage(post);
  const url = postUrl(post.slug);
  const others = getAllPosts()
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(post.title);

  const shareLinks = [
    { label: "Facebook", href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}` },
    { label: "X", href: `https://x.com/intent/post?url=${encodedUrl}&text=${encodedTitle}` },
    { label: "WhatsApp", href: `https://wa.me/?text=${encodeURIComponent(`${post.title} ${url}`)}` },
  ];

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription ?? post.excerpt,
    image: [`${SITE_URL}${image}`],
    datePublished: post.date,
    dateModified: post.date,
    articleSection: post.category,
    ...(post.keywords && post.keywords.length > 0 ? { keywords: post.keywords.join(", ") } : {}),
    author: { "@type": "Organization", name: post.author, url: SITE_URL },
    publisher: {
      "@type": "Organization",
      name: "Al-Haramain Travels",
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/logo-white.png` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: url },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(articleLd)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(breadcrumbLd)} />

      <HeroHeader />

      {/* Hero: full-bleed photo, dark scrim, white copy */}
      <section className="relative isolate overflow-hidden bg-charcoal text-white">
        <div className="absolute inset-0 -z-10">
          <Image src={image} alt="" fill priority sizes="100vw" className="object-cover" />
          <div className="scrim-hero absolute inset-0" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#1c1c1c]/70 to-transparent" />
        </div>

        <div className="container-x flex min-h-[30rem] flex-col justify-end pb-14 pt-40 md:min-h-[36rem] md:pb-20">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-white/70">
              <li className="flex items-center gap-1.5">
                <Link href="/" className="transition-colors hover:text-primary">
                  Home
                </Link>
                <ChevronRight className="size-3.5 opacity-60" />
              </li>
              <li className="flex items-center gap-1.5">
                <Link href="/blog" className="transition-colors hover:text-primary">
                  Blog
                </Link>
                <ChevronRight className="size-3.5 opacity-60" />
              </li>
              <li className="max-w-[18rem] truncate text-white sm:max-w-none">{post.title}</li>
            </ol>
          </nav>

          <p className="eyebrow text-primary">{post.category}</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-extrabold leading-[1.1] text-white [text-shadow:0_2px_30px_rgba(0,0,0,0.25)] md:text-5xl lg:text-6xl">
            {post.title}
          </h1>

          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/85 md:text-base">
            <span className="flex items-center gap-2 border-l border-white/25 pl-4">
              <UserRound className="size-4 text-primary" />
              {post.author}
            </span>
            <span className="flex items-center gap-2 border-l border-white/25 pl-4">
              <CalendarDays className="size-4 text-primary" />
              <time dateTime={post.date}>{formatDate(post.date)}</time>
            </span>
            <span className="flex items-center gap-2 border-l border-white/25 pl-4">
              <Clock className="size-4 text-primary" />
              {post.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* Article */}
      <section className="bg-background py-24 md:py-[96px]">
        <div className="container-x">
          <Reveal className="mx-auto max-w-3xl">
            <article className="prose-ah max-w-3xl">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{prepareMarkdown(post.content)}</ReactMarkdown>
            </article>

            <div className="mt-14 flex flex-col gap-5 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-sm font-medium text-muted-foreground">Share</span>
                {shareLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Share on ${link.label}`}
                    className={buttonVariants({ variant: "ghost", size: "sm" })}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <Button asChild variant="ghost" className="sm:shrink-0">
                <Link href="/blog">Read all articles</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Keep reading */}
      {others.length > 0 && (
        <section className="bg-surface py-24 md:py-[96px]">
          <div className="container-x">
            <SectionHeading
              eyebrow="More guides"
              title="Keep reading"
              intro="More preparation guides and reminders from our team."
              align="center"
            />
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {others.map((other, i) => (
                <Reveal key={other.slug} delay={i * 0.06} className="h-full">
                  <PostCard post={other} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABand />
      <Footer />
    </div>
  );
}
