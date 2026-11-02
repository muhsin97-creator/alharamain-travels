import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { aboutContent, journeySteps } from "@/lib/data";

// UK .journey: tilted photo collage beside the about copy and four numbered steps.
export function About() {
  return (
    <section id="about" className="bg-background py-24 md:py-[96px]">
      <div className="container-x grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        <Reveal className="group relative mx-auto aspect-square w-full max-w-[560px]">
          <Image
            src="/trips/ytb-kaaba-pilgrims.jpg"
            alt="Our brothers before the Kaaba, Masjid al-Haram"
            width={1200}
            height={800}
            className="absolute left-[6%] top-0 z-[1] aspect-[3/2] w-[88%] -rotate-3 rounded-[10px] border-[6px] border-white object-cover shadow-[0_16px_40px_rgba(40,40,40,0.24)] transition-transform duration-500 group-hover:-rotate-1"
          />
          <Image
            src="/trips/about-iftar.jpg"
            alt="Al-Haramain pilgrims sharing a meal together"
            width={600}
            height={720}
            className="absolute bottom-0 left-0 z-[2] aspect-[5/6] w-[40%] -rotate-[8deg] rounded-[10px] border-[6px] border-white object-cover [object-position:50%_38%] shadow-[0_16px_40px_rgba(40,40,40,0.24)] transition-transform duration-500 group-hover:-rotate-[5deg]"
          />
          <Image
            src="/trips/about-group.jpg"
            alt="Al-Haramain Umrah group in ihram"
            width={960}
            height={720}
            className="absolute bottom-0 right-0 z-[3] aspect-[4/3] w-[66%] rotate-[4deg] rounded-[10px] border-[6px] border-white object-cover shadow-[0_16px_40px_rgba(40,40,40,0.24)] transition-transform duration-500 group-hover:rotate-2"
          />
        </Reveal>

        <Reveal delay={0.1}>
          <p className="eyebrow">About us</p>
          <h2 className="mt-3.5 font-display text-[clamp(1.9rem,3.6vw,2.8rem)] font-bold leading-[1.12] text-ink">
            {aboutContent.title}
          </h2>
          <p className="mt-3.5 text-[1.04rem] leading-relaxed text-muted-foreground">
            {aboutContent.paragraphs[0]} {aboutContent.paragraphs[1]}
          </p>

          <ol className="mt-7 grid gap-5">
            {journeySteps.map((step, i) => (
              <li key={step.title} className="flex gap-[18px]">
                <span className="grid size-11 flex-none place-items-center rounded-full bg-charcoal font-display font-bold text-primary">
                  {i + 1}
                </span>
                <div>
                  <h4 className="font-display text-[1.1rem] font-semibold text-ink">{step.title}</h4>
                  <p className="mt-1 text-[0.96rem] leading-relaxed text-muted-foreground">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>

          <Button asChild variant="ghost" className="mt-8">
            <Link href="/about">Read our story</Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
