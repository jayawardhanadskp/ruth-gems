import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SaveButton } from "@/components/common/save-button";
import { StatusPill } from "@/components/common/status-pill";
import { formatCarat, formatLkr } from "@/lib/format";
import type { Gemstone } from "@/types/gemstone";

export function GemstoneCard({ gemstone }: { gemstone: Gemstone }) {
  return (
    <article className="group surface relative flex h-full flex-col rounded-2xl p-1.5 transition-[transform,box-shadow] sm:p-2 duration-[var(--duration-enter)] ease-[var(--ease-out)] focus-within:shadow-md active:scale-[0.99] [@media(hover:hover)]:hover:-translate-y-1 [@media(hover:hover)]:hover:shadow-lg">
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-sand">
        <Image
          src={gemstone.images[0]}
          alt={`${gemstone.name}, ${gemstone.colour} ${gemstone.cut}`}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 45vw, 26vw"
          className="object-cover transition-transform duration-[700ms] ease-[var(--ease-out)] [@media(hover:hover)]:group-hover:scale-[1.04]"
        />
        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-brand-ink/5" />
        <div className="absolute top-2 left-2 sm:top-3 sm:left-3">
          <StatusPill status={gemstone.status} />
        </div>
        <div className="absolute top-1.5 right-1.5">
          <SaveButton label={gemstone.name} />
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-1.5 px-2 pt-3 pb-2 sm:gap-2 sm:px-3 sm:pt-4 sm:pb-3">
        <p className="eyebrow text-stone!">{gemstone.referenceNo}</p>
        <h3 className="font-display text-lg leading-tight font-semibold text-brand-ink sm:text-2xl">
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
        <div className="mt-auto flex items-center justify-between border-t border-line pt-3 sm:pt-4">
          <p className="font-display text-lg font-semibold text-brand-forest sm:text-2xl">
            {formatLkr(gemstone.priceLkr)}
          </p>
          <span
            aria-hidden
            className="max-sm:hidden flex min-h-11 items-center gap-1.5 text-sm font-semibold text-brand-gold-muted transition-colors group-hover:text-brand-green"
          >
            View
            <ArrowRight className="size-4 transition-transform duration-[var(--duration-enter)] ease-[var(--ease-out)] group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </article>
  );
}
