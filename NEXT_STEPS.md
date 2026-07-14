# Clean Tones — Next Steps

## Pages Done
- [x] Home (`/`) — hero, next gig teaser, Spotify embed, quick links
- [x] Shows (`/shows`) — Bandsintown API, ISR hourly revalidation
- [x] Music (`/music`) — release cards (Beggin Please + Summertime), Spotify embeds, video grid
- [x] About (`/about`) — bio (placeholder), member grid, press kit section
- [x] Merch (`/merch`) — coming soon page

## Pages Still To Build
- [ ] Gallery (`/gallery`) — photo grid + lightbox
- [ ] Contact (`/contact`) — Formspree contact form

---

## Content To Fill In

### About Page
- Real band bio text (replace placeholder in `src/components/about/BandBio.tsx`)
- Member photos — drop in `public/images/members/` and add paths to `MEMBERS` array in `src/app/about/page.tsx`
- Correct roles/instruments for each member (Jay, Jayden, Santy, Joseph)
- Press kit files — drop in `public/downloads/`: `band-photos.zip`, `one-sheet.pdf`, `logos.zip`

### Music Page
- Release dates for Beggin Please and Summertime — update `year` field in `src/lib/constants.ts`
- Apple Music, YouTube, Bandcamp links for each single — update in `src/lib/constants.ts`
- More videos — add YouTube URLs to `VIDEOS` array in `src/lib/constants.ts`

### Social Links
- Apple Music, TikTok, Bandcamp URLs — update `SOCIAL_LINKS` in `src/lib/constants.ts`

### Shows
- Add shows on Bandsintown for Artists (artists.bandsintown.com) — site auto-updates within 1 hour

---

## Phase 4 Polish (After All Pages Done)
- [ ] SEO — meta tags, OG images per page
- [ ] Mobile responsiveness pass
- [ ] Page transitions / scroll animations
- [ ] Favicon (replace default Next.js one in `public/`)
- [ ] Performance audit (Lighthouse)
- [ ] Custom domain setup on Vercel

## Deployment
- Push to GitHub
- Connect repo to Vercel (vercel.com) — zero config for Next.js
- Add env var `BANDSINTOWN_APP_ID=the_clean_tones_site` in Vercel dashboard
- Add custom domain

---

## Key Files Reference
| What | Where |
|---|---|
| Social links / release info / videos | `src/lib/constants.ts` |
| Brand colour palette | `src/app/globals.css` |
| Navbar | `src/components/layout/Navbar.tsx` |
| Footer | `src/components/layout/Footer.tsx` |
| Hero section | `src/components/home/Hero.tsx` |
| Bandsintown fetch logic | `src/lib/bandsintown.ts` |
| Member list | `src/app/about/page.tsx` |
| Band bio text | `src/components/about/BandBio.tsx` |
