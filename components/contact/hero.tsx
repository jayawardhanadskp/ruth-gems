import { Reveal } from "@/components/motion/reveal";

export function ContactHero() {
  return (
    <section className="flex flex-col items-center bg-brand-cream px-4 pt-10 pb-8 text-center sm:px-6 lg:px-[4.167vw] lg:pt-[2.604vw] lg:pb-[2.083vw]">
      <Reveal className="flex flex-col items-center">
        <p className="text-xs font-semibold tracking-[2px] text-brand-gold-muted uppercase lg:text-[0.625vw] lg:tracking-[0.104vw]">
          Get in Touch
        </p>
        <h1 className="mt-3 font-display text-4xl font-semibold text-brand-ink sm:text-5xl lg:mt-[0.938vw] lg:text-[2.917vw] lg:leading-[3.125vw]">
          We&apos;d love to hear from you
        </h1>
        <p className="mt-4 max-w-[600px] text-[15px] leading-7 text-[#5c5347] lg:mt-[1.146vw] lg:max-w-[31.25vw] lg:text-[0.885vw] lg:leading-[1.563vw]">
          Whether you&apos;re looking for a specific stone, want to arrange a
          private viewing, or just have a question — our family is here to
          help. We reply personally to every enquiry.
        </p>
      </Reveal>
    </section>
  );
}
