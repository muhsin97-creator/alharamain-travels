import { Button } from "@/components/ui/button";
import { Phone, ChevronRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-24 bg-gold-gradient">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Begin Your Sacred Journey?
        </h2>
        <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto">
          Contact us today to book your Umrah or Hajj package. Our team is ready
          to assist you every step of the way.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-white/90 px-8 py-6 text-lg font-semibold"
          >
            Book Your Package
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold"
          >
            <Phone className="mr-2 h-5 w-5" />
            Call: +44 123 456 7890
          </Button>
        </div>
      </div>
    </section>
  );
}

