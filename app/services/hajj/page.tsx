import Link from "next/link";
import { Metadata } from "next";
import { HeroHeader } from "@/components/header";
import { PageHeader } from "@/components/PageHeader";
import { Footer } from "@/components/sections/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  Check,
  Star,
  Shield,
  Users,
  MapPin,
  Calendar,
  Phone,
  Plane,
  Hotel,
} from "lucide-react";
import { hajjInfo, contactInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "Hajj Services | Al-Haramain Travels",
  description: "Join us for Hajj 2026 - the journey of a lifetime. Comprehensive Hajj packages with experienced scholars, premium accommodation, and 24/7 support.",
};

export default function HajjServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <HeroHeader />
      
      <PageHeader
        badge="Hajj Services"
        title="Hajj"
        titleHighlight="2026"
        description="Join us for the journey of a lifetime. Experience the fifth pillar of Islam with Al-Haramain Travels."
      />

      {/* Intro Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            Hajj is one of the five pillars of Islam, a sacred obligation for every Muslim who is physically and financially able. 
            At Al-Haramain Travels, we are honoured to help you fulfil this profound duty with our comprehensive Hajj packages 
            designed to make your pilgrimage as spiritually rewarding and comfortable as possible.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link href="/hajj-2026">
              Register for Hajj 2026
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Package Highlights */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-primary/10 text-primary border-0 mb-4">
              What We Offer
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Hajj Package <span className="text-gradient">Highlights</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Everything you need for a complete and comfortable Hajj experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hajjInfo.highlights.map((highlight, i) => {
              const icons = [Users, Hotel, Plane, Calendar, Shield, Star];
              const Icon = icons[i % icons.length];
              return (
                <Card key={i} className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30">
                  <CardContent className="p-6">
                    <div className="flex gap-4 items-start">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                        <Icon className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <p className="text-foreground font-medium">{highlight}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-[#2D2D2D] text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-[1px] bg-primary opacity-40" />
        <div className="absolute bottom-10 right-10 w-20 h-[1px] bg-primary opacity-40" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-primary/20 text-primary border-0 mb-4">
              Simple Process
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How to <span className="text-gradient">Book</span>
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Follow these simple steps to secure your Hajj 2026 journey
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {hajjInfo.process.map((step, i) => (
              <div key={i} className="relative">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-white/60 text-sm">{step.description}</p>
                </div>
                {i < hajjInfo.process.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[calc(50%+32px)] w-[calc(100%-64px)] h-[2px] bg-primary/30">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-b-[6px] border-l-[8px] border-t-transparent border-b-transparent border-l-primary/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Information */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="bg-primary/10 text-primary border-0 mb-4">
                Important Information
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Before You <span className="text-gradient">Apply</span>
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-xl">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Valid Passport</h4>
                    <p className="text-muted-foreground text-sm">Your passport must be valid for at least 6 months from the date of travel</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-xl">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Health Requirements</h4>
                    <p className="text-muted-foreground text-sm">Must meet Saudi Arabia&apos;s health and vaccination requirements</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-xl">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Mahram Requirement</h4>
                    <p className="text-muted-foreground text-sm">Women under 45 must travel with a Mahram (male guardian)</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-xl">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Financial Preparation</h4>
                    <p className="text-muted-foreground text-sm">Ensure you have arranged payment plans and budgeted for expenses</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Card className="bg-muted/30 border-0">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-6">Contact Us</h3>
                  <p className="text-muted-foreground mb-6">
                    Have questions about Hajj 2026? Our team is here to help you every step of the way.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Phone</div>
                        <div className="font-semibold">{contactInfo.phone}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Offices</div>
                        <div className="font-semibold text-sm">
                          {contactInfo.addresses.map(a => a.location).join(" | ")}
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button asChild className="w-full mt-6 bg-primary hover:bg-primary/90">
                    <Link href="/hajj-2026">
                      Register Interest
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
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
            Ready for the Journey of a Lifetime?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Don&apos;t miss your opportunity to perform Hajj in 2026. Register your interest today and let us help you fulfil this sacred obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-white/90 px-10"
            >
              <Link href="/hajj-2026">
                Sign Up for Hajj 2026
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-10"
            >
              <Link href="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

