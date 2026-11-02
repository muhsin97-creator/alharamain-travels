import { HeroHeader } from "@/components/header";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { UmrahTrips } from "@/components/sections/UmrahTrips";
import { Services } from "@/components/sections/Services";
import { About } from "@/components/sections/About";
import { Partners } from "@/components/sections/Partners";
import { QuoteBand } from "@/components/sections/QuoteBand";
import { Gallery } from "@/components/sections/Gallery";
import { Testimonials } from "@/components/sections/Testimonials";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { Contact } from "@/components/sections/Contact";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/sections/Footer";
import { generalFaqs } from "@/lib/data";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: generalFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

// Section order mirrors the UK landing page.
export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <HeroHeader />
      <main>
        <Hero />
        <TrustBar />
        <UmrahTrips />
        <Services />
        <About />
        <Partners />
        <QuoteBand />
        <Gallery />
        <Testimonials />
        <BlogPreview />
        <Contact />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
