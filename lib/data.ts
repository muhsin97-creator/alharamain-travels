import {
  Plane,
  MapPin,
  Calendar,
  Users,
  Shield,
  Award,
  LucideIcon,
} from "lucide-react";

export interface Service {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export interface Package {
  name: string;
  price: string;
  duration: string;
  features: string[];
  popular: boolean;
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

export const navigationLinks = [
  { href: "#packages", label: "Packages" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About Us" },
  { href: "#contact", label: "Contact" },
];

export const services: Service[] = [
  {
    icon: Plane,
    title: "Flight Bookings",
    desc: "Direct flights to Jeddah & Medina with premium airlines",
  },
  {
    icon: MapPin,
    title: "5-Star Hotels",
    desc: "Accommodation near Haram with stunning views",
  },
  {
    icon: Calendar,
    title: "Visa Services",
    desc: "Fast-track Umrah & Hajj visa processing",
  },
  {
    icon: Users,
    title: "Group Tours",
    desc: "Guided tours with experienced scholars",
  },
  {
    icon: Shield,
    title: "Travel Insurance",
    desc: "Comprehensive coverage for peace of mind",
  },
  {
    icon: Award,
    title: "VIP Services",
    desc: "Exclusive access and personalized assistance",
  },
];

export const packages: Package[] = [
  {
    name: "Economy",
    price: "£1,299",
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
    name: "Premium",
    price: "£2,499",
    duration: "12 Days",
    features: [
      "Return Flights",
      "5-Star Hotel",
      "All Meals",
      "Private Transfers",
      "Visa Processing",
      "Guided Tours",
      "Ziyarat Included",
    ],
    popular: true,
  },
  {
    name: "VIP",
    price: "£4,999",
    duration: "14 Days",
    features: [
      "Business Class",
      "5-Star Suite",
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

export const testimonials: Testimonial[] = [
  {
    name: "Ahmed Hassan",
    location: "London, UK",
    text: "Exceptional service from start to finish. The hotel was steps away from Haram and the support team was available 24/7.",
  },
  {
    name: "Fatima Ali",
    location: "Birmingham, UK",
    text: "This was my first Umrah and Al-Haramain made it truly special. Every detail was perfectly arranged.",
  },
  {
    name: "Mohammed Yusuf",
    location: "Manchester, UK",
    text: "The VIP package exceeded all expectations. Personal guide was incredibly knowledgeable and helpful throughout.",
  },
];

export const stats: Stat[] = [
  { number: "10K+", label: "Happy Pilgrims" },
  { number: "15+", label: "Years Experience" },
  { number: "50+", label: "Expert Staff" },
  { number: "4.9", label: "Star Rating" },
];

export const contactInfo = {
  phone: "+44 123 456 7890",
  email: "info@alharamaintravels.com",
  address: "123 Travel Street, London, UK",
};

export const socialLinks = [
  { name: "Instagram", icon: "Instagram", href: "#" },
  { name: "Facebook", icon: "Facebook", href: "#" },
];

export const footerLinks = {
  quick: [
    { href: "#packages", label: "Packages" },
    { href: "#services", label: "Services" },
    { href: "#about", label: "About Us" },
    { href: "#contact", label: "Contact" },
  ],
  legal: [
    { href: "#", label: "Terms & Conditions" },
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Refund Policy" },
    { href: "#", label: "ATOL Certificate" },
  ],
};

