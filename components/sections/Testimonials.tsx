import { Star } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/ui/reveal";
import { VideoTestimonials } from "@/components/video/VideoTestimonials";
import { testimonials, videoTestimonials } from "@/lib/data";

const SITE_URL = "https://alharamaintravels.com.au";

const videoJsonLd = videoTestimonials.map((v) => ({
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: `${v.name}: Umrah with Al-Haramain Travels`,
  description: `${v.name} (${v.role}) on their Umrah trip with Al-Haramain Travels: "${v.quote}"`,
  thumbnailUrl: `${SITE_URL}${v.poster}`,
  contentUrl: `${SITE_URL}${v.src}`,
  uploadDate: "2026-11-15",
  duration: v.isoDuration,
}));

// Video testimonials on top, then the UK .tst-grid: three white cards with gold stars.
export function Testimonials() {
  return (
    <section id="reviews" className="bg-surface py-24 md:py-[96px]">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="What our pilgrims say"
            title="Trusted by families across Australia"
            intro="Filmed with our pilgrims in Makkah on the last day of their trip. Tap to watch."
            className="mb-10"
          />
        </Reveal>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(videoJsonLd) }}
        />
        <VideoTestimonials videos={videoTestimonials} />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.slice(0, 3).map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08} className="lift flex flex-col rounded-2xl border border-border bg-card px-7 py-8">
              <div className="mb-3.5 flex gap-0.5 text-primary" aria-label="Five stars">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="size-4 fill-current" />
                ))}
              </div>
              <p className="mb-5 text-[0.99rem] leading-relaxed text-[#3f3b35]">&ldquo;{t.text}&rdquo;</p>
              <div className="mt-auto font-display text-[0.95rem] font-semibold text-ink">
                {t.name}
                <span className="block font-sans text-[0.85rem] font-normal text-muted-foreground">{t.location}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
