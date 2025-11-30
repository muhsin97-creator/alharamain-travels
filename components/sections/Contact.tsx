import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, ChevronRight, Instagram, Facebook, MessageCircle } from "lucide-react";
import { CircularImageFrame, GoldAccentBar, GoldLine, TrianglePattern, PlayIndicators } from "@/components/CircularImageFrame";
import { contactInfo, umrahTrips } from "@/lib/data";

export function Contact() {
  // Get only available trips for the dropdown
  const availableTrips = umrahTrips.filter(trip => !trip.expired);

  return (
    <section id="contact" className="py-24 bg-[#2D2D2D] text-white relative overflow-hidden">
      {/* Decorative elements matching social media template (dark theme) */}
      <GoldAccentBar position="top" />
      <div className="absolute bottom-0 left-8 w-2 h-32 bg-primary" />
      
      {/* Gold lines */}
      <GoldLine className="absolute top-24 left-16" />
      <GoldLine className="absolute bottom-32 right-12" />
      
      {/* Triangle patterns */}
      <TrianglePattern className="absolute top-1/4 right-8 opacity-40" direction="down" />
      <TrianglePattern className="absolute bottom-1/3 left-8 opacity-40" direction="up" />
      
      {/* Play indicators */}
      <PlayIndicators className="absolute top-1/3 left-1/4 opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <Badge className="bg-primary/20 text-primary border-0 mb-4">
              Contact Us
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get in <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-white/70 text-lg mb-8 leading-relaxed">
              Have questions about our Umrah packages? Our friendly team is here to
              help you plan your perfect pilgrimage. Reach out to us through any of the channels below.
            </p>

            {/* Circular Image */}
            <div className="hidden md:flex justify-start mb-8">
              <CircularImageFrame
                src="https://images.unsplash.com/photo-1537031934600-096fbbb48a51?w=600&q=80"
                alt="Kaaba and pilgrims"
                size="md"
                grayscale={true}
              />
            </div>

            {/* Contact Info */}
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-white/60 text-sm">Phone</div>
                  <div className="font-semibold">{contactInfo.phone}</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-white/60 text-sm">Email</div>
                  <div className="font-semibold">{contactInfo.email}</div>
                </div>
              </div>

              {/* Multiple Addresses */}
              {contactInfo.addresses.map((address, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-white/60 text-sm">Office - {address.state}</div>
                    <div className="font-semibold">{address.location}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-8">
              <a
                href={contactInfo.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-white" />
              </a>
              <a
                href={contactInfo.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 text-white" />
              </a>
              <a
                href={contactInfo.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5 text-white" />
              </a>
            </div>

            <Button asChild variant="outline" className="mt-8 border-primary text-primary hover:bg-primary hover:text-white">
              <Link href="/contact">
                View Full Contact Page
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Contact Form */}
          <Card className="bg-white/5 border-white/10">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-2">Send us a Message</h3>
              <p className="text-white/60 text-sm mb-6">
                Fill out the form below and we&apos;ll get back to you as soon as possible.
              </p>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Name *"
                    required
                    className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:border-primary transition-colors"
                  />
                  <input
                    type="tel"
                    placeholder="Number *"
                    required
                    className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email *"
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:border-primary transition-colors"
                />
                <select 
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                  defaultValue=""
                >
                  <option value="" disabled className="text-gray-900">Select Trip Interest</option>
                  {availableTrips.map((trip, i) => (
                    <option key={i} value={trip.name} className="text-gray-900">
                      {trip.name} - {trip.price}
                    </option>
                  ))}
                  <option value="hajj-2026" className="text-gray-900">Hajj 2026</option>
                  <option value="other" className="text-gray-900">Other / General Enquiry</option>
                </select>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:border-primary resize-none transition-colors"
                />
                <Button 
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-white py-6 font-semibold"
                >
                  Submit
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
