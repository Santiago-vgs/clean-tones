# The Clean Tones — Band Website Plan

## Overview

A modern, fast-loading band website for **The Clean Tones**, a Perth-based rock/blues band. Built with **Next.js 14** (App Router), **Tailwind CSS**, and deployed on **Vercel**. The site acts as the band's digital home — showcasing music, gigs, photos, merch, and a press kit, all wrapped in a custom blue palette that reflects the band's identity.

---

## Design Inspiration — Lessons from Reference Sites

### 1. Spacey Jane (spaceyjane.com.au) — Perth peers, best local reference
**Layout:** Single-page scroll on the homepage — hero at top, then Music, Live, Video sections stacked vertically. No separate pages for most content; the nav links are anchor scrolls (`/#music`, `/#live`, `/#video`). Only the Store breaks out to a separate page (actually three region-specific external stores).
**What to steal:**
- The single-page scroll flow is *slick* for a band at this level. Everything a fan or booker needs is one scroll away. Consider a hybrid: single-page homepage with key content, but also dedicated routes for deeper pages (gallery, press kit, contact).
- Latest release is front and centre with album art, vinyl mockups, and streaming CTA — not buried.
- Merch is presented with physical product mockups (vinyl, CD) right on the homepage, not just a "Shop" link.
- Video section uses an embedded YouTube carousel — keeps people on-site rather than linking out.
- Minimal nav — just Music, Live, Video, Store. No bloat. Clean and confident.
**What to improve on:**
- The site has almost no personality in the design itself — it's essentially a dark background with content blocks. The Clean Tones' blue palette can inject more identity.
- No About/bio section visible — a missed opportunity for press/bookers. We should keep ours.
- No contact form — they rely on management. We need one since you're self-booking.

### 2. Fool Nelson (foolnelson.com.au) — Perth indie rock, similar scale
**Layout:** Very JS-heavy single-page site (content barely loads without JS). From what's known of the site: minimal, image-forward, dark aesthetic. Typical indie band site — band photo hero, links to music, gigs, and socials.
**What to steal:**
- Proof that a simple, image-led site works at the Perth pub circuit level. Don't over-engineer.
- Social links prominent — important for building a local following.
**What to improve on:**
- Heavy JS rendering means poor SEO and slow first paint. Next.js SSG/ISR solves this.
- Limited content depth — no press kit, no real bio. We can offer more without bloating.

### 3. Paul McCartney (paulmccartney.com) — Premium editorial, aspirational reference
**Layout:** Vertically stacked sections with generous whitespace. Hero with album art and pre-order CTA, then Latest News (editorial cards with large images), then merch product grid, then mailing list signup with a beautiful banner image, then footer.
**What to steal:**
- **Editorial card layout for news/updates.** Large image + headline + date + category tag. Clean, magazine-quality feel. We could adapt this for a "Latest" section on the homepage (new single, gig announcement, band news).
- **Merch presentation is premium** — product images with clean titles, linking to external store. No prices cluttering the grid. This is the right approach if we have merch.
- **Mailing list CTA is gorgeous** — full-width banner with a band photo, hand-drawn illustrations, and a simple "Join mailing list" button. Worth emulating with our blue palette.
- **Hand-drawn visual elements** — birds, underlines, doodles scattered through the page. Adds warmth and personality to what could be a sterile layout. Consider subtle hand-drawn or textured accents in our blue theme.
- **Dedicated signature/logo in the footer** — personal touch. We should use a custom wordmark or logo for The Clean Tones.
- **The nav is minimal but expandable** — hamburger-style on the homepage, expands to full menu.
**What to improve on:**
- This is a massive multi-page CMS-driven site. Way too complex for our needs. We take the *aesthetic* cues, not the architecture.
- The news/blog section is overkill for a band at our stage. A simple "Latest" teaser on the homepage is enough.

