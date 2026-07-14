import { Gig } from "@/lib/types";
import ShowCard from "./ShowCard";
import Link from "next/link";
import { SOCIAL_LINKS } from "@/lib/constants";

interface ShowListProps {
  upcoming: Gig[];
  past: Gig[];
}

export default function ShowList({ upcoming, past }: ShowListProps) {
  return (
    <div>
      {/* Upcoming */}
      <section className="mb-20">
        {upcoming.length === 0 ? (
          <div className="text-center py-24 border border-brand-800 rounded-none bg-brand-900/20">
            <p className="text-brand-300 text-xl font-semibold mb-2">No upcoming shows right now.</p>
            <p className="text-brand-500 text-sm mb-8">Follow us to be first to know when we announce.</p>
            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Follow on Instagram
            </a>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {upcoming.map((gig) => (
              <ShowCard key={gig.id} gig={gig} />
            ))}
          </div>
        )}
      </section>

      {/* Past shows */}
      {past.length > 0 && (
        <section>
          <h2 className="font-display text-2xl font-bold text-brand-600 uppercase tracking-wider mb-6">
            Past Shows
          </h2>
          <div className="flex flex-col gap-3">
            {past.map((gig) => (
              <ShowCard key={gig.id} gig={gig} past />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
