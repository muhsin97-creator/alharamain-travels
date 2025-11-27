import {
  Plane,
  MapPin,
  Calendar,
  Users,
  Shield,
  Award,
  Heart,
  BookOpen,
  LucideIcon,
} from "lucide-react";

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface UmrahTrip {
  name: string;
  subtitle: string;
  price: string;
  capacity: string;
  duration: string;
  description: string;
  expired: boolean;
}

export interface Testimonial {
  name: string;
  location: string;
  text: string;
}

export interface Stat {
  number: string;
  label: string;
}

export interface Partner {
  name: string;
  logo?: string;
}

// Navigation
export const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "#about", label: "About us" },
  { href: "#umrah", label: "Umrah Services" },
  { href: "#hajj", label: "Hajj Services" },
  { href: "#hajj-2026", label: "Hajj 2026 Sign Up" },
  { href: "#blogs", label: "Blogs" },
  { href: "#contact", label: "Contact" },
];

// Hero slides content
export const heroSlides = [
  {
    title: "Yeah The Boys V Umrah Trip",
    subtitle: "Umrah 2026",
    description:
      "Embark on a spiritual journey like no other with our expertly curated Umrah packages. From seamless travel arrangements to comfortable accommodations near the holy sites, we take care of every detail so you can focus on your spiritual connection.",
  },
  {
    title: "Ramadan Umrah 2026",
    subtitle: "Umrah 2026",
    description:
      "Embark on a spiritual journey like no other with our expertly curated Umrah packages. From seamless travel arrangements to comfortable accommodations near the holy sites, we take care of every detail so you can focus on your spiritual connection.",
  },
  {
    title: "Budget Umrah",
    subtitle: "Umrah 2025",
    description:
      "Embark on a spiritual journey like no other with our expertly curated Umrah packages. From seamless travel arrangements to comfortable accommodations near the holy sites, we take care of every detail so you can focus on your spiritual connection.",
  },
];

// About section content
export const aboutContent = {
  title: "Al Haramain Travels",
  paragraphs: [
    "Al Haramain Travels was founded with a singular purpose: to facilitate and enhance the spiritual journeys of Umrah for Muslims around Australia and the world. Our story began with two friends, a deep-rooted passion for helping Australian Muslims, embarking on their sacred pilgrimages to Makkah and Madinah.",
    "With a commitment to excellence and a profound understanding of the significance of these journeys, we set out to create a travel agency that prioritises the experience of every pilgrim.",
    "From humble beginnings, Al Haramain Travels has grown into a trusted name, known for our exceptional service and dedication to making each pilgrimage a deeply rewarding experience. Our team of experienced Shaykhs & Students brings a wealth of knowledge and expertise, ensuring that every aspect of your journey is meticulously planned and executed.",
  ],
};

// Services
export const services: Service[] = [
  {
    icon: Plane,
    title: "Flight Bookings",
    description: "Seamless travel arrangements with premium partner airlines",
  },
  {
    icon: MapPin,
    title: "Premium Hotels",
    description: "Comfortable accommodations near the holy sites",
  },
  {
    icon: Calendar,
    title: "Visa Services",
    description: "Fast-track Umrah & Hajj visa processing",
  },
  {
    icon: Users,
    title: "Group Tours",
    description: "Guided tours with experienced Shaykhs & Students",
  },
  {
    icon: BookOpen,
    title: "Spiritual Guidance",
    description: "Learn and grow with knowledgeable scholars throughout your journey",
  },
  {
    icon: Heart,
    title: "Personalised Care",
    description: "Every detail meticulously planned for your comfort",
  },
];

// Upcoming Umrah Trips
export const umrahTrips: UmrahTrip[] = [
  {
    name: "Yeah The Boys IV Umrah Trip",
    subtitle: "Men's Only",
    price: "From $5,699.00",
    capacity: "45 People",
    duration: "10 Days 10 Nights",
    description:
      "Yeah the Boys IV is back, bigger, better, and more meaningful than ever. This exclusive men's-only Umrah trip brings together brothers from all over Australia to embark on a spiritual, physical, and emotional journey like no other.",
    expired: true,
  },
  {
    name: "Budget Umrah",
    subtitle: "October 2025",
    price: "From $4,200.00",
    capacity: "45 People",
    duration: "10 Days 10 Nights",
    description:
      "Our Budget Umrah – October 2025 trip is designed for families, brothers, and sisters looking for a spiritually uplifting journey at an affordable price. Whether you're travelling with loved ones or on your own, this package offers everything you need for a stress-free and budget-friendly Umrah experience.",
    expired: true,
  },
  {
    name: "Bridge to Blessings 2",
    subtitle: "Family Friendly",
    price: "From $5,800.00",
    capacity: "45 People",
    duration: "10 Days 10 Nights",
    description:
      "Following the incredible success of our previous family-friendly Umrah journey, this unique trip is designed for brothers, sisters, families, couples, and solo travellers looking to experience a spiritually uplifting Umrah together.",
    expired: true,
  },
  {
    name: "Yeah The Boys V",
    subtitle: "Men's Only",
    price: "From $5,699.00",
    capacity: "45 People",
    duration: "10 Days 10 Nights",
    description:
      "Yeah the Boys V is back, bigger, better, and more meaningful than ever. This exclusive men's-only Umrah trip brings together brothers from all over Australia to embark on a spiritual, physical, and emotional journey like no other.",
    expired: false,
  },
  {
    name: "Ramadan Umrah 2026",
    subtitle: "Ramadan Special",
    price: "From $6,700.00",
    capacity: "45 People",
    duration: "16 Days 16 Nights",
    description:
      "Experience Ramadan in the holiest places on Earth. This exclusive trip brings together pilgrims from all over Australia to embark on a spiritual, physical, and emotional journey like no other during the blessed month.",
    expired: false,
  },
];

