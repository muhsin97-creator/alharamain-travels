import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TripCard } from "@/components/TripCard";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/ui/reveal";
import { umrahTrips } from "@/lib/data";

// UK packages section: centred heading, white package cards, note, view-all.
export function UmrahTrips() {
  const available = umrahTrips.filter((trip) => !trip.expired);

  return (
    <section id="umrah" className="bg-background py-24 md:py-[96px]">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Upcoming Umrah trips"
            title="Choose the journey that fits you"
            intro="Every trip is fully managed by our team: flights, visas, hotels near the Haram and experienced Shaykhs on the ground. Secure your place early; our groups fill quickly."
          />
        </Reveal>

        {available.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {available.map((trip, i) => (
              <Reveal key={trip.slug} delay={i * 0.08} className="flex">
                <TripCard
                  trip={trip}
                  featured={trip.slug === "ramadan-umrah-2027"}
                  className="w-full"
                />
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-border bg-card p-10 text-center">
            <p className="text-lg text-muted-foreground">
              New dates are being finalised. Enquire and we will let you know first.
            </p>
          </div>
        )}

        <Reveal delay={0.2} className="mt-7 text-center">
          <p className="text-[0.86rem] text-muted-foreground">
            Prices are per person. Final inclusions, hotels and dates are confirmed when you enquire.
          </p>
          <Button asChild variant="ghost" className="mt-6">
            <Link href="/services/umrah">View all trips</Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
