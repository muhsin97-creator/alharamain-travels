import Image from "next/image";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/ui/reveal";
import { tripPhotos } from "@/lib/data";
import { cn } from "@/lib/utils";

interface TripGalleryProps {
  slug: string;
  className?: string;
}

// Real photos from past trips. The first tile anchors the grid at 2x2; the rest fill around it.
export function TripGallery({ slug, className }: TripGalleryProps) {
  const photos = tripPhotos[slug];
  if (!photos || photos.length === 0) return null;

  return (
    <div className={className}>
      <SectionHeading
        eyebrow="Gallery"
        title="Moments from the journey"
        intro="Real photos taken by our groups in Makkah and Madinah."
        className="mb-8 [&_h2]:text-2xl md:[&_h2]:text-[1.9rem]"
      />

      <Reveal className="grid auto-rows-[160px] grid-cols-2 gap-3 md:auto-rows-[200px] md:grid-cols-4 md:gap-4">
        {photos.map((photo, i) => {
          const lead = i === 0;
          return (
            <figure
              key={photo.src}
              className={cn(
                "group relative m-0 overflow-hidden rounded-[18px] border border-border bg-surface transition-[border-color,box-shadow] duration-300 hover:border-primary hover:shadow-lift",
                lead && "col-span-2 row-span-2"
              )}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes={lead ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 50vw, 25vw"}
                className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
              />
              <div className="scrim-b absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <figcaption className="absolute inset-x-0 bottom-0 translate-y-2 p-4 text-xs font-medium text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 md:text-sm">
                {photo.alt}
              </figcaption>
            </figure>
          );
        })}
      </Reveal>
    </div>
  );
}
