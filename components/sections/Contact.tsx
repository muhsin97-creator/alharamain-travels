'use client'

import { useState } from "react"
import { Phone, Mail, MessageCircle, Check, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Field, Input, Select, Textarea } from "@/components/ui/field"
import { Reveal } from "@/components/ui/reveal"
import { useContactForm } from "@/lib/useContactForm"
import { contactInfo, umrahTrips } from "@/lib/data"

const emptyForm = { name: '', phone: '', email: '', interest: '', travellers: '1', when: '', message: '' }

const assurances = [
  "A real person responds, usually within one business day.",
  "Your details are kept private and never shared.",
  "No payment needed to enquire.",
]

// UK .lead section: charcoal split with a white form card. The home page's enquiry point.
export function Contact() {
  const { isSubmitting, isSuccess, isError, errorMessage, submitForm, reset } = useContactForm()
  const [formData, setFormData] = useState(emptyForm)
  const availableTrips = umrahTrips.filter((trip) => !trip.expired)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const success = await submitForm({
      subject: `New enquiry: ${formData.interest || 'Not sure yet'}`,
      ...formData,
    })
    if (success) setFormData(emptyForm)
  }

  const set = (key: keyof typeof emptyForm) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setFormData({ ...formData, [key]: e.target.value })

  return (
    <section id="enquire" className="bg-charcoal py-24 text-white md:py-[96px]">
      <div className="container-x grid items-center gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
        <Reveal>
          <p className="eyebrow text-primary">Book your trip</p>
          <h2 className="mb-4 mt-3.5 font-display text-[clamp(2rem,3.8vw,2.9rem)] font-bold leading-[1.12] text-white">
            Start your journey today
          </h2>
          <p className="max-w-[460px] text-[1.05rem] leading-relaxed text-white/85">
            Leave your details and our team will be in touch with the right trip, dates and pricing
            for you. No obligation, just a calm, helpful conversation when you are ready.
          </p>
          <ul className="mt-7 grid gap-3.5">
            {assurances.map((line) => (
              <li key={line} className="flex items-start gap-3 text-[0.95rem] text-white/90">
                <Check className="mt-0.5 size-5 flex-none text-primary" />
                {line}
              </li>
            ))}
          </ul>
          <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3.5">
            <a href={contactInfo.phoneHref} className="inline-flex items-center gap-2 font-display text-[0.92rem] font-semibold text-white/90 transition-colors hover:text-primary">
              <Phone className="size-[18px] text-primary" /> {contactInfo.phone}
            </a>
            <a href={`mailto:${contactInfo.email}`} className="inline-flex items-center gap-2 font-display text-[0.92rem] font-semibold text-white/90 transition-colors hover:text-primary">
              <Mail className="size-[18px] text-primary" /> {contactInfo.email}
            </a>
            <a href={contactInfo.socials.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-display text-[0.92rem] font-semibold text-white/90 transition-colors hover:text-primary">
              <MessageCircle className="size-[18px] text-primary" /> WhatsApp us
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-[20px] bg-white p-7 text-charcoal shadow-lift md:p-9">
            {isSuccess ? (
              <div className="py-8 text-center">
                <div className="mx-auto mb-5 grid size-16 place-items-center rounded-full bg-gold-soft text-gold-deep">
                  <Check className="size-8" strokeWidth={2.4} />
                </div>
                <h3 className="font-display text-[1.35rem] font-semibold text-ink">JazakAllahu Khair!</h3>
                <p className="mx-auto mt-2 max-w-md text-muted-foreground">
                  We have received your details and will be in touch soon, in sha Allah. May Allah make
                  your journey easy and accepted.
                </p>
                <Button onClick={reset} variant="ghost" className="mt-7">
                  Send another enquiry
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <h3 className="font-display text-[1.35rem] font-semibold text-ink">Tell us about your trip</h3>
                  <p className="mt-1 text-[0.94rem] text-muted-foreground">All fields with * are required.</p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Full name" htmlFor="lead-name" required>
                    <Input id="lead-name" name="name" autoComplete="name" required value={formData.name} onChange={set('name')} />
                  </Field>
                  <Field label="Mobile" htmlFor="lead-phone" required>
                    <Input id="lead-phone" name="phone" type="tel" autoComplete="tel" required value={formData.phone} onChange={set('phone')} />
                  </Field>
                </div>

                <Field label="Email" htmlFor="lead-email" required>
                  <Input id="lead-email" name="email" type="email" autoComplete="email" required value={formData.email} onChange={set('email')} />
                </Field>

                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Trip of interest" htmlFor="lead-interest">
                    <Select id="lead-interest" name="interest" value={formData.interest} onChange={set('interest')}>
                      <option value="">Not sure yet, help me choose</option>
                      {availableTrips.map((trip) => (
                        <option key={trip.slug} value={trip.name}>{trip.name}</option>
                      ))}
                      <option value="Umrah Companion (private trip)">Umrah Companion (private trip)</option>
                    </Select>
                  </Field>
                  <Field label="Travellers" htmlFor="lead-travellers">
                    <Select id="lead-travellers" name="travellers" value={formData.travellers} onChange={set('travellers')}>
                      {['1', '2', '3-4', '5+', 'Group / family'].map((v) => (
                        <option key={v} value={v}>{v}</option>
                      ))}
                    </Select>
                  </Field>
                </div>

                <Field label="When would you like to travel?" htmlFor="lead-when">
                  <Input id="lead-when" name="when" placeholder="e.g. Ramadan, December, flexible" value={formData.when} onChange={set('when')} />
                </Field>

                <Field label="Anything else?" htmlFor="lead-message">
                  <Textarea id="lead-message" name="message" rows={3} placeholder="Optional. Tell us about your group or any questions." value={formData.message} onChange={set('message')} />
                </Field>

                <Button type="submit" size="lg" disabled={isSubmitting} className="mt-1.5 w-full">
                  {isSubmitting ? (
                    <>
                      <Loader2 className="size-5 animate-spin" /> Sending
                    </>
                  ) : (
                    'Submit enquiry'
                  )}
                </Button>

                {isError && (
                  <p role="alert" className="text-center text-[0.85rem] text-destructive">
                    {errorMessage} You can also WhatsApp us on {contactInfo.phone}.
                  </p>
                )}
                <p className="text-center text-[0.8rem] text-muted-foreground">
                  By submitting, you agree to be contacted by Al Haramain Travels about your enquiry.
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
