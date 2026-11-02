import type { Metadata } from "next";
import Link from "next/link";
import { HeroHeader } from "@/components/header";
import { PageHeader } from "@/components/PageHeader";
import { Footer } from "@/components/sections/Footer";
import { Reveal } from "@/components/ui/reveal";
import { contactInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "Refund and Cancellation Policy",
  description:
    "How cancellations and refunds work when you book an Umrah trip with Al-Haramain Travels: how to cancel, what deposits cover, visa and insurance costs, how refunds are paid and what happens if we cancel a trip.",
  alternates: { canonical: "https://alharamaintravels.com.au/refund-policy" },
  robots: { index: true, follow: true },
};

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <HeroHeader />

      <PageHeader
        title="Refund and Cancellation Policy"
        description="What happens if your plans change, and what happens if ours do."
        image="/gallery/haram-colonnade.jpg"
        imageAlt="Golden lanterns along the colonnades of Masjid al-Haram"
        breadcrumbs={[
          { href: "/", label: "Home" },
          { href: "/refund-policy", label: "Refund Policy" },
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

            <h2>1. Overview</h2>
            <p>
              We know that circumstances change, and we will always try to find the fairest outcome
              when they do. At the same time, the moment you book we start paying airlines, hotels
              and visa providers on your behalf, and many of those costs cannot be recovered. This
              policy explains how cancellations work, what you can expect back, and how and when we
              pay refunds. It forms part of our{" "}
              <Link href="/terms">Booking Terms &amp; Conditions</Link>.
            </p>
            <p>
              The cancellation schedule that applies to your specific trip is set out in your
              booking confirmation. Where this page and your booking confirmation differ, the booking
              confirmation applies.
            </p>

            <h2>2. How to cancel</h2>
            <p>
              Cancellations must be made in writing by the person who made the booking. Please email{" "}
              <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a> with your full name,
              the trip name and the names of any travellers you are cancelling. A phone call or
              WhatsApp message is a helpful heads-up, but the cancellation only takes effect on the
              business day we receive your written notice. We will confirm receipt in writing and
              tell you what, if anything, is refundable.
            </p>
            <p>
              If you cancel one traveller from a shared room, the remaining traveller may need to
              move to a different room type, and their price may change as a result.
            </p>

            <h2>3. Deposits</h2>
            <p>
              Your deposit is used straight away to secure your seat, your hotel room and your visa
              processing. These are non-refundable supplier costs, so deposits are generally
              non-refundable once paid. In limited cases where a supplier has not yet charged us, we
              may be able to return part of a deposit, and we will tell you if that is possible when
              you cancel.
            </p>

            <h2>4. Cancelling after the deposit</h2>
            <p>
              The amount we can refund after the deposit depends on two things: how far before
              departure you cancel, and what our suppliers have already charged us for your place.
              As a general rule, the closer to departure you cancel, the less we are able to recover,
              because airlines and hotels apply their own cancellation charges and many of them
              become fully non-refundable in the final weeks.
            </p>
            <p>
              The cancellation charges that apply at each stage are set out in your booking
              confirmation. Where we recover more from a supplier than that schedule assumes, we will
              pass the difference on to you. Where the balance has not been paid by its due date, we
              may treat the booking as cancelled by you and the same schedule applies.
            </p>
            <p>
              We strongly recommend comprehensive travel insurance taken out at the time of paying
              your deposit. Many policies cover cancellation for illness, injury, bereavement and
              other unforeseen events, which is exactly when supplier charges are most painful.
            </p>

            <h2>5. Visa fees and insurance</h2>
            <p>
              Umrah visa fees and the mandatory health insurance that comes with the visa are paid to
              the Saudi authorities and their providers when the application is lodged. They are
              non-refundable once the application has been submitted, whether or not the visa is
              granted and whether or not you travel. Travel insurance premiums are likewise
              non-refundable once the policy is issued.
            </p>

            <h2>6. Flights</h2>
            <p>
              Group airfares are issued under airline conditions that are usually more restrictive
              than individual tickets. Once a ticket is issued, name changes, date changes and
              refunds are subject to the airline’s rules and fees, and some fares cannot be changed
              or refunded at all. Where a refund of airport taxes is available on an unused ticket,
              we will claim it for you and pass it on.
            </p>

            <h2>7. Transferring your place</h2>
            <p>
              Where suppliers allow it, you may be able to transfer your place to another eligible
              traveller, or move your booking to a future trip, instead of cancelling. Transfers are
              subject to visa eligibility, airline name-change rules and availability, and any fees
              charged by suppliers will be passed on at cost. Please ask us as early as possible, as
              transfers are rarely possible once tickets and visas have been issued.
            </p>

            <h2>8. Unused services and leaving early</h2>
            <p>
              No refund is given for services you choose not to use once the trip has started, such
              as hotel nights, meals, transfers or ziyarah, or if you leave the trip early for any
              reason, including being asked to leave under our Booking Terms. If you are unable to
              continue because of illness or injury, your travel insurance is the right place to
              claim.
            </p>

            <h2>9. If we cancel a trip</h2>
            <p>
              Occasionally we have to cancel a departure, for example if the minimum group size is
              not reached or a supplier withdraws. If we cancel your trip for a reason within our
              control, you can choose between a full refund of everything you have paid to us, or a
              transfer of your payments to another of our trips. We will give you as much notice as
              we can.
            </p>
            <p>
              We are not responsible for costs you have incurred outside the package, such as
              domestic flights to the departure city, visas for other countries, vaccinations or
              clothing, so please do not commit to these until we have confirmed the trip is going
              ahead.
            </p>

            <h2>10. Events outside anyone’s control</h2>
            <p>
              Sometimes a trip is cancelled, cut short or changed because of events that neither you
              nor we can control, such as government travel restrictions, closure of the holy sites,
              changes to Saudi visa rules, epidemics, natural disasters, war or civil unrest, airline
              collapse or industrial action. In those situations we will work to recover as much as
              possible from suppliers and return it to you, but we cannot guarantee a full refund,
              and we may offer credits or transfers where that is what suppliers provide to us. We
              are not liable for additional losses caused by such events.
            </p>

            <h2>11. How and when refunds are paid</h2>
            <p>
              Refunds are paid to the original payment method and to the person who made the
              payment. Where that is not possible, we will ask for bank details in writing. Because
              we usually have to recover funds from airlines, hotels and other suppliers before we
              can refund them to you, refunds can take several weeks to arrive. We will tell you the
              expected timeframe when we confirm your cancellation and keep you updated if it
              changes. Refunds are made in Australian dollars, and we cannot compensate for currency
              movements or bank fees charged by your own bank.
            </p>

            <h2>12. Your rights under Australian Consumer Law</h2>
            <p>
              Nothing in this policy limits your rights under the Australian Consumer Law. If a
              service we provide fails to meet a consumer guarantee, you may be entitled to a remedy
              regardless of what this policy says. Change-of-mind cancellations are not covered by
              those guarantees, which is why the schedule in your booking confirmation applies to
              them.
            </p>

            <h2>13. Questions</h2>
            <p>
              If you are unsure about anything in this policy, or you need to cancel and want to
              understand your options first, please contact us before you decide.
            </p>
            <p>
              Al Haramain Travels
              <br />
              Email: <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
              <br />
              Phone: <a href={contactInfo.phoneHref}>{contactInfo.phone}</a>
              <br />
              Hours: {contactInfo.hours}
            </p>
          </article>
        </Reveal>
      </div>

      <Footer />
    </div>
  );
}
