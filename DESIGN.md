# Al-Haramain Travels (AU) design system

The Australian site mirrors the UK landing page (alharamaintravels.uk): a warm cream page, white cards with a hairline border, charcoal bands for the hero, stats, quote and lead-form sections, and brand gold as the only accent. Read this before adding or changing any page.

## Tokens (app/globals.css)

| Token | Value | Tailwind |
|---|---|---|
| Page background (cream) | `#faf6f0` | `bg-background` / `bg-cream` |
| Alternate band (cream-2) | `#f3ece2` | `bg-surface` / `bg-cream-2` |
| Card | `#ffffff` | `bg-card` |
| Charcoal band | `#282828` | `bg-charcoal text-white` |
| Footer | `#1f1f1f` | `bg-charcoal-deep` |
| Body text | `#282828` | `text-foreground` |
| Headings | `#1c1c1c` | `text-ink` |
| Secondary text | `#6f6a63` | `text-muted-foreground` |
| Brand gold | `#daa260` (hover `#c2884a`) | `bg-primary` `text-primary` `hover:bg-primary-hover` |
| Gold deep (eyebrows, icons) | `#c2884a` | `text-gold-deep` |
| Gold soft (icon chips) | `#f3e3cf` | `bg-gold-soft` |
| Hairline | `#e7ddd0` | `border-border` |
| Lift shadow | `0 18px 50px rgba(40,40,40,.12)` | `shadow-lift` (or the `lift` utility for hover) |

- Gold is the only accent. No green or red badges: positive/active state is gold, inactive is `bg-cream-2 text-muted-foreground`. Error text uses `text-destructive`.
- **Dark bands and photo overlays**: inside `bg-charcoal` sections and on top of photographs, use `text-white`, `text-white/85` and `border-white/10` explicitly. `text-foreground` is dark and will disappear.

## Type

- Headings: Poppins (`font-display`). Body: Montserrat (default).
- Page h1 on a photo hero: `font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-white`; emphasise one phrase with `<span className="text-primary">`.
- Section heading: use `<SectionHeading eyebrow title intro align="center" />`. Section h2 = Poppins 700, `text-ink`. Eyebrows are the UK pattern and are allowed on every main section.
- Body: `text-base md:text-[1.06rem] text-muted-foreground max-w-[65ch]`.
- No em-dashes or en-dashes anywhere in visible copy. Use a comma, full stop, or hyphen. Australian English.

## Shape and spacing

- Buttons are pills (`<Button />`). Cards `rounded-2xl` (16px) with `border border-border bg-card`. Bento tiles `rounded-[18px]`. Inputs `rounded-[11px]`.
- Cards and tiles use the `lift` utility for hover (translateY(-6px) + `shadow-lift`). Gold buttons lift 2px on hover.
- Section padding: `py-24 md:py-[96px]`. Width: `container-x` (1180px, 24px gutters). Section heading block gets `mb-14`.

## Components

- `components/header.tsx` `HeroHeader`: fixed, transparent over the hero (white logo and links), turns cream with the colour logo once scrolled. Every page must start with a dark photo hero (`PageHeader` or the home `Hero`) so the transparent header is readable.
- `components/PageHeader.tsx` inner-page photo hero with scrim, optional eyebrow, breadcrumbs, actions.
- `components/SectionHeading.tsx` eyebrow + h2 + intro (left or centred).
- `components/ui/button.tsx` variants: `default` (gold, white text, gold shadow), `ghost` (transparent, charcoal border; for cream backgrounds), `light` (white), `outline-light` (for charcoal bands and photos), `link`.
- `components/ui/field.tsx` `Field`, `Input`, `Select`, `Textarea` for every form (cream fill, gold focus ring). Labels above inputs.
- `components/ui/reveal.tsx` `<Reveal>` scroll-in (client, reduced-motion safe).
- `components/ui/count-up.tsx` animated numbers for stats.
- `components/ui/accordion.tsx` UK-style FAQ list: white items, plus/minus toggle, one open at a time.
- `components/TripCard.tsx` UK "package" card (3:2 photo with gold tag, meta pills, price, full-width gold button).
- `components/sections/CTABand.tsx` closing charcoal photo band for inner pages.
- Icons: `lucide-react` only.

## Content rules

- Photos only from `public/gallery`, `public/trips`, `public/services`. No Unsplash, no emoji.
- One CTA intent per page: the primary action is "Enquire now" (to `/contact`, or the on-page `#enquire` form on the home page, or `#enquiry` on trip pages). Secondary: "View Umrah trips" or "WhatsApp us".
- Do not invent prices, dates, statistics, scholar names or testimonials. Content comes from `lib/data.ts` and `content/blog/*.md`.
- Every page exports `metadata` with a unique title and description; add JSON-LD where a schema.org type fits.

## Blog

Posts live in `content/blog/<slug>.md` with YAML frontmatter (`title`, `excerpt`, `date`, `author`, `category`, `readTime`, optional `image`). `lib/blog.ts` reads them on the server (`getAllPosts()`, `getPostBySlug()`). Adding a post = adding a file; the listing, sitemap and home "From the blog" pick it up automatically. See `content/blog/README.md`.
