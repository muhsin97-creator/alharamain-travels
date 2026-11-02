import type { Metadata } from "next";
import Link from "next/link";
import { HeroHeader } from "@/components/header";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/SectionHeading";
import { TripCard } from "@/components/TripCard";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { CTABand } from "@/components/sections/CTABand";
import { Footer } from "@/components/sections/Footer";
import { umrahTrips, journeySteps, umrahCompanionServices } from "@/lib/data";

export const metadata: Metadata = {
  title: "Umrah Trips & Packages from Australia",
  description:
    "Guided Umrah trips from Sydney and Melbourne with flights, Umrah visa, hotels near the Haram and experienced Shaykhs. See upcoming departures, how booking works and our private Umrah Companion service.",
  alternates: { canonical: "/services/umrah" },
};

const heroFacts = [
  "Departures from Sydney & Melbourne",
  "Flights, visa & hotels included",
  "Guided by experienced Shaykhs",
];

// The Ramadan departure is the UK-style "featured" package (gold border).
const isFeatured = (slug: string) => slug.startsWith("ramadan-umrah");

export default function UmrahTripsPage() {
  const upcoming = umrahTrips.filter((t) => !t.expired);
  const past = umrahTrips.filter((t) => t.expired);

  return (
    <div className="min-h-screen bg-background">
      <HeroHeader />

      <PageHeader
        eyebrow="Umrah packages"
        title={
          <>
            Upcoming <span className="text-primary">Umrah trips</span> from Australia
          </>
        }
        image="/gallery/kaaba.jpg"
        imageAlt="The Holy Kaaba, Masjid al-Haram, Makkah"
        breadcrumbs={[
          { href: "/", label: "Home" },
          { href: "/services/umrah", label: "Umrah Trips" },
        ]}
      >
        <ul className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/85 md:text-base">
          {heroFacts.map((fact) => (
            <li key={fact} className="border-l border-white/25 pl-4">
              {fact}
            </li>
          ))}
        </ul>
      </PageHeader>

      {/* Now booking */}
      <section className="bg-background py-24 md:py-[96px]">
        <div className="container-x">
          <SectionHeading
            eyebrow="Upcoming departures"
            title="Now booking"
            intro="Group departures with a Shaykh, group leaders and everything arranged before you fly. Choose a trip to see what is included and enquire."
            align="center"
          />

          {upcoming.length > 0 ? (
            <>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {upcoming.map((trip, i) => (
                  <Reveal key={trip.slug} delay={i * 0.06} className="h-full">
                    <TripCard trip={trip} featured={isFeatured(trip.slug)} className="h-full" />
                  </Reveal>
                ))}
              </div>
              <p className="mt-[26px] text-center text-[0.86rem] text-muted-foreground">
                Prices are per person. Final inclusions, hotels and dates are confirmed when you
                enquire.
              </p>
            </>
          ) : (
            <Reveal className="mx-auto max-w-2xl rounded-2xl border border-border bg-card p-9 text-center shadow-lift">
              <p className="text-base leading-relaxed text-muted-foreground md:text-[1.06rem]">
                New dates are being finalised. Enquire now and we will let you know as soon as the
                next departure opens.
              </p>
              <Button asChild size="lg" className="mt-6">
                <Link href="/contact">Enquire now</Link>
              </Button>
            </Reveal>
          )}
        </div>
      </section>

      {/* How booking works */}
      <section className="bg-surface py-24 md:py-[96px]">
        <div className="container-x">
          <SectionHeading
            eyebrow="Simple process"
            title="How booking works"
            intro="Four steps from your first call to landing in Makkah with your group."
            align="center"
          />

          <Reveal>
            <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {journeySteps.map((step, i) => (
                <li
                  key={step.title}
                  className="lift flex flex-col rounded-2xl border border-border bg-card p-[30px]"
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-full bg-charcoal font-display font-bold text-primary">
                    {i + 1}
                  </span>
                  <h3 className="mt-5 font-display text-[1.1rem] font-semibold text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[0.96rem] leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      {/* Umrah Companion */}
      <section id="companion" className="scroll-mt-24 bg-background py-24 md:py-[96px]">
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Private trips"
              title="Umrah Companion"
              className="mb-6"
            />
            <Reveal>
              <p className="max-w-[65ch] text-base leading-relaxed text-muted-foreground md:text-[1.06rem]">
                At Al Haramain Travels, we understand that the journey of Umrah is deeply personal and
                spiritually significant. Whether you&apos;re just going with your family, or a couple of
                friends having a quick Umrah Trip. Our Umrah Companion services are designed to provide
                you with dedicated, personalised support throughout your pilgrimage, ensuring that every
                aspect of your Umrah trip is smooth, comfortable, and correct according to the
                Qur&apos;aan and Sunnah.
              </p>
              <Button asChild size="lg" className="mt-8">
                <Link href="/contact">Enquire now</Link>
              </Button>
            </Reveal>
          </div>

          <Reveal className="lg:col-span-7" delay={0.1}>
            <ul className="grid gap-5 sm:grid-cols-2">
              {umrahCompanionServices.map((service) => {
                const Icon = service.icon;
                return (
                  <li
                    key={service.title}
                    className="lift rounded-2xl border border-border bg-card p-[30px]"
                  >
                    <span className="grid size-14 place-items-center rounded-[14px] bg-gold-soft text-gold-deep">
                      <Icon className="size-7" />
                    </span>
                    <h3 className="mt-5 font-display text-[1.22rem] font-semibold text-ink">
                      {service.title}
                    </h3>
                    <p className="mt-2.5 text-[0.98rem] leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Past trips */}
      {past.length > 0 && (
        <section className="bg-surface py-24 md:py-[96px]">
          <div className="container-x">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <SectionHeading
                eyebrow="Where we have been"
                title="Past trips"
                intro="Groups we have already taken to Makkah and Madinah. Most of them return, so ask us about the next departure."
                className="md:mb-14"
              />
              <Button asChild variant="ghost" className="mb-14 md:shrink-0">
                <Link href="/contact">Enquire now</Link>
              </Button>
            </div>

            <Reveal>
              <div className="no-scrollbar -mx-6 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-4 pt-2">
                {past.map((trip) => (
                  <TripCard
                    key={trip.slug}
                    trip={trip}
                    className="min-w-[18rem] shrink-0 snap-start md:min-w-[22rem]"
                  />
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      )}

      <CTABand />
      <Footer />
    </div>
  );
}
