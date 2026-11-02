import type { Metadata } from "next";
import { HeroHeader } from "@/components/header";
import { PageHeader } from "@/components/PageHeader";
import { Footer } from "@/components/sections/Footer";
import { Reveal } from "@/components/ui/reveal";
import { contactInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Al-Haramain Travels collects, uses, stores and shares your personal information when you enquire about or book an Umrah trip, in line with the Australian Privacy Act 1988.",
  alternates: { canonical: "https://alharamaintravels.com.au/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <HeroHeader />

      <PageHeader
        title="Privacy Policy"
        description="How we collect, use and protect your personal information."
        image="/gallery/haram-colonnade.jpg"
        imageAlt="Golden lanterns along the colonnades of Masjid al-Haram"
        breadcrumbs={[
          { href: "/", label: "Home" },
          { href: "/privacy", label: "Privacy Policy" },
        ]}
        compact
      />

      <div className="container-x">
        <Reveal>
          <article className="prose-ah mx-auto max-w-3xl py-16">
            <p className="italic text-muted-foreground">
              This policy is a draft prepared for Al-Haramain Travels and should be reviewed by a
              qualified adviser before publication.
            </p>
            <p>
              <strong>Last updated: 2 November 2026</strong>
            </p>

            <h2>1. Who we are and what this policy covers</h2>
            <p>
              Al Haramain Travels (“we”, “us”, “our”) organises guided Umrah trips and related travel
              services for pilgrims travelling from Australia. We are bound by the Privacy Act 1988
              (Cth) and the Australian Privacy Principles (APPs). This policy explains what personal
              information we collect, why we collect it, who we share it with and how you can access
              or correct it. It applies to our website, our enquiry forms, our social media channels
              and every booking we handle.
            </p>

            <h2>2. The personal information we collect</h2>
            <p>What we collect depends on how you deal with us.</p>
            <h3>When you enquire</h3>
            <ul>
              <li>Your name, phone number and email address.</li>
              <li>The trip or service you are interested in and anything you write in your message.</li>
            </ul>
            <h3>When you book a trip</h3>
            <ul>
              <li>
                Identity and passport details for every traveller on the booking: full name as it
                appears in the passport, date of birth, gender, nationality, passport number, issue
                and expiry dates, and a scan or photo of the passport.
              </li>
              <li>Contact details and a residential address, and emergency contact details.</li>
              <li>
                Health information that is needed to arrange your Umrah visa, the mandatory health
                insurance and any travel insurance, such as existing medical conditions, mobility
                needs, dietary requirements and vaccination records where Saudi authorities require
                them. This is sensitive information and we only collect it with your consent.
              </li>
              <li>
                Payment information. Card and bank details are handled by our payment providers; we
                keep a record of what was paid and when, not your full card number.
              </li>
              <li>
                Family relationships where they are relevant to the booking, for example a mahram
                travelling with a female pilgrim, or children travelling with parents.
              </li>
            </ul>
            <h3>When you use our website</h3>
            <ul>
              <li>
                Technical information such as your IP address, browser type, pages visited and how
                you arrived at the site, collected through cookies and analytics tools (see section 9).
              </li>
            </ul>
            <p>
              If you give us information about another person, for example a family member on your
              booking, please make sure they know you have done so and that they have seen this
              policy.
            </p>

            <h2>3. Why we collect it</h2>
            <p>We collect and use your personal information to:</p>
            <ul>
              <li>Respond to your enquiry and provide quotes.</li>
              <li>Make and manage your booking, including flights, hotels, ground transport and ziyarah.</li>
              <li>Lodge your Umrah visa application and arrange the health insurance that comes with it.</li>
              <li>Arrange travel insurance where you ask us to.</li>
              <li>Keep you informed before and during the trip, including group communications.</li>
              <li>Look after your safety and wellbeing while you are travelling with our group.</li>
              <li>Process payments, refunds and our own accounting and record keeping.</li>
              <li>Meet our legal obligations, including those imposed by Australian and Saudi authorities.</li>
              <li>
                Tell you about future trips and offers where you have agreed to hear from us. You can
                opt out at any time using the link in our messages or by contacting us.
              </li>
            </ul>
            <p>
              We do not sell your personal information and we do not use it for any purpose that is
              unrelated to the services you have asked for without telling you first.
            </p>

            <h2>4. Who we share it with</h2>
            <p>
              To deliver an Umrah trip we have to pass your details to the organisations that
              actually provide each part of the journey. These include:
            </p>
            <ul>
              <li>Airlines and airline booking systems.</li>
              <li>Hotels in Makkah and Madinah and the companies that operate ground transport and the Haramain train.</li>
              <li>
                The Saudi Arabian Ministry of Hajj and Umrah, the Nusuk platform and the licensed
                Saudi service providers through which Umrah visas and permits are issued.
              </li>
              <li>Insurers, for the mandatory health insurance and any travel insurance you take out.</li>
              <li>Payment processors and our bank.</li>
              <li>
                Our own service providers, such as the hosting, email and form services behind this
                website, who are only permitted to use your information to provide those services to us.
              </li>
              <li>Our group leaders and Shaykhs, so they can care for you during the trip.</li>
              <li>Government agencies, regulators or courts where the law requires it.</li>
            </ul>
            <h3>Overseas disclosure</h3>
            <p>
              Because Umrah takes place in Saudi Arabia, your information will be sent to recipients
              there, and to airlines and hotel groups that may process data in other countries. Those
              recipients are not bound by the Australian Privacy Act. By booking with us you consent
              to these overseas disclosures, which are necessary to perform the services you have
              requested. We only send what each recipient needs.
            </p>

            <h2>5. How we store and protect it</h2>
            <p>
              We store personal information in password-protected systems with access limited to
              team members who need it to do their job. Passport scans and health information are
              treated with additional care and are only shared with suppliers who require them. We
              use reputable Australian and international cloud providers and take reasonable steps to
              protect your information from misuse, interference, loss, unauthorised access,
              modification or disclosure.
            </p>
            <p>
              No system is completely secure. If a data breach occurs that is likely to cause you
              serious harm, we will notify you and the Office of the Australian Information
              Commissioner as required by the Notifiable Data Breaches scheme.
            </p>

            <h2>6. How long we keep it</h2>
            <p>
              We keep booking records for as long as we need them to deliver the trip, deal with any
              follow-up questions or claims, and meet our tax and record-keeping obligations. Passport
              scans and health information are deleted or de-identified once they are no longer
              needed for the booking they were collected for. Enquiry details that do not lead to a
              booking are kept for a reasonable period so we can follow up, then removed.
            </p>

            <h2>7. Access and correction</h2>
            <p>
              You can ask us at any time for a copy of the personal information we hold about you,
              and ask us to correct anything that is inaccurate, out of date or incomplete. Please
              email us at the address below. We will respond within a reasonable time and will not
              charge you for making the request. If we refuse access or correction in whole or in
              part, we will explain why in writing.
            </p>
            <p>
              Keeping your passport and contact details current is important, because errors can
              result in a visa being refused or a flight being denied.
            </p>

            <h2>8. Complaints</h2>
            <p>
              If you believe we have handled your personal information in a way that breaches the
              Australian Privacy Principles, please contact us first using the details below. We will
              acknowledge your complaint, investigate it and respond to you in writing within a
              reasonable period.
            </p>
            <p>
              If you are not satisfied with our response, you can complain to the Office of the
              Australian Information Commissioner (OAIC) at{" "}
              <a href="https://www.oaic.gov.au" target="_blank" rel="noopener noreferrer">
                oaic.gov.au
              </a>{" "}
              or by calling 1300 363 992.
            </p>

            <h2>9. Cookies and analytics</h2>
            <p>
              Our website uses cookies and similar technologies so that pages load correctly, forms
              work and we can understand which parts of the site are useful. We may use analytics
              services that report aggregated, anonymised information about visits. Where we run
              advertising, platforms such as Meta and Google may set cookies to measure the results
              of those campaigns.
            </p>
            <p>
              You can block or delete cookies through your browser settings. Doing so may affect how
              parts of the site work, but it will not stop you from contacting us by phone or email.
            </p>

            <h2>10. Social media and third-party links</h2>
            <p>
              Our website links to Instagram, Facebook, TikTok and WhatsApp. Those platforms have
              their own privacy policies and we are not responsible for how they handle your
              information. If you message us on a social platform, we may record the enquiry in our
              own systems so that we can respond and follow up.
            </p>

            <h2>11. Changes to this policy</h2>
            <p>
              We may update this policy from time to time. The current version will always be
              published on this page with the date it was last updated. Changes apply from the date
              they are published.
            </p>

            <h2>12. Contact us</h2>
            <p>
              Questions, access requests and complaints about privacy can be sent to:
            </p>
            <p>
              Al Haramain Travels
              <br />
              Email: <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
              <br />
              Phone: <a href={contactInfo.phoneHref}>{contactInfo.phone}</a>
              <br />
              Offices: {contactInfo.addresses.map((a) => a.location).join(" and ")}
            </p>
          </article>
        </Reveal>
      </div>

      <Footer />
    </div>
  );
}
