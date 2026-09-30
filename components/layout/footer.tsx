import Link from "next/link";
import Image from "next/image";

const footerColumns = [
  {
    heading: "Explore",
    links: [
      { label: "All Gemstones", href: "/collection" },
      { label: "Sapphires", href: "/collection?gemType=Sapphire" },
      { label: "Rubies", href: "/collection?gemType=Ruby" },
      { label: "Spinels", href: "/collection?gemType=Spinel" },
      { label: "Alexandrite", href: "/collection?gemType=Alexandrite" },
    ],
  },
  {
    heading: "Learn",
    links: [
      { label: "Gem Guide", href: "/about" },
      { label: "Certification", href: "/about" },
      { label: "Treatments", href: "/about" },
      { label: "Before You Buy", href: "/about" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Ceylon Gems", href: "/about" },
      { label: "About Us", href: "/about" },
      { label: "Our Way of Trading", href: "/about" },
    ],
  },
  {
    heading: "Contact",
    links: [
      { label: "Arrange a Viewing", href: "/contact" },
      { label: "Contact Us", href: "/contact" },
      { label: "Visit the Office", href: "/contact" },
    ],
  },
];

const socialIcons = [
  { src: "/images/icons/social-1.svg", label: "Instagram" },
  { src: "/images/icons/social-2.svg", label: "Facebook" },
  { src: "/images/icons/social-3.svg", label: "Email" },
];

export function Footer() {
  return (
    <footer className="border-t border-[#e2d8c6] bg-brand-cream">
      <div className="container-page flex flex-col gap-12 py-12 sm:py-16">
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
          <div className="flex max-w-[260px] flex-col gap-6">
            <div className="flex flex-col gap-1">
              <span className="font-display text-[22px] font-semibold tracking-[0.02em] text-brand-ink">
                RUTH GEMS
              </span>
              <span className="text-[9px] tracking-[0.2em] text-brand-gold-muted">
                Ratnapura · Sri Lanka
              </span>
            </div>
            <p className="text-xs leading-relaxed text-[#7c7160]">
              No. 42, Gem Merchants Row
              <br />
              Ratnapura 70000
              <br />
              Sabaragamuwa Province, Sri Lanka
            </p>
            <div className="flex flex-col gap-2 border-t border-[#e2d8c6] pt-4 text-xs">
              <p>
                <span className="text-[#7c7160]">Sri Lanka Time: </span>
                <span className="text-brand-ink">10:09 </span>
                <span className="text-[#7c7160]">(GMT+5:30)</span>
              </p>
              <p className="text-[#a1937c]">
                Office hours 9:00 – 18:00, Monday to Friday.
              </p>
            </div>
            <div className="flex items-center gap-4">
              {socialIcons.map((icon) => (
                <Link
                  key={icon.label}
                  href="#"
                  aria-label={icon.label}
                  className="opacity-70 transition-opacity hover:opacity-100"
                >
                  <Image src={icon.src} alt="" width={18} height={18} />
                </Link>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4 sm:gap-12">
            {footerColumns.map((column) => (
              <div key={column.heading} className="flex flex-col gap-5">
                <p className="text-[10px] font-medium tracking-[0.2em] text-brand-gold-muted uppercase">
                  {column.heading}
                </p>
                <ul className="flex flex-col gap-4">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-[13px] text-[#5c5347] transition-colors hover:text-brand-ink"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-[#e2d8c6] pt-6 text-[12px] text-[#a1937c] sm:flex-row sm:justify-between">
          <p>
            © 2026 Serendib &amp; Sons. Licensed gem dealer, National Gem &amp;
            Jewellery Authority of Sri Lanka.
          </p>
          <p>
            No online payments are accepted on this website. Every sale is
            completed in person or by direct agreement.
          </p>
        </div>
      </div>
    </footer>
  );
}
