import Image from "next/image";
import { Check } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Parallax } from "@/components/motion/parallax";

const checklist = [
  "Private viewings by appointment, in Colombo or Ratnapura",
  "Honest guidance at every step, for new and seasoned buyers",
  "Complete discretion, before and after every sale",
];

export function Difference() {
  return (
    <section className="section-y bg-ivory">
      <Reveal className="container-page grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-sand shadow-lg ring-1 ring-brand-ink/5 lg:col-span-6">
          <Parallax className="absolute -inset-y-6 inset-x-0" distance={20}>
            <Image
              src="/images/about-us/difference.png"
              alt="Ruth Gems client examining a sapphire in natural light"
              fill
              sizes="(min-width: 1024px) 46vw, 92vw"
              className="object-cover"
            />
          </Parallax>
        </div>
        <div className="flex flex-col gap-5 lg:col-span-6">
          <p className="eyebrow flex items-center gap-3">
            <span aria-hidden className="size-1.5 rotate-45 bg-brand-gold" />
            The Ruth Gems Difference
          </p>
          <h2 className="font-display type-h2 font-medium text-balance text-brand-ink">
            Buying a gem should feel like a privilege, not a transaction
          </h2>
          <p className="text-base leading-relaxed text-ink-soft sm:text-lg">
            We believe a fine stone deserves to be chosen slowly. Clients meet
            us privately, examine each gem in natural light, and take all the
            time they need — with honest guidance and no pressure to decide.
            Whether you are buying your first sapphire or adding to a serious
            collection, the experience is the same: calm, considered and
            completely personal.
          </p>
          <ul className="mt-2 flex flex-col gap-4">
            {checklist.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-green/10">
                  <Check className="size-3.5 text-brand-green" strokeWidth={2.5} />
                </span>
                <span className="font-medium text-brand-ink">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
