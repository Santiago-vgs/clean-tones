import type { Metadata } from "next";
import { getUpcomingGigs } from "@/lib/bandsintown";
import ShowList from "@/components/shows/ShowList";
import PageHeader from "@/components/shared/PageHeader";
import { Gig } from "@/lib/types";

export const metadata: Metadata = {
  title: "Shows",
  description: "Upcoming gigs and past shows from The Clean Tones around Perth and Fremantle.",
};

export const revalidate = 3600;

export default async function ShowsPage() {
  const allGigs = await getUpcomingGigs();

  const now = new Date();
  const upcoming = allGigs.filter((g: Gig) => new Date(g.datetime) >= now);
  const past = allGigs.filter((g: Gig) => new Date(g.datetime) < now);

  return (
    <div className="min-h-screen pt-24 pb-24">
      <div className="max-w-4xl mx-auto px-6">

        {/* Header */}
        <PageHeader eyebrow="Live" title="Shows">
          {upcoming.length > 0
            ? `${upcoming.length} upcoming show${upcoming.length !== 1 ? "s" : ""}`
            : "Check back soon for new dates"}
        </PageHeader>

        <ShowList upcoming={upcoming} past={past} />

      </div>
    </div>
  );
}
