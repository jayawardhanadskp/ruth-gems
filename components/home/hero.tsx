"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { EnquiryDialog } from "@/components/common/enquiry-dialog";

export function Hero() {
  return (
    <section className="relative h-[520px] w-full overflow-hidden sm:h-[600px] lg:h-[720px]">
      <Image
        src="/images/home/hero.png"
        alt="Ceylon gemstone artisans"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="container-page relative z-10 flex h-full flex-col justify-center gap-6"
      >
        <h1 className="font-display text-4xl font-medium leading-tight text-brand-cream sm:text-5xl lg:text-[70px] lg:leading-[1.05]">
          A Legacy of Ceylon&apos;s Finest Gemstones.
        </h1>
        <p className="max-w-md text-base leading-relaxed text-gray-300">
          Discover the captivating colours, natural beauty and timeless
          character of Ceylon gemstones. Explore a collection where every
          stone has its own story to tell.
        </p>
        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap items-center gap-4">
            <Button
              nativeButton={false}
              render={<Link href="/collection" />}
              className="h-11 rounded-lg border-0 bg-brand-green-light px-[17px] text-base font-medium text-white hover:bg-brand-green-light/90"
            >
              Browse Gemstones
            </Button>
            <EnquiryDialog
              trigger={
                <Button
                  variant="outline"
                  className="h-11 rounded-lg border-2 border-white bg-transparent px-[17px] text-base font-medium text-white hover:bg-white/10 hover:text-white"
                >
                  Arrange a Viewing
                </Button>
              }
            />
          </div>
          <p className="text-sm font-medium text-[#fff5e0]">
            No cart, no checkout. Every gemstone is sold by conversation.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
