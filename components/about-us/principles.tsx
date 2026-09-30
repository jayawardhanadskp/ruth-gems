import { Reveal, StaggerGrid, StaggerItem } from "@/components/motion/reveal";

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
    <section className="section-y">
      <div className="container-page flex flex-col items-center gap-9 sm:gap-14">
        <Reveal className="flex flex-col items-center gap-4 text-center">
          <p className="eyebrow flex items-center gap-3">
            <span aria-hidden className="size-1.5 rotate-45 bg-brand-gold" />
            Our Way of Trading
            <span aria-hidden className="size-1.5 rotate-45 bg-brand-gold" />
          </p>
          <h2 className="font-display type-h2 font-medium text-balance text-brand-ink">
            Principles we don&apos;t compromise on
          </h2>
        </Reveal>

        <StaggerGrid className="grid w-full gap-5 sm:grid-cols-2 lg:gap-6">
          {principles.map((p) => (
            <StaggerItem key={p.number} className="h-full">
              <div className="surface flex h-full gap-5 rounded-2xl bg-ivory p-5 sm:p-8">
                <p className="font-display text-4xl leading-none font-medium text-brand-gold-muted tabular-nums">
                  {p.number}
                </p>
                <div className="flex flex-col gap-2">
                  <p className="font-display text-2xl font-semibold text-brand-ink">{p.title}</p>
                  <p className="text-[0.9375rem] leading-relaxed text-stone">{p.body}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
