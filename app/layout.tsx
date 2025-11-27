import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Al-Haramain Travels | Premium Umrah & Hajj Packages",
  description:
    "Experience the spiritual journey of a lifetime with Al-Haramain Travels. We offer premium Umrah and Hajj packages with 5-star hotels, guided tours, and exceptional service.",
  keywords: [
    "Umrah",
    "Hajj",
    "Islamic Travel",
    "Pilgrimage",
    "Makkah",
    "Medina",
    "Saudi Arabia",
    "Travel Agency",
    "UK",
  ],
  openGraph: {
    title: "Al-Haramain Travels | Premium Umrah & Hajj Packages",
    description:
      "Experience the spiritual journey of a lifetime with premium Umrah and Hajj packages.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${dmSans.variable} ${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
