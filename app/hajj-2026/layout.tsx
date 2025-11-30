import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Hajj 2026 Registration",
  description: "Register your interest for Hajj 2026 with Al-Haramain Travels. Premium Hajj packages from Australia with 5-star accommodation, expert guides, and comprehensive support.",
  openGraph: {
    title: "Hajj 2026 Registration | Al-Haramain Travels",
    description: "Register your interest for Hajj 2026 - Premium packages from Australia.",
  },
}

export default function Hajj2026Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

