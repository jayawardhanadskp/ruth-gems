"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ChevronDown, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { EnquiryDialog } from "@/components/common/enquiry-dialog";
import { TopBar } from "@/components/layout/top-bar";
import { cn } from "@/lib/utils";

const gemLinks = [
  { label: "All Gemstones", href: "/collection" },
  { label: "Sapphires", href: "/collection?gemType=Sapphire" },
  { label: "Rubies", href: "/collection?gemType=Ruby" },
  { label: "Spinels", href: "/collection?gemType=Spinel" },
  { label: "Alexandrite", href: "/collection?gemType=Alexandrite" },
];

const navLinks = [
  { label: "Ceylon Gems", href: "/about" },
  { label: "About", href: "/about-us" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [gemOpen, setGemOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-white/95 backdrop-blur-sm">
      <TopBar />
      <motion.div
        className="container-page flex items-center justify-between"
        animate={{ paddingTop: scrolled ? 12 : 24, paddingBottom: scrolled ? 12 : 24 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        <Link href="/" className="flex flex-col gap-1">
          <span
            className="font-display text-[22px] font-semibold tracking-[0.02em] text-brand-ink"
            style={{ fontFeatureSettings: '"dlig" 1' }}
          >
            RUTH GEMS
          </span>
          <span className="text-[9px] font-normal tracking-[0.2em] text-brand-gold-muted">
            Ratnapura · Sri Lanka
          </span>
        </Link>

        <nav className="hidden items-center gap-2 lg:flex">
          <div
            className="relative"
            onMouseEnter={() => setGemOpen(true)}
            onMouseLeave={() => setGemOpen(false)}
          >
            <button className="flex items-center gap-2 rounded-md p-2.5 text-[15px] font-semibold text-neutral-600 transition-colors hover:text-brand-ink">
              Gemstones
              <ChevronDown className="size-3.5" />
            </button>
            {gemOpen && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.15 }}
                className="absolute top-full left-0 flex w-56 flex-col gap-1 rounded-lg border border-border bg-white p-2 shadow-lg"
              >
                {gemLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="rounded-lg px-3 py-2 text-sm text-neutral-700 hover:bg-muted"
                  >
                    {link.label}
                  </Link>
                ))}
              </motion.div>
            )}
          </div>
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="rounded-md p-2.5 text-[15px] font-semibold text-neutral-600 transition-colors hover:text-brand-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <EnquiryDialog
            trigger={
              <Button className="hidden h-11 rounded-lg bg-brand-green px-4 text-[15px] font-medium text-brand-cream hover:bg-brand-green/90 sm:inline-flex">
                Arrange a Viewing
              </Button>
            }
          />
          <Sheet>
            <SheetTrigger
              render={
                <Button variant="ghost" size="icon" className="lg:hidden" />
              }
            >
              <Menu className="size-5" />
              <span className="sr-only">Open menu</span>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <SheetHeader>
                <SheetTitle className="font-display text-xl">Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-1 px-4">
                <p className="px-2 pt-2 pb-1 text-xs font-semibold tracking-[0.15em] text-brand-gold-muted uppercase">
                  Gemstones
                </p>
                {gemLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={cn(
                      "rounded-lg px-2 py-2.5 text-base text-neutral-700 hover:bg-muted"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="my-2 h-px bg-border" />
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="rounded-lg px-2 py-2.5 text-base text-neutral-700 hover:bg-muted"
                  >
                    {link.label}
                  </Link>
                ))}
                <EnquiryDialog
                  trigger={
                    <Button className="mt-4 h-11 w-full rounded-lg bg-brand-green text-brand-cream hover:bg-brand-green/90">
                      Arrange a Viewing
                    </Button>
                  }
                />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </motion.div>
    </header>
  );
}