### 4. George Harrison (georgeharrison.com) — Archive/legacy site, design warmth
**Layout:** Full-screen hero area at top (currently featuring a video/news item), then a News feed (list of articles with thumbnails), then Videos (thumbnail grid), then Store (product cards), then newsletter signup, then footer with social icons.
**What to steal:**
- **The News section uses a vertical scrolling list** — headline + "View" link + thumbnail. Very scannable. Good pattern for a "What's New" feed if we want one.
- **Video section is a clean thumbnail grid** — each video is a card with a title and play icon overlay. If we have music videos or live clips, this is the pattern.
- **Newsletter signup is inline** — name, email, country fields right on the page, not a popup. Feels integrated rather than intrusive.
- **Social icons in the nav AND footer** — smart redundancy. Socials appear in the top nav bar alongside page links, plus again in the footer. Makes them impossible to miss.
- **The "Archive" nav item** — interesting concept. A dedicated archive page for deep fans. We probably don't need this yet, but could evolve into one as The Clean Tones release more material.
- **Warm, organic tone despite being a dark site** — earthy colours, serif/handwritten fonts, textured backgrounds. Not cold and techy. Our blue palette should aim for a similar warmth (the gold accent helps here).
**What to improve on:**
- The site feels dated in places (WordPress, older plugin patterns). Next.js gives us a more modern feel.
- Image lazy-loading could be better — some placeholders visible. Our Next.js Image component handles this natively.

---

## Design Direction Summary (for The Clean Tones)

Based on the reference sites, here's the design direction:

**Overall vibe:** Dark, warm, image-forward — closer to George Harrison's organic feel than a cold tech look. The blue palette replaces the typical black/dark grey, giving it a unique identity. Think deep ocean blues with warm gold accents.

