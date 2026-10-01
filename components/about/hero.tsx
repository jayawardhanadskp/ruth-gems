"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { easeOut } from "@/components/motion/reveal";
import { Parallax } from "@/components/motion/parallax";

export function AboutHero() {
  const reduce = useReducedMotion();
  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.1, delayChildren: 0.1 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 20 },
    show: { opacity: 1, y: 0, transition: { duration: reduce ? 0.2 : 0.8, ease: easeOut } },
  };

  return (
    <section
      data-tone="dark"
      className="relative isolate flex min-h-[32rem] items-center overflow-hidden bg-brand-ink lg:min-h-[40rem]"
    >
      {/* People, cropped from the right-hand side of the source photograph
          only: the source frame has baked-in text on its left, which we crop
          out so it doesn't duplicate the real heading. No mirroring. */}
      <div aria-hidden className="absolute inset-y-0 right-0 -z-10 w-full sm:w-[72%] lg:w-[60%]">
        <Parallax className="absolute -inset-y-8 inset-x-0" distance={28}>
          <Image
            src="/images/about/hero.png"
            alt=""
            fill
            priority
            sizes="(max-width: 1024px) 72vw, 60vw"
            className="object-cover"
            style={{ objectPosition: "88% center" }}
          />
        </Parallax>
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-brand-ink via-brand-ink/60 to-transparent" />
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-brand-ink/80 via-transparent to-brand-ink/30 sm:bg-none" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="container-page relative flex flex-col items-start gap-6 py-section-sm"
      >
        <motion.p variants={item} className="eyebrow flex items-center gap-3">
          <span aria-hidden className="h-px w-8 bg-brand-gold" />
          The Island of Gems
        </motion.p>
        <motion.h1 variants={item} className="type-h1 flex flex-col font-display font-medium text-brand-cream">
          <span>The Story of Ceylon</span>
          <span className="type-display font-semibold text-brand-gold">Gems</span>
        </motion.h1>
        <motion.p variants={item} className="type-lead max-w-xl text-brand-cream/90">
          For over two thousand years, the island of Sri Lanka has yielded
          some of the earth&apos;s finest coloured gemstones — treasured by
          royalty, scholars and collectors alike.
        </motion.p>
      </motion.div>
    </section>
  );
}
