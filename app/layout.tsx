import type { Metadata, Viewport } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import { contactInfo } from "@/lib/data";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const siteUrl = "https://alharamaintravels.com.au";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1b1b1b",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Umrah Packages Australia | Guided Umrah Trips | Al-Haramain Travels",
    template: "%s | Al-Haramain Travels",
  },
  description:
    "Guided Umrah packages from Australia with flights, visas, hotels near the Haram, experienced Shaykhs and 24/7 group support. Departures from Sydney and Melbourne. Enquire about our next Umrah trip.",
  keywords: [
    "Umrah packages Australia",
    "Umrah trips Australia",
    "Ramadan Umrah 2027",
    "guided Umrah tour",
    "Umrah from Sydney",
    "Umrah from Melbourne",
    "Umrah travel agency Australia",
    "Islamic travel Australia",
  ],
  authors: [{ name: "Al-Haramain Travels" }],
  creator: "Al-Haramain Travels",
  publisher: "Al-Haramain Travels",
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: siteUrl,
    siteName: "Al-Haramain Travels",
    title: "Umrah Packages Australia | Guided Umrah Trips | Al-Haramain Travels",
    description:
      "Guided Umrah packages from Australia with flights, visas, hotels near the Haram and experienced Shaykhs.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Al-Haramain Travels" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Al-Haramain Travels | Guided Umrah Trips from Australia",
    description:
      "Guided Umrah packages from Australia with flights, visas, hotels near the Haram and experienced Shaykhs.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: { canonical: siteUrl },
  category: "travel",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "Al-Haramain Travels",
  description: "Guided Umrah trips and packages from Australia.",
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  image: `${siteUrl}/og-image.png`,
  telephone: contactInfo.phone,
  email: contactInfo.email,
  address: [
    {
      "@type": "PostalAddress",
      addressLocality: "Preston",
      addressRegion: "VIC",
      postalCode: "3072",
      addressCountry: "AU",
    },
    {
      "@type": "PostalAddress",
      addressLocality: "Lakemba",
      addressRegion: "NSW",
      postalCode: "2195",
      addressCountry: "AU",
    },
  ],
  areaServed: { "@type": "Country", name: "Australia" },
  priceRange: "$$$",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  sameAs: [
    contactInfo.socials.instagram,
    contactInfo.socials.facebook,
    contactInfo.socials.tiktok,
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU" className="scroll-smooth">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${montserrat.variable} ${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
