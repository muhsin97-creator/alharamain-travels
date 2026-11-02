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
  Clock,
  Phone,
  Headphones,
  Map,
  Star,
} from "lucide-react";

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface UmrahTrip {
  slug: string;
  name: string;
  subtitle: string;
  price: string;
  priceNum: number;
  capacity: string;
  duration: string;
  description: string;
  longDescription: string;
  expired: boolean;
  featured: boolean;
  included: string[];
  excluded: string[];
  faqs: FAQ[];
  highlights: string[];
  ageRestriction: string;
  languages: string[];
  image?: string;
  /** Confirmed travel dates, e.g. "26 February to 11 March 2027" */
  dates?: string;
  /** Deposit required to secure a place, e.g. "$2,000" */
  deposit?: string;
  /** Land-only price for pilgrims arranging their own flights, e.g. "$3,999" */
  landPrice?: string;
  hotels?: { makkah: string; madinah: string };
}

export interface UmrahCompanionService {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  image?: string;
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
  { href: "/about", label: "About" },
  { href: "/services/umrah", label: "Umrah Trips" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

// How a booking works, start to finish (home + trips page)
export const journeySteps = [
  {
    title: "Enquire",
    description:
      "Tell us which trip you are interested in. We call you back, answer your questions and hold your spot.",
  },
  {
    title: "Secure your place",
    description:
      "Pay a deposit and settle the balance in instalments. The full amount is due four weeks before departure.",
  },
  {
    title: "We prepare everything",
    description:
      "Flights, Umrah visa, insurance, hotels near the Haram and ground transport are all arranged for you.",
  },
  {
    title: "Travel with your group",
    description:
      "Fly out with your Shaykh and group leaders, perform Umrah with guidance, and visit the sites of Makkah and Madinah together.",
  },
];

// General questions (home + contact page)
export const generalFaqs: FAQ[] = [
  {
    question: "How do I book an Umrah trip?",
    answer:
      "Choose a trip and send us an enquiry through the website, or call or WhatsApp us directly. Our team will confirm availability, answer your questions and guide you through the deposit and paperwork.",
  },
  {
    question: "Can I pay in instalments?",
    answer:
      "Yes. You can pay in full or in instalments. The full balance must be cleared four weeks before departure.",
  },
  {
    question: "Is the Umrah visa included?",
    answer:
      "Yes. Every package includes Umrah visa processing and the mandatory health insurance. We handle the paperwork and confirm your visa before you fly.",
  },
  {
    question: "Which cities do you depart from?",
    answer:
      "Our groups usually depart from Sydney and Melbourne. Pilgrims from other cities can book connecting flights and join the group at the departure airport, or meet us in Saudi Arabia on a land-only package.",
  },
  {
    question: "I am travelling alone. Is that okay?",
    answer:
      "Absolutely. Many of our pilgrims travel solo and leave with lifelong friendships. You are placed with the group from day one and never left to find your own way.",
  },
  {
    question: "Can I customise a package or travel privately?",
    answer:
      "Yes. Our Umrah Companion service arranges private, guided Umrah trips for individuals, couples and families outside of our group departures.",
  },
  {
    question: "What if I need to cancel?",
    answer:
      "Contact us as soon as possible. Cancellation terms depend on the package and how close to departure you are. Our team will explain your options and our refund policy before you book.",
  },
];

// Hero trip spotlight (rotates on the home page)
export const heroSlides = [
  {
    title: "Yeah The Boys V",
    subtitle: "Men's only",
    description:
      "Our brotherhood trip. Flights, 5-star hotels by the Haram and a Shaykh with you every step.",
    link: "/umrah/yeah-the-boys-v",
    image: "/trips/ytb-kaaba-pilgrims.jpg",
    meta: "10 days, from $5,699",
  },
  {
    title: "Ramadan Umrah 2027",
    subtitle: "Ramadan special",
    description:
      "Break your fast facing the Kaaba and pray Taraweeh in the Haram. Places go first.",
    link: "/umrah/ramadan-umrah-2027",
    image: "/gallery/clock-tower-dawn.jpg",
    meta: "26 Feb to 11 Mar 2027, from $6,799",
  },
  {
    title: "Bridge to Blessings 3",
    subtitle: "Family friendly",
    description:
      "Our family-friendly guided Umrah returns for brothers, sisters, couples and solo travellers.",
    link: "/umrah/bridge-to-blessings-3",
    image: "/trips/btb-nabawi-gates.jpg",
    meta: "10 days, register your interest",
  },
];

// About section content
export const aboutContent = {
  title: "Al Haramain Travels",
  subtitle: "Your Trusted Companion for Sacred Journeys",
  paragraphs: [
    "Al Haramain Travels was founded with a singular purpose: to facilitate and enhance the spiritual journeys of Umrah for Muslims around Australia and the world. Our story began with two friends, a deep-rooted passion for helping Australian Muslims, embarking on their sacred pilgrimages to Makkah and Madinah.",
    "With a commitment to excellence and a profound understanding of the significance of these journeys, we set out to create a travel agency that prioritises the experience of every pilgrim.",
    "From humble beginnings, Al Haramain Travels has grown into a trusted name, known for our exceptional service and dedication to making each pilgrimage a deeply rewarding experience. Our team of experienced Shaykhs & Students brings a wealth of knowledge and expertise, ensuring that every aspect of your journey is meticulously planned and executed.",
  ],
  mission: "To facilitate seamless and spiritually enriching journeys to the holy cities of Makkah and Madinah, ensuring every pilgrim experiences a deeply rewarding pilgrimage.",
  vision: "To be Australia's most trusted Islamic travel agency, known for our dedication to service excellence and spiritual guidance.",
  values: [
    { title: "Excellence", description: "We strive for the highest standards in every aspect of our service." },
    { title: "Integrity", description: "We operate with honesty and transparency in all our dealings." },
    { title: "Compassion", description: "We treat every pilgrim with care, understanding, and respect." },
    { title: "Knowledge", description: "Our team is well-versed in Islamic teachings and travel expertise." },
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
    description: "Fast-track Umrah visa processing",
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

// Umrah Companion Services
export const umrahCompanionServices: UmrahCompanionService[] = [
  {
    icon: Users,
    title: "Personalised Assistance",
    description: "From the moment you decide to embark on your Umrah journey, our dedicated companions are there to assist you with your Umrah Trip. This includes Umrah, Airport pick-ups, hotel check-ins, and Ziyaarah. Our companions provide valuable insights and guidance, helping you connect more deeply with the spiritual aspects of your journey.",
  },
  {
    icon: Map,
    title: "Guided Tours",
    description: "Our knowledgeable companions offer guided tours of the holy sites in Mecca and Medina, providing you with historical and religious insights that enrich your spiritual experience.",
  },
  {
    icon: Headphones,
    title: "Query Support",
    description: "Our Umrah Companions are available around the clock to assist you with any needs or concerns during your pilgrimage. Whether you require Hotel assistance, recommending food places, travel queries, or simply have any questions, we are here to help. Fluent in Arabic, familiar with Saudi Arabia and learned in the Qur'aan and Sunnah, they're more than qualified to help.",
  },
  {
    icon: BookOpen,
    title: "Umrah Guidance",
    description: "Receive a hold-your-hand guidance and support from our companions during your Umrah, who are well-versed in the rituals and significance of Umrah. They will help you perform your Umrah with confidence and devotion.",
  },
];

// Upcoming Umrah Trips
export const umrahTrips: UmrahTrip[] = [
  {
    slug: "yeah-the-boys-iv",
    name: "Yeah The Boys IV Umrah Trip",
    subtitle: "Men's Only",
    price: "From $5,699.00",
    priceNum: 5699,
    capacity: "45 People",
    duration: "10 Days 10 Nights",
    description:
      "Yeah the Boys IV is back, bigger, better, and more meaningful than ever. This exclusive men's-only Umrah trip brings together brothers from all over Australia to embark on a spiritual, physical, and emotional journey like no other.",
    longDescription: `Get ready for the most anticipated brotherhood journey of the year!

Yeah the Boys IV is back, bigger, better, and more meaningful than ever. This exclusive men's-only Umrah trip brings together brothers from all over Australia to embark on a spiritual, physical, and emotional journey like no other.

We combine the sacred pilgrimage of Umrah with a unique brotherhood experience designed to build lasting connections, challenge your mindset, and inspire positive change in your life. Expect a premium, structured itinerary with just the right balance of 'ibadah, learning, adventure, and bonding, all during the best time of the year.

Whether you're travelling solo or with your mates, this is your chance to surround yourself with like-minded brothers, unplug from the dunya, and reconnect with your purpose.`,
    expired: true,
    featured: false,
    included: [
      "24/7 dedicated group support",
      "Breakfast",
      "Flights",
      "Guided Umrah experience with group leader and scholar",
      "Premium 5-star accommodation in Makkah and Madinah (walking distance to Haramain)",
      "Private group ground transport (including Haramain Train)",
      "Umrah visa and mandatory health insurance",
    ],
    excluded: [
      "Airport Transfer",
      "BBQ Night",
      "Guide",
      "Insurance",
      "Optional activities not listed in the official itinerary",
      "Personal expenses (shopping, souvenirs, snacks)",
    ],
    faqs: [
      {
        question: "I'm not from Australia, can I attend this trip?",
        answer: "Absolutely, if you're from UK, Europe, USA, Canada and New Zealand, you can book our land package and meet the group in Saudi Arabia.",
      },
      {
        question: "Do I have to pay in one go?",
        answer: "You can, but payments can be made in instalments, and the full balance must be cleared 4 weeks before departure.",
      },
      {
        question: "Who is this trip designed for?",
        answer: "Muslim brothers aged 14+ from across Australia, seeking a life-changing Umrah experience with a strong focus on brotherhood and personal growth.",
      },
      {
        question: "Do I need to be experienced in travelling to Saudi?",
        answer: "Not at all! We handle everything from flights and visas to accommodation and local guidance.",
      },
      {
        question: "Can I come alone?",
        answer: "Absolutely. Many of our brothers travel solo and leave with lifelong friendships.",
      },
    ],
    highlights: [
      "Brotherhood Like No Other - This isn't just a trip, it's a life-changing experience with a group of brothers who push you to grow spiritually, mentally, and physically.",
      "Stress-Free Travel - We handle the entire process from start to finish. You just turn up ready to benefit from the journey.",
      "Premium Experience - From the accommodation to the itinerary, we prioritise your comfort, safety, and spiritual well-being.",
      "Purpose-Driven - We're not just here to tick off rituals. We're here to elevate you, reset your mindset, and build real, lasting brotherhood.",
      "Proven Success - With many sold-out trips behind us, we know exactly how to create an atmosphere you won't find anywhere else.",
    ],
    ageRestriction: "14+",
    languages: ["English"],
    image: "/trips/ytb-kaaba-pilgrims.jpg",
  },
  {
    slug: "budget-umrah",
    name: "Budget Umrah",
    subtitle: "October 2025",
    price: "From $4,200.00",
    priceNum: 4200,
    capacity: "45 People",
    duration: "10 Days 10 Nights",
    description:
      "Our Budget Umrah, October 2025 trip is designed for families, brothers, and sisters looking for a spiritually uplifting journey at an affordable price.",
    longDescription: `Our Budget Umrah, October 2025 trip is designed for families, brothers, and sisters looking for a spiritually uplifting journey at an affordable price. Whether you're travelling with loved ones or on your own, this package offers everything you need for a stress-free and budget-friendly Umrah experience.

With comfortable accommodation, essential travel services, and a structured itinerary, you'll be able to focus on your worship while we take care of the logistics. Travel with a group of like-minded individuals, strengthen your connection with Allah, and make unforgettable memories without breaking the bank.`,
    expired: true,
    featured: false,
    included: [
      "Return flights from major Australian cities",
      "Comfortable 3-4 star accommodation",
      "Breakfast included",
      "Airport transfers",
      "Umrah visa processing",
      "Group support throughout the journey",
    ],
    excluded: [
      "Lunch and dinner",
      "Personal expenses",
      "Travel insurance",
      "Optional tours",
    ],
    faqs: [
      {
        question: "Is this trip suitable for families?",
        answer: "Yes! This trip is designed for families, couples, and individuals looking for an affordable Umrah experience.",
      },
      {
        question: "What's included in the budget package?",
        answer: "The package includes flights, accommodation, breakfast, airport transfers, and visa processing.",
      },
    ],
    highlights: [
      "Affordable pricing without compromising on essentials",
      "Family-friendly environment",
      "Comfortable accommodation near the Haram",
      "Experienced group leaders",
    ],
    ageRestriction: "All ages welcome",
    languages: ["English"],
    image: "/trips/btb-haram-dusk.jpg",
  },
  {
    slug: "bridge-to-blessings-2",
    name: "Bridge to Blessings 2",
    subtitle: "Family Friendly",
    price: "From $5,800.00",
    priceNum: 5800,
    capacity: "45 People",
    duration: "10 Days 10 Nights",
    description:
      "Following the incredible success of our previous family-friendly Umrah journey, this unique trip is designed for brothers, sisters, families, couples, and solo travellers looking to experience a spiritually uplifting Umrah together.",
    longDescription: `Following the incredible success of our previous family-friendly Umrah journey, this unique trip is designed for brothers, sisters, families, couples, and solo travellers looking to experience a spiritually uplifting Umrah together.

This is not just an Umrah, it's a complete, guided experience where you'll share unforgettable moments of worship, reflection, and community during the most blessed time of the year. Whether you're coming with your loved ones or meeting new ones on the way, Bridge to Blessings 2 is built to create lasting memories while reviving hearts and strengthening our connection with Allah in the company of a beautiful, diverse group.`,
    expired: true,
    featured: false,
    included: [
      "Return flights",
      "Premium 4-5 star accommodation",
      "Daily breakfast",
      "All ground transportation",
      "Umrah visa and health insurance",
      "Guided Umrah with experienced scholars",
      "Ziyaarah tours",
    ],
    excluded: [
      "Personal expenses",
      "Optional activities",
      "Travel insurance upgrades",
    ],
    faqs: [
      {
        question: "Can families with children attend?",
        answer: "Absolutely! This trip is specifically designed to be family-friendly and welcoming to all ages.",
      },
      {
        question: "Are there separate arrangements for sisters?",
        answer: "Yes, we ensure appropriate accommodations and arrangements for all participants.",
      },
    ],
    highlights: [
      "Family-friendly environment",
      "Diverse group experience",
      "Guided spiritual journey",
      "Premium accommodations",
      "Community building",
    ],
    ageRestriction: "All ages welcome",
    languages: ["English"],
    image: "/trips/btb-quba-masjid.jpg",
  },
  {
    slug: "yeah-the-boys-v",
    name: "Yeah The Boys V",
    subtitle: "Men's Only",
    price: "From $5,699.00",
    priceNum: 5699,
    capacity: "45 People",
    duration: "10 Days 10 Nights",
    description:
      "Yeah the Boys V is back, bigger, better, and more meaningful than ever. This exclusive men's-only Umrah trip brings together brothers from all over Australia to embark on a spiritual, physical, and emotional journey like no other.",
    longDescription: `Get ready for the most anticipated brotherhood journey of the year!

Yeah the Boys V is back, bigger, better, and more meaningful than ever. This exclusive men's-only Umrah trip brings together brothers from all over Australia to embark on a spiritual, physical, and emotional journey like no other.

We combine the sacred pilgrimage of Umrah with a unique brotherhood experience designed to build lasting connections, challenge your mindset, and inspire positive change in your life. Expect a premium, structured itinerary with just the right balance of 'ibadah, learning, adventure, and bonding, all during the best time of the year.

Whether you're travelling solo or with your mates, this is your chance to surround yourself with like-minded brothers, unplug from the dunya, and reconnect with your purpose.`,
    expired: false,
    featured: true,
    included: [
      "24/7 dedicated group support",
      "Breakfast",
      "Flights",
      "Guided Umrah experience with group leader and scholar",
      "Premium 5-star accommodation in Makkah and Madinah (walking distance to Haramain)",
      "Private group ground transport (including Haramain Train)",
      "Umrah visa and mandatory health insurance",
    ],
    excluded: [
      "Airport Transfer",
      "BBQ Night",
      "Guide",
      "Insurance",
      "Optional activities not listed in the official itinerary",
      "Personal expenses (shopping, souvenirs, snacks)",
    ],
    faqs: [
      {
        question: "I'm not from Australia, can I attend this trip?",
        answer: "Absolutely, if you're from UK, Europe, USA, Canada and New Zealand, you can book our land package and meet the group in Saudi Arabia.",
      },
      {
        question: "Do I have to pay in one go?",
        answer: "You can, but payments can be made in instalments, and the full balance must be cleared 4 weeks before departure.",
      },
      {
        question: "Who is this trip designed for?",
        answer: "Muslim brothers aged 14+ from across Australia, seeking a life-changing Umrah experience with a strong focus on brotherhood and personal growth.",
      },
      {
        question: "Do I need to be experienced in travelling to Saudi?",
        answer: "Not at all! We handle everything from flights and visas to accommodation and local guidance.",
      },
      {
        question: "Can I come alone?",
        answer: "Absolutely. Many of our brothers travel solo and leave with lifelong friendships.",
      },
    ],
    highlights: [
      "Brotherhood Like No Other - This isn't just a trip, it's a life-changing experience with a group of brothers who push you to grow spiritually, mentally, and physically.",
      "Stress-Free Travel - We handle the entire process from start to finish. You just turn up ready to benefit from the journey.",
      "Premium Experience - From the accommodation to the itinerary, we prioritise your comfort, safety, and spiritual well-being.",
      "Purpose-Driven - We're not just here to tick off rituals. We're here to elevate you, reset your mindset, and build real, lasting brotherhood.",
      "Proven Success - With many sold-out trips behind us, we know exactly how to create an atmosphere you won't find anywhere else.",
    ],
    ageRestriction: "14+",
    languages: ["English"],
    image: "/trips/ytb-nabawi-umbrellas.jpg",
  },
  {
    slug: "ramadan-umrah-2026",
    name: "Ramadan Umrah 2026",
    subtitle: "Ramadan Special",
    price: "From $6,700.00",
    priceNum: 6700,
    capacity: "45 People",
    duration: "16 Days 16 Nights",
    description:
      "Experience Ramadan in the holiest places on Earth. This exclusive trip brings together pilgrims from all over Australia to embark on a spiritual, physical, and emotional journey like no other during the blessed month.",
    longDescription: `Experience the blessed month of Ramadan in the holiest places on Earth!

This exclusive Ramadan Umrah 2026 trip brings together pilgrims from all over Australia to embark on a spiritual, physical, and emotional journey like no other during the most sacred time of the year.

Imagine breaking your fast at the Haram, praying Taraweeh in Masjid al-Haram, and spending your nights in worship surrounded by millions of believers. This is a once-in-a-lifetime opportunity to experience Ramadan as it was meant to be experienced.

Our comprehensive package ensures you have everything you need to focus on your worship while we handle all the logistics.`,
    expired: true,
    featured: false,
    included: [
      "Return flights from major Australian cities",
      "Premium 5-star accommodation in Makkah and Madinah",
      "Daily Suhoor and Iftar",
      "All ground transportation",
      "Umrah visa and health insurance",
      "Guided Umrah experience",
      "Ziyaarah tours",
      "24/7 group support",
      "Haramain Train tickets",
    ],
    excluded: [
      "Personal expenses",
      "Optional activities",
      "Additional meals outside of Suhoor/Iftar",
    ],
    faqs: [
      {
        question: "Will we be there for the entire month of Ramadan?",
        answer: "This trip covers 16 days during the blessed month, allowing you to experience the heart of Ramadan in the holy cities.",
      },
      {
        question: "Is Iftar provided?",
        answer: "Yes, daily Suhoor and Iftar are included in the package.",
      },
      {
        question: "How close is the accommodation to the Haram?",
        answer: "Our premium 5-star hotels are within walking distance to both Masjid al-Haram and Masjid an-Nabawi.",
      },
    ],
    highlights: [
      "Experience Ramadan in Makkah and Madinah",
      "Break your fast at the Haram",
      "Pray Taraweeh in Masjid al-Haram",
      "Premium 5-star accommodation",
      "All-inclusive Suhoor and Iftar",
      "Spiritual guidance throughout",
    ],
    ageRestriction: "All ages welcome",
    languages: ["English"],
    image: "/gallery/haram-colonnade.jpg",
  },
  {
    slug: "bridge-to-blessings-3",
    name: "Bridge to Blessings 3",
    subtitle: "Family Friendly",
    price: "Register Your Interest",
    priceNum: 5800,
    capacity: "45 People",
    duration: "10 Days 10 Nights",
    description:
      "Our beloved family-friendly Umrah journey returns. Bridge to Blessings 3 welcomes brothers, sisters, families, couples and solo travellers from across Australia for a spiritually uplifting guided Umrah together.",
    longDescription: `Following the incredible success of Bridge to Blessings 1 and 2, our beloved family-friendly Umrah journey returns!

Bridge to Blessings 3 is designed for brothers, sisters, families, couples, and solo travellers looking to experience a spiritually uplifting Umrah together. This is not just an Umrah trip, it's a complete, guided experience where you'll share unforgettable moments of worship, reflection, and community.

Whether you're travelling with your loved ones or meeting new companions along the way, Bridge to Blessings 3 is built to create lasting memories while reviving hearts and strengthening our connection with Allah in the company of a beautiful, diverse group.

Register your interest today and our team will be in touch with dates, pricing and full package details as they are confirmed.`,
    expired: false,
    featured: true,
    included: [
      "Return flights",
      "Premium 4-5 star accommodation",
      "Daily breakfast",
      "All ground transportation",
      "Umrah visa and health insurance",
      "Guided Umrah with experienced scholars",
      "Ziyaarah tours",
    ],
    excluded: [
      "Personal expenses",
      "Optional activities",
      "Travel insurance upgrades",
    ],
    faqs: [
      {
        question: "When will dates and pricing be confirmed?",
        answer: "Full dates and pricing are being finalised now. Register your interest and our team will contact you with all the details as soon as they are released.",
      },
      {
        question: "Can families with children attend?",
        answer: "Absolutely! This trip is specifically designed to be family-friendly and welcoming to all ages.",
      },
      {
        question: "Are there separate arrangements for sisters?",
        answer: "Yes, we ensure appropriate accommodations and arrangements for all participants.",
      },
    ],
    highlights: [
      "Family-friendly environment",
      "Diverse group experience",
      "Guided spiritual journey",
      "Premium accommodations",
      "Community building",
    ],
    ageRestriction: "All ages welcome",
    languages: ["English"],
    image: "/trips/btb-clock-tower-day.jpg",
  },
  {
    slug: "ramadan-umrah-2027",
    name: "Ramadan Umrah 2027",
    subtitle: "Ramadan Special",
    price: "From $6,799.00",
    priceNum: 6799,
    deposit: "$2,000",
    landPrice: "$3,999",
    dates: "26 February to 11 March 2027",
    hotels: { makkah: "Four Points by Sheraton", madinah: "Deyar Al Eiman" },
    capacity: "45 People",
    duration: "14 Days 13 Nights",
    description:
      "Experience Ramadan 2027 in the holiest places on Earth. Join pilgrims from all over Australia for a guided Umrah during the blessed month, breaking your fast at the Haram and praying Taraweeh in Masjid al-Haram.",
    longDescription: `Experience the blessed month of Ramadan in the holiest places on Earth!

Following our unforgettable Ramadan 2026 journey, Ramadan Umrah 2027 brings together pilgrims from all over Australia for a spiritual, physical, and emotional journey like no other during the most sacred time of the year.

Imagine breaking your fast at the Haram, praying Taraweeh in Masjid al-Haram, and spending your nights in worship surrounded by millions of believers. This is a once-in-a-lifetime opportunity to experience Ramadan as it was meant to be experienced.

Dates are confirmed: 26 February to 11 March 2027, departing Australia and returning after the final nights of Ramadan, in sha Allah. We stay at Four Points by Sheraton in Makkah and Deyar Al Eiman in Madinah.

Places for Ramadan fill faster than any other trip of the year. Secure your spot with a $2,000 deposit and pay the balance in instalments. A land-only package is available for $3,999 if you prefer to arrange your own flights.`,
    expired: false,
    featured: true,
    included: [
      "Return flights from major Australian cities",
      "Four Points by Sheraton, Makkah",
      "Deyar Al Eiman, Madinah",
      "Daily Suhoor and Iftar",
      "All ground transportation",
      "Umrah visa and health insurance",
      "Guided Umrah experience",
      "Ziyaarah tours",
      "24/7 group support",
      "Haramain Train tickets",
    ],
    excluded: [
      "Personal expenses",
      "Optional activities",
      "Additional meals outside of Suhoor/Iftar",
    ],
    faqs: [
      {
        question: "How much is the deposit?",
        answer: "A $2,000 deposit per person secures your place. The balance can be paid in instalments and must be cleared four weeks before departure.",
      },
      {
        question: "Is there a land-only option?",
        answer: "Yes. The land package is $3,999 per person and includes everything in the full package except international flights. You arrange your own flights and meet the group in Saudi Arabia.",
      },
      {
        question: "Which part of Ramadan does the trip cover?",
        answer: "The trip runs from 26 February to 11 March 2027, which falls in the second half of Ramadan 1448 and includes the last ten nights, in sha Allah. Exact Islamic dates depend on the moon sighting.",
      },
      {
        question: "Is Iftar provided?",
        answer: "Yes, daily Suhoor and Iftar are included in the package.",
      },
      {
        question: "Where will we stay?",
        answer: "Our group stays at Four Points by Sheraton in Makkah and Deyar Al Eiman in Madinah. Ask our team about transport arrangements between the hotel and the Haram.",
      },
    ],
    highlights: [
      "Experience the last ten nights of Ramadan in Makkah and Madinah",
      "Break your fast at the Haram",
      "Pray Taraweeh in Masjid al-Haram",
      "Four Points by Sheraton and Deyar Al Eiman",
      "All-inclusive Suhoor and Iftar",
      "Spiritual guidance throughout",
    ],
    ageRestriction: "All ages welcome",
    languages: ["English"],
    image: "/gallery/kaaba.jpg",
  },
];

// Partners
export const partners: Partner[] = [
  { name: "Marriott Hotels", logo: "/marriot.png" },
  { name: "Oman Air", logo: "/omanair.png" },
  { name: "Hilton Hotels & Resorts", logo: "/hilton.png" },
  { name: "Ministry of Hajj and Umrah", logo: "/ministry.png" },
  { name: "Pullman Hotels and Resorts", logo: "/pullman.png" },
  { name: "Qatar Airways", logo: "/qatarairways.png" },
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
  phone: "+61 477 549 505",
  phoneHref: "tel:+61477549505",
  email: "contact@alharamaintravels.com.au",
  website: "alharamaintravels.com.au",
  hours: "Mon to Fri, 9am to 6pm AEST",
  addresses: [
    { location: "Preston, Victoria 3072", state: "VIC" },
    { location: "Lakemba, New South Wales 2195", state: "NSW" },
  ],
  socials: {
    instagram: "https://instagram.com/alharamaintravels_",
    facebook: "https://facebook.com/p/Al-Haramain-Travels-Australia-61564960723351",
    whatsapp: "https://wa.me/61477549505",
    tiktok: "https://tiktok.com/@alharamaintravels_",
  },
};

// Footer Links
export const footerLinks = {
  quick: [
    { href: "/about", label: "About" },
    { href: "/services/umrah", label: "Umrah Trips" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ],
  trips: [
    { href: "/umrah/yeah-the-boys-v", label: "Yeah The Boys V" },
    { href: "/umrah/ramadan-umrah-2027", label: "Ramadan Umrah 2027" },
    { href: "/umrah/bridge-to-blessings-3", label: "Bridge to Blessings 3" },
    { href: "/services/umrah#companion", label: "Umrah Companion" },
  ],
  legal: [
    { href: "/terms", label: "Terms & Conditions" },
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/refund-policy", label: "Refund Policy" },
  ],
};

// Real photos from our past trips, shown on trip detail pages (keyed by trip slug)
export const tripPhotos: Record<string, { src: string; alt: string }[]> = {
  "yeah-the-boys-iv": [
    { src: "/trips/ytb-kaaba-pilgrims.jpg", alt: "Our brothers before the Kaaba, Masjid al-Haram" },
    { src: "/trips/ytb-nabawi-umbrellas.jpg", alt: "Beneath the canopies of Masjid an-Nabawi" },
    { src: "/trips/ytb-green-dome.jpg", alt: "The Green Dome, Masjid an-Nabawi" },
    { src: "/trips/ytb-jabal-nour-view.jpg", alt: "The view over Makkah from Jabal al-Nour" },
    { src: "/trips/ytb-date-farm.jpg", alt: "Visiting a Madinah date farm on ziyarah" },
    { src: "/trips/ytb-nabawi-night.jpg", alt: "The courtyard of Masjid an-Nabawi at night" },
  ],
  "yeah-the-boys-v": [
    { src: "/trips/ytb-kaaba-pilgrims.jpg", alt: "Our brothers before the Kaaba, Masjid al-Haram" },
    { src: "/trips/ytb-nabawi-umbrellas.jpg", alt: "Beneath the canopies of Masjid an-Nabawi" },
    { src: "/trips/ytb-green-dome.jpg", alt: "The Green Dome, Masjid an-Nabawi" },
    { src: "/trips/ytb-jabal-nour-view.jpg", alt: "The view over Makkah from Jabal al-Nour" },
    { src: "/trips/ytb-date-farm.jpg", alt: "Visiting a Madinah date farm on ziyarah" },
    { src: "/trips/ytb-nabawi-night.jpg", alt: "The courtyard of Masjid an-Nabawi at night" },
  ],
  "bridge-to-blessings-3": [
    { src: "/trips/btb-clock-tower-day.jpg", alt: "The Abraj Al-Bait Clock Tower above Masjid al-Haram" },
    { src: "/trips/btb-quba-masjid.jpg", alt: "Masjid Quba, the first masjid in Islam" },
    { src: "/trips/btb-uhud-ziyarah.jpg", alt: "Ziyarah at Mount Uhud, Madinah" },
    { src: "/trips/btb-nabawi-gates.jpg", alt: "The gates of Masjid an-Nabawi" },
    { src: "/trips/btb-haram-dusk.jpg", alt: "The minarets of Masjid al-Haram at dusk" },
    { src: "/trips/btb-nabawi-ceiling.jpg", alt: "The golden ceilings of Masjid an-Nabawi" },
  ],
  "ramadan-umrah-2027": [
    { src: "/trips/ytb-kaaba-pilgrims.jpg", alt: "Our pilgrims before the Kaaba, Masjid al-Haram" },
    { src: "/trips/btb-clock-tower-day.jpg", alt: "The Abraj Al-Bait Clock Tower above Masjid al-Haram" },
    { src: "/trips/ytb-green-dome.jpg", alt: "The Green Dome, Masjid an-Nabawi" },
    { src: "/trips/btb-nabawi-ceiling.jpg", alt: "The golden ceilings of Masjid an-Nabawi" },
  ],
  "bridge-to-blessings-2": [
    { src: "/trips/btb-clock-tower-day.jpg", alt: "The Abraj Al-Bait Clock Tower above Masjid al-Haram" },
    { src: "/trips/btb-quba-masjid.jpg", alt: "Masjid Quba, the first masjid in Islam" },
    { src: "/trips/btb-uhud-ziyarah.jpg", alt: "Ziyarah at Mount Uhud, Madinah" },
    { src: "/trips/btb-nabawi-gates.jpg", alt: "The gates of Masjid an-Nabawi" },
    { src: "/trips/btb-haram-dusk.jpg", alt: "The minarets of Masjid al-Haram at dusk" },
    { src: "/trips/btb-nabawi-ceiling.jpg", alt: "The golden ceilings of Masjid an-Nabawi" },
  ],
  "budget-umrah": [
    { src: "/trips/ytb-kaaba-pilgrims.jpg", alt: "Our pilgrims before the Kaaba, Masjid al-Haram" },
    { src: "/trips/btb-haram-dusk.jpg", alt: "The minarets of Masjid al-Haram at dusk" },
    { src: "/trips/ytb-nabawi-umbrellas.jpg", alt: "Beneath the canopies of Masjid an-Nabawi" },
    { src: "/trips/btb-quba-masjid.jpg", alt: "Masjid Quba, the first masjid in Islam" },
  ],
  "ramadan-umrah-2026": [
    { src: "/trips/ytb-kaaba-pilgrims.jpg", alt: "Our pilgrims before the Kaaba, Masjid al-Haram" },
    { src: "/trips/btb-clock-tower-day.jpg", alt: "The Abraj Al-Bait Clock Tower above Masjid al-Haram" },
    { src: "/trips/ytb-green-dome.jpg", alt: "The Green Dome, Masjid an-Nabawi" },
    { src: "/trips/btb-nabawi-ceiling.jpg", alt: "The golden ceilings of Masjid an-Nabawi" },
  ],
};

// Gallery images
export const galleryImages = [
  { src: "/gallery/kaaba.jpg", alt: "The Holy Kaaba, Masjid al-Haram, Makkah" },
  { src: "/gallery/masjid-nabawi-green-dome.jpg", alt: "The Green Dome of Masjid an-Nabawi, Madinah" },
  { src: "/gallery/masjid-al-haram-aerial.jpg", alt: "Aerial view of Masjid al-Haram, Makkah" },
  { src: "/gallery/haram-colonnade.jpg", alt: "Golden lanterns along the colonnades of Masjid al-Haram" },
  { src: "/gallery/makkah-sunset.jpg", alt: "Makkah at sunset beneath the Abraj Al-Bait towers" },
  { src: "/gallery/nabawi-pilgrims.jpg", alt: "Pilgrims beneath the canopies of Masjid an-Nabawi" },
  { src: "/gallery/madinah-minarets.jpg", alt: "Minarets of Madinah at golden hour" },
  { src: "/gallery/nabawi-canopy-detail.jpg", alt: "The great canopies of Masjid an-Nabawi" },
  { src: "/gallery/nabawi-sunset.jpg", alt: "Sunset over the courtyard of Masjid an-Nabawi" },
  { src: "/gallery/clock-tower-dawn.jpg", alt: "The Abraj Al-Bait Clock Tower at dawn" },
  { src: "/gallery/jabal-al-nour.jpg", alt: "Jabal al-Nour, home of the Cave of Hira, Makkah" },
  { src: "/gallery/nabawi-minaret.jpg", alt: "A minaret of Masjid an-Nabawi against the sky" },
];

// Testimonials
// Real traveller feedback received via Instagram (lightly edited for spelling only).
// Attribution uses first name + initial for privacy, recommend confirming consent before publishing.
export const testimonials: Testimonial[] = [
  {
    name: "A Yeah The Boys 3 traveller",
    location: "Yeah The Boys 3",
    text: "I was on Yeah The Boys 3 and alhamdulillah, it was the trip of a lifetime.",
  },
  {
    name: "Ahmed A.",
    location: "Yeah The Boys Umrah",
    text: "May Allah reward you all immensely for the effort you put in to make life-changing experiences for so many brothers.",
  },
  {
    name: "Liridon S.",
    location: "Melbourne",
    text: "I'm really looking forward to this, and inshaAllah I'll be recommending you to others in Melbourne.",
  },
  {
    name: "Joanne C.",
    location: "Family Umrah",
    text: "I ask Allah to bless you all for organising this. BarakAllahu feekum, alhamdulillah for everything!",
  },
  {
    name: "Radie",
    location: "Umrah traveller",
    text: "What an amazing service, exactly what I was looking for! Honestly, so grateful to Allah for it.",
  },
];

// Why Choose Us
export const whyChooseUs = [
  {
    icon: Star,
    title: "Brotherhood Like No Other",
    description: "This isn't just a trip, it's a life-changing experience with brothers who push you to grow spiritually, mentally, and physically.",
  },
  {
    icon: Shield,
    title: "Stress-Free Travel",
    description: "We handle the entire process from start to finish. You just turn up ready to benefit from the journey.",
  },
  {
    icon: Award,
    title: "Premium Experience",
    description: "From the accommodation to the itinerary, we prioritise your comfort, safety, and spiritual well-being.",
  },
  {
    icon: Heart,
    title: "Purpose-Driven",
    description: "We're not just here to tick off rituals. We're here to elevate you, reset your mindset, and build real, lasting brotherhood.",
  },
];

