import Link from "next/link";
import HeroSection from "@/components/hero-section";
import { Services } from "@/components/sections/Services";
import { UmrahTrips } from "@/components/sections/UmrahTrips";
import { About } from "@/components/sections/About";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { Banners } from "@/components/sections/Banners";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <About />
      <UmrahTrips />
      <Banners />
      <Services />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
}
