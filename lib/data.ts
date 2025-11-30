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
  { href: "/about", label: "About us" },
  { href: "/services/umrah", label: "Umrah Services" },
  { href: "/services/hajj", label: "Hajj Services" },
  { href: "/hajj-2026", label: "Hajj 2026 Sign Up" },
  { href: "/blog", label: "Blogs" },
  { href: "/contact", label: "Contact" },
];

// Hero slides content
export const heroSlides = [
  {
    title: "Yeah The Boys V Umrah Trip",
    subtitle: "Umrah 2026",
    description:
      "Embark on a spiritual journey like no other with our expertly curated Umrah packages. From seamless travel arrangements to comfortable accommodations near the holy sites, we take care of every detail so you can focus on your spiritual connection.",
    link: "/umrah/yeah-the-boys-v",
  },
  {
    title: "Ramadan Umrah 2026",
    subtitle: "Umrah 2026",
    description:
      "Experience the blessed month of Ramadan in the holiest places on Earth. Join us for an unforgettable spiritual journey during the most sacred time of the year.",
    link: "/umrah/ramadan-umrah-2026",
  },
  {
    title: "Bridge to Blessings 2",
    subtitle: "Family Friendly",
    description:
      "A unique family-friendly Umrah experience designed for brothers, sisters, families, couples, and solo travellers looking to experience a spiritually uplifting Umrah together.",
    link: "/umrah/bridge-to-blessings-2",
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

We combine the sacred pilgrimage of Umrah with a unique brotherhood experience designed to build lasting connections, challenge your mindset, and inspire positive change in your life. Expect a premium, structured itinerary with just the right balance of 'ibadah, learning, adventure, and bonding – all during the best time of the year.

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
      "Brotherhood Like No Other - This isn't just a trip – it's a life-changing experience with a group of brothers who push you to grow spiritually, mentally, and physically.",
      "Stress-Free Travel - We handle the entire process from start to finish. You just turn up ready to benefit from the journey.",
      "Premium Experience - From the accommodation to the itinerary, we prioritise your comfort, safety, and spiritual well-being.",
      "Purpose-Driven - We're not just here to tick off rituals. We're here to elevate you, reset your mindset, and build real, lasting brotherhood.",
      "Proven Success - With many sold-out trips behind us, we know exactly how to create an atmosphere you won't find anywhere else.",
    ],
    ageRestriction: "14+",
    languages: ["English"],
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
      "Our Budget Umrah – October 2025 trip is designed for families, brothers, and sisters looking for a spiritually uplifting journey at an affordable price.",
    longDescription: `Our Budget Umrah – October 2025 trip is designed for families, brothers, and sisters looking for a spiritually uplifting journey at an affordable price. Whether you're travelling with loved ones or on your own, this package offers everything you need for a stress-free and budget-friendly Umrah experience.

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

This is not just an Umrah – it's a complete, guided experience where you'll share unforgettable moments of worship, reflection, and community during the most blessed time of the year. Whether you're coming with your loved ones or meeting new ones on the way, Bridge to Blessings 2 is built to create lasting memories while reviving hearts and strengthening our connection with Allah in the company of a beautiful, diverse group.`,
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

We combine the sacred pilgrimage of Umrah with a unique brotherhood experience designed to build lasting connections, challenge your mindset, and inspire positive change in your life. Expect a premium, structured itinerary with just the right balance of 'ibadah, learning, adventure, and bonding – all during the best time of the year.

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
      "Brotherhood Like No Other - This isn't just a trip – it's a life-changing experience with a group of brothers who push you to grow spiritually, mentally, and physically.",
      "Stress-Free Travel - We handle the entire process from start to finish. You just turn up ready to benefit from the journey.",
      "Premium Experience - From the accommodation to the itinerary, we prioritise your comfort, safety, and spiritual well-being.",
      "Purpose-Driven - We're not just here to tick off rituals. We're here to elevate you, reset your mindset, and build real, lasting brotherhood.",
      "Proven Success - With many sold-out trips behind us, we know exactly how to create an atmosphere you won't find anywhere else.",
    ],
    ageRestriction: "14+",
    languages: ["English"],
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
    expired: false,
    featured: true,
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
  },
];

