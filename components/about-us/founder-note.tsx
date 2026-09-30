import { Reveal } from "@/components/motion/reveal";

export function FounderNote() {
  return (
    <section className="flex flex-col items-center bg-brand-forest-dark px-4 py-16 text-center sm:px-6 lg:px-[4.167vw] lg:py-[5.208vw]">
      <Reveal className="flex flex-col items-center">
        <p className="font-display text-6xl font-bold text-brand-gold lg:text-[4.688vw]">
          &ldquo;
        </p>
        <p className="mt-1 max-w-[820px] font-display text-2xl leading-[1.3] font-medium text-brand-cream sm:text-3xl lg:mt-[0.104vw] lg:max-w-[48.958vw] lg:text-[1.875vw] lg:leading-[2.396vw]">
          Every stone that leaves our hands carries our family&apos;s name.
          That is a responsibility we have never taken lightly — and never
          will.
        </p>
        <div className="mt-7 h-px w-10 bg-brand-gold lg:mt-[1.667vw] lg:w-[2.083vw]" />
        <p className="mt-5 text-sm font-semibold tracking-[1px] text-[#d6b68c] uppercase lg:mt-[1.042vw] lg:text-[0.729vw] lg:tracking-[0.052vw]">
          The Ruth Gems family
        </p>
        <p className="mt-1.5 text-[13px] text-[#bac5be] lg:mt-[0.313vw] lg:text-[0.677vw]">
          Serendib &amp; Sons · Ratnapura, Sri Lanka
        </p>
      </Reveal>
    </section>
  );
}
