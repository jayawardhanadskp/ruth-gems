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
      <div className="container-page flex flex-col items-center gap-9 sm:gap-14">
        <Reveal>
          <SectionHeading
            eyebrow="How it works"
            title="From a photograph to a handshake"
            align="center"
          />
        </Reveal>
        <StaggerGrid className="relative grid w-full grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4 lg:gap-6">
          <div
            aria-hidden
            className="rule-gem pointer-events-none absolute top-[3.25rem] right-[10%] left-[10%] hidden lg:block"
          />
          {steps.map((step) => (
            <StaggerItem key={step.number} className="h-full">
              <div className="relative flex h-full items-start gap-4 rounded-2xl border border-line bg-background p-5 text-left shadow-xs sm:flex-col sm:items-center sm:gap-5 sm:p-8 sm:text-center">
                <span className="flex size-11 shrink-0 items-center sm:size-14 justify-center rounded-full border border-brand-gold/50 bg-ivory font-display text-xl font-semibold text-brand-gold-muted sm:text-2xl">
                  {step.number}
                </span>
                <div className="flex flex-col gap-1.5 sm:gap-5">
                  <p className="font-display text-xl font-semibold text-brand-ink sm:text-2xl">
                    {step.title}
                  </p>
                  <p className="text-[0.9375rem] leading-relaxed text-stone">{step.body}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