// Blog Posts
export const blogPosts: BlogPost[] = [
  {
    slug: "prepare-yourself-for-umrah",
    title: "Prepare Yourself for Umrah",
    excerpt: "A comprehensive guide to help you prepare spiritually, physically, and practically for your sacred journey to perform Umrah.",
    content: `
## Preparing for Your Umrah Journey

Performing Umrah is one of the most spiritually rewarding experiences a Muslim can undertake. Proper preparation ensures you can focus entirely on your worship and connection with Allah. Here's a comprehensive guide to help you prepare.

### Spiritual Preparation

**1. Purify Your Intentions**
Before anything else, ensure your intention (niyyah) is purely for the sake of Allah. Umrah should be undertaken seeking His pleasure and forgiveness, not for worldly recognition.

**2. Increase Your Knowledge**
- Learn about the rituals of Umrah in detail
- Study the duas to be recited at each stage
- Understand the significance of each ritual
- Watch videos and read books about Umrah

**3. Repentance and Forgiveness**
- Seek forgiveness from Allah for past sins
- Make amends with anyone you may have wronged
- Settle any debts before departing
- Write a will as recommended before any major journey

### Physical Preparation

**1. Health Check**
- Visit your doctor for a general health check-up
- Ensure all vaccinations are up to date
- Get any necessary medications
- Consider your fitness level – Umrah involves significant walking

**2. Physical Training**
- Start walking regularly to build stamina
- Practice walking in your Ihram garments (for men)
- Get comfortable with modest footwear
- Build endurance for long standing periods

### Practical Preparation

**1. Documentation**
- Ensure your passport is valid for at least 6 months
- Obtain your Umrah visa through a registered agent
- Make copies of all important documents
- Store digital copies in cloud storage

**2. Packing Essentials**
- Ihram garments (white, unstitched cloth for men)
- Comfortable, modest clothing
- Comfortable walking shoes/sandals
- Prayer mat and Quran
- Medications and first aid kit
- Sunscreen and lip balm
- Small bag for carrying essentials during Tawaf

**3. Financial Preparation**
- Set a budget for your trip
- Inform your bank of international travel
- Carry some Saudi Riyals
- Have backup payment methods

### Learning the Rituals

**The Steps of Umrah:**

1. **Ihram** - Enter the state of Ihram before crossing the Miqat
2. **Tawaf** - Circumambulate the Kaaba seven times
3. **Sa'i** - Walk between Safa and Marwah seven times
4. **Halq/Taqsir** - Shave or trim the hair

### Important Duas to Learn

Memorise or have written copies of:
- Talbiyah
- Duas for entering Masjid al-Haram
- Duas during Tawaf
- Duas at Maqam Ibrahim
- Duas during Sa'i
- General supplications

### Tips for a Successful Umrah

1. **Stay hydrated** - The climate in Saudi Arabia can be very hot
2. **Pace yourself** - Don't rush through the rituals
3. **Stay connected with your group** - Keep your phone charged
4. **Be patient** - Crowds can be challenging, especially near the Kaaba
5. **Respect others** - You'll be among millions of pilgrims
6. **Make lots of dua** - This is a time when duas are readily accepted

### After Your Umrah

- Continue the spiritual momentum
- Share your experience with others
- Maintain the good habits you developed
- Plan for your next visit, insha'Allah

May Allah accept your Umrah and make it a means of purification and closeness to Him. Ameen.
    `,
    date: "2024-12-15",
    author: "Al-Haramain Travels Team",
    category: "Umrah Guide",
    readTime: "10 min read",
  },
  {
    slug: "benefits-of-umrah-in-ramadan",
    title: "The Virtues of Performing Umrah in Ramadan",
    excerpt: "Discover the immense spiritual rewards and blessings of performing Umrah during the holy month of Ramadan.",
    content: `
## The Virtues of Performing Umrah in Ramadan

Performing Umrah during Ramadan holds a special place in Islam, with rewards that are multiplied manifold compared to other times of the year.

### The Hadith

The Prophet Muhammad (peace be upon him) said: "Umrah during Ramadan is equivalent to Hajj" or he said "equivalent to Hajj with me." (Bukhari and Muslim)

This hadith highlights the immense reward of performing Umrah during this blessed month.

### Why Ramadan is Special

**1. Multiplied Rewards**
Every good deed in Ramadan is multiplied in reward. Combining the already virtuous act of Umrah with the blessed month creates an exponential increase in rewards.

**2. Spiritual Atmosphere**
The entire Muslim world is focused on worship during Ramadan. Being in Makkah during this time means being surrounded by millions of believers all focused on pleasing Allah.

**3. Breaking Fast at the Haram**
Imagine breaking your fast with dates and Zamzam water while looking at the Kaaba. This experience is indescribable and deeply moving.

**4. Taraweeh at Masjid al-Haram**
Praying Taraweeh behind the Imams of the Haram, listening to the beautiful recitation, is a life-changing experience.

### Practical Considerations

While the rewards are immense, Ramadan Umrah requires additional preparation:

- **Crowds**: Expect larger crowds than usual
- **Weather**: Ramadan may fall in hot months
- **Energy management**: Fasting while performing rituals requires careful planning
- **Booking early**: Ramadan packages sell out quickly

### Tips for Ramadan Umrah

1. Book well in advance
2. Stay hydrated during non-fasting hours
3. Rest adequately between prayers
4. Take advantage of the last ten nights
5. Make lots of dua, especially at Iftar time

May Allah grant us all the opportunity to perform Umrah in Ramadan. Ameen.
    `,
    date: "2024-11-20",
    author: "Al-Haramain Travels Team",
    category: "Spiritual Guidance",
    readTime: "6 min read",
  },
  {
    slug: "first-time-umrah-tips",
    title: "First-Time Umrah: Essential Tips for New Pilgrims",
    excerpt: "Going for Umrah for the first time? Here are essential tips to help make your journey smooth and spiritually fulfilling.",
    content: `
## First-Time Umrah: Essential Tips

Congratulations on planning your first Umrah! Here's everything you need to know to make your journey successful.

### Before You Go

**Mental Preparation**
- Understand that this is a spiritual journey, not a holiday
- Set realistic expectations about crowds and challenges
- Focus on the spiritual rewards awaiting you

**Physical Preparation**
- Start walking regularly to build stamina
- Practice wearing your Ihram (for brothers)
- Get comfortable with the heat if travelling in summer

### At the Airport

- Wear comfortable, loose clothing
- Keep all documents easily accessible
- Stay calm and patient – delays happen
- Many pilgrims enter Ihram at the airport

### In Saudi Arabia

**Accommodation Tips**
- Choose hotels close to the Haram if budget allows
- Bring earplugs – the Adhan is loud and beautiful, but you need rest too
- Keep your room key and hotel card with you always

**At the Haram**
- Learn the layout of Masjid al-Haram
- Identify landmarks for meeting points
- Keep your phone charged
- Carry a small bag with essentials

### During Tawaf

- Stay in the outer circles if you're not comfortable with crowds
- Walk at a steady pace
- Focus on your duas, not the crowd
- It's okay to take breaks if needed

### During Sa'i

- The path is air-conditioned and more spacious
- There are wheelchairs available for those who need them
- Stay hydrated with Zamzam water

### Common Mistakes to Avoid

1. Not learning the rituals properly beforehand
2. Rushing through the worship
3. Getting frustrated with crowds
4. Not staying hydrated
5. Overspending on unnecessary items
6. Not making enough dua

### What to Buy

- Zamzam water (to bring home)
- Dates from Madinah
- Prayer beads (Misbaha)
- Attar (Islamic perfume)
- Books and Islamic items
- Gifts for family

### Final Advice

Your first Umrah will be unforgettable. Don't stress about perfection – focus on sincerity. Allah knows your heart and your efforts.

May Allah accept your Umrah and grant you many more opportunities to visit His house. Ameen.
    `,
    date: "2024-10-05",
    author: "Al-Haramain Travels Team",
    category: "Travel Tips",
    readTime: "8 min read",
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
  phone: "+61 477 549 505",
  email: "contact@alharamaintravels.com.au",
  website: "alharamaintravels.com.au",
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
    { href: "/", label: "Home" },
    { href: "/about", label: "About us" },
    { href: "/services/umrah", label: "Umrah Services" },
    { href: "/services/hajj", label: "Hajj Services" },
    { href: "/contact", label: "Contact" },
  ],
  help: [
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "FAQs" },
    { href: "/hajj-2026", label: "Hajj 2026" },
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
  {
    name: "Aisha Rahman",
    location: "Perth, Australia",
    text: "Bridge to Blessings was perfect for our family. The kids were well looked after and the spiritual guidance was invaluable. Highly recommend!",
  },
  {
    name: "Omar Khan",
    location: "Adelaide, Australia",
    text: "Professional, caring, and truly dedicated to making your Umrah journey special. The team went above and beyond at every step.",
  },
];

