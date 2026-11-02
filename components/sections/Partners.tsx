import Image from "next/image";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { partners } from "@/lib/data";

// UK .partners: white band, centred label, auto-scrolling logo marquee.
export function Partners() {
  return (
    <section aria-label="Trusted partners" className="border-y border-border bg-white">
      <div className="container-x py-12">
        <p className="mb-7 text-center text-[0.82rem] uppercase tracking-[0.16em] text-muted-foreground">
          Trusted partners
        </p>
        <div className="relative">
          <InfiniteSlider speedOnHover={14} speed={40} gap={66}>
            {partners.map((partner) => (
              <div key={partner.name} className="flex h-[54px] items-center">
                {partner.logo ? (
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={220}
                    height={80}
                    className="h-[42px] w-auto max-w-[132px] object-contain md:h-[54px] md:max-w-[165px]"
                  />
                ) : (
                  <span className="whitespace-nowrap text-base font-semibold text-muted-foreground">
                    {partner.name}
                  </span>
                )}
              </div>
            ))}
          </InfiniteSlider>
          <ProgressiveBlur className="pointer-events-none absolute left-0 top-0 h-full w-20" direction="left" blurIntensity={1} />
          <ProgressiveBlur className="pointer-events-none absolute right-0 top-0 h-full w-20" direction="right" blurIntensity={1} />
        </div>
      </div>
    </section>
  );
}
