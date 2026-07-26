import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { CircularImageFrame, GoldAccentBar, GoldLine, TrianglePattern, DiamondPattern } from "@/components/CircularImageFrame";
import { services } from "@/lib/data";

// Bento layout: which services carry a real photo, and how each tile spans the grid
const tileConfig: Record<
  string,
  { image?: string; alt?: string; span: string }
> = {
  "Group Tours": {
    image: "/trips/ytb-nabawi-umbrellas.jpg",
    alt: "Our group beneath the canopies of Masjid an-Nabawi",
    span: "md:col-span-2 md:row-span-2",
  },
  "Premium Hotels": {
    image: "/trips/btb-clock-tower-day.jpg",
    alt: "The Abraj Al-Bait Clock Tower above Masjid al-Haram",
    span: "md:row-span-2",
  },
  "Spiritual Guidance": {
    image: "/trips/ytb-green-dome.jpg",
    alt: "The Green Dome of Masjid an-Nabawi",
    span: "md:col-span-2",
  },
  "Flight Bookings": { span: "" },
  "Visa Services": { span: "" },
  "Personalised Care": { span: "md:col-span-2" },
};

// Render order tuned for the bento arrangement
const tileOrder = [
  "Group Tours",
  "Premium Hotels",
  "Flight Bookings",
  "Visa Services",
  "Spiritual Guidance",
  "Personalised Care",
];

export function Services() {
  const ordered = tileOrder
    .map((title) => services.find((s) => s.title === title))
    .filter((s): s is (typeof services)[number] => Boolean(s));

  return (
    <section id="services" className="py-24 bg-[#FBF7F0] text-foreground relative overflow-hidden">
      {/* Decorative elements */}
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
              src="/trips/btb-haram-dusk.jpg"
              alt="The minarets of Masjid al-Haram at dusk"
              size="lg"
              grayscale={true}
            />
          </div>
        </div>

        {/* Bento Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-flow-dense auto-rows-[190px] md:auto-rows-[200px] gap-5">
          {ordered.map((service) => {
            const Icon = service.icon;
            const tile = tileConfig[service.title] ?? { span: "" };

            if (tile.image) {
              // Photo tile: real trip photo with overlay text
              return (
                <div
                  key={service.title}
                  className={`group relative overflow-hidden rounded-2xl ring-1 ring-border/50 hover:ring-primary/50 transition-all duration-300 ${tile.span}`}
                >
                  <Image
                    src={tile.image}
                    alt={tile.alt ?? service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="w-11 h-11 bg-white/15 backdrop-blur-sm rounded-xl flex items-center justify-center mb-3 ring-1 ring-white/20">
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-1">
                      {service.title}
                    </h3>
                    <p className="text-white/85 text-sm leading-relaxed max-w-md">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            }

            // Text tile
            return (
              <Card
                key={service.title}
                className={`group bg-white border-border/60 shadow-sm hover:shadow-md transition-all duration-300 rounded-2xl ${tile.span}`}
              >
                <CardContent className="p-6 h-full flex flex-col justify-center">
                  <div className="w-12 h-12 bg-primary/15 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
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
