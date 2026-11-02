import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HeroHeader } from "@/components/header";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/ui/reveal";
import { CTABand } from "@/components/sections/CTABand";
import { Footer } from "@/components/sections/Footer";
import { getAllPosts, formatDate, postImage, type BlogPost } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Umrah Guides & Travel Tips",
  description:
    "Umrah preparation guides, the virtues of Umrah in Ramadan and first-timer travel tips from the Al-Haramain Travels team, written for pilgrims travelling from Australia.",
  alternates: { canonical: "/blog" },
};

// UK .post-meta: date, dot, read time
function PostMeta({ post, className }: { post: BlogPost; className?: string }) {
  return (
    <div
      className={`flex flex-wrap items-center gap-x-[18px] gap-y-2.5 text-[0.82rem] font-medium text-muted-foreground ${className ?? ""}`}
    >
      <time dateTime={post.date}>{formatDate(post.date)}</time>
      <span aria-hidden="true" className="size-1 rounded-full bg-current opacity-50" />
      <span>{post.readTime}</span>
    </div>
  );
}

// UK .pc-tag: gold uppercase category pill over the photo
function CategoryTag({ category }: { category: string }) {
  return (
    <span className="absolute left-3.5 top-3.5 rounded-full bg-primary px-3 py-1.5 font-display text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-white">
      {category}
    </span>
  );
}

// UK .post-card: white, 3:2 photo with gold tag, title, excerpt, meta row
function PostCard({ post, sizes }: { post: BlogPost; sizes: string }) {
  const href = `/blog/${post.slug}`;
  return (
    <article className="lift group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card hover:border-primary">
      <Link href={href} className="relative block aspect-[3/2] overflow-hidden" aria-hidden="true" tabIndex={-1}>
        <Image
          src={postImage(post)}
          alt={post.title}
          fill
          sizes={sizes}
          className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
        />
        <CategoryTag category={post.category} />
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
        <PostMeta post={post} className="mt-auto" />
      </div>
    </article>
  );
}

export default function BlogPage() {
  const posts = getAllPosts();
  const [lead, ...rest] = posts;

  return (
    <div className="min-h-screen bg-background">
      <HeroHeader />

      <PageHeader
        eyebrow="From the blog"
        title={
          <>
            Guides for a <span className="text-primary">better Umrah</span>
          </>
        }
        description="Practical preparation, spiritual reminders and travel tips from our team, written for pilgrims travelling from Australia."
        image="/gallery/nabawi-canopy-detail.jpg"
        imageAlt="The great canopies of Masjid an-Nabawi"
        breadcrumbs={[
          { href: "/", label: "Home" },
          { href: "/blog", label: "Blog" },
        ]}
      />

      <section className="bg-background py-24 md:py-[96px]">
        <div className="container-x">
          <SectionHeading
            eyebrow="Latest articles"
            title="Read before you travel"
            intro="Everything we wish every pilgrim knew before their first Umrah, from visas and packing to the rites themselves."
            align="center"
          />

          {lead && (
            <Reveal>
              <article className="lift group grid overflow-hidden rounded-2xl border border-border bg-card hover:border-primary lg:grid-cols-2">
                <Link
                  href={`/blog/${lead.slug}`}
                  className="relative block aspect-[3/2] overflow-hidden lg:aspect-auto lg:min-h-[26rem]"
                  aria-hidden="true"
                  tabIndex={-1}
                >
                  <Image
                    src={postImage(lead)}
                    alt={lead.title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                  />
                  <CategoryTag category={lead.category} />
                </Link>
                <div className="flex flex-col justify-center p-8 md:p-12">
                  <p className="eyebrow">Latest guide</p>
                  <h2 className="mt-3.5 font-display text-2xl font-semibold leading-[1.15] text-ink md:text-3xl lg:text-[2.2rem]">
                    <Link href={`/blog/${lead.slug}`} className="transition-colors hover:text-gold-deep">
                      {lead.title}
                    </Link>
                  </h2>
                  <p className="mt-4 max-w-[60ch] text-base leading-relaxed text-muted-foreground md:text-[1.06rem]">
                    {lead.excerpt}
                  </p>
                  <PostMeta post={lead} className="mt-6" />
                  <Link
                    href={`/blog/${lead.slug}`}
                    className="mt-8 inline-flex items-center gap-1.5 font-display text-[0.95rem] font-semibold text-gold-deep underline-offset-4 transition-colors hover:text-primary hover:underline"
                  >
                    Read the guide
                  </Link>
                </div>
              </article>
            </Reveal>
          )}

          {rest.length > 0 && (
            <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {rest.map((post, i) => (
                <Reveal key={post.slug} delay={i * 0.06} className="h-full">
                  <PostCard
                    post={post}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </Reveal>
              ))}
            </div>
          )}

          {posts.length === 0 && (
            <p className="mx-auto max-w-[65ch] text-center text-base leading-relaxed text-muted-foreground md:text-[1.06rem]">
              Our first guides are on the way. In the meantime, our team is happy to answer any
              question about preparing for Umrah.
            </p>
          )}
        </div>
      </section>

      <CTABand />
      <Footer />
    </div>
  );
}
