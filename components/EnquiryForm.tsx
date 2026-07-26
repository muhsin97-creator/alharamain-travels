'use client'

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronRight, CheckCircle, AlertCircle, Loader2 } from "lucide-react"
import { useContactForm } from "@/lib/useContactForm"

interface EnquiryFormProps {
  tripName: string
  subject?: string
}

export function EnquiryForm({ tripName, subject }: EnquiryFormProps) {
  const { isSubmitting, isSuccess, isError, errorMessage, submitForm, reset } = useContactForm()
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: subject || `Enquiry: ${tripName}`,
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    const success = await submitForm({
      subject: formData.subject,
      trip: tripName,
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      message: formData.message,
      form_type: 'Trip Enquiry'
    })

    if (success) {
      setFormData({
        name: '',
        phone: '',
        email: '',
        subject: subject || `Enquiry: ${tripName}`,
        message: ''
      })
    }
  }

  return (
    <section id="enquiry" className="py-24 bg-[#FBF7F0] text-foreground">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge className="bg-primary/20 text-primary border-0 mb-4">
            Get in Touch
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Enquire About This <span className="text-gradient">Trip</span>
          </h2>
          <p className="text-muted-foreground">
            Fill out the form below and our team will get back to you as soon as possible.
          </p>
        </div>

        <Card className="bg-white border-border/60 shadow-sm">
          <CardContent className="p-8">
            {isSuccess ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Enquiry Sent!</h3>
                <p className="text-muted-foreground mb-6">
                  Thank you for your interest in {tripName}. Our team will contact you soon.
                </p>
                <Button onClick={reset} variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                  Send Another Enquiry
                </Button>
              </div>
            ) : (
              <>
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
                      className="bg-white border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    />
                    <input
                      type="tel"
                      placeholder="Phone *"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="bg-white border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="Email *"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  />
                  <input
                    type="text"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-white border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  />
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary resize-none transition-colors"
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
                        Send Message
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
    </section>
  )
}

