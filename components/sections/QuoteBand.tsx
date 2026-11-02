import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";

// UK .quote: dark photo band with a verse from the Qur'an.
export function QuoteBand() {
  return (
    <section className="relative isolate overflow-hidden bg-charcoal text-center text-white">
      <Image
        src="/gallery/makkah-sunset.jpg"
        alt=""
        fill
        sizes="100vw"
        className="-z-10 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-[#1c1c1c]/80" />
      <Reveal className="container-x py-[110px]">
        <blockquote className="mx-auto max-w-[860px] font-display text-[clamp(1.5rem,3.2vw,2.4rem)] font-semibold leading-[1.3]">
          &ldquo;And proclaim to the people the <span className="text-primary">Hajj</span>; they will
          come to you on foot and on every lean camel; they will come from every distant pass.&rdquo;
        </blockquote>
        <cite className="mt-5 block text-[0.95rem] not-italic tracking-[0.04em] text-white/80">
          Surah Al-Hajj, 22:27
        </cite>
      </Reveal>
    </section>
  );
}
