import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";

export function AboutHero() {
  return (
    <section className="relative flex h-auto min-h-[480px] items-center overflow-hidden bg-brand-forest-dark sm:min-h-[560px] lg:h-[38.385vw]">
      {/* People, cropped from the right-hand side of the source photograph
          only — the source frame also has baked-in text on its left side,
          which we deliberately crop out so it doesn't duplicate the real
          heading below. No mirroring, so faces/hands stay correctly oriented. */}
      <div className="absolute inset-y-0 right-0 w-full sm:w-[70%] lg:w-[58%]">
        <Image
          src="/images/about/hero.png"
          alt="A couple wearing Ceylon sapphire jewellery"
          fill
          priority
          sizes="(max-width: 1024px) 70vw, 58vw"
          className="object-cover"
          style={{ objectPosition: "88% center" }}
        />
        <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-brand-forest-dark to-transparent sm:w-1/4" />
      </div>

      <Reveal className="relative z-10 flex flex-col gap-[18px] px-4 py-16 sm:px-6 sm:py-20 lg:w-[46.875vw] lg:gap-[0.9375vw] lg:pl-[6.25vw]">
        <p className="text-[13px] font-semibold tracking-[2.86px] text-white uppercase lg:text-[0.677vw] lg:tracking-[0.149vw]">
          The Island of Gems
        </p>
        <div className="flex flex-col gap-2 text-white lg:gap-[0.417vw]">
          <h1 className="flex flex-col gap-2 font-display lg:gap-[0.417vw]">
            <span className="text-5xl leading-[1] font-semibold sm:text-7xl lg:text-[4.1667vw] lg:leading-[3.958vw]">
              The Story of Ceylon
            </span>
            <span className="text-6xl leading-[1] font-bold sm:text-8xl lg:text-[6.771vw] lg:leading-[5.521vw]">
              Gems
            </span>
          </h1>
        </div>
        <p className="max-w-[653px] text-base leading-7 text-[#ebe5d8] lg:w-[34.01vw] lg:max-w-none lg:text-[0.8854vw] lg:leading-[1.4583vw]">
          For over two thousand years, the island of Sri Lanka has yielded
          some of the earth&apos;s finest coloured gemstones — treasured by
          royalty, scholars and collectors alike.
        </p>
      </Reveal>
    </section>
  );
}