// Why Choose Us
export const whyChooseUs = [
  {
    icon: Star,
    title: "Brotherhood Like No Other",
    description: "This isn't just a trip – it's a life-changing experience with brothers who push you to grow spiritually, mentally, and physically.",
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

// Hajj Information
export const hajjInfo = {
  title: "Hajj 2026",
  description: "Join us for the journey of a lifetime. Hajj 2026 registrations are now open. Secure your spot for this sacred pilgrimage.",
  highlights: [
    "Comprehensive Hajj packages",
    "Experienced scholars and guides",
    "Premium accommodation in Mina, Arafat, and Muzdalifah",
    "All-inclusive meals and transportation",
    "24/7 support throughout your journey",
    "Pre-Hajj preparation sessions",
  ],
  process: [
    { step: 1, title: "Register Interest", description: "Fill out our registration form to express your interest in Hajj 2026." },
    { step: 2, title: "Consultation", description: "Our team will contact you to discuss packages and answer your questions." },
    { step: 3, title: "Booking", description: "Secure your spot with a deposit and choose your preferred package." },
    { step: 4, title: "Preparation", description: "Attend our pre-Hajj seminars and prepare for your journey." },
    { step: 5, title: "Departure", description: "Embark on the journey of a lifetime with Al-Haramain Travels." },
  ],
};

// Legacy exports for backward compatibility
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
