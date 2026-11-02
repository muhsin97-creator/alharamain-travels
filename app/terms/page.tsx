import type { Metadata } from "next";
import Link from "next/link";
import { HeroHeader } from "@/components/header";
import { PageHeader } from "@/components/PageHeader";
import { Footer } from "@/components/sections/Footer";
import { Reveal } from "@/components/ui/reveal";
import { contactInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "Booking Terms & Conditions",
  description:
    "The terms that apply when you book an Umrah trip with Al-Haramain Travels: deposits and instalments, passports and visas, insurance, itinerary changes, conduct, liability and your rights under Australian Consumer Law.",
  alternates: { canonical: "https://alharamaintravels.com.au/terms" },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <HeroHeader />

      <PageHeader
        title="Booking Terms & Conditions"
        description="What you agree to when you book a trip with us, written in plain English."
        image="/gallery/haram-colonnade.jpg"
        imageAlt="Golden lanterns along the colonnades of Masjid al-Haram"
        breadcrumbs={[
          { href: "/", label: "Home" },
          { href: "/terms", label: "Terms & Conditions" },
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

            <h2>1. About these terms</h2>
            <p>
              These terms apply to every booking made with Al Haramain Travels (“we”, “us”, “our”)
              for a group Umrah trip, an Umrah Companion private trip or any other travel service we
              arrange. By paying a deposit you confirm that you have read and accepted these terms on
              behalf of yourself and everyone else named on the booking. If you are booking for
              someone under 18, you accept these terms on their behalf as their parent or guardian.
            </p>
            <p>
              Please read them together with our{" "}
              <Link href="/refund-policy">Refund and Cancellation Policy</Link> and our{" "}
              <Link href="/privacy">Privacy Policy</Link>, which form part of your agreement with us.
            </p>

            <h2>2. Making a booking and paying a deposit</h2>
            <p>
              A booking request is made when you complete our enquiry or registration form, or
              confirm with our team by phone, email or WhatsApp. Your place on a trip is only held
              once we have received the deposit set out in your booking confirmation and confirmed it
              in writing. Deposits are used immediately to secure flights, hotel rooms and visa
              processing, which is why they are treated as described in our Refund and Cancellation
              Policy.
            </p>
            <p>
              Places on group trips are limited and are allocated in the order that deposits are
              received. Submitting an enquiry does not guarantee a place.
            </p>

            <h2>3. Instalments and the final balance</h2>
            <p>
              After the deposit, you may pay the remaining balance in instalments as agreed with our
              team and recorded in your booking confirmation. Whatever instalment plan you choose,
              the full balance must be received by us no later than four weeks before departure.
            </p>
            <p>
              If the balance is not paid by that date and you have not made an alternative
              arrangement with us in writing, we may treat the booking as cancelled by you and the
              Refund and Cancellation Policy will apply. Bookings made within four weeks of departure
              must be paid in full at the time of booking.
            </p>

            <h2>4. Prices and what is included</h2>
            <p>
              Prices are quoted in Australian dollars and are per person, based on the room type
              shown. What is and is not included is listed on each trip page and repeated in your
              booking confirmation. Items not listed as included, such as meals outside those
              specified, personal spending, optional activities and excess baggage, are your
              responsibility.
            </p>
            <p>
              Quoted prices may change until your deposit is received. After that, we will only pass
              on increases that are genuinely outside our control, such as government taxes, airline
              fuel surcharges or significant currency movements, and we will show you how the
              increase was calculated. Where a trip is advertised as “register your interest”, final
              dates and pricing will be confirmed to you before you are asked to pay anything.
            </p>

            <h2>5. Passports and travel documents</h2>
            <p>
              Every traveller must hold a passport that is valid for at least six months beyond the
              date you are due to return to Australia, with at least two blank pages. Names on the
              booking must match the passport exactly. Correcting a name after tickets are issued
              usually incurs airline fees and is not always possible.
            </p>
            <p>
              You are responsible for giving us accurate passport, contact and health details by the
              dates we ask for them. Delays in providing documents can mean a visa cannot be
              processed in time, and we cannot be held responsible for the consequences. Travellers
              who are not Australian citizens must also make sure they hold the right to re-enter
              Australia or whichever country they are returning to.
            </p>

            <h2>6. Umrah visas</h2>
            <p>
              We lodge your Umrah visa application on your behalf through the Saudi Arabian Nusuk
              platform and its licensed providers, and the cost of visa processing is included in
              every package unless stated otherwise. To do this we need your passport details, a
              passport photo and any other information the Saudi authorities require at the time.
            </p>
            <p>
              The decision to grant, refuse or cancel a visa rests entirely with the Saudi
              authorities. We cannot influence that decision, guarantee an outcome or control how
              long processing takes. If a visa is refused or delayed for reasons that are not caused
              by our error, you remain responsible for the booking and any cancellation charges that
              apply. Visa fees are non-refundable once an application has been lodged.
            </p>
            <p>
              Entry requirements, including vaccination and health rules, can change at short notice.
              We will tell you about changes we become aware of, but it is your responsibility to meet
              the requirements that apply on the day you travel.
            </p>

            <h2>7. Insurance</h2>
            <p>
              The health insurance that is mandatory for Umrah visa holders is arranged as part of
              your visa and is included in your package. This cover is limited and is not a
              substitute for comprehensive travel insurance.
            </p>
            <p>
              We strongly recommend that every traveller takes out comprehensive travel insurance at
              the time of paying the deposit, covering cancellation, medical expenses, repatriation,
              lost luggage and personal liability. Where we offer to arrange travel insurance for
              you, we do so as a referrer only and the policy is a contract between you and the
              insurer. Insurance premiums are non-refundable once a policy has been issued.
            </p>

            <h2>8. Flights, hotels and itinerary changes</h2>
            <p>
              We plan every trip carefully, but airlines, hotels and local authorities can change
              schedules, rooms and access to the holy sites, especially during Ramadan and other peak
              periods. We may therefore need to change flight times, routing, the order of the
              itinerary, hotels or ziyarah stops. Where we substitute a hotel, it will be of a
              comparable standard and location to the one advertised.
            </p>
            <p>
              We will tell you about significant changes as soon as we reasonably can. A change of
              this kind does not entitle you to cancel without charge unless it is a major change
              that makes the trip materially different from what you booked, in which case we will
              offer you the choice of accepting the change, transferring to another trip or
              cancelling with a full refund of what you have paid to us.
            </p>
            <p>
              Group trips depend on a minimum number of travellers. If that number is not reached we
              may cancel the trip, and our Refund and Cancellation Policy explains what happens then.
            </p>

            <h2>9. Health, fitness and special requirements</h2>
            <p>
              Umrah involves long periods of standing and walking, often in heat and crowds. You are
              responsible for making sure you are fit to travel and for telling us about any medical
              condition, disability, mobility need or dietary requirement when you book, so we can
              advise whether we can accommodate it. We will do our best to help, but we cannot
              guarantee special arrangements that suppliers are unable to provide.
            </p>

            <h2>10. Travelling in the group</h2>
            <p>
              Our trips are shared experiences. Every traveller agrees to treat fellow pilgrims, our
              group leaders, Shaykhs and suppliers with respect, to follow reasonable instructions
              from group leaders, to be on time for group movements, and to comply with the laws and
              customs of Saudi Arabia and the rules of the Haramain.
            </p>
            <p>
              If a traveller behaves in a way that is unlawful, puts others at risk, or seriously
              disrupts the group, we may ask them to leave the trip. In that case no refund will be
              given for unused services, and the traveller will be responsible for their own
              arrangements and costs from that point.
            </p>
            <p>
              Children under 18 must travel with a parent or guardian unless we have agreed
              otherwise in writing. Some trips, such as our men’s-only departures, have age or
              gender requirements which are stated on the trip page.
            </p>

            <h2>11. Our role and the limits of our responsibility</h2>
            <p>
              Al Haramain Travels organises and coordinates your trip. Flights, accommodation, ground
              transport, trains and other services are provided by third parties, and in arranging
              them we act as an agent for those suppliers. Your travel with each supplier is also
              subject to that supplier’s own conditions of carriage or stay, which may limit their
              liability.
            </p>
            <p>
              To the extent permitted by law, we are not liable for loss, injury, delay or
              additional expense caused by the acts or omissions of those suppliers, by events
              outside our reasonable control, or by your own failure to comply with these terms,
              travel document requirements or supplier instructions. Events outside our control
              include, without limitation, airline delays and cancellations, changes made by Saudi
              authorities, weather, natural disasters, epidemics, industrial action, civil unrest
              and government travel restrictions.
            </p>
            <p>
              Where we are found liable to you, our liability is limited, to the extent the law
              allows, to the price you paid us for the services concerned, or to supplying those
              services again.
            </p>

            <h2>12. Australian Consumer Law</h2>
            <p>
              Nothing in these terms excludes, restricts or modifies any guarantee, right or remedy
              you have under the Australian Consumer Law or any other law that cannot be excluded.
              Our services come with guarantees that cannot be excluded under the Australian Consumer
              Law. Where the law allows us to limit our liability for a breach of a guarantee, we do
              so as set out in section 11.
            </p>

            <h2>13. Complaints while travelling</h2>
            <p>
              If something is not right during your trip, please tell your group leader straight
              away so we have the chance to fix it on the spot. If the matter is not resolved, write
              to us within a reasonable time after you return and we will investigate and respond.
            </p>

            <h2>14. Privacy</h2>
            <p>
              We handle your personal information, including passport and health details, in
              accordance with our <Link href="/privacy">Privacy Policy</Link>. By booking you consent
              to us sharing that information with airlines, hotels, insurers and the Saudi visa
              authorities as needed to deliver your trip.
            </p>

            <h2>15. Changes to these terms</h2>
            <p>
              We may update these terms from time to time. The terms that apply to your booking are
              the ones in force on the date your deposit was received, unless a later change is
              required by law or is clearly to your benefit.
            </p>

            <h2>16. Governing law</h2>
            <p>
              These terms are governed by the laws of the State of Victoria, Australia. You and we
              submit to the non-exclusive jurisdiction of the courts of Victoria and the Commonwealth
              of Australia.
            </p>

            <h2>17. Contact us</h2>
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
