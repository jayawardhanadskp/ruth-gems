"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { Button } from "@/components/ui/button";
import { EnquiryDialog } from "@/components/common/enquiry-dialog";
import { Parallax } from "@/components/motion/parallax";
import { easeOut } from "@/components/motion/reveal";

export function Hero() {
  const reduce = useReducedMotion();
  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.1, delayChildren: 0.15 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 22 },
    show: { opacity: 1, y: 0, transition: { duration: reduce ? 0.2 : 0.8, ease: easeOut } },
  };

  return (
    <section
      data-tone="dark"
      className="relative isolate flex min-h-[34rem] items-end overflow-hidden bg-brand-forest-dark pb-14 sm:pb-20 lg:min-h-[44rem] lg:items-center lg:pb-0"
    >
      <motion.div
        aria-hidden
        className="absolute inset-0 -z-20"
        initial={{ scale: reduce ? 1 : 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: easeOut }}
      >
        <Parallax className="absolute -inset-y-10 inset-x-0" distance={36}>
          <Image
            src="/images/home/hero.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </Parallax>
      </motion.div>
      <div className="scrim-hero absolute inset-0 -z-10" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="container-page relative flex flex-col items-start gap-6 pt-28 lg:pt-0"
      >
        <motion.p variants={item} className="eyebrow flex items-center gap-3">
          <span aria-hidden className="h-px w-8 bg-brand-gold" />
          Ratnapura · Sri Lanka
        </motion.p>
        <motion.h1
          variants={item}
          className="max-w-[16ch] font-display type-display font-medium text-balance text-brand-cream"
        >
          A Legacy of Ceylon&apos;s Finest Gemstones.
        </motion.h1>
        <motion.p
          variants={item}
          className="max-w-lg text-base leading-relaxed text-brand-cream/90 sm:text-lg"
        >
          Discover the captivating colours, natural beauty and timeless
          character of Ceylon gemstones. Explore a collection where every
          stone has its own story to tell.
        </motion.p>
        <motion.div variants={item} className="flex flex-wrap items-center gap-3">
          <Button nativeButton={false} size="lg" variant="gold" render={<Link href="/collection" />}>
            Browse Gemstones
          </Button>
          <EnquiryDialog
            trigger={
              <Button size="lg" variant="outline-light">
                Arrange a Viewing
              </Button>
            }
          />
        </motion.div>
        <motion.p variants={item} className="text-sm font-medium text-[#fff0d2]">
          No cart, no checkout. Every gemstone is sold by conversation.
        </motion.p>
      </motion.div>
    </section>
  );
}
