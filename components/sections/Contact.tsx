'use client'

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, ChevronRight, Instagram, Facebook, MessageCircle, CheckCircle, AlertCircle, Loader2 } from "lucide-react"
import { CircularImageFrame, GoldAccentBar, GoldLine, TrianglePattern, PlayIndicators } from "@/components/CircularImageFrame"
import { useContactForm } from "@/lib/useContactForm"
import { contactInfo, umrahTrips } from "@/lib/data"

export function Contact() {
  const { isSubmitting, isSuccess, isError, errorMessage, submitForm, reset } = useContactForm()
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    interest: '',
    message: ''
  })

  const availableTrips = umrahTrips.filter(trip => !trip.expired)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    const success = await submitForm({
      subject: `New Enquiry: ${formData.interest || 'General'}`,
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      interest: formData.interest,
      message: formData.message
    })

    if (success) {
      setFormData({ name: '', phone: '', email: '', interest: '', message: '' })
    }
  }

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
                src="https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?w=600&q=80"
                alt="Islamic architecture"
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
              {isSuccess ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-white/60 mb-6">
                    Thank you for reaching out. We&apos;ll get back to you as soon as possible.
                  </p>
                  <Button onClick={reset} variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold mb-2">Send us a Message</h3>
                  <p className="text-white/60 text-sm mb-6">
                    Fill out the form below and we&apos;ll get back to you as soon as possible.
                  </p>

                  {isError && (
                    <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-lg p-3 mb-4">
                      <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                      <span className="text-red-400 text-sm">{errorMessage}</span>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="Name *"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:border-primary transition-colors"
                      />
                      <input
                        type="tel"
                        placeholder="Number *"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                    <input
                      type="email"
                      placeholder="Email *"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:border-primary transition-colors"
                    />
                    <select 
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    >
                      <option value="" disabled className="text-gray-900">Select Trip Interest</option>
                      {availableTrips.map((trip, i) => (
                        <option key={i} value={trip.name} className="text-gray-900">
                          {trip.name} - {trip.price}
                        </option>
                      ))}
                      <option value="General Enquiry" className="text-gray-900">Other / General Enquiry</option>
                    </select>
                    <textarea
                      placeholder="Your Message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:border-primary resize-none transition-colors"
                    />
                    <Button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary hover:bg-primary/90 text-white py-6 font-semibold disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Submit
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
      </div>
    </section>
  )
}
