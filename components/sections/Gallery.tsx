import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { GoldAccentBar, GoldLine } from "@/components/CircularImageFrame";
import { galleryImages } from "@/lib/data";

// Bento layout: a few tiles are deliberately larger for visual rhythm
const tileSpans: Record<number, string> = {
  0: "md:col-span-2 md:row-span-2",
  3: "md:row-span-2",
  4: "md:col-span-2",
  8: "md:col-span-2",
};

export function Gallery() {
  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Decorative brand elements */}
      <GoldAccentBar position="top" />
      <GoldLine className="absolute top-24 right-12" />
      <GoldLine className="absolute bottom-24 left-16" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <Badge className="bg-primary/10 text-primary border-0 mb-4">
            Gallery
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Glimpses of <span className="text-gradient">the Haramain</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            A glimpse of the blessed cities that await you. Makkah and Madinah,
            captured in the quiet moments between prayers.
          </p>
        </div>

        {/* Bento image grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 grid-flow-dense auto-rows-[160px] md:auto-rows-[220px] gap-4">
          {galleryImages.map((image, i) => (
            <div
              key={image.src}
              className={`group relative overflow-hidden rounded-2xl ring-1 ring-border/50 hover:ring-primary/40 transition-all duration-300 ${
                tileSpans[i] ?? ""
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Caption overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <p className="absolute bottom-4 left-4 right-4 text-white text-sm font-medium opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                {image.alt}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
