import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Quote, ChevronRight } from "lucide-react";
import { CircularImageFrame, GoldAccentBar, GoldLine, TrianglePattern, PlayIndicators } from "@/components/CircularImageFrame";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative elements matching social media template (light theme) */}
      <GoldAccentBar position="top" />
      <div className="absolute bottom-0 right-8 w-24 h-16 bg-primary/20" />
      
      {/* Gold lines */}
      <GoldLine className="absolute top-24 left-12" />
      <GoldLine className="absolute bottom-24 right-20" />
      
      {/* Triangle patterns */}
      <TrianglePattern className="absolute bottom-1/3 right-8 opacity-40" direction="down" />
      
      {/* Play indicators */}
      <PlayIndicators className="absolute top-1/2 left-8 opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 items-center mb-16">
          {/* Circular Image - Takes 2 columns */}
          <div className="lg:col-span-2 relative flex justify-center">
            <CircularImageFrame
              src="/trips/ytb-nabawi-umbrellas.jpg"
              alt="Our pilgrims beneath the canopies of Masjid an-Nabawi"
              size="lg"
              grayscale={true}
            />
            
            {/* Vertical decorative line */}
            <div className="absolute top-0 right-0 w-[1px] h-16 bg-primary/40 hidden lg:block" />
          </div>

          {/* Content - Takes 3 columns */}
          <div className="lg:col-span-3">
            <Badge className="bg-primary/10 text-primary border-0 mb-4">
              Testimonials
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              What Our <span className="text-gradient">Pilgrims Say</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl leading-relaxed">
              Hear from our community of pilgrims who have experienced the journey of a lifetime with Al Haramain Travels.
            </p>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.slice(0, 3).map((testimonial, i) => (
            <Card 
              key={i} 
              className="border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300 group"
            >
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                  <Quote className="h-5 w-5 text-primary group-hover:text-white transition-colors" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      className="h-4 w-4 fill-primary text-primary"
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-foreground/80 mb-6 leading-relaxed">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
            <Link href="/services/umrah">
              Start Your Journey Today
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
