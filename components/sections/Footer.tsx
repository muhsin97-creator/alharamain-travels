import Image from "next/image";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Instagram, Facebook, MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { footerLinks, contactInfo } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Logo & Description */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Image
              src="/logo.png"
              alt="Al-Haramain Travels"
              width={180}
              height={60}
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-white/60 text-sm leading-relaxed">
              Al Haramain Travels was founded with a singular purpose: to facilitate 
              and enhance the spiritual journeys of Umrah for Muslims around Australia 
              and the world.
            </p>
            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              <a
                href={contactInfo.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={contactInfo.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={contactInfo.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-5 text-lg">Quick Links</h4>
            <ul className="space-y-3 text-white/60">
              {footerLinks.quick.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-semibold mb-5 text-lg">Help</h4>
            <ul className="space-y-3 text-white/60">
              {footerLinks.help.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Address */}
          <div>
            <h4 className="font-semibold mb-5 text-lg">Address</h4>
            <ul className="space-y-4 text-white/60">
              {contactInfo.addresses.map((address, i) => (
                <li key={i} className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{address.location}</span>
                </li>
              ))}
              <li className="flex items-center gap-3 pt-2">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-sm">{contactInfo.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-sm">{contactInfo.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="bg-white/10 mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            Copyright © {new Date().getFullYear()} Al Haramain Travels
          </p>
          <div className="flex gap-6 text-white/40 text-sm">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
