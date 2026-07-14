/**
 * Returns the URL only if it is an absolute http(s) URL, otherwise undefined.
 * Guards against `javascript:` / `data:` scheme URLs reaching an href
 * (React does not sanitize href), for URLs sourced from external APIs.
 */
export function safeHttpUrl(url?: string | null): string | undefined {
  if (!url) return undefined;
  try {
    const parsed = new URL(url);
    return parsed.protocol === "https:" || parsed.protocol === "http:" ? url : undefined;
  } catch {
    return undefined;
  }
}
