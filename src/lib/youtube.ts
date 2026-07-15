export interface Short {
  id: string;
  title: string;
}

const API_KEY = process.env.YOUTUBE_API_KEY;
const CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID; // UC…
const PLAYLIST_ID = process.env.YOUTUBE_SHORTS_PLAYLIST_ID; // PL… (optional, preferred)

const API = "https://www.googleapis.com/youtube/v3";

// Drop hashtags and tidy whitespace from a video title for a clean caption.
function cleanTitle(title: string): string {
  return title.replace(/#[\p{L}\p{N}_]+/gu, "").replace(/\s+/g, " ").trim() || "Clean Tones";
}

// ISO 8601 duration (e.g. "PT1M5S") -> seconds
function durationToSeconds(iso: string): number {
  const m = iso.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  if (!m) return Number.MAX_SAFE_INTEGER;
  return Number(m[1] ?? 0) * 3600 + Number(m[2] ?? 0) * 60 + Number(m[3] ?? 0);
}

/**
 * Fetches Clean Tones Shorts from YouTube.
 * - If YOUTUBE_SHORTS_PLAYLIST_ID is set, uses that playlist as-is.
 * - Otherwise uses the channel's uploads and keeps clips <= 80s (Shorts length).
 * Returns null if not configured or on error, so callers can fall back.
 */
export async function getShorts(): Promise<Short[] | null> {
  if (!API_KEY) return null;

  const playlistId = PLAYLIST_ID ?? (CHANNEL_ID ? `UU${CHANNEL_ID.slice(2)}` : null);
  if (!playlistId) return null;

  try {
    const res = await fetch(
      `${API}/playlistItems?part=contentDetails,snippet&maxResults=50&playlistId=${playlistId}&key=${API_KEY}`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return null;
    const data = await res.json();

    const items: Short[] = (data.items ?? [])
      .map((it: { contentDetails?: { videoId?: string }; snippet?: { title?: string } }) => ({
        id: it.contentDetails?.videoId ?? "",
        title: cleanTitle(it.snippet?.title ?? "Clean Tones"),
      }))
      .filter((s: Short) => s.id);

    if (items.length === 0) return [];

    // A curated playlist is trusted to already be Shorts.
    if (PLAYLIST_ID) return items;

    // Uploads playlist: filter to Shorts-length clips (<= 80s).
    const durRes = await fetch(
      `${API}/videos?part=contentDetails&id=${items.map((s) => s.id).join(",")}&key=${API_KEY}`,
      { next: { revalidate: 3600 } }
    );
    if (!durRes.ok) return items;
    const durData = await durRes.json();
    const seconds = new Map<string, number>();
    for (const v of durData.items ?? []) {
      seconds.set(v.id, durationToSeconds(v.contentDetails?.duration ?? ""));
    }
    return items.filter((s) => (seconds.get(s.id) ?? Number.MAX_SAFE_INTEGER) <= 80);
  } catch {
    return null;
  }
}
