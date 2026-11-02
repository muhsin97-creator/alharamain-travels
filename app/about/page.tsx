import type { Metadata } from "next";
import Image from "next/image";
import { Award, BookOpen, Eye, Heart, Shield, Target, type LucideIcon } from "lucide-react";
import { HeroHeader } from "@/components/header";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/ui/reveal";
import { CountUp } from "@/components/ui/count-up";
import { CTABand } from "@/components/sections/CTABand";
import { Footer } from "@/components/sections/Footer";
import { aboutContent, journeySteps, stats, whyChooseUs } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Al-Haramain Travels was founded by two friends to make guided Umrah from Australia simple, affordable and spiritually rich. Read our story, our values and why pilgrims choose to travel with us.",
  alternates: { canonical: "https://alharamaintravels.com.au/about" },
};

const siteUrl = "https://alharamaintravels.com.au";

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
    { "@type": "ListItem", position: 2, name: "About", item: `${siteUrl}/about` },
  ],
};

const valueIcons: Record<string, LucideIcon> = {
  Excellence: Award,
  Integrity: Shield,
  Compassion: Heart,
  Knowledge: BookOpen,
};

// Shared copy in lib/data.ts still carries a few dashes; this page renders them as commas.
const tidy = (text: string) => text.replace(/\s*[\u2013\u2014]\s*/g, ", ");

