import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/ui/reveal";
import { getAllPosts, postImage, formatDate } from "@/lib/blog";

// UK "From the blog": three post cards from content/blog. Server component (reads the filesystem).
export function BlogPreview() {
  const posts = getAllPosts().slice(0, 3);
  if (posts.length === 0) return null;

  return (
    <section id="blog" className="bg-background py-24 md:py-[96px]">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="From the blog"
            title="Guides for your Umrah from Australia"
            intro="Practical, honest writing on preparation, Ramadan and first-time Umrah from a team that guides groups to Makkah and Madinah every year."
          />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.08} className="flex">
              <article className="lift group flex w-full flex-col overflow-hidden rounded-2xl border border-border bg-card hover:border-primary">
                <Link href={`/blog/${post.slug}`} className="relative block aspect-[3/2] overflow-hidden" aria-hidden="true" tabIndex={-1}>
                  <Image
                    src={postImage(post)}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                  />
                  <span className="absolute left-3.5 top-3.5 rounded-full bg-primary px-3 py-1.5 font-display text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-white">
                    {post.category}
                  </span>
                </Link>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-[1.15rem] font-semibold leading-snug text-ink">
                    <Link href={`/blog/${post.slug}`} className="transition-colors hover:text-gold-deep">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mb-5 mt-2 line-clamp-3 text-[0.95rem] leading-relaxed text-muted-foreground">
                    {post.excerpt}
                  </p>
                  <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-1 text-[0.82rem] font-medium text-muted-foreground">
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-10 text-center">
          <Button asChild variant="ghost">
            <Link href="/blog">Read all articles</Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
