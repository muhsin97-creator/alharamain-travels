import Link from "next/link";
import { Metadata } from "next";
import { HeroHeader } from "@/components/header";
import { PageHeader } from "@/components/PageHeader";
import { Footer } from "@/components/sections/Footer";
import { TripCard } from "@/components/TripCard";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronRight, Phone, Mail } from "lucide-react";
import { umrahTrips, umrahCompanionServices, contactInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "Umrah Packages & Services Australia | Al-Haramain Travels",
  description: "Compare our Umrah packages from Australia – budget to premium guided Umrah trips with flights, visas, 5-star hotels near the Haram and experienced guides. Find your perfect Umrah package with Al-Haramain Travels.",
};

export default function UmrahServicesPage() {
  const availableTrips = umrahTrips.filter(trip => !trip.expired);
  const expiredTrips = umrahTrips.filter(trip => trip.expired);

  return (
    <div className="min-h-screen bg-background">
      <HeroHeader />
      
      <PageHeader
        badge="Umrah Services"
        title="Our Umrah"
        titleHighlight="Services"
        description="At Al Haramain Travels, we are passionate about guiding pilgrims on a seamless and spiritually enriching journey to the holy cities of Makkah and Madinah."
      />

      {/* Intro Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Our Umrah Trips
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            At <strong>Al Haramain</strong>, we take pride in being your trusted companion for the sacred journey of Umrah. 
            With our expertise and dedication, we ensure that your pilgrimage is not only fulfilling but also seamless and stress-free. 
            Let <strong>Al Haramain</strong> be the bridge between you and your spiritual aspirations. Start your blessed journey with us today. 
            Explore our packages and experience the difference of traveling with a name synonymous with trust and excellence.
          </p>
        </div>
      </section>

      {/* Available Trips Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-green-500/10 text-green-600 border-0 mb-4">
              Now Booking
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Available <span className="text-gradient">Trips</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Secure your spot on one of our upcoming Umrah journeys
            </p>
          </div>

          {availableTrips.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {availableTrips.map((trip) => (
                <TripCard key={trip.slug} trip={trip} featured={trip.featured} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-2xl">
              <p className="text-muted-foreground text-lg">
                No trips currently available. Check back soon or contact us for custom packages.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Past Trips Section */}
      {expiredTrips.length > 0 && (
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge className="bg-muted text-muted-foreground border-0 mb-4">
                Past Trips
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Previous Journeys
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Explore our past successful trips
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {expiredTrips.map((trip) => (
                <TripCard key={trip.slug} trip={trip} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Umrah Companion Section */}
      <section className="py-24 bg-[#2D2D2D] text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-[1px] bg-primary opacity-40" />
        <div className="absolute bottom-10 right-10 w-20 h-[1px] bg-primary opacity-40" />
        <div className="absolute top-1/4 right-8 flex flex-col gap-2 opacity-30">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="w-0 h-0 border-l-[6px] border-r-[6px] border-b-[10px] border-l-transparent border-r-transparent border-b-primary"
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <Badge className="bg-primary/20 text-primary border-0 mb-4">
              Personalised Support
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Umrah <span className="text-gradient">Companion</span>
            </h2>
            <p className="text-white/70 text-lg leading-relaxed">
              At Al Haramain Travels, we understand that the journey of Umrah is deeply personal and spiritually significant. 
              Whether you&apos;re just going with your family, or a couple of friends having a quick Umrah Trip. 
              Our Umrah Companion services are designed to provide you with dedicated, personalised support throughout your pilgrimage, 
              ensuring that every aspect of your Umrah trip is smooth, comfortable, and correct according to the Qur&apos;aan and Sunnah.
            </p>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-8">Our Umrah Companion include:</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {umrahCompanionServices.map((service, i) => {
                const Icon = service.icon;
                return (
                  <Card key={i} className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors">
                    <CardContent className="p-6">
                      <div className="flex gap-5">
                        <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Icon className="h-7 w-7 text-primary" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-2">{service.title}</h4>
                          <p className="text-white/60 text-sm leading-relaxed">{service.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* How to Book Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="bg-primary/10 text-primary border-0 mb-4">
                Simple Process
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                How to <span className="text-gradient">Book?</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Booking our Umrah Companion services is simple and convenient. 
                Contact us today to learn more and secure your Umrah Companion package today.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Call us</div>
                    <div className="font-semibold">{contactInfo.phone}</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Email us</div>
                    <div className="font-semibold">{contactInfo.email}</div>
                  </div>
                </div>
              </div>

              <Button asChild size="lg" className="mt-8 bg-primary hover:bg-primary/90">
                <Link href="/contact">
                  Contact us now
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="bg-muted/50 rounded-3xl p-8">
              <h3 className="text-xl font-bold mb-4">Custom Umrah Packages</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our Umrah Companion services can be tailored to meet your specific needs and preferences. 
                Whether you are traveling alone, with family, or in a group, we offer flexible packages to suit your requirements.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <strong>Expertise and Experience:</strong>{" "}
                    <span className="text-muted-foreground">
                      With years of experience in organising Umrah trips, our companions are well-equipped to handle all aspects of your journey.
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <strong>Peace of Mind:</strong>{" "}
                    <span className="text-muted-foreground">
                      Focus on your spiritual journey while we take care of all the logistics and details.
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <strong>Comfort and Convenience:</strong>{" "}
                    <span className="text-muted-foreground">
                      Enjoy a hassle-free pilgrimage with our comprehensive support and personalised services.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gold-gradient relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border border-white rounded-full" />
          <div className="absolute bottom-10 right-10 w-48 h-48 border border-white rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Begin Your Umrah Journey?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Contact us today to learn more about our Umrah packages and start planning your spiritual journey.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-primary hover:bg-white/90 px-10"
          >
            <Link href="/contact">
              Get in Touch
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}

