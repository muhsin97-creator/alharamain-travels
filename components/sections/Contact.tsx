import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, ChevronRight, Instagram, Facebook } from "lucide-react";
import { contactInfo } from "@/lib/data";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#2D2D2D] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <Badge className="bg-primary/20 text-primary border-0 mb-4">
              Contact Us
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get in <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-white/70 text-lg mb-8">
              Have questions about our packages? Our friendly team is here to
              help you plan your perfect pilgrimage.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-white/60 text-sm">Phone</div>
                  <div className="font-semibold">{contactInfo.phone}</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-white/60 text-sm">Email</div>
                  <div className="font-semibold">{contactInfo.email}</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-white/60 text-sm">Office</div>
                  <div className="font-semibold">{contactInfo.address}</div>
                </div>
              </div>
            </div>
            <div className="flex gap-4 mt-8">
              <a
                href="#"
                className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram className="h-5 w-5 text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Facebook className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>
          <Card className="bg-white/5 border-white/10">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:border-primary"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:border-primary"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:border-primary"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:border-primary"
                />
                <select className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white/50 focus:outline-none focus:border-primary">
                  <option value="">Select Package Interest</option>
                  <option value="economy">Economy Package</option>
                  <option value="premium">Premium Package</option>
                  <option value="vip">VIP Package</option>
                </select>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:border-primary resize-none"
                />
                <Button className="w-full bg-primary hover:bg-gold-dark text-white py-6">
                  Send Message
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

