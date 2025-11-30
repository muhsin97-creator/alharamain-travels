import { Metadata } from "next";
import Link from "next/link";
import { HeroHeader } from "@/components/header";
import { PageHeader } from "@/components/PageHeader";
import { Footer } from "@/components/sections/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronRight, Check, Phone, Mail, MapPin } from "lucide-react";
import { hajjInfo, contactInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "Hajj 2026 Sign Up | Al-Haramain Travels",
  description: "Register your interest for Hajj 2026 with Al-Haramain Travels. Comprehensive packages with experienced scholars and premium accommodation.",
};

export default function Hajj2026Page() {
  return (
    <div className="min-h-screen bg-background">
      <HeroHeader />
      
      <PageHeader
        badge="Register Now"
        title="Hajj 2026"
        titleHighlight="Sign Up"
        description="Register your interest for Hajj 2026 and embark on the journey of a lifetime"
      />

      {/* Registration Form Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <Badge className="bg-primary/10 text-primary border-0 mb-4">
                Express Your Interest
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Register for <span className="text-gradient">Hajj 2026</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below to register your interest. Our team will contact you with more details about packages and availability.
              </p>

              <Card className="border-border/50">
                <CardContent className="p-8">
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors"
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
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        className="w-full border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        State *
                      </label>
                      <select
                        required
                        className="w-full border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                        defaultValue=""
                      >
                        <option value="" disabled>Select your state</option>
                        <option value="NSW">New South Wales</option>
                        <option value="VIC">Victoria</option>
                        <option value="QLD">Queensland</option>
                        <option value="WA">Western Australia</option>
                        <option value="SA">South Australia</option>
                        <option value="TAS">Tasmania</option>
                        <option value="ACT">Australian Capital Territory</option>
                        <option value="NT">Northern Territory</option>
                        <option value="OTHER">Other (International)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Number of Pilgrims *
                      </label>
                      <select
                        required
                        className="w-full border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                        defaultValue=""
                      >
                        <option value="" disabled>Select number</option>
                        <option value="1">1 Person</option>
                        <option value="2">2 People</option>
                        <option value="3">3 People</option>
                        <option value="4">4 People</option>
                        <option value="5">5+ People</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Package Preference
                      </label>
                      <select
                        className="w-full border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                        defaultValue=""
                      >
                        <option value="" disabled>Select preference</option>
                        <option value="standard">Standard Package</option>
                        <option value="premium">Premium Package</option>
                        <option value="vip">VIP Package</option>
                        <option value="unsure">Not Sure Yet</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Additional Notes
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Any special requirements or questions?"
                        className="w-full border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary resize-none transition-colors"
                      />
                    </div>

                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="consent"
                        required
                        className="mt-1"
                      />
                      <label htmlFor="consent" className="text-sm text-muted-foreground">
                        I agree to be contacted by Al-Haramain Travels regarding Hajj 2026 packages and updates.
                      </label>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/90 py-6 font-semibold"
                    >
                      Submit Registration
                      <ChevronRight className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Info Sidebar */}
            <div>
              <div className="sticky top-28">
                <Card className="bg-[#2D2D2D] text-white border-0 mb-6">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-6">What&apos;s Included</h3>
                    <ul className="space-y-3">
                      {hajjInfo.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="h-3 w-3 text-primary" />
                          </div>
                          <span className="text-white/80">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-border/50">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-foreground mb-4">Need Help?</h3>
                    <p className="text-muted-foreground mb-6">
                      Our team is ready to answer any questions you may have about Hajj 2026.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Phone className="h-4 w-4 text-primary" />
                        </div>
                        <span className="text-foreground">{contactInfo.phone}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Mail className="h-4 w-4 text-primary" />
                        </div>
                        <span className="text-foreground">{contactInfo.email}</span>
                      </div>
                    </div>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full mt-6 border-primary text-primary hover:bg-primary hover:text-white"
                    >
                      <Link href="/contact">
                        Contact Us
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-primary/10 text-primary border-0 mb-4">
              What Happens Next
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              The Registration <span className="text-gradient">Process</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {hajjInfo.process.map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{step.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

