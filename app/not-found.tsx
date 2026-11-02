import type { Metadata } from "next";
import Link from "next/link";
import { HeroHeader } from "@/components/header";
import { PageHeader } from "@/components/PageHeader";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Page not found",
  description: "The page you were looking for could not be found.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <HeroHeader />

      {/* Compact photo hero keeps the transparent header readable (see DESIGN.md) */}
      <PageHeader
        eyebrow="404"
        title="We could not find that page"
        image="/gallery/haram-colonnade.jpg"
        imageAlt="Golden lanterns along the colonnades of Masjid al-Haram"
        compact
      />

      <main className="container-x flex flex-1 items-center justify-center bg-background">
        <div className="mx-auto max-w-xl py-20 text-center md:py-28">
          <p className="text-base leading-relaxed text-muted-foreground md:text-[1.06rem]">
            The link may be out of date or the page may have moved. Head back to the home page or
            browse our upcoming Umrah trips.
          </p>
          <div className="mt-9 flex flex-col gap-3.5 sm:flex-row sm:justify-center">
            <Button asChild size="lg">
              <Link href="/">Back to home</Link>
            </Button>
            <Button asChild size="lg" variant="ghost">
              <Link href="/services/umrah">View Umrah trips</Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
