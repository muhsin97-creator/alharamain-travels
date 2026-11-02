import Image from "next/image";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/ui/reveal";
import { services } from "@/lib/data";

// UK .bento: two large photo tiles plus four white cards.
const photoTiles: Record<string, { image: string; alt: string; tag: string }> = {
  "Group Tours": {
    image: "/services/group-ihram.jpg",
    alt: "An Al-Haramain Travels group together in ihram before their Umrah",
    tag: "Travel as one",
  },
  "Premium Hotels": {
    image: "/services/hotel-suite.jpg",
    alt: "Hotel suite overlooking Masjid al-Haram in Makkah",
    tag: "Steps from the Haram",
  },
};

const order = [
  "Group Tours",
  "Premium Hotels",
  "Flight Bookings",
  "Visa Services",
  "Spiritual Guidance",
  "Personalised Care",
];

export function Services() {
  const ordered = order
    .map((title) => services.find((s) => s.title === title))
    .filter((s): s is (typeof services)[number] => Boolean(s));

  return (
    <section id="services" className="bg-surface py-24 md:py-[96px]">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Complete travel solutions"
            title="Everything handled, start to finish"
            intro="A good Umrah package is not about extras you will never use. It is about the things that actually matter, and we take care of every one of them."
          />
        </Reveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4 md:auto-rows-[176px]">
          {ordered.map((service, i) => {
            const Icon = service.icon;
            const photo = photoTiles[service.title];

            if (photo) {
              return (
                <Reveal
                  key={service.title}
                  delay={i * 0.06}
                  className="group relative min-h-[320px] overflow-hidden rounded-[18px] sm:col-span-2 md:row-span-2"
                >
                  <Image
                    src={photo.image}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 [transition-timing-function:cubic-bezier(.2,.7,.2,1)] group-hover:scale-[1.06]"
                  />
                  <div className="scrim-b absolute inset-0 transition-colors duration-500" />
                  <span className="absolute left-[18px] top-[18px] rounded-full bg-primary px-3 py-1.5 font-display text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-white">
                    {photo.tag}
                  </span>
                  <div className="absolute inset-x-0 bottom-0 p-7 text-white">
                    <div className="mb-4 grid size-[52px] place-items-center rounded-[14px] border border-white/25 bg-white/15 backdrop-blur-sm">
                      <Icon className="size-[26px]" />
                    </div>
                    <h3 className="font-display text-[1.55rem] font-semibold text-white">{service.title}</h3>
                    <p className="mt-2 max-w-[30ch] text-base text-white/90 transition-transform duration-500 group-hover:-translate-y-0.5">
                      {service.description}
                    </p>
                  </div>
                </Reveal>
              );
            }

            return (
              <Reveal
                key={service.title}
                delay={i * 0.06}
                className="lift group flex flex-col justify-center rounded-[18px] border border-border bg-card px-6 py-7 hover:border-primary"
              >
                <div className="mb-4 grid size-[50px] place-items-center rounded-[13px] bg-gold-soft text-gold-deep transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                  <Icon className="size-[26px]" />
                </div>
                <h3 className="font-display text-[1.12rem] font-semibold text-ink">{service.title}</h3>
                <p className="mt-1.5 text-[0.94rem] leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
