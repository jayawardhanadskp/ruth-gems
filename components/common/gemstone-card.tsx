import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SaveButton } from "@/components/common/save-button";
import { StatusPill } from "@/components/common/status-pill";
import { formatCarat, formatLkr } from "@/lib/format";
import type { Gemstone } from "@/types/gemstone";

export function GemstoneCard({ gemstone }: { gemstone: Gemstone }) {
  return (
    <article className="group surface relative flex h-full flex-col rounded-2xl p-2 transition-[transform,box-shadow] duration-[var(--duration-enter)] ease-[var(--ease-out)] focus-within:shadow-md active:scale-[0.99] [@media(hover:hover)]:hover:-translate-y-1 [@media(hover:hover)]:hover:shadow-lg">
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-sand">
        <Image
          src={gemstone.images[0]}
          alt={`${gemstone.name}, ${gemstone.colour} ${gemstone.cut}`}
          fill
          sizes="(max-width: 640px) 92vw, (max-width: 1024px) 45vw, 26vw"
          className="object-cover transition-transform duration-[700ms] ease-[var(--ease-out)] [@media(hover:hover)]:group-hover:scale-[1.04]"
        />
        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-brand-ink/5" />
        <div className="absolute top-3 left-3">
          <StatusPill status={gemstone.status} />
        </div>
        <div className="absolute top-1.5 right-1.5">
          <SaveButton label={gemstone.name} />
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-2 px-3 pt-4 pb-3">
        <p className="eyebrow text-stone!">{gemstone.referenceNo}</p>
        <h3 className="font-display text-2xl leading-tight font-semibold text-brand-ink">
          <Link
            href={`/collection/${gemstone.slug}`}
            className="rounded-sm outline-none after:absolute after:inset-0 after:z-0 after:content-[''] focus-visible:after:outline-2 focus-visible:after:outline-offset-2 focus-visible:after:outline-ring focus-visible:after:rounded-2xl"
          >
            {gemstone.name}
          </Link>
        </h3>
        <p className="text-sm text-stone">
          {formatCarat(gemstone.caratWeight)} · {gemstone.cut} · {gemstone.colour}
        </p>
        <div className="mt-auto flex items-center justify-between border-t border-line pt-4">
          <p className="font-display text-2xl font-semibold text-brand-forest">
            {formatLkr(gemstone.priceLkr)}
          </p>
          <span
            aria-hidden
            className="flex min-h-11 items-center gap-1.5 text-sm font-semibold text-brand-gold-muted transition-colors group-hover:text-brand-green"
          >
            View
            <ArrowRight className="size-4 transition-transform duration-[var(--duration-enter)] ease-[var(--ease-out)] group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </article>
  );
}
