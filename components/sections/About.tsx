import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Users, ChevronRight } from "lucide-react";
import { aboutContent, stats } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="py-24 bg-[#2D2D2D] text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-[1px] bg-primary opacity-40" />
      <div className="absolute bottom-10 right-10 w-20 h-[1px] bg-primary opacity-40" />
      <div className="absolute top-1/4 right-8 flex flex-col gap-2 opacity-30">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="w-0 h-0 border-l-[6px] border-r-[6px] border-b-[10px] border-l-transparent border-r-transparent border-b-primary"
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <Badge className="bg-primary/20 text-primary border-0 mb-4">
              About Us
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              {aboutContent.title}
            </h2>
            
            {aboutContent.paragraphs.slice(0, 2).map((paragraph, i) => (
              <p key={i} className="text-white/70 text-lg mb-6 leading-relaxed">
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
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10 pt-10 border-t border-white/10">
              {stats.map((stat, i) => (
                <div key={i} className="text-center sm:text-left">
                  <div className="text-3xl md:text-4xl font-bold text-gradient">
                    {stat.number}
                  </div>
                  <div className="text-white/60 text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            {/* Main Image/Logo Area */}
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl flex items-center justify-center relative overflow-hidden">
              <Image
                src="/logo-mark.png"
                alt="Al-Haramain Travels"
                width={280}
                height={280}
                className="opacity-90"
              />
              {/* Decorative ring */}
              <div className="absolute inset-8 border border-primary/20 rounded-full" />
              <div className="absolute inset-16 border border-primary/10 rounded-full" />
            </div>

            {/* Feature Cards */}
            <Card className="absolute -bottom-6 -left-6 bg-white text-foreground shadow-2xl">
              <CardContent className="p-5">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">Experienced Shaykhs</div>
                    <div className="text-sm text-muted-foreground">
                      Knowledgeable guides
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="absolute -top-4 -right-4 bg-white text-foreground shadow-2xl">
              <CardContent className="p-5">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">Passion & Care</div>
                    <div className="text-sm text-muted-foreground">
                      Your journey matters
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
