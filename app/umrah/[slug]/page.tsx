import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Check,
  ChevronRight,
  Clock,
  Globe,
  Mail,
  Minus,
  Phone,
  UserRound,
  Users,
} from "lucide-react";
import { HeroHeader } from "@/components/header";
import { Footer } from "@/components/sections/Footer";
import { SectionHeading } from "@/components/SectionHeading";
import { TripCard } from "@/components/TripCard";
import { EnquiryForm } from "@/components/EnquiryForm";
import { TripGallery } from "@/components/TripGallery";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { Accordion, AccordionItem } from "@/components/ui/accordion";
import { umrahTrips, contactInfo, type UmrahTrip } from "@/lib/data";
// Shared trip copy still contains dashes; the design system forbids them in visible text.
import { plainDashes } from "@/lib/blog";
import { cn } from "@/lib/utils";

const SITE_URL = "https://alharamaintravels.com.au";
const FALLBACK_IMAGE = "/gallery/kaaba.jpg";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return umrahTrips.map((trip) => ({ slug: trip.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const trip = umrahTrips.find((t) => t.slug === slug);

  if (!trip) {
    return { title: "Trip not found" };
  }

  const image = trip.image ?? FALLBACK_IMAGE;
  return {
    title: trip.name,
    description: trip.description,
    alternates: { canonical: `/umrah/${trip.slug}` },
    openGraph: {
      title: trip.name,
      description: trip.description,
      url: `/umrah/${trip.slug}`,
      images: [image],
      type: "website",
    },
  };
}

function statusFor(trip: UmrahTrip) {
  if (trip.expired) return { label: "Past trip", active: false, interest: false };
  if (trip.price.toLowerCase().includes("interest")) {
    return { label: "Register your interest", active: true, interest: true };
  }
  return { label: "Now booking", active: true, interest: false };
}

function gridColsFor(count: number) {
  if (count <= 1) return "max-w-md";
  if (count === 2) return "md:grid-cols-2";
  return "md:grid-cols-2 lg:grid-cols-3";
}

function jsonLd(data: object) {
  return { __html: JSON.stringify(data).replace(/</g, "\\u003c") };
}

export default async function TripDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const trip = umrahTrips.find((t) => t.slug === slug);

  if (!trip) {
    notFound();
  }

  const image = trip.image ?? FALLBACK_IMAGE;
  const url = `${SITE_URL}/umrah/${trip.slug}`;
  const status = statusFor(trip);
  const hasPrice =
    status.active && !status.interest && Number.isFinite(trip.priceNum) && trip.priceNum > 0;

  const paragraphs = plainDashes(trip.longDescription)
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);

  const highlights = trip.highlights.map((h) => {
    const [title, ...rest] = plainDashes(h).split(" - ");
    return { title, text: rest.join(" - ") };
  });

  const facts = [
    { label: "Duration", value: trip.duration, Icon: Clock },
    { label: "Group size", value: trip.capacity, Icon: Users },
    { label: "Age", value: trip.ageRestriction, Icon: UserRound },
    { label: "Language", value: trip.languages.join(", "), Icon: Globe },
  ];

  const moreTrips = umrahTrips.filter((t) => t.slug !== trip.slug && !t.expired).slice(0, 3);

  const priceLabel = hasPrice ? "From" : status.interest ? "Pricing" : "Status";
  const priceValue = hasPrice
    ? trip.price.replace("From ", "")
    : status.interest
      ? "To be announced"
      : "Past trip";

  const tripLd = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: trip.name,
    description: trip.description,
    image: `${SITE_URL}${image}`,
    url,
    touristType: trip.subtitle,
    provider: {
      "@type": "TravelAgency",
      name: "Al-Haramain Travels",
      url: SITE_URL,
      telephone: contactInfo.phone,
      email: contactInfo.email,
    },
    ...(hasPrice
      ? {
          offers: {
            "@type": "Offer",
            price: trip.priceNum,
            priceCurrency: "AUD",
            availability: "https://schema.org/InStock",
            url,
          },
        }
      : {}),
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Umrah Trips", item: `${SITE_URL}/services/umrah` },
      { "@type": "ListItem", position: 3, name: trip.name, item: url },
    ],
  };

  const faqLd =
    trip.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: trip.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
          })),
        }
      : null;

  const sectionTitle = "font-display text-2xl font-semibold text-ink md:text-[1.9rem]";

  return (
    <div className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(tripLd)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(breadcrumbLd)} />
      {faqLd && <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(faqLd)} />}

      <HeroHeader />

      {/* Hero: full-bleed photo, dark scrim, white copy */}
      <section className="relative isolate overflow-hidden bg-charcoal text-white">
        <div className="absolute inset-0 -z-10">
          <Image src={image} alt={trip.name} fill priority sizes="100vw" className="object-cover" />
          <div className="scrim-hero absolute inset-0" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#1c1c1c]/70 to-transparent" />
        </div>

        <div className="container-x flex min-h-[32rem] flex-col justify-end pb-14 pt-40 md:min-h-[38rem] md:pb-20 lg:min-h-[42rem]">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-white/70">
              <li className="flex items-center gap-1.5">
                <Link href="/" className="transition-colors hover:text-primary">
                  Home
                </Link>
                <ChevronRight className="size-3.5 opacity-60" />
              </li>
              <li className="flex items-center gap-1.5">
                <Link href="/services/umrah" className="transition-colors hover:text-primary">
                  Umrah Trips
                </Link>
                <ChevronRight className="size-3.5 opacity-60" />
              </li>
              <li className="text-white">{trip.name}</li>
            </ol>
          </nav>

          <div className="flex flex-wrap items-center gap-2">
            <span
              className={cn(
                "rounded-full px-3 py-1.5 font-display text-[0.72rem] font-semibold uppercase tracking-[0.08em]",
                status.active ? "bg-primary text-white" : "bg-white/90 text-charcoal"
              )}
            >
              {status.label}
            </span>
            <span className="rounded-full border border-white/25 bg-white/15 px-3 py-1.5 font-display text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-white backdrop-blur-sm">
              {trip.subtitle}
            </span>
          </div>

          <h1 className="mt-5 max-w-3xl font-display text-4xl font-extrabold leading-[1.1] text-white [text-shadow:0_2px_30px_rgba(0,0,0,0.25)] md:text-5xl lg:text-6xl">
            {trip.name}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/95 md:text-xl">
            {plainDashes(trip.description)}
          </p>

          <dl className="mt-10 flex flex-wrap gap-x-8 gap-y-5">
            {facts.map(({ label, value, Icon }) => (
              <div key={label} className="flex items-center gap-3 border-l border-white/25 pl-4">
                <Icon className="size-5 shrink-0 text-primary" />
                <div>
                  <dt className="text-xs uppercase tracking-wide text-white/65">{label}</dt>
                  <dd className="text-sm font-medium text-white md:text-base">{value}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Body */}
      <section className="bg-background py-24 md:py-[96px]">
        <div className="container-x grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="divide-y divide-border lg:col-span-8">
            {/* About */}
            <Reveal className="pb-12">
              <p className="eyebrow">About this trip</p>
              <h2 className={cn(sectionTitle, "mt-3.5")}>What to expect</h2>
              <div className="mt-6 space-y-5">
                {paragraphs.map((paragraph, i) => (
                  <p
                    key={i}
                    className="max-w-[65ch] text-base leading-relaxed text-muted-foreground md:text-[1.06rem]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </Reveal>

            {/* Highlights */}
            {highlights.length > 0 && (
              <Reveal className="py-12">
                <h2 className={sectionTitle}>Why this trip</h2>
                <ul className="mt-8 grid gap-x-10 gap-y-7 sm:grid-cols-2">
                  {highlights.map((item) => (
                    <li key={item.title} className="flex gap-4">
                      <span className="grid size-10 shrink-0 place-items-center rounded-[12px] bg-gold-soft text-gold-deep">
                        <Check className="size-5" />
                      </span>
                      <div>
                        <h3 className="font-display text-[1.05rem] font-semibold text-ink">
                          {item.title}
                        </h3>
                        {item.text && (
                          <p className="mt-1.5 text-[0.96rem] leading-relaxed text-muted-foreground">
                            {item.text}
                          </p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </Reveal>
            )}

            {/* Included / not included */}
            <Reveal className="py-12">
              <div className="grid gap-10 sm:grid-cols-2">
                <div>
                  <h2 className={sectionTitle}>What&apos;s included</h2>
                  <ul className="mt-6 space-y-3">
                    {trip.included.map((item) => (
                      <li key={item} className="flex gap-3 text-[0.98rem] text-muted-foreground">
                        <Check className="mt-1 size-[18px] shrink-0 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className={sectionTitle}>Not included</h2>
                  <ul className="mt-6 space-y-3">
                    {trip.excluded.map((item) => (
                      <li key={item} className="flex gap-3 text-[0.98rem] text-muted-foreground">
                        <Minus className="mt-1 size-[18px] shrink-0 text-muted-foreground/60" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>

            {/* FAQs */}
            {trip.faqs.length > 0 && (
              <Reveal className="py-12">
                <h2 className={sectionTitle}>Questions</h2>
                <Accordion className="mt-6">
                  {trip.faqs.map((faq) => (
                    <AccordionItem key={faq.question} title={faq.question}>
                      {faq.answer}
                    </AccordionItem>
                  ))}
                </Accordion>
              </Reveal>
            )}

            <TripGallery slug={trip.slug} className="pt-12" />
          </div>

          {/* Booking panel */}
          <aside className="lg:col-span-4">
            <Reveal className="lg:sticky lg:top-28" delay={0.1}>
              <div className="rounded-2xl border border-border bg-card p-7 shadow-lift">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  {priceLabel}
                </p>
                <p className="mt-1 font-display text-[1.7rem] font-bold leading-tight text-ink">
                  {priceValue}
                  {hasPrice && (
                    <span className="ml-1.5 text-[0.85rem] font-medium text-muted-foreground">
                      / person
                    </span>
                  )}
                </p>
                {status.interest && (
                  <p className="mt-2 text-sm text-muted-foreground">
                    Dates and pricing are being finalised. Register and we will contact you first.
                  </p>
                )}
                {!status.active && (
                  <p className="mt-2 text-sm text-muted-foreground">
                    This group has already travelled. Ask us about the next departure.
                  </p>
                )}

                <dl className="mt-6 divide-y divide-border border-y border-border text-sm">
                  {facts.map(({ label, value }) => (
                    <div key={label} className="flex items-center justify-between gap-4 py-3">
                      <dt className="text-muted-foreground">{label}</dt>
                      <dd className="text-right font-medium text-ink">{value}</dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-6 flex flex-col gap-3">
                  <Button asChild size="lg" className="w-full">
                    {status.active ? (
                      <a href="#enquiry">Enquire now</a>
                    ) : (
                      <Link href="/contact">Enquire now</Link>
                    )}
                  </Button>
                  <Button asChild size="lg" variant="ghost" className="w-full">
                    <a href={contactInfo.socials.whatsapp} target="_blank" rel="noopener noreferrer">
                      WhatsApp us
                    </a>
                  </Button>
                </div>

                {status.active && (
                  <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                    Pay a deposit and settle the balance in instalments. The full amount is due four
                    weeks before departure.
                  </p>
                )}

                <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                  <li>
                    <a
                      href={contactInfo.phoneHref}
                      className="flex items-center gap-3 transition-colors hover:text-gold-deep"
                    >
                      <Phone className="size-4 shrink-0 text-primary" />
                      {contactInfo.phone}
                    </a>
                  </li>
                  <li>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="flex items-center gap-3 break-all transition-colors hover:text-gold-deep"
                    >
                      <Mail className="size-4 shrink-0 text-primary" />
                      {contactInfo.email}
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Clock className="size-4 shrink-0 text-primary" />
                    {contactInfo.hours}
                  </li>
                </ul>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>

      {status.active && <EnquiryForm tripName={trip.name} subject={`Enquiry: ${trip.name}`} />}

      {/* More trips */}
      {moreTrips.length > 0 && (
        <section className="bg-surface py-24 md:py-[96px]">
          <div className="container-x">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <SectionHeading eyebrow="Other departures" title="More trips" />
              <Button asChild variant="ghost" className="mb-14 md:shrink-0">
                <Link href="/services/umrah">View Umrah trips</Link>
              </Button>
            </div>
            <div className={cn("grid gap-6", gridColsFor(moreTrips.length))}>
              {moreTrips.map((t, i) => (
                <Reveal key={t.slug} delay={i * 0.06} className="h-full">
                  <TripCard trip={t} featured={t.slug.startsWith("ramadan-umrah")} className="h-full" />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