// Partners
export const partners: Partner[] = [
  { name: "Marriott Hotels" },
  { name: "Oman Air" },
  { name: "Hilton Hotels & Resorts" },
  { name: "Ministry of Hajj and Umrah" },
  { name: "Pullman Hotels and Resorts" },
  { name: "Qatar Airways" },
];

// Stats
export const stats: Stat[] = [
  { number: "1000+", label: "Happy Pilgrims" },
  { number: "5+", label: "Years Experience" },
  { number: "10+", label: "Expert Shaykhs" },
  { number: "4.9", label: "Star Rating" },
];

// Contact Info
export const contactInfo = {
  phone: "+61 123 456 789",
  email: "info@alharamaintravels.com.au",
  addresses: [
    { location: "Preston, Victoria 3072" },
    { location: "Lakemba, New South Wales 2195" },
  ],
};

// Footer Links
export const footerLinks = {
  quick: [
    { href: "/", label: "Home" },
    { href: "#about", label: "About us" },
    { href: "#umrah", label: "Services" },
    { href: "#contact", label: "Contact" },
  ],
  help: [
    { href: "#", label: "Deliveries & Returns" },
    { href: "#", label: "FAQs" },
    { href: "#blogs", label: "Blog" },
  ],
  legal: [
    { href: "#", label: "Terms & Conditions" },
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Refund Policy" },
  ],
};

// Gallery images (placeholder paths - you'd replace with actual images)
export const galleryImages = [
  { src: "/gallery/kaaba-1.jpg", alt: "Clock Tower - Kaaba" },
  { src: "/gallery/masjid-nabawi.jpg", alt: "Canopies - Masjid An-Nabawi" },
  { src: "/gallery/kaaba-2.jpg", alt: "Kaaba" },
  { src: "/gallery/kaaba-3.jpg", alt: "Kaaba" },
  { src: "/gallery/masjid-nabawi-2.jpg", alt: "Masjid An-Nabawi" },
];

// Testimonials
export const testimonials: Testimonial[] = [
  {
    name: "Ahmed Hassan",
    location: "Sydney, Australia",
    text: "Exceptional service from start to finish. The hotel was steps away from Haram and the support team was available 24/7. Al Haramain made our family's first Umrah truly special.",
  },
  {
    name: "Fatima Ali",
    location: "Melbourne, Australia",
    text: "This was my first Umrah and Al-Haramain made it truly special. Every detail was perfectly arranged. The Shaykhs were knowledgeable and caring.",
  },
  {
    name: "Mohammed Yusuf",
    location: "Brisbane, Australia",
    text: "The Yeah The Boys trip exceeded all expectations. Brotherhood, spirituality, and an unforgettable experience. Can't wait for the next one!",
  },
];

// Legacy packages export (for backward compatibility)
export interface Package {
  name: string;
  price: string;
  duration: string;
  features: string[];
  popular: boolean;
}

export const packages: Package[] = [
  {
    name: "Budget Umrah",
    price: "$4,200",
    duration: "10 Days",
    features: [
      "Return Flights",
      "3-Star Hotel",
      "Breakfast Included",
      "Airport Transfers",
      "Visa Processing",
    ],
    popular: false,
  },
  {
    name: "Yeah The Boys V",
    price: "$5,699",
    duration: "10 Days",
    features: [
      "Return Flights",
      "4-Star Hotel",
      "All Meals",
      "Private Transfers",
      "Visa Processing",
      "Guided Tours",
      "Ziyarat Included",
    ],
    popular: true,
  },
  {
    name: "Ramadan Umrah 2026",
    price: "$6,700",
    duration: "16 Days",
    features: [
      "Premium Flights",
      "5-Star Hotel",
      "All Meals",
      "Private Vehicle",
      "Visa Processing",
      "Personal Guide",
      "All Ziyarat",
      "24/7 Support",
    ],
    popular: false,
  },
];
