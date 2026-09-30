import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";

/* The two "stat" tiles that used to sit in this collage (live offers, bank
   partners and instalment plans) were leftover template copy: Ruth Gems has no
   offers, bank partners or instalments. They are removed until real figures
   exist. */
const collageItems = [
  { src: "/images/about-us/collage-1.png", alt: "Sri Lankan gem trader examining a stone" },
  { src: "/images/about-us/collage-2.png", alt: "Hand-picked Ceylon gemstones" },
  { src: "/images/about-us/collage-3.png", alt: "Faceted sapphire under natural light" },
];

export function AboutUsHero() {
  return (
    <section className="overflow-hidden border-b border-line bg-ivory">
      <div className="container-page grid items-center gap-12 py-section-sm lg:grid-cols-12 lg:gap-14">
        <Reveal className="flex flex-col items-start gap-6 lg:col-span-6">
          <p className="eyebrow flex items-center gap-3">
            <span aria-hidden className="size-1.5 rotate-45 bg-brand-gold" />
            Our Story
          </p>
          <h1 className="font-display type-h1 font-medium text-balance text-brand-ink">
            A family name, built on trust
          </h1>
          <p className="type-lead max-w-xl text-ink-soft">
            Ruth Gems is a Ratnapura family of gem traders, working at the
            source of the world&apos;s finest sapphires. We don&apos;t run a
            shop or an online checkout — we quietly help a small number of
            collectors and connoisseurs find exceptional Ceylon stones, and buy
            them with complete confidence.
          </p>
          <dl className="grid w-full gap-6 border-t border-line pt-6 sm:grid-cols-3">
            <Fact label="At the source" value="Based in Ratnapura, Sri Lanka" />
            <Fact label="In person" value="Every stone seen before you buy" />
            <Fact label="Fully certified" value="Independent lab reports" />
          </dl>
        </Reveal>

        <div
          className="group/collage relative h-72 w-full overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)] sm:h-96 lg:col-span-6"
        >
          <div className="flex h-full w-max animate-[photo-scroll_36s_linear_infinite] items-stretch motion-reduce:animate-none group-hover/collage:[animation-play-state:paused]">
            {[0, 1].map((copy) => (
              <div key={copy} aria-hidden={copy === 1} className="flex h-full shrink-0 gap-3 pr-3">
                {[...collageItems, ...collageItems].map((item, i) => (
                  <div
                    key={i}
                    className="group relative h-full w-48 shrink-0 overflow-hidden rounded-2xl shadow-md ring-1 ring-brand-ink/5 sm:w-56"
                  >
                    <Image
                      src={item.src}
                      alt={copy === 0 && i < collageItems.length ? item.alt : ""}
                      fill
                      sizes="224px"
                      className="object-cover transition-transform duration-[700ms] ease-[var(--ease-out)] [@media(hover:hover)]:group-hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1">
      <dt className="font-display text-xl font-semibold text-brand-green">{label}</dt>
      <dd className="text-sm text-stone">{value}</dd>
    </div>
  );
}
