import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { HeroHeader } from "@/components/header";
import { Footer } from "@/components/sections/Footer";
import { TripCard } from "@/components/TripCard";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Accordion, AccordionItem } from "@/components/ui/accordion";
import {
  Users,
  Clock,
  ChevronRight,
  Check,
  X,
  Star,
  Phone,
  Mail,
  Globe,
} from "lucide-react";
import { umrahTrips, contactInfo } from "@/lib/data";
import { EnquiryForm } from "@/components/EnquiryForm";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return umrahTrips.map((trip) => ({
    slug: trip.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const trip = umrahTrips.find((t) => t.slug === slug);
  
  if (!trip) {
    return {
      title: "Trip Not Found | Al-Haramain Travels",
    };
  }

  return {
    title: `${trip.name} | Al-Haramain Travels`,
    description: trip.description,
  };
}

export default async function TripDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const trip = umrahTrips.find((t) => t.slug === slug);

  if (!trip) {
    notFound();
  }

  const relatedTrips = umrahTrips
    .filter((t) => t.slug !== slug && !t.expired)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <HeroHeader />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-[#2D2D2D] text-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-8 left-8 flex gap-2 opacity-40">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="w-0 h-0 border-l-[6px] border-r-[6px] border-b-[10px] border-l-transparent border-r-transparent border-b-primary"
            />
          ))}
        </div>
        <div className="absolute top-16 right-16 w-20 h-[1px] bg-primary opacity-40" />
        <div className="absolute bottom-16 left-16 w-20 h-[1px] bg-primary opacity-40" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-2 bg-primary" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-sm text-white/60 mb-6">
                <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                <span>/</span>
                <Link href="/services/umrah" className="hover:text-primary transition-colors">Umrah Services</Link>
                <span>/</span>
                <span className="text-white">{trip.name}</span>
              </nav>

              <div className="flex flex-wrap gap-2 mb-4">
                <Badge className="bg-primary/20 text-primary border-0">
                  {trip.subtitle}
                </Badge>
                {trip.expired ? (
                  <Badge className="bg-red-500/20 text-red-400 border-0">
                    Expired
                  </Badge>
                ) : (
                  <Badge className="bg-green-500/20 text-green-400 border-0">
                    Available
                  </Badge>
                )}
                {trip.featured && !trip.expired && (
                  <Badge className="bg-primary text-white border-0">
                    Featured
                  </Badge>
                )}
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                {trip.name}
              </h1>

              <p className="text-white/70 text-lg mb-8 leading-relaxed">
                {trip.description}
              </p>

              {/* Trip Quick Info */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                <div className="bg-white/5 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-gradient">{trip.price.replace("From ", "")}</div>
                  <div className="text-white/60 text-sm">Starting Price</div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 text-center">
                  <Users className="h-6 w-6 text-primary mx-auto mb-1" />
                  <div className="text-white font-semibold">{trip.capacity}</div>
                  <div className="text-white/60 text-sm">Capacity</div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 text-center">
                  <Clock className="h-6 w-6 text-primary mx-auto mb-1" />
                  <div className="text-white font-semibold">{trip.duration}</div>
                  <div className="text-white/60 text-sm">Duration</div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 text-center">
                  <Globe className="h-6 w-6 text-primary mx-auto mb-1" />
                  <div className="text-white font-semibold">{trip.languages.join(", ")}</div>
                  <div className="text-white/60 text-sm">Language</div>
                </div>
              </div>

              {!trip.expired && (
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90 px-8"
                >
                  <a href="#enquiry">
                    Enquire Now
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              )}
            </div>

            {/* Rating Card */}
            <div className="hidden lg:block">
              <Card className="bg-white/10 border-white/20">
                <CardContent className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 fill-primary text-primary" />
                    ))}
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">4.9</div>
                  <p className="text-white/60 mb-6">Based on pilgrim reviews</p>
                  
                  <div className="border-t border-white/10 pt-6">
                    <h4 className="font-semibold text-white mb-4">Got a Question?</h4>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center gap-3 text-white/70">
                        <Phone className="h-4 w-4 text-primary" />
                        <span>{contactInfo.phone}</span>
                      </div>
                      <div className="flex items-center gap-3 text-white/70">
                        <Mail className="h-4 w-4 text-primary" />
                        <span>{contactInfo.email}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="w-full flex-wrap">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="included">What&apos;s Included</TabsTrigger>
              <TabsTrigger value="faq">F.A.Q</TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
              <div className="prose prose-lg max-w-none">
                {trip.longDescription.split("\n\n").map((paragraph, i) => (
                  <p key={i} className="text-muted-foreground leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}

                {trip.highlights.length > 0 && (
                  <div className="mt-8">
                    <h3 className="text-2xl font-bold text-foreground mb-6">Why Book With Us</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {trip.highlights.map((highlight, i) => {
                        const [title, description] = highlight.split(" - ");
                        return (
                          <div key={i} className="flex gap-4 p-4 bg-muted/50 rounded-xl">
                            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                              <Star className="h-4 w-4 text-primary" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-foreground">{title}</h4>
                              {description && (
                                <p className="text-sm text-muted-foreground mt-1">{description}</p>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </TabsContent>

            <TabsContent value="included">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    What&apos;s Included
                  </h3>
                  <ul className="space-y-3">
                    {trip.included.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-green-500/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="h-3 w-3 text-green-500" />
                        </div>
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                    <X className="h-5 w-5 text-red-500" />
                    What&apos;s Excluded
                  </h3>
                  <ul className="space-y-3">
                    {trip.excluded.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-red-500/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <X className="h-3 w-3 text-red-500" />
                        </div>
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="faq">
              <Accordion>
                {trip.faqs.map((faq, i) => (
                  <AccordionItem key={i} title={faq.question}>
                    {faq.answer}
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Enquiry Form Section */}
      {!trip.expired && (
        <EnquiryForm tripName={trip.name} subject={`Enquiry: ${trip.name}`} />
      )}

      {/* Related Trips */}
      {relatedTrips.length > 0 && (
        <section className="py-24 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="bg-primary/10 text-primary border-0 mb-4">
                Explore More
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Other Available <span className="text-gradient">Trips</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedTrips.map((relatedTrip) => (
                <TripCard key={relatedTrip.slug} trip={relatedTrip} />
              ))}
            </div>

            <div className="text-center mt-12">
              <Button
                asChild
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                <Link href="/services/umrah">
                  View All Trips
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}

