import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";

const collageItems = [
  {
    type: "image" as const,
    src: "/images/about-us/collage-1.png",
    alt: "Sri Lankan gem trader examining a stone",
  },
  {
    type: "stat" as const,
    bg: "#eaf4ff",
    label: "Live offers",
    value: "9",
    caption: "Across holidays, bank benefits and group tours.",
  },
  {
    type: "image" as const,
    src: "/images/about-us/collage-2.png",
    alt: "Hand-picked Ceylon gemstones",
  },
  {
    type: "stat" as const,
    bg: "#ffdfba",
    label: "Bank partners",
    value: "12+",
    caption: "Offering card benefits and flexible instalment plans.",
  },
  {
    type: "image" as const,
    src: "/images/about-us/collage-3.png",
    alt: "Faceted sapphire under natural light",
  },
];

export function AboutUsHero() {
  return (
    <section className="flex flex-col gap-10 bg-brand-cream px-4 pt-10 pb-12 sm:px-6 lg:flex-row lg:items-center lg:gap-[4.167vw] lg:px-[4.167vw] lg:pt-[3.75vw] lg:pb-[4.688vw]">
      <Reveal className="flex flex-col items-start lg:w-[43.333vw]">
        <p className="text-xs font-semibold tracking-[2px] text-brand-gold-muted uppercase lg:text-[0.625vw] lg:tracking-[0.104vw]">
          Our Story
        </p>
        <h1 className="mt-3 font-display text-4xl leading-[1.05] font-semibold text-brand-ink sm:text-5xl lg:mt-[0.938vw] lg:w-[28.75vw] lg:text-[3.125vw] lg:leading-[3.333vw]">
          A family name, built on trust
        </h1>
        <p className="mt-4 max-w-[552px] text-[15px] leading-7 text-[#5c5347] lg:mt-[1.146vw] lg:text-[0.885vw] lg:leading-[1.563vw]">
          Ruth Gems is a Ratnapura family of gem traders, working at the
          source of the world&apos;s finest sapphires. We don&apos;t run a
          shop or an online checkout — we quietly help a small number of
          collectors and connoisseurs find exceptional Ceylon stones, and buy
          them with complete confidence.
        </p>
        <div className="mt-6 flex flex-wrap gap-9 lg:mt-[1.563vw] lg:gap-[2.292vw]">
          <Fact label="At the source" value="Based in Ratnapura, Sri Lanka" />
          <Fact label="In person" value="Every stone seen before you buy" />
          <Fact label="Fully certified" value="Independent lab reports" />
        </div>
      </Reveal>

      <div className="group/collage relative h-[300px] w-full overflow-hidden sm:h-[360px] lg:h-[22.708vw] lg:w-[44.01vw]">
        <div className="flex h-full w-max animate-[photo-scroll_32s_linear_infinite] items-stretch gap-2.5 motion-reduce:animate-none group-hover/collage:[animation-play-state:paused] lg:gap-[0.521vw]">
          {[0, 1].map((copy) => (
            <div
              key={copy}
              aria-hidden={copy === 1}
              className="flex h-full shrink-0 items-stretch gap-2.5 lg:gap-[0.521vw]"
            >
              {collageItems.map((item, i) =>
                item.type === "image" ? (
                  <div
                    key={i}
                    className="group relative h-full w-[190px] shrink-0 overflow-hidden rounded-2xl lg:w-[11.719vw] lg:rounded-[0.833vw]"
                  >
                    <Image
                      src={item.src}
                      alt={copy === 0 ? item.alt : ""}
                      fill
                      sizes="12vw"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </div>
                ) : (
                  <div
                    key={i}
                    className="flex h-full w-[100px] shrink-0 flex-col justify-center gap-1.5 rounded-2xl p-3 transition-transform duration-500 ease-out hover:scale-105 lg:w-[6.094vw] lg:gap-[0.26vw] lg:rounded-[0.833vw] lg:p-[0.625vw]"
                    style={{ backgroundColor: item.bg }}
                  >
                    <p className="text-sm font-medium text-brand-ink lg:text-[0.729vw]">
                      {item.label}
                    </p>
                    <p className="font-display text-3xl font-bold tracking-tight text-brand-ink lg:text-[2.083vw]">
                      {item.value}
                    </p>
                    <p className="text-xs leading-snug text-[#4b5563] lg:text-[0.625vw] lg:leading-[0.938vw]">
                      {item.caption}
                    </p>
                  </div>
                )
              )}
            </div>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-[14%] bg-gradient-to-r from-brand-cream via-brand-cream/80 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-[14%] bg-gradient-to-l from-brand-cream via-brand-cream/80 to-transparent" />
      </div>
    </section>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1 lg:gap-[0.26vw]">
      <p className="font-display text-xl font-bold text-brand-green-light lg:text-[1.042vw]">
        {label}
      </p>
      <p className="text-[13px] text-[#6e6b67] lg:text-[0.677vw]">{value}</p>
    </div>
  );
}