// UK .card .ic: 56px gold-soft square with a gold-deep icon
function IconChip({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <div className="mb-5 grid size-14 place-items-center rounded-[14px] bg-gold-soft text-gold-deep">
      <Icon className="size-7" aria-hidden="true" />
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <HeroHeader />

      <PageHeader
        title={
          <>
            Two friends, one <span className="text-primary">purpose</span>
          </>
        }
        description="Your trusted companion for sacred journeys to Makkah and Madinah, guided from Australia by people who have walked the path themselves."
        image="/trips/ytb-nabawi-umbrellas.jpg"
        imageAlt="Beneath the canopies of Masjid an-Nabawi"
        breadcrumbs={[
          { href: "/", label: "Home" },
          { href: "/about", label: "About" },
        ]}
      />

      {/* Our story: UK .journey split, 3-photo collage left, copy and steps right */}
      <section className="bg-background py-24 md:py-[96px]">
        <div className="container-x">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-[60px]">
            <Reveal>
              {/* UK .collage: tilted white-bordered prints that straighten slightly on hover */}
              <div className="group relative mx-auto aspect-square w-full max-w-[560px]">
                <div className="absolute left-[6%] top-0 z-[1] aspect-[3/2] w-[88%] -rotate-3 overflow-hidden rounded-[10px] border-[6px] border-white bg-surface shadow-[0_16px_40px_rgba(40,40,40,0.24)] transition-transform duration-[450ms] ease-out group-hover:-rotate-[1.5deg]">
                  <Image
                    src="/trips/ytb-kaaba-pilgrims.jpg"
                    alt="Our pilgrims before the Kaaba, Masjid al-Haram"
                    fill
                    sizes="(max-width: 1024px) 88vw, 520px"
                    className="object-cover"
                  />
                </div>
                <div className="absolute bottom-0 left-0 z-[2] aspect-[5/6] w-[40%] -rotate-[8deg] overflow-hidden rounded-[10px] border-[6px] border-white bg-surface shadow-[0_16px_40px_rgba(40,40,40,0.24)] transition-transform duration-[450ms] ease-out group-hover:-rotate-[5deg]">
                  <Image
                    src="/trips/about-iftar.jpg"
                    alt="Al Haramain pilgrims sharing a meal together"
                    fill
                    sizes="(max-width: 1024px) 40vw, 240px"
                    className="object-cover object-[50%_38%]"
                  />
                </div>
                <div className="absolute bottom-0 right-0 z-[3] aspect-[4/3] w-[66%] rotate-[4deg] overflow-hidden rounded-[10px] border-[6px] border-white bg-surface shadow-[0_16px_40px_rgba(40,40,40,0.24)] transition-transform duration-[450ms] ease-out group-hover:rotate-[2deg]">
                  <Image
                    src="/trips/about-group.jpg"
                    alt="Al Haramain Umrah group in ihram"
                    fill
                    sizes="(max-width: 1024px) 66vw, 400px"
                    className="object-cover"
                  />
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <SectionHeading
                eyebrow="Our story"
                title="Founded to serve the pilgrim, not the itinerary"
                className="mb-6"
              />
              <div className="space-y-4">
                {aboutContent.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 32)}
                    className="max-w-[65ch] text-[1.04rem] leading-relaxed text-muted-foreground"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* UK .steps: how a booking works */}
              <ol className="mt-8 grid gap-[22px]">
                {journeySteps.map((step, i) => (
                  <li key={step.title} className="flex gap-[18px]">
                    <span className="grid size-11 shrink-0 place-items-center rounded-full bg-charcoal font-display font-bold text-primary">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="font-display text-[1.1rem] font-semibold text-ink">
                        {step.title}
                      </h3>
                      <p className="mt-1 text-[0.96rem] leading-relaxed text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </div>
      </section>

      {/* UK .trustbar: charcoal band, four centred stats */}
      <section className="bg-charcoal text-white">
        <Reveal className="container-x">
          <div className="grid grid-cols-2 gap-x-5 gap-y-9 py-[46px] text-center md:grid-cols-4 md:gap-[30px]">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-[2.3rem] font-bold leading-none text-primary">
                  <CountUp value={stat.number} />
                </p>
                <p className="mt-2 text-[0.9rem] tracking-[0.02em] text-white/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Mission and vision: two white cards */}
      <section className="bg-surface py-24 md:py-[96px]">
        <div className="container-x">
          <SectionHeading
            eyebrow="Mission and vision"
            title="Why we do what we do"
            intro="Every trip we run comes back to two simple commitments: a seamless journey for the pilgrim, and a name Australian Muslims can trust."
            align="center"
          />
          <Reveal>
            <div className="grid gap-[26px] md:grid-cols-2">
              <div className="lift rounded-2xl border border-border bg-card p-8">
                <IconChip icon={Target} />
                <h3 className="font-display text-[1.22rem] font-semibold text-ink">Our mission</h3>
                <p className="mt-2.5 text-[0.98rem] leading-relaxed text-muted-foreground">
                  {aboutContent.mission}
                </p>
              </div>
              <div className="lift rounded-2xl border border-border bg-card p-8">
                <IconChip icon={Eye} />
                <h3 className="font-display text-[1.22rem] font-semibold text-ink">Our vision</h3>
                <p className="mt-2.5 text-[0.98rem] leading-relaxed text-muted-foreground">
                  {aboutContent.vision}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values: four white cards with gold-soft icon chips */}
      <section className="bg-background py-24 md:py-[96px]">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our values"
            title="What we stand for"
            intro="Four principles guide every booking, every group and every conversation we have with a pilgrim."
            align="center"
          />
          <Reveal>
            <div className="grid gap-[26px] sm:grid-cols-2 lg:grid-cols-4">
              {aboutContent.values.map((value) => {
                const Icon = valueIcons[value.title] ?? Award;
                return (
                  <div key={value.title} className="lift rounded-2xl border border-border bg-card p-8">
                    <IconChip icon={Icon} />
                    <h3 className="font-display text-[1.22rem] font-semibold text-ink">
                      {value.title}
                    </h3>
                    <p className="mt-2.5 text-[0.98rem] leading-relaxed text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why pilgrims choose us: white cards with gold-soft icon chips */}
      <section className="bg-surface py-24 md:py-[96px]">
        <div className="container-x">
          <SectionHeading
            eyebrow="Why travel with us"
            title="Why pilgrims choose us"
            intro="From the first phone call to the flight home, this is what travelling with Al Haramain Travels feels like."
            align="center"
          />
          <Reveal>
            <div className="grid gap-[26px] md:grid-cols-2">
              {whyChooseUs.map((item) => (
                <div key={item.title} className="lift rounded-2xl border border-border bg-card p-8">
                  <IconChip icon={item.icon} />
                  <h3 className="font-display text-[1.22rem] font-semibold text-ink">{item.title}</h3>
                  <p className="mt-2.5 max-w-[55ch] text-[0.98rem] leading-relaxed text-muted-foreground">
                    {tidy(item.description)}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CTABand />
      <Footer />
    </div>
  );
}
