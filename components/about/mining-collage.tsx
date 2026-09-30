import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";

function Tile({ src, className }: { src: string; className: string }) {
  return (
    <div className={`relative overflow-hidden rounded-xl ${className}`}>
      <Image src={src} alt="" fill sizes="(min-width: 1024px) 30vw, 100vw" className="object-cover" />
    </div>
  );
}

export function MiningCollage() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-[4.167vw] lg:py-[4.167vw]">
      <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-[6.146vw]">
        <Reveal className="flex w-full gap-4 lg:w-[43.281vw] lg:shrink-0 lg:gap-[1.25vw]">
          <div className="flex flex-1 flex-col gap-4 lg:flex-none lg:w-[29.844vw] lg:gap-[1.25vw]">
            <div className="flex gap-4 lg:gap-[1.25vw]">
              <Tile src="/images/about/mining-1.png" className="h-[140px] flex-1 sm:h-[200px] lg:h-[13.229vw]" />
              <Tile src="/images/about/mining-2.png" className="h-[140px] flex-1 sm:h-[200px] lg:h-[13.229vw]" />
            </div>
            <Tile src="/images/about/mining-3.png" className="h-[140px] w-full sm:h-[200px] lg:h-[13.229vw]" />
          </div>
          <Tile src="/images/about/mining-4.png" className="w-[34%] lg:w-[12.188vw]" />
        </Reveal>
        <Reveal delay={0.1} className="flex flex-col gap-4 lg:w-[32.708vw] lg:shrink-0 lg:gap-[0.833vw]">
          <p className="text-xs font-semibold tracking-[2.16px] text-brand-gold-muted uppercase lg:text-[0.625vw] lg:tracking-[0.1125vw]">
            Geography &amp; Mining
          </p>
          <h2 className="font-display text-4xl font-semibold text-brand-ink lg:text-[2.0833vw] lg:leading-normal">
            From the Gravels of Ratnapura
          </h2>
          <p className="text-base leading-7 text-[#3c3834] lg:text-[0.8333vw] lg:leading-[1.4583vw]">
            The heart of Sri Lanka&apos;s gem country lies in Ratnapura —
            literally &lsquo;City of Gems&rsquo; — where alluvial gravels
            known as illam are still worked by hand much as they have been
            for generations. Gem-bearing gravel is washed and sorted by
            skilled miners who read the earth with inherited expertise.
          </p>
          <p className="text-base leading-7 text-[#3c3834] lg:text-[0.8333vw] lg:leading-[1.4583vw]">
            This traditional, small-scale approach means stones are
            recovered with minimal environmental impact and a direct human
            connection to the land — a provenance that machine-driven mining
            elsewhere simply cannot offer.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
