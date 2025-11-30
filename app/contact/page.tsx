import { Metadata } from "next";
import Link from "next/link";
import { HeroHeader } from "@/components/header";
import { PageHeader } from "@/components/PageHeader";
import { Footer } from "@/components/sections/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  ChevronRight, 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Instagram,
  Facebook,
  MessageCircle,
} from "lucide-react";
import { contactInfo, umrahTrips } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact Us | Al-Haramain Travels",
  description: "Get in touch with Al-Haramain Travels. Contact us for Umrah and Hajj package enquiries, support, and more.",
};

export default function ContactPage() {
  const availableTrips = umrahTrips.filter(trip => !trip.expired);

  return (
    <div className="min-h-screen bg-background">
      <HeroHeader />
      
      <PageHeader
        badge="Contact Us"
        title="Get in"
        titleHighlight="Touch"
        description="We're here to help you plan your perfect pilgrimage. Reach out to us through any of the channels below."
      />

      {/* Contact Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Contact Information
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Have questions about our Umrah or Hajj packages? Our friendly team is here to
                help you plan your perfect pilgrimage. Reach out to us through any of the channels below.
              </p>

              {/* Contact Details */}
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Phone</div>
                    <a href={`tel:${contactInfo.phone}`} className="text-xl font-semibold text-foreground hover:text-primary transition-colors">
                      {contactInfo.phone}
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">
                      Available Mon-Fri, 9am-6pm AEST
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Email</div>
                    <a href={`mailto:${contactInfo.email}`} className="text-xl font-semibold text-foreground hover:text-primary transition-colors">
                      {contactInfo.email}
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">
                      We&apos;ll respond within 24 hours
                    </p>
                  </div>
                </div>

                {/* Office Locations */}
                {contactInfo.addresses.map((address, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Office - {address.state}</div>
                      <div className="text-xl font-semibold text-foreground">
                        {address.location}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a
                    href={contactInfo.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center hover:bg-primary hover:text-white transition-colors text-foreground"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href={contactInfo.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center hover:bg-primary hover:text-white transition-colors text-foreground"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href={contactInfo.socials.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center hover:bg-primary hover:text-white transition-colors text-foreground"
                    aria-label="WhatsApp"
                  >
                    <MessageCircle className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="border-border/50 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">Send us a Message</h3>
                  <p className="text-muted-foreground text-sm mb-6">
                    Fill out the form below and we&apos;ll get back to you as soon as possible.
                  </p>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Name *
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Phone *
                        </label>
                        <input
                          type="tel"
                          required
                          className="w-full border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                          placeholder="Your phone number"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Interest
                      </label>
                      <select 
                        className="w-full border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                        defaultValue=""
                      >
                        <option value="" disabled>Select your interest</option>
                        {availableTrips.map((trip, i) => (
                          <option key={i} value={trip.name}>
                            {trip.name} - {trip.price}
                          </option>
                        ))}
                        <option value="hajj-2026">Hajj 2026</option>
                        <option value="umrah-companion">Umrah Companion Services</option>
                        <option value="custom">Custom Package</option>
                        <option value="other">Other / General Enquiry</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Message
                      </label>
                      <textarea
                        placeholder="How can we help you?"
                        rows={5}
                        className="w-full border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary resize-none transition-colors"
                      />
                    </div>

                    <Button 
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/90 py-6 font-semibold"
                    >
                      Send Message
                      <ChevronRight className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-primary/10 text-primary border-0 mb-4">
              FAQ
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "How do I book an Umrah package?",
                answer: "You can book through our website by selecting your preferred trip and filling out the enquiry form. Alternatively, call us directly or send an email and our team will guide you through the process."
              },
              {
                question: "What payment options are available?",
                answer: "We offer flexible payment plans including instalments. The full balance must be cleared 4 weeks before departure. We accept bank transfers and major credit cards."
              },
              {
                question: "Do you provide visa assistance?",
                answer: "Yes, all our packages include Umrah/Hajj visa processing. We handle all the paperwork and ensure your visa is ready before departure."
              },
              {
                question: "Can I customise my package?",
                answer: "Absolutely! We offer Umrah Companion services that can be tailored to your specific needs. Contact us to discuss custom packages for individuals, families, or groups."
              },
              {
                question: "What if I need to cancel my booking?",
                answer: "We understand plans can change. Please contact us as soon as possible if you need to cancel. Cancellation policies vary by package, and our team will guide you through the process."
              },
            ].map((faq, i) => (
              <Card key={i} className="border-border/50">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Begin Your <span className="text-gradient">Journey?</span>
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            Browse our Umrah packages or sign up for Hajj 2026 today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 px-10"
            >
              <Link href="/services/umrah">
                View Umrah Trips
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 px-10"
            >
              <Link href="/hajj-2026">
                Hajj 2026 Sign Up
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

