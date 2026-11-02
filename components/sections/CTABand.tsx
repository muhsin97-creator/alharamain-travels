import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { contactInfo } from "@/lib/data";

interface CTABandProps {
  title?: string;
  description?: string;
  image?: string;
}

// Closing charcoal photo band for inner pages. One intent: enquire.
export function CTABand({
  title = "Start your journey today",
  description = "Leave your details and our team will be in touch with the right trip, dates and pricing for you. No obligation, just a calm, helpful conversation when you are ready.",
  image = "/gallery/makkah-sunset.jpg",
}: CTABandProps) {
  return (
    <section className="relative isolate overflow-hidden bg-charcoal text-white">
      <Image src={image} alt="" fill sizes="100vw" className="-z-10 object-cover" />
      <div className="absolute inset-0 -z-10 bg-[#1c1c1c]/80" />

      <Reveal className="container-x py-24 text-center md:py-28">
        <p className="eyebrow text-primary">Book your trip</p>
        <h2 className="mx-auto mt-3.5 max-w-[760px] font-display text-[clamp(2rem,3.8vw,2.9rem)] font-bold leading-[1.12] text-white">
          {title}
        </h2>
        <p className="mx-auto mt-5 max-w-[560px] text-[1.05rem] leading-relaxed text-white/85">
          {description}
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3.5 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/contact">Enquire now</Link>
          </Button>
          <Button asChild size="lg" variant="outline-light">
            <a href={contactInfo.socials.whatsapp} target="_blank" rel="noopener noreferrer">
              WhatsApp us
            </a>
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
