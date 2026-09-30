import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";

function Tile({ src, className }: { src: string; className: string }) {
  return (
    <div className={`relative overflow-hidden rounded-2xl bg-sand shadow-md ring-1 ring-brand-ink/5 ${className}`}>
      <Image src={src} alt="" fill sizes="(min-width: 1024px) 22vw, 45vw" className="object-cover" />
    </div>
  );
}

export function MiningCollage() {
  return (
    <section className="section-y bg-ivory">
      <div className="container-page grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="grid grid-cols-3 gap-3 sm:gap-4 lg:col-span-6">
          <Tile src="/images/about/mining-1.png" className="col-span-1 aspect-square" />
          <Tile src="/images/about/mining-2.png" className="col-span-1 aspect-square" />
          <Tile src="/images/about/mining-4.png" className="col-span-1 row-span-2 h-full min-h-40" />
          <Tile src="/images/about/mining-3.png" className="col-span-2 aspect-[2/1]" />
        </Reveal>
        <Reveal delay={0.1} className="flex flex-col gap-5 lg:col-span-6">
          <p className="eyebrow flex items-center gap-3">
            <span aria-hidden className="size-1.5 rotate-45 bg-brand-gold" />
            Geography &amp; Mining
          </p>
          <h2 className="font-display type-h2 font-medium text-balance text-brand-ink">
            From the Gravels of Ratnapura
          </h2>
          <p className="text-base leading-relaxed text-ink-soft sm:text-lg">
            The heart of Sri Lanka&apos;s gem country lies in Ratnapura —
            literally &lsquo;City of Gems&rsquo; — where alluvial gravels
            known as illam are still worked by hand much as they have been
            for generations. Gem-bearing gravel is washed and sorted by
            skilled miners who read the earth with inherited expertise.
          </p>
          <p className="text-base leading-relaxed text-ink-soft sm:text-lg">
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
