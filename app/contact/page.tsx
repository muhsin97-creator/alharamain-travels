"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  Check,
  Clock,
  Instagram,
  Loader2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  type LucideIcon,
} from "lucide-react";
import { HeroHeader } from "@/components/header";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/SectionHeading";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { Field, Input, Select, Textarea } from "@/components/ui/field";
import { Accordion, AccordionItem } from "@/components/ui/accordion";
import { Reveal } from "@/components/ui/reveal";
import { useContactForm } from "@/lib/useContactForm";
import { contactInfo, generalFaqs, umrahTrips } from "@/lib/data";

const availableTrips = umrahTrips.filter((trip) => !trip.expired);

const interestOptions = [
  ...availableTrips.map((trip) => trip.name),
  "Umrah Companion (private trip)",
  "Custom package",
  "General enquiry",
];

const socialLinks = [
  { label: "Instagram", href: contactInfo.socials.instagram },
  { label: "Facebook", href: contactInfo.socials.facebook },
  { label: "TikTok", href: contactInfo.socials.tiktok },
];

const assurances = [
  "A real person responds, usually within one business day",
  "Your details are kept private and never shared",
  "No payment needed to enquire",
];

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: generalFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

const emptyForm = { name: "", phone: "", email: "", interest: "", message: "" };

// UK .card .ic: 56px gold-soft square with a gold-deep icon
function IconChip({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <div className="mb-5 grid size-14 place-items-center rounded-[14px] bg-gold-soft text-gold-deep">
      <Icon className="size-7" aria-hidden="true" />
    </div>
  );
}

