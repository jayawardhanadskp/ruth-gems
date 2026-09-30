import { Reveal } from "@/components/motion/reveal";

export function HeritageIntro() {
  return (
    <section className="section-y">
      <Reveal className="container-narrow flex flex-col items-center gap-6 text-center">
        <p className="eyebrow flex items-center gap-3">
          <span aria-hidden className="size-1.5 rotate-45 bg-brand-gold" />
          A Heritage Written in Stone
          <span aria-hidden className="size-1.5 rotate-45 bg-brand-gold" />
        </p>
        <h2 className="font-display type-h2 max-w-3xl font-medium text-balance text-brand-ink">
          Known to the Ancients as Ratna-Dweepa — the Island of Gems
        </h2>
        <p className="type-lead max-w-3xl text-pretty text-ink-soft">
          Sri Lanka is one of the oldest and most prolific sources of
          precious gemstones on earth. Its unique geology has produced
          sapphires, rubies, spinels and rare chrysoberyls of extraordinary
          quality for more than twenty-five centuries. From the courts of
          ancient kings to the crown jewels of Europe, Ceylon stones have
          long been prized for their clarity, colour and enduring
          brilliance.
        </p>
      </Reveal>
    </section>
  );
}
