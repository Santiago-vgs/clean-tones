import Link from "next/link";
import { Gig } from "@/lib/types";
import { safeHttpUrl } from "@/lib/url";

interface NextGigProps {
  gig: Gig | null;
}

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  return {
    day: date.toLocaleDateString("en-AU", { weekday: "short" }),
    date: date.getDate(),
    month: date.toLocaleDateString("en-AU", { month: "short" }),
    year: date.getFullYear(),
    time: date.toLocaleTimeString("en-AU", { hour: "2-digit", minute: "2-digit" }),
  };
}

export default function NextGig({ gig }: NextGigProps) {
  if (!gig) {
    return (
      <section data-reveal className="bg-brand-900/40 border-y border-brand-800 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-brand-400 text-sm tracking-widest uppercase mb-2">Next Show</p>
          <p className="text-brand-300 text-lg">No upcoming shows. Follow us to stay in the loop.</p>
          <Link
            href="/shows"
            className="inline-block mt-4 text-gold hover:text-gold-dark text-sm tracking-widest uppercase transition-colors"
          >
            View all shows →
          </Link>
        </div>
      </section>
    );
  }

  const { day, date, month, year, time } = formatDate(gig.datetime);
  const ticketUrl = safeHttpUrl(gig.offers?.[0]?.url);

  return (
    <section data-reveal className="bg-brand-900/40 border-y border-brand-800 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-brand-400 text-xs tracking-[0.3em] uppercase mb-8 text-center">
          Next Show
        </p>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-3xl mx-auto">
          {/* Date block */}
          <div className="flex items-center gap-6">
            <div className="border-l-2 border-gold pl-4">
              <p className="text-brand-400 text-xs uppercase tracking-wider">{day}</p>
              <p className="font-display text-5xl font-black text-brand-50 leading-none">{date}</p>
              <p className="text-gold text-sm uppercase tracking-wider">{month} {year}</p>
            </div>
            <div>
              <p className="text-brand-50 font-semibold text-xl">{gig.venue.name}</p>
              <p className="text-brand-400 text-sm mt-1">
                {gig.venue.city}, {gig.venue.region || gig.venue.country}
              </p>
              {time && <p className="text-brand-500 text-xs mt-1">{time}</p>}
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4">
            {ticketUrl && (
              <a
                href={ticketUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                Get Tickets
              </a>
            )}
            <Link href="/shows" className="btn">
              All Shows
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
