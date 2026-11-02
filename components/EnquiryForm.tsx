"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { AlertCircle, Check, Loader2, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Field, Input, Textarea } from "@/components/ui/field";
import { Reveal } from "@/components/ui/reveal";
import { useContactForm } from "@/lib/useContactForm";
import { contactInfo } from "@/lib/data";

interface EnquiryFormProps {
  tripName: string;
  subject?: string;
}

type FormState = {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
};

const emptyForm = (subject: string): FormState => ({
  name: "",
  phone: "",
  email: "",
  subject,
  message: "",
});

const assurances = [
  "A real person responds, usually within one business day.",
  "Your details are kept private and never shared.",
  "No payment needed to enquire.",
];

// On-page enquiry for a single trip, in the UK lead-band layout. Posts to Web3Forms through useContactForm.
export function EnquiryForm({ tripName, subject }: EnquiryFormProps) {
  const defaultSubject = subject ?? `Enquiry: ${tripName}`;
  const { isSubmitting, isSuccess, isError, errorMessage, submitForm, reset } = useContactForm();
  const [formData, setFormData] = useState<FormState>(() => emptyForm(defaultSubject));

  const update =
    (key: keyof FormState) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setFormData((prev) => ({ ...prev, [key]: e.target.value }));

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const ok = await submitForm({
      subject: formData.subject,
      trip: tripName,
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      message: formData.message,
      form_type: "Trip Enquiry",
    });

    if (ok) setFormData(emptyForm(defaultSubject));
  };

  return (
    <section id="enquiry" className="scroll-mt-24 bg-charcoal py-24 text-white md:py-[96px]">
      <div className="container-x grid items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-[60px]">
        {/* Left: copy and assurances */}
        <Reveal>
          <p className="eyebrow text-primary">Book your trip</p>
          <h2 className="mt-3.5 font-display text-[clamp(2rem,3.8vw,2.9rem)] font-bold leading-[1.12] text-white">
            Enquire about this trip
          </h2>
          <p className="mt-[18px] max-w-[460px] text-[1.05rem] leading-relaxed text-white/85">
            Leave your details and our team will call you back about {tripName} with dates, pricing
            and next steps. No obligation, just a calm, helpful conversation when you are ready.
          </p>

          <ul className="mt-[26px] grid gap-3.5">
            {assurances.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[0.95rem] text-white/90">
                <Check className="mt-0.5 size-5 shrink-0 text-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3.5">
            <a
              href={contactInfo.phoneHref}
              className="inline-flex items-center gap-2 font-display text-[0.92rem] font-semibold text-white/90 transition-colors hover:text-primary"
            >
              <Phone className="size-[18px] text-primary" />
              {contactInfo.phone}
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              className="inline-flex items-center gap-2 break-all font-display text-[0.92rem] font-semibold text-white/90 transition-colors hover:text-primary"
            >
              <Mail className="size-[18px] text-primary" />
              {contactInfo.email}
            </a>
          </div>
        </Reveal>

        {/* Right: white form card */}
        <Reveal delay={0.1}>
          <div className="rounded-[20px] bg-white p-7 text-charcoal shadow-lift md:p-9">
            {isSuccess ? (
              <div role="status" className="px-2 py-8 text-center">
                <span className="mx-auto grid size-16 place-items-center rounded-full bg-gold-soft text-gold-deep">
                  <Check className="size-8" strokeWidth={2.4} />
                </span>
                <h3 className="mt-[18px] font-display text-[1.35rem] font-semibold text-ink">
                  Enquiry sent
                </h3>
                <p className="mx-auto mt-2 max-w-md text-[0.98rem] leading-relaxed text-muted-foreground">
                  Thank you for your interest in {tripName}. Our team will be in touch shortly.
                </p>
                <Button type="button" variant="ghost" onClick={reset} className="mt-7">
                  Send another enquiry
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 className="font-display text-[1.35rem] font-semibold text-ink">
                  Tell us about your trip
                </h3>
                <p className="mb-6 mt-1.5 text-[0.94rem] text-muted-foreground">
                  All fields with * are required.
                </p>

                {isError && (
                  <div
                    role="alert"
                    className="mb-4 flex items-start gap-3 rounded-[11px] border border-destructive/40 bg-destructive/5 px-4 py-3 text-sm text-destructive"
                  >
                    <AlertCircle className="mt-0.5 size-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid gap-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Full name" htmlFor="enquiry-name" required>
                      <Input
                        id="enquiry-name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        required
                        value={formData.name}
                        onChange={update("name")}
                      />
                    </Field>
                    <Field label="Mobile" htmlFor="enquiry-phone" required>
                      <Input
                        id="enquiry-phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        required
                        value={formData.phone}
                        onChange={update("phone")}
                      />
                    </Field>
                  </div>

                  <Field label="Email" htmlFor="enquiry-email" required>
                    <Input
                      id="enquiry-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={formData.email}
                      onChange={update("email")}
                    />
                  </Field>

                  <Field label="Subject" htmlFor="enquiry-subject">
                    <Input
                      id="enquiry-subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={update("subject")}
                    />
                  </Field>

                  <Field
                    label="Message"
                    htmlFor="enquiry-message"
                    hint="Tell us who is travelling, your departure city and any questions you have."
                  >
                    <Textarea
                      id="enquiry-message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={update("message")}
                    />
                  </Field>
                </div>

                <Button type="submit" size="lg" disabled={isSubmitting} className="mt-5 w-full">
                  {isSubmitting ? (
                    <>
                      <Loader2 className="size-5 animate-spin" />
                      Sending
                    </>
                  ) : (
                    "Submit enquiry"
                  )}
                </Button>

                <p className="mt-3.5 text-center text-[0.8rem] text-muted-foreground">
                  By submitting, you agree to be contacted by Al Haramain Travels about your
                  enquiry.
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
