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
    <section className="container-page flex flex-col items-center gap-10 py-16 sm:py-20">
      <Reveal>
        <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" align="center" />
      </Reveal>
      <Reveal className="w-full max-w-3xl">
        <Accordion className="flex flex-col gap-4">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={faq.question}
              value={`faq-${i}`}
              className="rounded-lg border border-[#dadada] px-6 py-1"
            >
              <AccordionTrigger className="py-5! font-display text-xl text-brand-ink sm:text-2xl">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base! leading-relaxed text-[#313131]">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </section>
  );
}
