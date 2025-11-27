import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Instagram, Facebook } from "lucide-react";
import { footerLinks } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <Image
              src="/logo.png"
              alt="Al-Haramain Travels"
              width={180}
              height={60}
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-white/60 max-w-md">
              Your trusted partner for Umrah and Hajj journeys. We are committed
              to providing exceptional service and ensuring your pilgrimage is a
              spiritually fulfilling experience.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-white/60">
              {footerLinks.quick.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-white/60">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Separator className="bg-white/10 mb-8" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © 2024 Al-Haramain Travels. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="text-white/40 hover:text-primary transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-white/40 hover:text-primary transition-colors"
            >
              <Facebook className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

