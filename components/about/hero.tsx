import Image from "next/image";

/* On tablet and desktop the photograph is shown whole: it already carries the
   eyebrow, heading and intro. On phones that text is too small to read, so the
   photo is cropped to the people and the real heading sits beneath it. */
export function AboutHero() {
  return (
    <section data-tone="dark" className="relative isolate overflow-hidden bg-brand-ink">
      <Image
        src="/images/about/hero.png"
        alt="Two collectors wearing Ceylon sapphire jewellery beside loose sapphires"
        width={2000}
        height={768}
        priority
        sizes="100vw"
        className="h-[22rem] w-full object-cover object-[88%_center] sm:h-auto"
      />
      <div className="container-page flex flex-col gap-3 py-8 sm:sr-only">
        <p className="eyebrow">The Island of Gems</p>
        <h1 className="font-display type-h1 font-medium text-brand-cream">
          The Story of Ceylon <span className="text-brand-gold">Gems</span>
        </h1>
        <p className="text-base leading-relaxed text-brand-cream/85">
          For over two thousand years, Sri Lanka has yielded some of the
          earth&apos;s finest coloured gemstones.
        </p>
      </div>
    </section>
  );
}
