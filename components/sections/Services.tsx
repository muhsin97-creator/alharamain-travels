import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { CircularImageFrame, GoldAccentBar, GoldLine, TrianglePattern, DiamondPattern } from "@/components/CircularImageFrame";
import { services } from "@/lib/data";

export function Services() {
  return (
    <section id="services" className="py-24 bg-[#FBF7F0] text-foreground relative overflow-hidden">
      {/* Decorative elements matching social media template (dark theme) */}
      <GoldAccentBar position="top" />
      <div className="absolute bottom-0 right-8 w-24 h-16 bg-primary" />
      
      {/* Gold lines */}
      <GoldLine className="absolute top-20 right-8" />
      <GoldLine className="absolute bottom-32 left-16" />
      
      {/* Triangle patterns */}
      <TrianglePattern className="absolute top-1/4 left-8 opacity-40" direction="up" />
      <TrianglePattern className="absolute bottom-1/4 right-8 opacity-40" direction="down" />
      
      {/* Diamond patterns */}
      <DiamondPattern className="absolute top-1/3 right-1/4 opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Content - Left Side */}
          <div>
            <Badge className="bg-primary/20 text-primary border-0 mb-4">
              Our Services
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Complete Travel{" "}
              <span className="text-gradient">Solutions</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              From visa processing to accommodation, we handle every detail of
              your sacred journey. Let us take care of the logistics while you
              focus on your spiritual connection.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-primary hover:bg-primary/90">
                <Link href="/services/umrah">
                  Umrah Services
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                <Link href="/contact">
                  Contact Us
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Circular Image Frame - Right Side */}
          <div className="relative flex justify-center lg:justify-end">
            <CircularImageFrame
              src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80"
              alt="Airplane in clouds"
              size="lg"
              grayscale={true}
            />
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <Card
                key={i}
                className="group bg-white border-border/60 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                    <Icon className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
