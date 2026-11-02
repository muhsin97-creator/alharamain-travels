import Image from "next/image";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/ui/reveal";
import { ScrollStrip } from "@/components/ui/scroll-strip";
import { galleryImages } from "@/lib/data";
import { cn } from "@/lib/utils";

// Alternate tile shapes so the strip has rhythm instead of a row of identical rectangles
const shapes = ["aspect-[3/4]", "aspect-[4/3]", "aspect-square", "aspect-[4/5]"];

export function Gallery() {
  return (
    <section className="bg-background py-24 md:py-[96px]">
      <Reveal className="container-x">
        <SectionHeading
          align="center"
          eyebrow="Gallery"
          title="Glimpses of the Haramain"
          intro="Makkah and Madinah in the quiet moments between prayers, photographed on our trips."
          className="mb-10"
        />
      </Reveal>

      <Reveal delay={0.1}>
        <ScrollStrip label="Photo gallery">
          {galleryImages.map((image, i) => (
            <figure
              key={image.src}
              className={cn(
                "group relative h-[20rem] shrink-0 snap-start overflow-hidden rounded-2xl border border-border bg-card md:h-[24rem]",
                shapes[i % shapes.length]
              )}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 70vw, 30vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
              />
              <figcaption className="scrim-b absolute inset-x-0 bottom-0 p-5 pt-16 text-sm font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {image.alt}
              </figcaption>
            </figure>
          ))}
        </ScrollStrip>
      </Reveal>
    </section>
  );
}
