import { Accordion, AccordionItem } from "@/components/ui/accordion";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/ui/reveal";
import { generalFaqs } from "@/lib/data";

// UK FAQ: centred heading, white accordion items, one open at a time.
export function FAQ() {
  return (
    <section id="faq" className="bg-background py-24 md:py-[96px]">
      <div className="container-x">
        <Reveal>
          <SectionHeading align="center" eyebrow="Good to know" title="Frequently asked questions" />
        </Reveal>
        <Reveal delay={0.1}>
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
  );
}
