import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight, Sparkles } from "lucide-react";
import { GoldLine, TrianglePattern, PlayIndicators } from "@/components/CircularImageFrame";

export function CTA() {
  return (
    <section className="py-24 bg-gold-gradient relative overflow-hidden">
      {/* Decorative elements matching social media template */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white rounded-full" />
        <div className="absolute bottom-10 right-10 w-48 h-48 border border-white rounded-full" />
        <div className="absolute top-1/2 left-1/4 w-20 h-20 border border-white rounded-full" />
      </div>
      
      {/* Triangle patterns */}
      <TrianglePattern className="absolute top-1/4 left-8 opacity-30" direction="up" count={3} />
      <TrianglePattern className="absolute bottom-1/4 right-8 opacity-30" direction="down" count={3} />
      
      {/* Play indicators */}
      <PlayIndicators className="absolute top-1/3 right-1/4 opacity-20" count={3} />
      
      {/* Gold lines (white in this context) */}
      <div className="absolute top-16 left-16 w-16 h-[1px] bg-white/40" />
      <div className="absolute bottom-16 right-16 w-16 h-[1px] bg-white/40" />
      
      {/* Corner accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-2 bg-white/20" />
      <div className="absolute bottom-0 right-8 w-16 h-12 bg-white/10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 mb-6">
          <Sparkles className="h-4 w-4 text-white" />
          <span className="text-white text-sm font-medium">Don&apos;t miss out on our trips!</span>
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          Book your trip!
        </h2>
        <p className="text-white/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
          Embark on a Journey of Faith! Book your Umrah trip now and experience 
          the spiritual journey of a lifetime. Don&apos;t wait—secure your spot today!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-white text-primary hover:bg-white/90 px-10 py-6 text-lg font-semibold"
          >
            <Link href="/services/umrah">
              View Umrah Trips
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-10 py-6 text-lg font-semibold"
          >
            <Link href="/hajj-2026">
              Hajj 2026 Sign Up
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
