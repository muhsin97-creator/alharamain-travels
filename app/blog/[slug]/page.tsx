import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { HeroHeader } from "@/components/header";
import { Footer } from "@/components/sections/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  ChevronRight, 
  Calendar, 
  Clock, 
  User, 
  ArrowLeft,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";
import { blogPosts } from "@/lib/data";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  
  if (!post) {
    return {
      title: "Post Not Found | Al-Haramain Travels",
    };
  }

  return {
    title: `${post.title} | Al-Haramain Travels Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== slug)
    .slice(0, 3);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-AU", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <HeroHeader />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-[#2D2D2D] text-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-8 left-8 flex gap-2 opacity-40">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="w-0 h-0 border-l-[6px] border-r-[6px] border-b-[10px] border-l-transparent border-r-transparent border-b-primary"
            />
          ))}
        </div>
        <div className="absolute top-16 right-16 w-20 h-[1px] bg-primary opacity-40" />
        <div className="absolute bottom-16 left-16 w-20 h-[1px] bg-primary opacity-40" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-2 bg-primary" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-6">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-white line-clamp-1">{post.title}</span>
          </nav>

          <Badge className="bg-primary/20 text-primary border-0 mb-4">
            {post.category}
          </Badge>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-white/70">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <User className="h-5 w-5 text-white" />
              </div>
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              <span>{formatDate(post.date)}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-foreground prose-p:text-muted-foreground prose-p:leading-relaxed prose-strong:text-foreground prose-ul:text-muted-foreground prose-ol:text-muted-foreground prose-li:marker:text-primary">
            <div 
              dangerouslySetInnerHTML={{ 
                __html: post.content
                  .replace(/## /g, '<h2 class="text-2xl md:text-3xl mt-12 mb-6">')
                  .replace(/### /g, '<h3 class="text-xl md:text-2xl mt-8 mb-4">')
                  .replace(/#### /g, '<h4 class="text-lg md:text-xl mt-6 mb-3">')
                  .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
                  .replace(/\n\n/g, '</p><p class="mb-4">')
                  .replace(/- ([^\n]+)/g, '<li class="mb-2">$1</li>')
                  .replace(/1\. ([^\n]+)/g, '<li class="mb-2">$1</li>')
              }} 
            />
          </article>

          {/* Share Section */}
          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center gap-4">
                <span className="text-muted-foreground font-medium">Share this article:</span>
                <div className="flex gap-2">
                  <a
                    href="#"
                    className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                    aria-label="Share on Facebook"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                    aria-label="Share on Twitter"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                    aria-label="Share on LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
              <Button
                asChild
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                <Link href="/blog">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Blog
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-24 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="bg-primary/10 text-primary border-0 mb-4">
                Keep Reading
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Related <span className="text-gradient">Articles</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link key={relatedPost.slug} href={`/blog/${relatedPost.slug}`} className="block group">
                  <Card className="h-full hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30 overflow-hidden">
                    <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-6 flex items-center justify-center aspect-video">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                        <span className="text-2xl">📖</span>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <Badge className="bg-primary/10 text-primary border-0 mb-3">
                        {relatedPost.category}
                      </Badge>
                      <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-muted-foreground text-sm line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-24 bg-gold-gradient relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border border-white rounded-full" />
          <div className="absolute bottom-10 right-10 w-48 h-48 border border-white rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Let us help you plan your Umrah or Hajj pilgrimage. Contact us today to learn more about our packages.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-white/90 px-10"
            >
              <Link href="/services/umrah">
                View Umrah Trips
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-10"
            >
              <Link href="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

