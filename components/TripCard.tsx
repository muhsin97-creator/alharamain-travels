import Link from "next/link";
import Image from "next/image";
import { UmrahTrip } from "@/lib/data";
import { cn } from "@/lib/utils";

interface TripCardProps {
  trip: UmrahTrip;
  /** Gold border and glow, like the UK "featured" package. */
  featured?: boolean;
  className?: string;
}

// UK .pkg card: white, 3:2 photo with gold tag, meta pills, price, full-width gold button.
export function TripCard({ trip, featured = false, className }: TripCardProps) {
  const isInterest = trip.price.toLowerCase().includes("interest");
  const image = trip.image ?? "/gallery/kaaba.jpg";
  const href = `/umrah/${trip.slug}`;

  return (
    <article
      className={cn(
        "lift group flex flex-col overflow-hidden rounded-2xl border bg-card",
        featured ? "border-primary shadow-[0_18px_50px_rgba(218,162,96,0.18)]" : "border-border",
        trip.expired && "opacity-80 saturate-50",
        className
      )}
    >
      <Link href={href} className="relative block aspect-[3/2] overflow-hidden" aria-hidden="true" tabIndex={-1}>
        <Image
          src={image}
          alt={trip.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
        />
        <span
          className={cn(
            "absolute left-3.5 top-3.5 rounded-full px-3 py-1.5 font-display text-[0.72rem] font-semibold uppercase tracking-[0.08em]",
            trip.expired ? "bg-white/90 text-charcoal" : "bg-primary text-white"
          )}
        >
          {trip.expired ? "Past trip" : trip.subtitle}
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-7">
        <h3 className="font-display text-[1.3rem] font-semibold text-ink">
          <Link href={href} className="transition-colors hover:text-gold-deep">
            {trip.name}
          </Link>
        </h3>
        {!trip.expired && (
          <p className="mt-1 text-[0.9rem] text-muted-foreground">
            {trip.dates ?? (isInterest ? "Dates and pricing being finalised" : "Now booking")}
          </p>
        )}

        <div className="mt-4 flex flex-wrap gap-2">
          {[trip.capacity, trip.duration, trip.ageRestriction].map((m) => (
            <span
              key={m}
              className="rounded-full bg-surface px-3 py-1.5 text-[0.78rem] font-medium text-[#5a554d]"
            >
              {m}
            </span>
          ))}
        </div>

        <div className="mt-4 font-display text-[1.7rem] font-bold leading-none text-ink">
          {isInterest ? (
            <span className="text-[1.15rem] font-semibold text-muted-foreground">Register your interest</span>
          ) : (
            <>
              <small className="mr-1.5 text-[0.95rem] font-semibold text-muted-foreground">From</small>
              {trip.price.replace("From ", "")}
              <span className="ml-1.5 text-[0.85rem] font-medium text-muted-foreground">/ person</span>
            </>
          )}
        </div>

        <p className="mb-5 mt-3.5 line-clamp-3 text-[0.95rem] leading-relaxed text-muted-foreground">
          {trip.description}
        </p>

        <Link
          href={href}
          className={cn(
            "mt-auto inline-flex h-12 w-full items-center justify-center rounded-full font-display text-[0.98rem] font-semibold transition-[transform,box-shadow,background-color] duration-200 hover:-translate-y-0.5",
            trip.expired
              ? "border-[1.5px] border-charcoal/25 text-charcoal hover:border-charcoal"
              : "bg-primary text-white shadow-gold hover:bg-primary-hover hover:shadow-gold-lg"
          )}
        >
          {trip.expired ? "See trip details" : "View this trip"}
        </Link>
      </div>
    </article>
  );
}
