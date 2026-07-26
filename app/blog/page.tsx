import Link from "next/link";
import { Metadata } from "next";
import { HeroHeader } from "@/components/header";
import { PageHeader } from "@/components/PageHeader";
import { Footer } from "@/components/sections/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronRight, Calendar, Clock, User } from "lucide-react";
import { blogPosts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Blog | Al-Haramain Travels",
  description: "Read our latest articles about Umrah and Islamic travel. Get tips, guides, and spiritual insights for your pilgrimage journey.",
};

export default function BlogPage() {
  // Sort posts by date (newest first)
  const sortedPosts = [...blogPosts].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

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
      
      <PageHeader
        badge="Our Blog"
        title="Insights &"
        titleHighlight="Guidance"
        description="Discover helpful guides, tips, and spiritual insights for your pilgrimage journey"
      />

      {/* Blog Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Post */}
          {sortedPosts.length > 0 && (
            <div className="mb-16">
              <Link href={`/blog/${sortedPosts[0].slug}`} className="block group">
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="bg-[#FBF7F0] p-8 md:p-12 flex flex-col justify-center">
                      <Badge className="bg-primary/20 text-primary border-0 w-fit mb-4">
                        Featured
                      </Badge>
                      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                        {sortedPosts[0].title}
                      </h2>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {sortedPosts[0].excerpt}
                      </p>
                      <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-sm">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="h-4 w-4" />
                          <span>{formatDate(sortedPosts[0].date)}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Clock className="h-4 w-4" />
                          <span>{sortedPosts[0].readTime}</span>
                        </div>
                        <Badge className="bg-primary/10 text-primary border-0">
                          {sortedPosts[0].category}
                        </Badge>
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-primary/20 to-primary/5 aspect-square md:aspect-auto flex items-center justify-center">
                      <div className="text-center p-8">
                        <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-4xl">📖</span>
                        </div>
                        <span className="text-muted-foreground font-medium">Read Article</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            </div>
          )}

          {/* Other Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedPosts.slice(1).map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30 overflow-hidden">
                  {/* Card Header */}
                  <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-8 flex items-center justify-center aspect-video">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                      <span className="text-3xl">📖</span>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <Badge className="bg-primary/10 text-primary border-0 mb-3">
                      {post.category}
                    </Badge>
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-muted-foreground text-sm">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="h-4 w-4" />
                        <span>{formatDate(post.date)}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* No Posts Message */}
          {sortedPosts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg mb-6">
                No blog posts available yet. Check back soon!
              </p>
              <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                <Link href="/contact">
                  Contact Us
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#FBF7F0] text-foreground relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-[1px] bg-primary opacity-40" />
        <div className="absolute bottom-10 right-10 w-20 h-[1px] bg-primary opacity-40" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="bg-primary/20 text-primary border-0 mb-4">
            Stay Updated
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Subscribe to Our <span className="text-gradient">Newsletter</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Get the latest updates on Umrah trips, travel tips, and exclusive offers delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-white border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
            <Button type="submit" className="bg-primary hover:bg-primary/90">
              Subscribe
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}

