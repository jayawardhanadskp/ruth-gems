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
    <section className="container-page relative flex flex-col items-center gap-10 py-16 sm:py-20">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/decor/ruby.svg"
        alt=""
        aria-hidden
        className="pointer-events-none absolute left-[4%] top-[14%] hidden w-[5.5%] max-w-[100px] lg:block"
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/decor/vector.svg"
        alt=""
        aria-hidden
        className="pointer-events-none absolute bottom-[8%] left-[21%] hidden w-[5%] max-w-[90px] lg:block"
      />
      <Reveal>
        <SectionHeading
          eyebrow="How it works"
          title="From a photograph to a handshake"
          align="center"
        />
      </Reveal>
      <StaggerGrid className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step) => (
          <StaggerItem key={step.number}>
            <div className="relative flex h-full flex-col items-center gap-6 rounded-lg border-4 border-white bg-[#f4f4f4] p-6 text-center">
              {step.number === "04" && (
                <div
                  aria-hidden
                  className="pointer-events-none absolute -bottom-[19%] -left-[300%] -right-[12.8%] -top-[24%] -z-10 hidden lg:block"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/decor/step-arrow.svg"
                    alt=""
                    className="size-full max-w-none"
                  />
                </div>
              )}
              <p className="font-display text-4xl font-semibold text-[#a9873f]">
                {step.number}
              </p>
              <div className="flex flex-col gap-3">
                <p className="font-display text-2xl text-brand-ink">
                  {step.title}
                </p>
                <p className="text-base text-[#5c5347]">{step.body}</p>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerGrid>
    </section>
  );
}
