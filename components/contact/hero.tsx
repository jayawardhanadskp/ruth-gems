import { Reveal } from "@/components/motion/reveal";

export function ContactHero() {
  return (
    <section className="border-b border-line bg-ivory">
      <Reveal className="container-narrow flex flex-col items-center gap-5 pt-section-sm pb-section-sm text-center">
        <p className="eyebrow flex items-center gap-3">
          <span aria-hidden className="size-1.5 rotate-45 bg-brand-gold" />
          Get in Touch
          <span aria-hidden className="size-1.5 rotate-45 bg-brand-gold" />
        </p>
        <h1 className="font-display type-h1 font-medium text-balance text-brand-ink">
          We&apos;d love to hear from you
        </h1>
        <p className="type-lead max-w-2xl text-stone">
          Whether you&apos;re looking for a specific stone, want to arrange a
          private viewing, or just have a question — our family is here to
          help. We reply personally to every enquiry.
        </p>
      </Reveal>
    </section>
  );
}
