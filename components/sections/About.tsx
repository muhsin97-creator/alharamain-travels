import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Users, ChevronRight } from "lucide-react";
import { CircularImageFrame, GoldAccentBar, GoldLine, TrianglePattern, PlayIndicators } from "@/components/CircularImageFrame";
import { aboutContent, stats } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="py-24 bg-white text-foreground relative overflow-hidden">
      {/* Decorative elements matching social media template */}
      <GoldAccentBar position="top" />
      <div className="absolute bottom-0 right-8 w-24 h-16 bg-primary/20" />
      
      {/* Gold lines */}
      <GoldLine className="absolute top-20 left-8" />
      <GoldLine className="absolute bottom-32 right-16" />
      
      {/* Triangle patterns */}
      <TrianglePattern className="absolute bottom-1/4 left-8 opacity-40" direction="up" />
      
      {/* Play indicators */}
      <PlayIndicators className="absolute top-1/3 right-12 opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Circular Image Frame - Left Side */}
          <div className="relative flex justify-center lg:justify-start order-2 lg:order-1">
            <CircularImageFrame
              src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=800&q=80"
              alt="Pilgrims at the Kaaba"
              size="xl"
              grayscale={true}
            />
            
            {/* Decorative vertical line */}
            <div className="absolute top-1/4 -right-4 lg:right-0 w-[1px] h-24 bg-primary/40 hidden lg:block" />
          </div>

          {/* Content - Right Side */}
          <div className="order-1 lg:order-2">
            <Badge className="bg-primary/10 text-primary border-0 mb-4">
              About Us
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {aboutContent.title.split(" ")[0]}{" "}
              <span className="text-gradient">{aboutContent.title.split(" ").slice(1).join(" ")}</span>
            </h2>
            
            {aboutContent.paragraphs.slice(0, 2).map((paragraph, i) => (
              <p key={i} className="text-muted-foreground text-lg mb-6 leading-relaxed">
                {paragraph}
              </p>
            ))}

            <Button asChild variant="outline" className="mt-4 border-primary text-primary hover:bg-primary hover:text-white">
              <Link href="/about">
                Learn More About Us
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10 pt-10 border-t border-border">
              {stats.map((stat, i) => (
                <div key={i} className="text-center sm:text-left">
                  <div className="text-3xl md:text-4xl font-bold text-gradient">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
