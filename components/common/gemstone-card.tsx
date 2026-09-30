import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";
import { StatusPill } from "@/components/common/status-pill";
import { formatCarat, formatLkr } from "@/lib/format";
import type { Gemstone } from "@/types/gemstone";

export function GemstoneCard({ gemstone }: { gemstone: Gemstone }) {
  return (
    <div className="group relative flex h-full flex-col gap-2.5 rounded-lg bg-white p-2.5 transition-shadow hover:shadow-lg">
      <div className="relative h-[220px] w-full overflow-hidden rounded-lg sm:h-[260px] lg:h-[294px]">
        <Image
          src={gemstone.images[0]}
          alt={gemstone.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3">
          <StatusPill status={gemstone.status} />
        </div>
        <button
          type="button"
          aria-label="Save gemstone"
          className="absolute top-3 right-3 z-10 flex size-7 items-center justify-center rounded-full bg-brand-cream/90 text-brand-ink transition-colors hover:bg-brand-cream"
        >
          <Heart className="size-3.5" />
        </button>
      </div>
      <div className="flex flex-col gap-2.5 px-1 pb-1">
        <p className="text-xs tracking-[0.15em] text-[#a1937c]">
          {gemstone.referenceNo}
        </p>
        <Link
          href={`/collection/${gemstone.slug}`}
          className="after:absolute after:inset-0 after:z-0 after:content-[''] hover:underline"
        >
          <h3 className="font-display text-xl font-semibold text-brand-ink">
            {gemstone.name}
          </h3>
        </Link>
        <p className="text-sm text-[#7c7160]">
          {formatCarat(gemstone.caratWeight)} · {gemstone.cut} ·{" "}
          {gemstone.colour}
        </p>
        <div className="h-px w-full bg-border" />
        <div className="flex items-center justify-between">
          <p className="font-display text-xl font-bold text-[#16325c]">
            {formatLkr(gemstone.priceLkr)}
          </p>
          <Link
            href={`/collection/${gemstone.slug}`}
            className="text-sm font-semibold text-[#a5854a] hover:text-brand-gold-muted"
          >
            View
          </Link>
        </div>
      </div>
    </div>
  );
}
