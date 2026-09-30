import { Reveal } from "@/components/motion/reveal";

export function FounderNote() {
  return (
    <section data-tone="dark" className="section-y bg-brand-forest-dark">
      <Reveal className="container-narrow flex flex-col items-center text-center">
        <span aria-hidden className="font-display text-7xl leading-none font-semibold text-brand-gold">
          &ldquo;
        </span>
        <blockquote className="font-display type-h2 max-w-3xl font-medium text-balance text-brand-cream">
          Every stone that leaves our hands carries our family&apos;s name.
          That is a responsibility we have never taken lightly — and never
          will.
        </blockquote>
        <hr className="rule-gem mt-10 w-24" />
        <p className="eyebrow mt-6">The Ruth Gems family</p>
        <p className="mt-2 text-sm text-mist">Serendib &amp; Sons · Ratnapura, Sri Lanka</p>
      </Reveal>
    </section>
  );
}
