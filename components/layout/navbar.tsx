"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronDown, Menu as MenuIcon } from "lucide-react";
import { Menu } from "@base-ui/react/menu";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { EnquiryDialog } from "@/components/common/enquiry-dialog";
import { TopBar } from "@/components/layout/top-bar";
import { cn } from "@/lib/utils";

export const gemLinks = [
  { label: "All Gemstones", href: "/collection" },
  { label: "Sapphires", href: "/collection?gemType=Sapphire" },
  { label: "Rubies", href: "/collection?gemType=Ruby" },
  { label: "Spinels", href: "/collection?gemType=Spinel" },
  { label: "Alexandrite", href: "/collection?gemType=Alexandrite" },
];

export const navLinks = [
  { label: "Ceylon Gems", href: "/about" },
  { label: "About", href: "/about-us" },
  { label: "Contact", href: "/contact" },
];

export function Wordmark({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <span className="flex flex-col gap-1 leading-none">
      <span
        className={cn(
          "font-display text-[1.375rem] font-semibold tracking-[0.06em]",
          tone === "dark" ? "text-brand-cream" : "text-brand-ink"
        )}
      >
        RUTH GEMS
      </span>
      <span
        className={cn(
          "text-[0.5625rem] font-medium tracking-[0.26em] uppercase",
          tone === "dark" ? "text-brand-gold" : "text-brand-gold-muted"
        )}
      >
        Ratnapura · Sri Lanka
      </span>
    </span>
  );
}

const linkClass =
  "group/link relative inline-flex min-h-11 items-center px-3 text-[0.9375rem] font-medium text-ink-soft transition-colors duration-[var(--duration-hover)] ease-out hover:text-brand-ink aria-[current=page]:text-brand-ink";

function Underline() {
  return (
    <span className="pointer-events-none absolute inset-x-3 bottom-2 h-px origin-left scale-x-0 bg-brand-gold transition-transform duration-[var(--duration-enter)] ease-[var(--ease-out)] group-hover/link:scale-x-100 group-aria-[current=page]/link:scale-x-100 group-data-[popup-open]/link:scale-x-100" />
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <TopBar />
      <header
        data-scrolled={scrolled}
        className="sticky top-0 z-40 border-b border-transparent bg-background/90 backdrop-blur-md transition-[box-shadow,border-color,background-color] duration-[var(--duration-enter)] ease-out data-[scrolled=true]:border-line data-[scrolled=true]:bg-background/95 data-[scrolled=true]:shadow-sm"
      >
        <div className="container-page flex h-[4.25rem] items-center justify-between gap-6 lg:h-20">
          <Link href="/" aria-label="Ruth Gems, home" className="-mx-2 rounded-md px-2 py-2">
            <Wordmark />
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
            <Menu.Root modal={false}>
              <Menu.Trigger
                openOnHover
                delay={80}
                closeDelay={140}
                className={cn(linkClass, "cursor-pointer gap-1.5 outline-none")}
                aria-current={pathname.startsWith("/collection") ? "page" : undefined}
              >
                Gemstones
                <ChevronDown className="size-3.5 transition-transform duration-[var(--duration-enter)] ease-[var(--ease-out)] group-data-[popup-open]/link:rotate-180" />
                <Underline />
              </Menu.Trigger>
              <Menu.Portal>
                <Menu.Positioner sideOffset={6} align="start" className="z-50">
                  <Menu.Popup className="w-60 origin-(--transform-origin) rounded-xl border border-line bg-popover p-2 shadow-lg outline-none transition-[opacity,transform] duration-[180ms] ease-[var(--ease-out)] data-ending-style:scale-95 data-ending-style:opacity-0 data-starting-style:scale-95 data-starting-style:opacity-0">
                    {gemLinks.map((link) => (
                      <Menu.LinkItem
                        key={link.label}
                        render={<Link href={link.href} />}
                        className="flex min-h-11 cursor-pointer items-center rounded-lg px-3 text-sm font-medium text-ink-soft outline-none data-[highlighted]:bg-sand data-[highlighted]:text-brand-ink"
                      >
                        {link.label}
                      </Menu.LinkItem>
                    ))}
                  </Menu.Popup>
                </Menu.Positioner>
              </Menu.Portal>
            </Menu.Root>
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                aria-current={pathname === link.href ? "page" : undefined}
                className={linkClass}
              >
                {link.label}
                <Underline />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <EnquiryDialog
              trigger={
                <Button className="hidden sm:inline-flex">Arrange a Viewing</Button>
              }
            />
            <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
              <SheetTrigger
                render={<Button variant="ghost" size="icon" className="-mr-2 lg:hidden" />}
              >
                <MenuIcon className="size-6" strokeWidth={1.5} />
                <span className="sr-only">Open menu</span>
              </SheetTrigger>
              <SheetContent side="right" className="w-[min(92vw,24rem)] gap-0 overflow-y-auto">
                <SheetHeader className="border-b border-line px-6 py-5">
                  <SheetTitle className="sr-only">Menu</SheetTitle>
                  <Wordmark />
                </SheetHeader>
                <nav aria-label="Mobile" className="flex flex-1 flex-col px-6 py-6">
                  <p className="eyebrow pb-2">Gemstones</p>
                  <ul className="flex flex-col">
                    {gemLinks.map((link) => (
                      <li key={link.label}>
                        <SheetClose
                          render={<Link href={link.href} />}
                          className="flex min-h-12 items-center font-display text-2xl text-brand-ink transition-colors hover:text-brand-green"
                        >
                          {link.label}
                        </SheetClose>
                      </li>
                    ))}
                  </ul>
                  <hr className="rule-gem my-6" />
                  <ul className="flex flex-col">
                    {navLinks.map((link) => (
                      <li key={link.label}>
                        <SheetClose
                          render={<Link href={link.href} />}
                          aria-current={pathname === link.href ? "page" : undefined}
                          className="flex min-h-12 items-center font-display text-2xl text-brand-ink transition-colors hover:text-brand-green aria-[current=page]:text-brand-green"
                        >
                          {link.label}
                        </SheetClose>
                      </li>
                    ))}
                  </ul>
                </nav>
                <div className="border-t border-line p-6">
                  <EnquiryDialog
                    trigger={<Button size="lg" className="w-full">Arrange a Viewing</Button>}
                  />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
}
