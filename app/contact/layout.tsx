import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Al-Haramain Travels. Contact us for Umrah package enquiries, bookings, and support. We're here to help you plan your perfect pilgrimage.",
  openGraph: {
    title: "Contact Us | Al-Haramain Travels",
    description: "Get in touch with Al-Haramain Travels for Umrah enquiries.",
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

