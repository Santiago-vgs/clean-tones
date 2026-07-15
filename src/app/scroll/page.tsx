import { getShorts } from "@/lib/youtube";
import { SHORTS } from "@/lib/constants";
import ReelsFeed from "@/components/scroll/ReelsFeed";

// Refetch the Shorts list hourly so new uploads appear on their own.
export const revalidate = 3600;

export default async function ScrollPage() {
  const fetched = await getShorts();
  const shorts = fetched && fetched.length > 0 ? fetched : SHORTS;
  return <ReelsFeed shorts={shorts} />;
}
