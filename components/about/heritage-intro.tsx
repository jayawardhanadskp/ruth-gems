import { Reveal } from "@/components/motion/reveal";

export function HeritageIntro() {
  return (
    <section className="bg-white px-4 pt-16 pb-14 sm:px-6 lg:px-[4.167vw] lg:pt-[5vw] lg:pb-[4.167vw]">
      <Reveal className="flex flex-col items-center gap-5 text-center lg:gap-[1.0417vw]">
        <p className="text-xs font-semibold tracking-[2.16px] text-brand-gold-muted uppercase lg:text-[0.625vw] lg:tracking-[0.1125vw]">
          A Heritage Written in Stone
        </p>
        <h2 className="max-w-[1000px] font-display text-3xl leading-tight font-semibold text-brand-ink sm:text-[40px] lg:max-w-[52.083vw] lg:text-[2.3958vw] lg:leading-[2.7083vw]">
          Known to the Ancients as Ratna-Dweepa — the Island of Gems
        </h2>
        <p className="max-w-[880px] text-base leading-7 text-[#3c3834] lg:max-w-[45.833vw] lg:text-[0.8854vw] lg:leading-[1.5104vw]">
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
