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
    <div className="flex flex-col">
      {rows.map(([label, value], i) => (
        <div
          key={label}
          className={
            "flex items-center justify-between py-4 " +
            "border-b border-[#e6e0d5]"
          }
        >
          <span className="text-sm font-medium tracking-[0.28px] text-[#6e6b67]">{label}</span>
          <span className="font-display text-[22px] font-medium text-brand-ink">{value}</span>
        </div>
      ))}
    </div>
  );
}
