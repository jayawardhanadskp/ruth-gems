import Link from "next/link";
import Image from "next/image";
import { Wordmark } from "@/components/layout/navbar";

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
      { label: "About Us", href: "/about-us" },
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
    <footer className="border-t border-line bg-ivory">
      <div className="container-page flex flex-col gap-14 py-16 sm:py-20">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
          <div className="flex max-w-xs flex-col gap-7">
            <Wordmark />
            <p className="text-sm leading-relaxed text-stone">
              No. 42, Gem Merchants Row
              <br />
              Ratnapura 70000
              <br />
              Sabaragamuwa Province, Sri Lanka
            </p>
            <p className="border-t border-line pt-5 text-sm text-stone">
              Office hours 9:00 – 18:00, Monday to Friday.
            </p>
            <ul className="-ml-3 flex items-center">
              {socialIcons.map((icon) => (
                <li key={icon.label}>
                  <Link
                    href="#"
                    aria-label={icon.label}
                    className="flex size-11 items-center justify-center rounded-full opacity-70 transition-[opacity,transform,background-color] duration-[var(--duration-hover)] ease-out hover:bg-sand hover:opacity-100 active:scale-95"
                  >
                    <Image src={icon.src} alt="" width={20} height={20} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-4 sm:gap-x-12">
            {footerColumns.map((column) => (
              <nav key={column.heading} aria-label={column.heading} className="flex flex-col gap-3">
                <p className="eyebrow">{column.heading}</p>
                <ul className="flex flex-col">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="inline-flex min-h-11 items-center text-sm text-ink-soft transition-colors duration-[var(--duration-hover)] ease-out hover:text-brand-green"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-line pt-7 text-xs leading-relaxed text-stone sm:flex-row sm:justify-between sm:gap-10">
          <p>
            © 2026 Serendib &amp; Sons. Licensed gem dealer, National Gem &amp;
            Jewellery Authority of Sri Lanka.
          </p>
          <p className="sm:max-w-sm sm:text-right">
            No online payments are accepted on this website. Every sale is
            completed in person or by direct agreement.
          </p>
        </div>
      </div>
    </footer>
  );
}
