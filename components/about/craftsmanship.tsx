import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";

export function Craftsmanship() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-[4.167vw] lg:py-[5vw]">
      <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-[3.75vw]">
        <Reveal className="flex min-w-0 flex-col gap-4 lg:flex-1 lg:gap-[0.833vw]">
          <p className="text-xs font-semibold tracking-[2.16px] text-brand-gold-muted uppercase lg:text-[0.625vw] lg:tracking-[0.1125vw]">
            Craftsmanship
          </p>
          <h2 className="font-display text-4xl font-semibold text-brand-ink lg:text-[2.0833vw] lg:leading-normal">
            Cut by Master Hands
          </h2>
          <p className="text-base leading-7 text-[#3c3834] lg:text-[0.8333vw] lg:leading-[1.4583vw]">
            A rough crystal only becomes a gem in the hands of a skilled
            cutter. Sri Lanka&apos;s lapidaries are among the finest in the
            world, cutting each stone to reveal its optimal colour,
            brilliance and life rather than simply to preserve weight.
          </p>
          <p className="text-base leading-7 text-[#3c3834] lg:text-[0.8333vw] lg:leading-[1.4583vw]">
            Every Ruth Gems stone is judged on the precision of its cut —
            symmetry, proportion and polish — because craftsmanship is what
            turns a fine mineral into a lasting treasure.
          </p>
        </Reveal>
        <Reveal delay={0.1} className="relative h-[280px] w-full overflow-hidden rounded-xl sm:h-[400px] lg:h-[27.083vw] lg:w-[35.417vw] lg:shrink-0">
          <Image
            src="/images/about/craftsmanship.png"
            alt="Cutting a gemstone"
            fill
            sizes="(max-width: 1024px) 100vw, 36vw"
            className="object-cover"
          />
        </Reveal>
      </div>
    </section>
  );
}
