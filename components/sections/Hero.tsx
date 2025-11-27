import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Phone, Users, Star, Shield, ChevronRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[#2D2D2D]">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
        </div>
        {/* Decorative elements inspired by brand */}
        <div className="absolute top-1/4 left-8 flex flex-col gap-2 opacity-40">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="w-3 h-3 bg-primary rotate-45"
              style={{ animationDelay: `${i * 100}ms` }}
            />
          ))}
        </div>
        <div className="absolute bottom-1/4 right-8 flex flex-col gap-2 opacity-40">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="w-0 h-0 border-l-[6px] border-r-[6px] border-b-[10px] border-l-transparent border-r-transparent border-b-primary"
            />
          ))}
        </div>
        <div className="absolute top-1/3 right-1/4 w-16 h-[1px] bg-primary opacity-40" />
        <div className="absolute bottom-1/3 left-1/4 w-16 h-[1px] bg-primary opacity-40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className="animate-fade-in-up opacity-0"
          style={{ animationDelay: "100ms", animationFillMode: "forwards" }}
        >
          <Image
            src="/logo-mark.png"
            alt="Al-Haramain"
            width={120}
            height={120}
            className="mx-auto mb-8 animate-float"
          />
        </div>

        <h1
          className="text-5xl md:text-7xl font-bold text-white mb-4 animate-fade-in-up opacity-0"
          style={{ animationDelay: "200ms", animationFillMode: "forwards" }}
        >
          Your Sacred
          <span className="block text-gradient">Journey Awaits</span>
        </h1>

        <p
          className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto mb-8 animate-fade-in-up opacity-0"
          style={{ animationDelay: "300ms", animationFillMode: "forwards" }}
        >
          Experience the spiritual journey of a lifetime with our premium Umrah
          and Hajj packages
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up opacity-0"
          style={{ animationDelay: "400ms", animationFillMode: "forwards" }}
        >
          <Button
            size="lg"
            className="bg-primary hover:bg-gold-dark text-white px-8 py-6 text-lg"
          >
            Explore Packages
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            className="bg-white/10 border-2 border-white/40 text-white hover:bg-white/20 px-8 py-6 text-lg"
          >
            <Phone className="mr-2 h-5 w-5" />
            Contact Us
          </Button>
        </div>

        {/* Trust indicators */}
        <div
          className="flex flex-wrap justify-center gap-8 mt-16 animate-fade-in-up opacity-0"
          style={{ animationDelay: "500ms", animationFillMode: "forwards" }}
        >
          <div className="flex items-center gap-2 text-white/60">
            <Users className="h-5 w-5 text-primary" />
            <span>10,000+ Pilgrims</span>
          </div>
          <div className="flex items-center gap-2 text-white/60">
            <Star className="h-5 w-5 text-primary" />
            <span>4.9 Rating</span>
          </div>
          <div className="flex items-center gap-2 text-white/60">
            <Shield className="h-5 w-5 text-primary" />
            <span>ATOL Protected</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce z-20">
        <div className="w-7 h-12 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}

