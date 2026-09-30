import { SectionHeading } from "@/components/common/section-heading";
import { Reveal } from "@/components/motion/reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What types of gemstones are available at Ruth Gems?",
    answer:
      "We hold Ceylon sapphires in every colour, rubies, spinels, alexandrite and cat's eye chrysoberyl — all sourced directly from Sri Lankan mines.",
  },
  {
    question: "How can I check if a gemstone is available?",
    answer:
      "Each gemstone listing displays its current availability status. Look for the Available or Reserved badge, and contact our team to confirm availability before arranging a viewing.",
  },
  {
    question: "Do all gemstones come with a certificate?",
    answer:
      "Most stones are accompanied by a report from GIA, SSEF, GRS or the NGJA. Uncertified stones are clearly marked and priced accordingly.",
  },
  {
    question: "Can I purchase gemstones directly through the website?",
    answer:
      "No — every sale at Ruth Gems is completed in person or by direct agreement. There is no cart or online checkout; use the enquiry form to start a conversation.",
  },
  {
    question: "Can I view a gemstone in person before purchasing?",
    answer:
      "Yes, we welcome private viewings at our Ratnapura office, or a live video call if you can't visit in person.",
  },
];

export function FaqAccordion() {
  return (
    <section className="section-y">
      <div className="container-narrow flex flex-col items-center gap-12">
        <Reveal>
          <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" align="center" />
        </Reveal>
        <Reveal className="w-full">
          <Accordion className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={faq.question}
                value={`faq-${i}`}
                className="surface rounded-2xl px-6 transition-shadow duration-[var(--duration-enter)] data-[open]:shadow-md sm:px-8"
              >
                <AccordionTrigger className="font-display text-xl font-semibold text-brand-ink sm:text-2xl">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-base leading-relaxed text-ink-soft">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
