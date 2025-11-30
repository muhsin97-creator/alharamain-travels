'use client'

import { useState } from "react"
import Link from "next/link"
import { HeroHeader } from "@/components/header"
import { PageHeader } from "@/components/PageHeader"
import { Footer } from "@/components/sections/Footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronRight, Check, Phone, Mail, CheckCircle, AlertCircle, Loader2 } from "lucide-react"
import { useContactForm } from "@/lib/useContactForm"
import { hajjInfo, contactInfo } from "@/lib/data"

export default function Hajj2026Page() {
  const { isSubmitting, isSuccess, isError, errorMessage, submitForm, reset } = useContactForm()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    state: '',
    pilgrims: '',
    package: '',
    notes: '',
    consent: false
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    const success = await submitForm({
      subject: `Hajj 2026 Registration: ${formData.firstName} ${formData.lastName}`,
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      state: formData.state,
      number_of_pilgrims: formData.pilgrims,
      package_preference: formData.package,
      additional_notes: formData.notes,
      form_type: 'Hajj 2026 Registration'
    })

    if (success) {
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        state: '',
        pilgrims: '',
        package: '',
        notes: '',
        consent: false
      })
    }
  }

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
                  {isSuccess ? (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="h-8 w-8 text-green-500" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">Registration Submitted!</h3>
                      <p className="text-muted-foreground mb-6">
                        Thank you for registering your interest in Hajj 2026. Our team will contact you soon with more details.
                      </p>
                      <Button onClick={reset} variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                        Register Another Person
                      </Button>
                    </div>
                  ) : (
                    <>
                      {isError && (
                        <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-lg p-3 mb-4">
                          <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                          <span className="text-red-600 text-sm">{errorMessage}</span>
                        </div>
                      )}

                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-foreground mb-2">
                              First Name *
                            </label>
                            <input
                              type="text"
                              required
                              value={formData.firstName}
                              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
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
                              value={formData.lastName}
                              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
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
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
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
                            value={formData.state}
                            onChange={(e) => setFormData({ ...formData, state: e.target.value })}
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
                            value={formData.pilgrims}
                            onChange={(e) => setFormData({ ...formData, pilgrims: e.target.value })}
                          >
                            <option value="" disabled>Select number</option>
                            <option value="1">1 Person</option>
                            <option value="2">2 People</option>
                            <option value="3">3 People</option>
                            <option value="4">4 People</option>
                            <option value="5+">5+ People</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Package Preference
                          </label>
                          <select
                            className="w-full border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                            value={formData.package}
                            onChange={(e) => setFormData({ ...formData, package: e.target.value })}
                          >
                            <option value="">Select preference</option>
                            <option value="Standard">Standard Package</option>
                            <option value="Premium">Premium Package</option>
                            <option value="VIP">VIP Package</option>
                            <option value="Unsure">Not Sure Yet</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Additional Notes
                          </label>
                          <textarea
                            rows={4}
                            placeholder="Any special requirements or questions?"
                            value={formData.notes}
                            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                            className="w-full border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary resize-none transition-colors"
                          />
                        </div>

                        <div className="flex items-start gap-3">
                          <input
                            type="checkbox"
                            id="consent"
                            required
                            checked={formData.consent}
                            onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                            className="mt-1"
                          />
                          <label htmlFor="consent" className="text-sm text-muted-foreground">
                            I agree to be contacted by Al-Haramain Travels regarding Hajj 2026 packages and updates.
                          </label>
                        </div>

                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-primary hover:bg-primary/90 py-6 font-semibold disabled:opacity-50"
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                              Submitting...
                            </>
                          ) : (
                            <>
                              Submit Registration
                              <ChevronRight className="ml-2 h-5 w-5" />
                            </>
                          )}
                        </Button>
                      </form>
                    </>
                  )}
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
  )
}
