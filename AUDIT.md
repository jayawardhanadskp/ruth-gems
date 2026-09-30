# Ruth Gems UI audit (Phase 1)

Branch: `feat/luxury-ui-polish`. Date: 2026-10-01.

## Method and limits

- Dev server on `localhost:3000`. Every route was measured at **1440, 1024, 768 and 390px** with a scripted pass: horizontal overflow, interactive elements shorter than 44px, heading sizes, alt attributes.
- The Chrome window cannot shrink below about 1490px, so narrow widths were measured in same-origin iframes. Layout numbers are reliable.
- Visual (screenshot) review so far covers **home at 1440 only**. The other pages are judged from the scripted results and the code. Each page gets a visual pass at all four widths during Phase 3, before its commit.
- Routes: `/`, `/about`, `/about-us`, `/collection`, `/collection/[slug]` (sample: `green-ceylon-sapphire-cgs-1042`), `/contact`.

## Summary of measurements

| Route | Overflow at 390 | Interactive elements under 44px (1440 / 390) | H1 size (1440 → 390) |
| --- | --- | --- | --- |
| `/` | none | 36 / 37 | 70 → 36 |
| `/about` | none | 25 / 20 | **16** → 16 (see below) |
| `/about-us` | none | 25 / 20 | 45 → 36 |
| `/collection` | **yes: 415px wide in a 390px viewport** | 61 / 53 | 48 → 48 |
| `/collection/[slug]` | none | 40 / 37 | 41 → 36 |
| `/contact` | none | 28 / 23 | 42 → 48 at 768, inconsistent |

## Systemic problems (affect every page)

1. **Viewport-unit sizing everywhere.** 254 `[N.NNvw]` values across 19 files (for example `lg:text-[4.1667vw]`, `lg:gap-[0.417vw]`). These were converted from Figma pixels. Type and spacing scale continuously from 1024 to 1440+ and have no ceiling. H1 sizes at 1440 differ per page (70 / 45 / 48 / 41 / 42). There is no shared type scale, so hierarchy drifts page to page.
2. **No section rhythm or container tokens.** `container-page` is 1440px max with four padding steps. Section vertical spacing is set ad hoc per component.
3. **Tokens are the shadcn defaults with a few brand colours bolted on.**
   - `--border` is neutral grey `#e5e7eb` and does not match the warm cream palette.
   - A full `.dark` palette exists but nothing uses it.
   - Hex values such as `#a5854a` are hard-coded in components.
   - There are no shadow, spacing or type-scale tokens.
4. **Buttons (`components/ui/button.tsx`) are the stock shadcn set.**
   - `transition-all`.
   - Default height is `h-8` (32px), so nothing meets 44px.
   - Press feedback is `translate-y-px`, not a scale.
   - There is no gold or luxury variant.
   - Pages appear to hand-roll their own CTAs, which is why the buttons are inconsistent.
5. **Touch targets.** Across pages the same elements fail the 44px minimum:
   - The currency selector (32px).
   - The "Open menu" button (32px).
   - The breadcrumb links (20px).
   - The card "Save gemstone" button (28px) and "View" link (20px).
   - Footer social icons (18px).
   - Sort (32px).
   - Text links such as "View Certificate →" and "View all →" (20px).
6. **Motion.**
   - `Reveal` uses a 0.6s ease with a 24px offset. It is acceptable but has no stagger helper for mixed content.
   - Navbar shrink animates `paddingTop` and `paddingBottom`, which triggers layout on every scroll.
   - `transition-all` appears 4 times.
   - Durations are mixed (100 / 150 / 200 / 500 / 700ms) with no shared easing tokens.
   - `prefers-reduced-motion` is handled in the two marquees and in `Reveal`'s offset. It is not handled in the navbar or hover transforms.
   - `html { scroll-behavior: smooth }` is set globally and ignores reduced motion.
