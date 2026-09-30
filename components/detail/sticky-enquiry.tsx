"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { EnquiryDialog } from "@/components/common/enquiry-dialog";
import { cn } from "@/lib/utils";

/**
 * Phone-only enquiry bar. Slides up once the in-page CTA (`targetId`) has
 * scrolled out of view, so it never duplicates a button that is on screen.
 */
export function StickyEnquiry({
  targetId,
  name,
  price,
  gemstoneRef,
}: {
  targetId: string;
  name: string;
  price: string;
  gemstoneRef: string;
}) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const target = document.getElementById(targetId);
    if (!target) return;
    const io = new IntersectionObserver(
      ([entry]) => setShow(!entry.isIntersecting && entry.boundingClientRect.top < 0),
      { threshold: 0 }
    );
    io.observe(target);
    return () => io.disconnect();
  }, [targetId]);

  return (
    <div
      aria-hidden={!show}
      className={cn(
        "fixed inset-x-0 bottom-0 z-30 border-t border-line bg-background/95 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-[0_-8px_24px_-12px_rgb(61_42_16/0.25)] backdrop-blur-md transition-transform duration-[var(--duration-drawer)] ease-[var(--ease-drawer)] lg:hidden",
        show ? "translate-y-0" : "pointer-events-none translate-y-full shadow-none"
      )}
    >
      <div className="mx-auto flex max-w-xl items-center justify-between gap-4">
        <div className="min-w-0">
          <p className="truncate font-display text-lg leading-tight font-semibold text-brand-ink">{name}</p>
          <p className="text-sm font-semibold text-brand-gold-muted">{price}</p>
        </div>
        <EnquiryDialog
          gemstoneRef={gemstoneRef}
          gemstoneName={name}
          title="Enquire About This Stone"
          trigger={
            <Button tabIndex={show ? 0 : -1} className="shrink-0">
              Enquire
            </Button>
          }
        />
      </div>
    </div>
  );
}
