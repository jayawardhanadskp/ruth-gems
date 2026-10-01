import Image from "next/image";
import Link from "next/link";
import { BadgeCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { formatCarat, formatLkr } from "@/lib/format";
import type { Gemstone } from "@/types/gemstone";

export function GemstoneCard({ gemstone }: { gemstone: Gemstone }) {
  const available = gemstone.status === "available";
  const certified = gemstone.certification !== "Uncertified";
  return (
    <article className="group relative flex h-full flex-col rounded-2xl bg-white transition-transform duration-[var(--duration-enter)] ease-[var(--ease-out)] active:scale-[0.99]">
      <div className="relative aspect-[10/7] w-full overflow-hidden rounded-xl bg-white">
        <Image
          src={gemstone.images[0]}
          alt={`${gemstone.name}, ${gemstone.colour} ${gemstone.cut}`}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 45vw, 26vw"
          className="object-cover transition-transform duration-[700ms] ease-[var(--ease-out)] [@media(hover:hover)]:group-hover:scale-[1.04]"
        />
        <span
          className={cn(
            "absolute top-2 left-2 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[0.6875rem] font-medium text-white sm:top-3 sm:left-3 sm:gap-2 sm:px-3.5 sm:py-1.5 sm:text-xs",
            available ? "bg-brand-green" : "bg-brand-gold-muted"
          )}
        >
          <span aria-hidden className={cn("size-1.5 rounded-full", available ? "bg-teal-400" : "bg-brand-cream")} />
          {available ? "Available" : "Reserved"}
        </span>
        {certified && (
          <BadgeCheck
            aria-label={`${gemstone.certification} certified`}
            className="absolute top-2.5 right-2 size-5 text-brand-gold-muted sm:top-4 sm:right-3"
            strokeWidth={1.5}
          />
        )}
      </div>
      <div className="flex flex-1 flex-col gap-1.5 pt-3 sm:gap-2 sm:pt-4">
        <p className="text-xs tracking-[0.24em] text-stone/80 uppercase">{gemstone.referenceNo}</p>
        <h3 className="font-display text-lg leading-tight font-medium text-brand-ink sm:text-2xl">
          <Link
            href={`/collection/${gemstone.slug}`}
            className="rounded-sm outline-none after:absolute after:inset-0 after:z-0 after:content-[''] focus-visible:after:outline-2 focus-visible:after:outline-offset-2 focus-visible:after:outline-ring focus-visible:after:rounded-2xl"
          >
            {gemstone.name}
          </Link>
        </h3>
        <p className="text-[0.8125rem] leading-snug text-stone sm:text-sm">
          {formatCarat(gemstone.caratWeight)} · {gemstone.cut} · {gemstone.colour}
        </p>
        <div className="mt-auto flex items-center justify-between border-t border-line/70 pt-3 sm:pt-4">
          <p className="font-display text-lg font-semibold text-brand-navy sm:text-2xl">
            {formatLkr(gemstone.priceLkr)}
          </p>
          <span
            aria-hidden
            className="max-sm:hidden text-sm font-semibold text-brand-gold-muted transition-colors group-hover:text-brand-green"
          >
            View
          </span>
        </div>
      </div>
    </article>
  );
}