7. **Focus states.** Only 9 files use `focus-visible`. The navbar items, gem cards, pagination, footer links and the breadcrumb have no visible focus ring.
8. **Card and pill inconsistency.** Gemstone cards, category chips, shape tiles and about-us cards use different radii, borders and shadows. There is no shared surface style.
9. **Fonts.** Cormorant Garamond (display) and Inter (body). The pairing is sound, but weights and tracking are applied ad hoc. The small-caps eyebrow style exists (`.eyebrow`) but many labels bypass it.
10. **Mobile nav.** The desktop nav is hidden below `lg` and a Sheet is used. Its look and content were not reviewed visually yet. There is no sticky enquiry CTA on the detail page.
11. **Dropdown accessibility.** The Gemstones dropdown opens on mouse hover only (`onMouseEnter`). It is not reachable by keyboard or touch.
12. **Images.** Gem photos sit on white cards with no consistent framing, aspect ratio or backdrop. There is no blur placeholder and no shared hover treatment beyond `scale-105` at 500ms. Verify `priority` and `sizes` per image in Phase 2.
13. **Stray files.** `dev.log` is untracked in the repo root. It should be ignored.

## Home (`/`)

- Hero: the headline renders over a busy photograph, and in the first frames the copy has very low contrast. The hero needs a gradient scrim and a deliberate entrance.
- Hero text block is left-aligned and small against a 70px H1. The two CTAs are different shapes, and the outline button is hard to read over the image.
- **Needs verification:** in the "Find a Gemstone You Love" section only one category card (Ruby) was visible when the section was in view. The others may be staggered reveals that never fired, or a layout problem. Check `category-chips.tsx`.
- Section headings fade in but sit on flat white, so the page reads as one long white scroll with no change of pace between sections.
- Featured cards: price, status and "View" hierarchy is weak. "View" is a 20px tap target.
- The photo-strip marquee ends at 40s loop. It is fine, but there are no edge fades.
- Page height is 8165px at 390, which is long for mobile.

## About (`/about`)

- The H1 is two spans. The measured "16" is the wrapper font size, and the real lines are 48 / 72px, so this is not a bug. The sizing is still separate from every other page hero.
- Mining collage, variety strip and colour spectrum each use their own spacing. The variety strip and swatches need a horizontal scroll container on mobile with scroll snap.

## About Us (`/about-us`)

- H1 is 45px at 1440 and 32px at 1024, so it gets smaller on a smaller window but lands on a different step from `/about`.
- Hero collage marquee and closing CTA are separate designs from the home CTA banner.
- Principles and "difference" sections need checking for consistent card style.

## Collection (`/collection`)

- **Overflow at 390px:** the "Filters / Sort" row is wider than the viewport and pushes the page to 415px. The sort button (`whitespace-nowrap`) is the cause.
- Filters are available through `mobile-filters.tsx`. The trigger and sheet were not reviewed visually yet. The "Open menu" and sort controls are 32px.
- 61 sub-44px controls on desktop: sidebar checkboxes and swatches need larger hit areas (label rows, not just the box).
- Pagination buttons are 40–42px. Raise them to 44px.
- Grid cards share the home issues (28px save button, 20px View link).

## Detail (`/collection/[slug]`)

- Five heading sizes on one page (42 / 42 / 32 / 38 / 48). Needs one scale.
- No sticky enquiry CTA on mobile.
- Breadcrumbs are 20px tall links.
- "View Certificate →" and "View all →" are 20px text links.
- Gallery thumbnails, spec table and certification card were not reviewed visually. Check in Phase 3.

## Contact (`/contact`)

- Inputs measured 858 × 32px at desktop. Fields are too short for a luxury form. Target 48–52px with clear labels and focus states.
- H1 jumps from 30 (1024) to 48 (768) to 43 (1440), which is a breakpoint inconsistency.
- Page is only 1513px tall at 1440 and may feel sparse. Check the hero and contact section balance.

## Shared components

- **Navbar / top-bar:** white at 95% with a blur, a generic grey border, hover-only dropdown, padding animation (layout cost), 32px menu button and currency selector. The wordmark is text only.
- **Footer:** 18px social icons, no visible focus, small-text contrast to check.
- **Breadcrumbs:** 20px targets.
- **Gemstone card:** white card with `hover:shadow-lg`, image zoom 500ms with default ease, no press state.
- **Status pill / CTA banner / enquiry dialog:** restyle with the new tokens. The dialog needs origin-aware enter and exit, a visible close button at 44px, and larger fields.

## Proposed order

1. Phase 2: tokens (type scale, section rhythm, container, radii, shadows, motion), buttons, navbar + top-bar, footer, card, pill, breadcrumbs, CTA banner, dialog. Replace `vw` sizing with clamp-based tokens.
2. Phase 3: Home, Collection, Detail, About, About Us, Contact. One commit per page after build, lint and a four-width check.