export default function ContactPage() {
  const { isSubmitting, isSuccess, isError, errorMessage, submitForm, reset } = useContactForm();
  const [formData, setFormData] = useState(emptyForm);

  const update = (key: keyof typeof emptyForm) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setFormData((prev) => ({ ...prev, [key]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const ok = await submitForm({
      subject: `Website enquiry: ${formData.interest || "General enquiry"}`,
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      interest: formData.interest,
      message: formData.message,
    });
    if (ok) setFormData(emptyForm);
  };

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <HeroHeader />

      <PageHeader
        title="Talk to our team"
        description="Tell us which trip you have in mind, or ask us anything about Umrah. We call every enquiry back within one business day."
        image="/gallery/nabawi-sunset.jpg"
        imageAlt="Sunset over the courtyard of Masjid an-Nabawi"
        breadcrumbs={[
          { href: "/", label: "Home" },
          { href: "/contact", label: "Contact" },
        ]}
      />

      {/* UK .lead: charcoal split, copy and assurances left, white form card right */}
      <section id="enquire" className="bg-charcoal py-24 text-white md:py-[96px]">
        <div className="container-x">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-[60px]">
            <Reveal>
              <p className="eyebrow text-primary">Send an enquiry</p>
              <h2 className="mt-3.5 font-display text-[clamp(2rem,3.8vw,2.9rem)] font-bold leading-[1.12] text-white">
                Start your journey today
              </h2>
              <p className="mt-4 max-w-[460px] text-[1.05rem] leading-relaxed text-white/85">
                Leave your details and our team will be in touch with the right trip, dates and
                pricing for you. No obligation, just a calm, helpful conversation when you are ready.
              </p>

              <ul className="mt-7 grid gap-3.5">
                {assurances.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[0.95rem] text-white/90">
                    <Check className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3.5">
                <a
                  href={contactInfo.phoneHref}
                  className="inline-flex items-center gap-2 font-display text-[0.92rem] font-semibold text-white/90 transition-colors hover:text-primary"
                >
                  <Phone className="size-[18px] text-primary" aria-hidden="true" />
                  {contactInfo.phone}
                </a>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="inline-flex items-center gap-2 break-all font-display text-[0.92rem] font-semibold text-white/90 transition-colors hover:text-primary"
                >
                  <Mail className="size-[18px] shrink-0 text-primary" aria-hidden="true" />
                  {contactInfo.email}
                </a>
                <a
                  href={contactInfo.socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-display text-[0.92rem] font-semibold text-white/90 transition-colors hover:text-primary"
                >
                  <MessageCircle className="size-[18px] text-primary" aria-hidden="true" />
                  WhatsApp us
                </a>
              </div>
            </Reveal>

            {/* UK .form-card */}
            <Reveal delay={0.1}>
              <div className="rounded-[20px] bg-white p-6 text-charcoal shadow-lift sm:p-9">
                {isSuccess ? (
                  <div role="status" aria-live="polite" className="px-2 py-8 text-center">
                    <div className="mx-auto mb-4 grid size-16 place-items-center rounded-full bg-gold-soft text-gold-deep">
                      <Check className="size-8" aria-hidden="true" />
                    </div>
                    <h3 className="font-display text-[1.35rem] font-semibold text-ink">
                      Thank you, we have your enquiry
                    </h3>
                    <p className="mx-auto mt-2 max-w-[42ch] text-[0.98rem] leading-relaxed text-muted-foreground">
                      One of our team will call you back within one business day. If it is urgent,
                      call or WhatsApp us on {contactInfo.phone}.
                    </p>
                    <button
                      type="button"
                      onClick={reset}
                      className="mt-6 font-display text-sm font-semibold text-gold-deep underline-offset-4 hover:underline"
                    >
                      Send another enquiry
                    </button>
                  </div>
                ) : (
                  <>
                    <h3 className="font-display text-[1.35rem] font-semibold text-ink">
                      Tell us about your trip
                    </h3>
                    <p className="mt-1.5 text-[0.94rem] text-muted-foreground">
                      All fields with * are required
                    </p>

                    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <Field label="Full name" htmlFor="name" required>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            autoComplete="name"
                            required
                            value={formData.name}
                            onChange={update("name")}
                          />
                        </Field>
                        <Field label="Phone" htmlFor="phone" required>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            autoComplete="tel"
                            inputMode="tel"
                            required
                            value={formData.phone}
                            onChange={update("phone")}
                          />
                        </Field>
                      </div>

                      <Field label="Email" htmlFor="email" required>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          inputMode="email"
                          required
                          value={formData.email}
                          onChange={update("email")}
                        />
                      </Field>

                      <Field
                        label="What are you interested in?"
                        htmlFor="interest"
                        hint="Choose a trip, or tell us you are after something private or custom."
                      >
                        <Select
                          id="interest"
                          name="interest"
                          value={formData.interest}
                          onChange={update("interest")}
                        >
                          <option value="">Select an option</option>
                          {interestOptions.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </Select>
                      </Field>

                      <Field label="Message" htmlFor="message">
                        <Textarea
                          id="message"
                          name="message"
                          rows={4}
                          value={formData.message}
                          onChange={update("message")}
                        />
                      </Field>

                      {isError && (
                        <p role="alert" className="text-center text-[0.85rem] text-destructive">
                          {errorMessage || "Something went wrong. Please try again, or call us directly."}
                        </p>
                      )}

                      <Button
                        type="submit"
                        size="lg"
                        disabled={isSubmitting}
                        aria-busy={isSubmitting}
                        className="mt-1.5 w-full"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="size-5 animate-spin" aria-hidden="true" />
                            Sending
                          </>
                        ) : (
                          "Submit enquiry"
                        )}
                      </Button>
                      <p className="pt-1 text-center text-[0.8rem] text-muted-foreground">
                        By submitting, you agree to be contacted by Al Haramain Travels about your
                        enquiry.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Offices, hours and socials: white cards on cream */}
      <section className="bg-background py-24 md:py-[96px]">
        <div className="container-x">
          <SectionHeading
            eyebrow="Where to find us"
            title="Call, message or visit"
            intro="Our team is based in Melbourne and Sydney and happy to talk through any trip before you commit to anything."
            align="center"
          />
          <Reveal>
            <div className="grid gap-[26px] sm:grid-cols-2 lg:grid-cols-4">
              {contactInfo.addresses.map((address) => (
                <div key={address.state} className="lift rounded-2xl border border-border bg-card p-8">
                  <IconChip icon={MapPin} />
                  <h3 className="font-display text-[1.22rem] font-semibold text-ink">
                    {address.state} office
                  </h3>
                  <p className="mt-2.5 text-[0.98rem] leading-relaxed text-muted-foreground">
                    {address.location}
                  </p>
                </div>
              ))}

              <div className="lift rounded-2xl border border-border bg-card p-8">
                <IconChip icon={Clock} />
                <h3 className="font-display text-[1.22rem] font-semibold text-ink">Opening hours</h3>
                <p className="mt-2.5 text-[0.98rem] leading-relaxed text-muted-foreground">
                  {contactInfo.hours}
                </p>
                <a
                  href={contactInfo.phoneHref}
                  className="mt-3 inline-block font-display text-[0.95rem] font-semibold text-gold-deep transition-colors hover:text-primary"
                >
                  {contactInfo.phone}
                </a>
              </div>

              <div className="lift rounded-2xl border border-border bg-card p-8">
                <IconChip icon={Instagram} />
                <h3 className="font-display text-[1.22rem] font-semibold text-ink">Follow our trips</h3>
                <ul className="mt-2.5 space-y-2">
                  {socialLinks.map((social) => (
                    <li key={social.label}>
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[0.98rem] font-medium text-muted-foreground transition-colors hover:text-primary"
                      >
                        {social.label}
                        <ArrowUpRight className="size-4" aria-hidden="true" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ: UK .faq-list on cream-2 */}
      <section className="bg-surface py-24 md:py-[96px]">
        <div className="container-x">
          <SectionHeading
            eyebrow="FAQ"
            title="Common questions"
            intro="Quick answers to what most pilgrims ask before they book. Anything else, just ask us."
            align="center"
          />
          <Reveal>
            <Accordion className="mx-auto max-w-[800px]">
              {generalFaqs.map((faq) => (
                <AccordionItem key={faq.question} title={faq.question}>
                  {faq.answer}
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
