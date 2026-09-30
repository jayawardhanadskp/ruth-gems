import type { Gemstone } from "@/types/gemstone";
import { formatCarat } from "@/lib/format";

export function SpecTable({ gemstone }: { gemstone: Gemstone }) {
  const rows: [string, string][] = [
    ["Carat Weight", formatCarat(gemstone.caratWeight)],
    ["Dimensions", `${gemstone.dimensionsMm} mm`],
    ["Shape & Cut", gemstone.cut],
    ["Colour", gemstone.colour],
    ["Clarity", gemstone.clarity],
    ["Species", gemstone.species],
    ["Origin", `${gemstone.origin === "Ratnapura" ? "Ceylon (Sri Lanka)" : gemstone.origin}`],
    ["Treatment", gemstone.treatment],
    ["Hardness", `${gemstone.hardnessMohs} (Mohs)`],
    ["Certificate", gemstone.certification],
  ];

  return (
    <dl className="flex flex-col">
      {rows.map(([label, value]) => (
        <div
          key={label}
          className="flex items-baseline justify-between gap-6 border-b border-line py-4"
        >
          <dt className="text-sm font-medium text-stone">{label}</dt>
          <dd className="text-right font-display text-xl font-medium text-brand-ink sm:text-2xl">{value}</dd>
        </div>
      ))}
    </dl>
  );
}
