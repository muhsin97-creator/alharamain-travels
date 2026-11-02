import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | Umrah Enquiries",
  description:
    "Get in touch with Al-Haramain Travels about guided Umrah trips from Australia. Call, WhatsApp or send an enquiry and our team will call you back within one business day.",
  alternates: { canonical: "https://alharamaintravels.com.au/contact" },
  openGraph: {
    title: "Contact Us | Umrah Enquiries | Al-Haramain Travels",
    description:
      "Call, WhatsApp or send an enquiry about our guided Umrah trips from Australia.",
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
