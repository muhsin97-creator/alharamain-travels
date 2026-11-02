import Image from "next/image";
import Link from "next/link";
import { Instagram, Facebook, MessageCircle } from "lucide-react";
import { footerLinks, contactInfo, aboutContent } from "@/lib/data";

// UK footer: #1f1f1f, four columns, white logo, social circles
export function Footer() {
  const socials = [
    { href: contactInfo.socials.instagram, label: "Instagram", Icon: Instagram },
    { href: contactInfo.socials.facebook, label: "Facebook", Icon: Facebook },
    { href: contactInfo.socials.whatsapp, label: "WhatsApp", Icon: MessageCircle },
  ];

  return (
    <footer className="bg-charcoal-deep pb-8 pt-[70px] text-[#cfc7bc]">
      <div className="container-x">
        <div className="grid gap-10 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
          <div>
            <Image
              src="/logo-white.svg"
              alt="Al Haramain Travels"
              width={300}
              height={150}
              className="h-24 w-auto"
            />
            <p className="mt-5 max-w-[320px] text-[0.92rem] leading-relaxed opacity-80">
              {aboutContent.paragraphs[0].split(". ")[0]}.
            </p>
            <div className="mt-5 flex gap-3">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid size-10 place-items-center rounded-full border border-white/20 text-white transition-colors hover:border-primary hover:bg-primary"
                >
                  <Icon className="size-[18px]" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-display text-base font-semibold text-white">Quick links</h4>
            <ul className="space-y-2.5">
              {footerLinks.quick.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[0.92rem] opacity-80 transition-colors hover:text-primary hover:opacity-100">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-display text-base font-semibold text-white">Trips</h4>
            <ul className="space-y-2.5">
              {footerLinks.trips.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[0.92rem] opacity-80 transition-colors hover:text-primary hover:opacity-100">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-display text-base font-semibold text-white">Get in touch</h4>
            <ul className="space-y-2.5 text-[0.92rem]">
              <li>
                <a href={contactInfo.phoneHref} className="opacity-80 transition-colors hover:text-primary hover:opacity-100">
                  {contactInfo.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${contactInfo.email}`} className="break-all opacity-80 transition-colors hover:text-primary hover:opacity-100">
                  {contactInfo.email}
                </a>
              </li>
              {contactInfo.addresses.map((address) => (
                <li key={address.state} className="opacity-80">
                  {address.location}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-6 text-[0.84rem] opacity-70 md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} Al Haramain Travels Australia. All rights reserved.</p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {footerLinks.legal.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-primary">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