**Homepage structure (hybrid model):**
- Full-viewport hero (like all four sites — this is universal)
- "Latest" teaser section (inspired by McCartney's editorial cards)
- Next gig teaser (Spacey Jane's Live section, but just the next one)
- Latest release with album art + streaming CTA (Spacey Jane's approach)
- Quick links grid to Shows, Music, Gallery, About
- Newsletter/mailing list CTA (McCartney's banner style, adapted with blue theme)
- Footer with socials + nav

**Key design elements to incorporate:**
1. **Hand-drawn or textured accents** — subtle underlines, dividers, or decorative elements (McCartney influence) to add warmth
2. **Album art as hero-level imagery** — don't just thumbnail it, make releases feel like an event (Spacey Jane)
3. **Social icons in nav AND footer** — redundancy is good (George Harrison)
4. **Video thumbnails with play overlays** — for any YouTube content (George Harrison)
5. **Merch shown as product mockups** — not just text links (Spacey Jane, McCartney)
6. **Editorial-quality image cards** — for any news/updates section (McCartney)
7. **Generous whitespace** — let the content breathe, don't cram (McCartney)
8. **Custom wordmark/logo** — not just text in a font (all four sites have distinctive logos)

**Typography direction:**
- Display font: Something with character — a condensed serif or a slightly retro display face (nod to the 70s influences). Consider: Playfair Display, Bebas Neue, or a custom lettering-style wordmark.
- Body font: Clean sans-serif for readability — Outfit, Manrope, or DM Sans (avoid Inter/Roboto).

---

## Tech Stack

| Layer          | Choice                   | Why                                                    |
|----------------|--------------------------|--------------------------------------------------------|
| Framework      | Next.js 14 (App Router)  | SSG/ISR for performance, React for portfolio relevance |
| Styling        | Tailwind CSS             | Utility-first, easy custom blue theming                |
| Gig Data       | Bandsintown REST API     | Free, dynamic, auto-updating gig listings              |
| Music Embeds   | Spotify / Apple Music    | Native player embeds for singles & album               |
| Contact Form   | Formspree (free tier)    | No backend needed, submissions to email                |
| Merch          | External link (Bandcamp) | No e-commerce to build or maintain                     |
| Hosting        | Vercel (free tier)       | Zero-config Next.js deploys, custom domain support     |
| Images         | Next.js Image + local    | Optimised responsive images out of the box             |
| Icons          | React Icons / Lucide     | Social icons, UI elements                              |
| Fonts          | Google Fonts             | Custom display + body font pairing                     |
| Analytics      | Vercel Analytics (free)  | Basic traffic insights                                 |

---

## Blue Theme Palette

Custom Tailwind `brand` colour scale — shades of blue as the band's signature:

```
brand-50:  #EBF5FF  (lightest — subtle backgrounds)
brand-100: #D6EBFF  (card backgrounds, hover states)
brand-200: #ADD6FF  (borders, dividers)
brand-300: #7ABFFF  (secondary text accents)
brand-400: #47A3FF  (links, interactive elements)
brand-500: #1A8CFF  (primary brand blue — CTAs, buttons)
brand-600: #0070E0  (hover states on primary)
brand-700: #005BB5  (headings, emphasis)
brand-800: #003D7A  (dark sections, nav background)
brand-900: #002652  (footer, deep dark backgrounds)
brand-950: #001533  (near-black for contrast)
```

Supporting neutrals: warm grays to avoid a cold/corporate feel.
Accent: a warm gold/amber (`#F5A623`) for highlights, CTAs on dark backgrounds.

---

## Pages & Sections

### 1. Home (`/`) — The Hub
*Inspired by: Spacey Jane's scroll flow + McCartney's editorial polish + Harrison's warmth*
- **Hero:** Full-viewport band photo with textured blue overlay, band wordmark, and CTA ("Listen Now" / "Next Gig"). Subtle parallax or slow zoom animation on the photo.
- **"Latest" Section:** 1-2 editorial-style cards for recent band news (new single, gig recap, album announcement). Large image + headline + date. McCartney's card layout adapted with blue palette.
- **Next Gig Teaser:** Prominent card pulling the next upcoming gig from Bandsintown API. Date, venue, city, ticket link. Styled as an event card with a subtle gradient border.
- **Latest Release:** Album art displayed large (hero-level, like Spacey Jane), with Spotify embed below and streaming platform icon links. Make it feel like an event, not an afterthought.
- **Quick Links:** Grid cards linking to Shows, Music, Gallery, About. Each card has a subtle hover animation (lift + glow in brand blue).
- **Newsletter CTA:** Full-width banner section with band photo background, blue overlay, and simple email signup (Mailchimp or Formspree). Inspired by McCartney's mailing list banner.
- **Social Bar:** Icon links to all socials — repeated in footer but also visible here.

### 2. Shows (`/shows`)
*Inspired by: Spacey Jane's Live section + Bandsintown data*
- **Upcoming Shows:** Timeline-style list or cards fetched from Bandsintown API via ISR
  - Each card: large date display, venue name, city, ticket link button
  - `revalidate: 3600` — rebuilds hourly with fresh data
  - Subtle blue gradient left-border on each card for visual rhythm
- **Past Shows (optional):** Archive section below, greyed out or muted styling
- **No Shows State:** Atmospheric empty state — "No upcoming gigs — follow us to stay in the loop" with social links and newsletter signup. Don't leave it barren.

### 3. Music (`/music`)
*Inspired by: Spacey Jane's discography cards + George Harrison's release grid*
- **Discography Grid:** Cards for each release (singles, upcoming album)
  - Large album artwork (hover: subtle scale + shadow), title, release date
  - Streaming links as platform icons below each card
- **Featured Release:** The latest/most important release gets a full-width hero treatment at the top (artwork + Spotify embed + description)
- **Video Section:** If you have music videos or live clips — thumbnail grid with play icon overlay (George Harrison pattern). YouTube embeds in a lightbox or inline.
- **Streaming Links:** Persistent row of platform icons (Spotify, Apple Music, YouTube Music, Bandcamp)

### 4. Gallery (`/gallery`)
- **Photo Grid:** Masonry or uniform grid layout with hover overlays
  - Gig photos, band shots, behind-the-scenes
  - Photos from the band photoshoot, Buffalo Club gig, etc.
- **Lightbox:** Click-to-expand with navigation (prev/next)
- **Categories (optional):** Filter tabs — Live / Promo / BTS

### 5. Merch (`/merch`)
*Inspired by: Spacey Jane's product mockups + McCartney's clean product grid*
- **Product Grid:** Cards showing merch items with product mockup images (not just flat graphics). No prices on the grid — keep it clean like McCartney's store.
- **External Link:** Each card links out to Bandcamp/Big Cartel store
- **Or (if no merch yet):** Simple atmospheric hero with "Coming Soon" message and newsletter signup to be notified

### 6. About / Press Kit (`/about`)
*Inspired by: McCartney's editorial depth + Harrison's archive concept*
- **Band Bio:** Who you are, your sound, your story — written in third person for press use. Photo alongside.
- **Member Profiles:** Photo + name + role for each member. Horizontal card layout.
- **Press Kit Downloads:**
  - High-res band photos (zip download)
  - One-sheet PDF (bio, genre, key stats, contact)
  - Logo files
  - Rider / tech spec (optional)
- **Press Quotes (if any):** Pull quotes from reviews or features, styled with decorative quotation marks

### 7. Contact (`/contact`)
- **Contact Form:** Name, email, subject (dropdown: Booking / Press / General), message
  - Powered by Formspree — submissions go to band email
  - Styled with blue focus states and subtle validation animations
- **Direct Email:** Displayed as a mailto link as alternative
- **Social Links:** Full social icon row
- **Booking Info:** "For booking enquiries, contact [name/email]"

---

## Shared Components

### Navigation
*Inspired by: Spacey Jane's minimal nav + George Harrison's social-icons-in-nav*
- Sticky top navbar, semi-transparent `brand-900/80` with blur backdrop (`backdrop-blur-lg`)
- Band wordmark/logo on the left (custom, not just text)
- Page links on the right (hamburger menu on mobile)
- Social icons inline in the nav on desktop (Harrison pattern) — Spotify, Instagram, YouTube
- Active page indicator: blue gradient underline or dot
- Mobile: full-screen overlay menu with stacked links and social icons at bottom

### Footer
*Inspired by: McCartney's warm, branded footer + Harrison's social row*
- Deep `brand-950` background with subtle texture or grain overlay
- Custom band wordmark/logo (white or light blue)
- Social media icon row (Instagram, Facebook, Spotify, Apple Music, YouTube, TikTok, Bandcamp)
- Mailing list signup — simple inline email field
- Quick nav links (horizontal on desktop, stacked on mobile)
- Copyright + "Perth, Western Australia"
- Optional: hand-drawn divider or decorative accent (McCartney influence)

### Social Links
- Consistent icon set used in nav, footer, contact page, and empty states
- Platforms: Instagram, Facebook, Spotify, Apple Music, YouTube, TikTok, Bandcamp
- Hover animation: subtle scale + colour shift to brand-400

---

## Data Flow

```
Bandsintown API ──► Next.js ISR (revalidate: 3600) ──► /shows page
                                                     ──► / (next gig teaser)

Spotify Embeds  ──► Client-side iframes              ──► /music page
                                                     ──► / (latest release)

Formspree       ◄── POST from contact form            ◄── /contact page

Merch Store     ◄── External links                    ◄── /merch page
```

---

## Project Structure (File Tree)

```
the-clean-tones-site/
├── public/
│   ├── images/
│   │   ├── band/              # Band photos (hero, promo, members)
│   │   ├── gallery/           # Gig & BTS photos
│   │   ├── merch/             # Merch product images
│   │   ├── releases/          # Album/single artwork
│   │   └── press/             # Downloadable press photos
│   ├── downloads/
│   │   ├── press-kit.zip      # High-res photos bundle
│   │   └── one-sheet.pdf      # Band one-sheet PDF
│   ├── favicon.ico
│   └── og-image.jpg           # Social sharing preview image
│
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Root layout (nav + footer + fonts)
│   │   ├── page.tsx           # Home page
│   │   ├── shows/
│   │   │   └── page.tsx       # Shows page (Bandsintown API)
│   │   ├── music/
│   │   │   └── page.tsx       # Music / discography page
│   │   ├── gallery/
│   │   │   └── page.tsx       # Photo gallery page
│   │   ├── merch/
│   │   │   └── page.tsx       # Merch page (external links)
│   │   ├── about/
│   │   │   └── page.tsx       # About + press kit page
│   │   └── contact/
│   │       └── page.tsx       # Contact form page
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx     # Sticky nav with mobile menu
│   │   │   ├── Footer.tsx     # Site footer with socials
│   │   │   └── MobileMenu.tsx # Slide-out mobile nav
│   │   ├── home/
│   │   │   ├── Hero.tsx       # Full-viewport hero section
│   │   │   ├── NextGig.tsx    # Next upcoming gig teaser
│   │   │   ├── LatestRelease.tsx  # Spotify embed block
│   │   │   └── QuickLinks.tsx # Grid cards to other pages
│   │   ├── shows/
│   │   │   ├── ShowCard.tsx   # Individual gig card
│   │   │   └── ShowList.tsx   # List of all upcoming shows
│   │   ├── music/
│   │   │   ├── ReleaseCard.tsx    # Album/single card
│   │   │   └── SpotifyEmbed.tsx   # Reusable Spotify player
│   │   ├── gallery/
│   │   │   ├── PhotoGrid.tsx  # Masonry/grid layout
│   │   │   └── Lightbox.tsx   # Fullscreen image viewer
│   │   ├── about/
│   │   │   ├── BandBio.tsx    # Bio section
│   │   │   ├── MemberCard.tsx # Individual member profile
│   │   │   └── PressKit.tsx   # Download links section
│   │   ├── contact/
│   │   │   └── ContactForm.tsx # Formspree-powered form
│   │   └── shared/
│   │       ├── SocialIcons.tsx    # Reusable social link row
│   │       ├── SectionHeading.tsx # Consistent heading style
│   │       ├── Button.tsx         # Styled button component
│   │       └── PageTransition.tsx # Page enter animations
│   │
│   ├── lib/
│   │   ├── bandsintown.ts     # API fetch functions for gigs
│   │   ├── constants.ts       # Social URLs, band info, API keys
│   │   └── types.ts           # TypeScript interfaces (Gig, Release, etc.)
│   │
│   └── styles/
│       └── globals.css        # Tailwind directives + custom CSS vars
│
├── tailwind.config.ts         # Custom brand blue palette + fonts
├── next.config.js             # Image domains, env vars
├── package.json
├── tsconfig.json
├── .env.local                 # BANDSINTOWN_APP_ID, FORMSPREE_ID
└── README.md
```

---

## Sitemap (Visual)

```
                    ┌─────────────────────┐
                    │     THE CLEAN TONES  │
                    │      Home  (/)       │
                    └──────────┬──────────┘
                               │
        ┌──────────┬───────────┼───────────┬──────────┬──────────┐
        │          │           │           │          │          │
   ┌────▼───┐ ┌───▼────┐ ┌───▼────┐ ┌───▼────┐ ┌───▼───┐ ┌───▼─────┐
   │ Shows  │ │ Music  │ │Gallery │ │ Merch  │ │ About │ │Contact  │
   │/shows  │ │/music  │ │/gallery│ │/merch  │ │/about │ │/contact │
   └────────┘ └────────┘ └────────┘ └───┬────┘ └───┬───┘ └─────────┘
                                        │          │
                                   External    ┌───▼────┐
                                   Store       │Press   │
                                   (Bandcamp)  │Kit DL  │
                                               └────────┘
```

---

## Implementation Phases

### Phase 1 — Foundation (Day 1-2)
- [ ] Init Next.js project with TypeScript + Tailwind
- [ ] Configure blue theme palette in `tailwind.config.ts`
- [ ] Build Navbar + Footer + root layout
- [ ] Set up Google Fonts pairing
- [ ] Deploy blank shell to Vercel

### Phase 2 — Core Pages (Day 3-5)
- [ ] Home page: hero, next gig teaser, latest release embed
- [ ] Shows page: Bandsintown API integration with ISR
- [ ] Music page: discography cards + Spotify embeds
- [ ] About page: bio, member cards, press kit downloads

### Phase 3 — Supporting Pages (Day 6-7)
- [ ] Gallery: photo grid + lightbox
- [ ] Merch: product cards or redirect to external store
- [ ] Contact: Formspree integration + form validation

### Phase 4 — Polish (Day 8-10)
- [ ] Page transitions + scroll animations
- [ ] Mobile responsiveness pass
- [ ] SEO: meta tags, OG images, structured data
- [ ] Favicon + PWA manifest
- [ ] Performance audit (Lighthouse)
- [ ] Custom domain setup

---

## External Accounts Needed

1. **Bandsintown Artist Account** — [artists.bandsintown.com](https://artists.bandsintown.com)
2. **Formspree Account** — [formspree.io](https://formspree.io) (free tier: 50 submissions/month)
3. **Vercel Account** — [vercel.com](https://vercel.com) (free tier)
4. **Domain** — Purchase via Namecheap or Cloudflare (~$15/yr)
5. **Spotify for Artists** — For embed URLs (you likely have this already)

---

## Notes

- All gig data flows from Bandsintown → Next.js ISR, so updating gigs in one place updates the site automatically within ~1 hour.
- Merch is handled externally to avoid building/maintaining e-commerce. Just link out.
- The contact form requires no backend — Formspree handles it and forwards to your email.
- The blue palette is defined once in Tailwind config and used everywhere via `brand-*` utility classes.
- Press kit downloads are static files in `/public/downloads/` — easy to update by swapping files.
