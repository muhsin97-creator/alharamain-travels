import type { Metadata, Viewport } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const siteUrl = "https://alharamaintravels.com.au";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#C4A052",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Umrah Packages Australia | Guided Umrah Trips – Al-Haramain Travels",
    template: "%s | Al-Haramain Travels",
  },
  description:
    "Umrah packages from Australia with 5-star hotels near the Haram, guided Umrah trips with experienced Shaykhs, flights, visas and 24/7 support. Departures from Sydney & Melbourne. Register for our next Umrah trip today.",
  keywords: [
    "Umrah packages Australia",
    "Ramadan Umrah packages",
    "Islamic Travel",
    "Pilgrimage",
    "Makkah",
    "Medina",
    "Saudi Arabia",
    "Travel Agency Australia",
    "Umrah 2025",
    "Guided Umrah tours",
    "Ramadan Umrah",
    "Budget Umrah",
    "Premium Umrah",
    "Sydney Umrah",
    "Melbourne Umrah",
  ],
  authors: [{ name: "Al-Haramain Travels" }],
  creator: "Al-Haramain Travels",
  publisher: "Al-Haramain Travels",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: siteUrl,
    siteName: "Al-Haramain Travels",
    title: "Umrah Packages Australia | Guided Umrah Trips – Al-Haramain Travels",
    description:
      "Umrah packages from Australia with 5-star hotels near the Haram, guided groups, flights, visas and 24/7 support.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Al-Haramain Travels - Premium Umrah Packages",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Al-Haramain Travels | Premium Umrah Packages",
    description:
      "Experience the spiritual journey of a lifetime with premium Umrah packages from Australia.",
    images: ["/og-image.png"],
    creator: "@alharamaintravels",
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
  verification: {
    // Add your verification codes here when you have them
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "travel",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  "name": "Al-Haramain Travels",
  "description": "Premium Umrah travel packages from Australia",
  "url": siteUrl,
  "logo": `${siteUrl}/logo.png`,
  "image": `${siteUrl}/og-image.png`,
  "telephone": "+61 451 001 786",
  "email": "info@alharamaintravels.com.au",
  "address": [
    {
      "@type": "PostalAddress",
      "addressLocality": "Sydney",
      "addressRegion": "NSW",
      "addressCountry": "AU"
    },
    {
      "@type": "PostalAddress",
      "addressLocality": "Melbourne",
      "addressRegion": "VIC",
      "addressCountry": "AU"
    }
  ],
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -33.8688,
    "longitude": 151.2093
  },
  "areaServed": {
    "@type": "Country",
    "name": "Australia"
  },
  "priceRange": "$$$",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "09:00",
    "closes": "18:00"
  },
  "sameAs": [
    "https://www.instagram.com/alharamain_travels/",
    "https://www.facebook.com/alharamaintravelsau"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${dmSans.variable} ${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
