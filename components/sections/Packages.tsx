import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Clock, ChevronRight } from "lucide-react";
import { packages } from "@/lib/data";

export function Packages() {
  return (
    <section id="packages" className="py-24 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="bg-primary/10 text-primary border-0 mb-4">
            Popular Packages
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Umrah <span className="text-gradient">Packages</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose from our carefully curated packages designed for every
            budget
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, i) => (
            <Card
              key={i}
              className={`relative overflow-hidden transition-all duration-300 hover:shadow-2xl ${
                pkg.popular
                  ? "border-primary shadow-lg scale-105"
                  : "border-border/50 hover:border-primary/30"
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-4 right-4">
                  <Badge className="bg-primary text-white">Most Popular</Badge>
                </div>
              )}
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {pkg.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-bold text-gradient">
                    {pkg.price}
                  </span>
                  <span className="text-muted-foreground">/person</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground mb-6">
                  <Clock className="h-4 w-4" />
                  <span>{pkg.duration}</span>
                </div>
                <Separator className="mb-6" />
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                        <ChevronRight className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${
                    pkg.popular
                      ? "bg-primary hover:bg-gold-dark"
                      : "bg-secondary hover:bg-secondary/90"
                  }`}
                >
                  Select Package
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

