import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { tripPhotos } from "@/lib/data";

export function TripGallery({ slug }: { slug: string }) {
  const photos = tripPhotos[slug];
  if (!photos || photos.length === 0) return null;

  return (
    <section className="py-16">
      <div className="text-center mb-10">
        <Badge className="bg-primary/10 text-primary border-0 mb-4">
          From Our Trips
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          Moments from <span className="text-gradient">the Journey</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-3">
          Real photos taken by our groups in Makkah and Madinah.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {photos.map((photo) => (
          <div
            key={photo.src}
            className="group relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-border/50 hover:ring-primary/40 transition-all duration-300"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <p className="absolute bottom-3 left-3 right-3 text-white text-xs md:text-sm font-medium opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
              {photo.alt}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
