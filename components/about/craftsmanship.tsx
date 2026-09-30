import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { Parallax } from "@/components/motion/parallax";

export function Craftsmanship() {
  return (
    <section className="section-y">
      <div className="container-page grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="flex flex-col gap-5 lg:col-span-6">
          <p className="eyebrow flex items-center gap-3">
            <span aria-hidden className="size-1.5 rotate-45 bg-brand-gold" />
            Craftsmanship
          </p>
          <h2 className="font-display type-h2 font-medium text-balance text-brand-ink">
            Cut by Master Hands
          </h2>
          <p className="text-base leading-relaxed text-ink-soft sm:text-lg">
            A rough crystal only becomes a gem in the hands of a skilled
            cutter. Sri Lanka&apos;s lapidaries are among the finest in the
            world, cutting each stone to reveal its optimal colour,
            brilliance and life rather than simply to preserve weight.
          </p>
          <p className="text-base leading-relaxed text-ink-soft sm:text-lg">
            Every Ruth Gems stone is judged on the precision of its cut —
            symmetry, proportion and polish — because craftsmanship is what
            turns a fine mineral into a lasting treasure.
          </p>
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-6">
          <div className="relative aspect-[5/4] w-full overflow-hidden rounded-3xl bg-sand shadow-lg ring-1 ring-brand-ink/5">
            <Parallax className="absolute -inset-y-6 inset-x-0" distance={20}>
              <Image
                src="/images/about/craftsmanship.png"
                alt="Cutting a gemstone"
                fill
                sizes="(max-width: 1024px) 92vw, 46vw"
                className="object-cover"
              />
            </Parallax>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
