import { Reveal } from "@/components/motion/reveal";

const principles = [
  {
    number: "01",
    title: "Personal, unhurried service",
    body: "We work with a small number of clients at a time, so there is never pressure — only time to look closely, ask questions and be certain.",
  },
  {
    number: "02",
    title: "Honesty about every stone",
    body: "We tell you exactly what a stone is: its origin, its treatment, and its flaws as well as its beauty. Nothing is exaggerated or hidden.",
  },
  {
    number: "03",
    title: "Fair, transparent pricing",
    body: "Because we buy at the source in Ratnapura, our prices reflect the stone itself — not layers of middlemen or a showroom on a high street.",
  },
  {
    number: "04",
    title: "Ethically sourced at origin",
    body: "Our stones come from small-scale, traditional hand-mining, traceable to the communities and families who bring them out of the ground.",
  },
];

export function Principles() {
  return (
    <section className="flex flex-col items-center gap-6 bg-[#f6f0e6] px-4 py-14 sm:px-6 lg:gap-[1.25vw] lg:px-[4.167vw] lg:pt-[4.792vw] lg:pb-[5vw]">
      <Reveal className="flex flex-col items-center text-center">
        <p className="text-xs font-semibold tracking-[2px] text-brand-gold-muted uppercase lg:text-[0.625vw] lg:tracking-[0.104vw]">
          Our Way of Trading
        </p>
        <h2 className="mt-2 font-display text-4xl font-semibold text-brand-ink sm:text-[44px] lg:mt-[0.833vw] lg:text-[2.292vw]">
          Principles we don&apos;t compromise on
        </h2>
      </Reveal>

      <Reveal className="mt-6 grid w-full max-w-[1600px] grid-cols-1 gap-8 sm:grid-cols-2 lg:mt-[2.708vw] lg:gap-x-[2.344vw] lg:gap-y-[1.771vw]">
        {principles.map((p) => (
          <div key={p.number} className="flex gap-4 lg:gap-[1.146vw]">
            <p className="font-display text-4xl font-medium text-brand-gold lg:text-[2.292vw]">
              {p.number}
            </p>
            <div className="flex flex-col gap-2 lg:gap-[0.469vw]">
              <p className="font-display text-2xl font-bold text-brand-ink lg:text-[1.354vw]">
                {p.title}
              </p>
              <p className="text-[15px] leading-[1.7] text-[#5c5347] lg:text-[0.781vw] lg:leading-[1.302vw]">
                {p.body}
              </p>
            </div>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
