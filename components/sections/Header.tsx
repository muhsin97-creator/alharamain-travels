import Image from "next/image";
import { Button } from "@/components/ui/button";
import { navigationLinks } from "@/lib/data";

export function Header() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Al-Haramain Travels"
              width={180}
              height={60}
              className="h-12 w-auto"
            />
          </div>
          <div className="hidden md:flex items-center gap-8">
            {navigationLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground/80 hover:text-primary transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>
          <Button className="bg-primary hover:bg-gold-dark text-white">
            Book Now
          </Button>
        </div>
      </div>
    </nav>
  );
}

