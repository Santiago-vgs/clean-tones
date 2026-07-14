import { Gig } from "./types";

const APP_ID = process.env.BANDSINTOWN_APP_ID ?? "the_clean_tones_site";
const ARTIST = encodeURIComponent(process.env.BANDSINTOWN_ARTIST ?? "Clean Tones");
const BASE = "https://rest.bandsintown.com";

export async function getUpcomingGigs(): Promise<Gig[]> {
  try {
    const res = await fetch(
      `${BASE}/artists/${ARTIST}/events?app_id=${APP_ID}`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return [];
    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

export async function getNextGig(): Promise<Gig | null> {
  const gigs = await getUpcomingGigs();
  return gigs.length > 0 ? gigs[0] : null;
}
