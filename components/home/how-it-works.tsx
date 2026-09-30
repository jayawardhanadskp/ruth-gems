import { SectionHeading } from "@/components/common/section-heading";
import { Reveal, StaggerGrid, StaggerItem } from "@/components/motion/reveal";

const steps = [
  {
    number: "01",
    title: "Discover a gemstone",
    body: "Browse gemstones by stone, cut or colour and view their key details.",
  },
  {
    number: "02",
    title: "Ask",
    body: "WhatsApp, call or enquire about anything you want to know.",
  },
  {
    number: "03",
    title: "See It",
    body: "View the gemstone in person or by live video under different lighting.",
  },
  {
    number: "04",
    title: "Verify & Buy",
    body: "Check the report or arrange independent testing, then complete your purchase directly with us.",
  },
];

export function HowItWorks() {
  return (
    <section className="section-y bg-ivory">
      <div className="container-page flex flex-col items-center gap-14">
        <Reveal>
          <SectionHeading
            eyebrow="How it works"
            title="From a photograph to a handshake"
            align="center"
          />
        </Reveal>
        <StaggerGrid className="relative grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          <div
            aria-hidden
            className="rule-gem pointer-events-none absolute top-[3.25rem] right-[10%] left-[10%] hidden lg:block"
          />
          {steps.map((step) => (
            <StaggerItem key={step.number} className="h-full">
              <div className="relative flex h-full flex-col items-center gap-5 rounded-2xl border border-line bg-background p-8 text-center shadow-xs">
                <span className="flex size-14 items-center justify-center rounded-full border border-brand-gold/50 bg-ivory font-display text-2xl font-semibold text-brand-gold-muted">
                  {step.number}
                </span>
                <p className="font-display text-2xl font-semibold text-brand-ink">
                  {step.title}
                </p>
                <p className="text-[0.9375rem] leading-relaxed text-stone">{step.body}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
