import { Gig } from "@/lib/types";

interface ShowCardProps {
  gig: Gig;
  past?: boolean;
}

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  return {
    day: date.toLocaleDateString("en-AU", { weekday: "long" }),
    date: date.getDate(),
    month: date.toLocaleDateString("en-AU", { month: "short" }).toUpperCase(),
    year: date.getFullYear(),
    time: date.toLocaleTimeString("en-AU", { hour: "2-digit", minute: "2-digit" }),
  };
}

export default function ShowCard({ gig, past = false }: ShowCardProps) {
  const { day, date, month, year, time } = formatDate(gig.datetime);
  const ticketUrl = gig.offers?.find((o) => o.type === "Tickets")?.url ?? gig.offers?.[0]?.url;
  const isSoldOut = gig.offers?.[0]?.status === "soldout";

  return (
    <div
      className={`group flex flex-col sm:flex-row items-start sm:items-center gap-6 p-6 rounded-none border transition-all duration-300 ${
        past
          ? "border-brand-900 bg-brand-900/20 opacity-60"
          : "border-brand-800 bg-brand-900/40 hover:border-brand-600 hover:bg-brand-800/30"
      }`}
    >
      {/* Date block */}
      <div className={`border-l-2 pl-4 min-w-[80px] ${past ? "border-brand-700" : "border-gold"}`}>
        <p className={`text-xs uppercase tracking-wider ${past ? "text-brand-600" : "text-brand-400"}`}>
          {day.slice(0, 3)}
        </p>
        <p className={`font-display text-4xl font-black leading-none ${past ? "text-brand-500" : "text-brand-50"}`}>
          {date}
        </p>
        <p className={`text-sm uppercase tracking-wider ${past ? "text-brand-600" : "text-gold"}`}>
          {month} {year}
        </p>
      </div>

      {/* Venue info */}
      <div className="flex-1">
        <h3 className={`font-semibold text-lg ${past ? "text-brand-400" : "text-brand-50"}`}>
          {gig.venue.name}
        </h3>
        <p className={`text-sm mt-0.5 ${past ? "text-brand-600" : "text-brand-400"}`}>
          {gig.venue.city}
          {gig.venue.region ? `, ${gig.venue.region}` : ""}
          {" · "}{time}
        </p>
        {gig.description && (
          <p className="text-brand-500 text-xs mt-1 line-clamp-1">{gig.description}</p>
        )}
      </div>

      {/* Ticket button */}
      {!past && (
        <div className="sm:ml-auto">
          {ticketUrl ? (
            <a
              href={ticketUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={
                isSoldOut
                  ? "inline-block text-sm tracking-[0.2em] uppercase font-medium text-brand-600 cursor-not-allowed line-through"
                  : "btn"
              }
            >
              {isSoldOut ? "Sold Out" : "Tickets"}
            </a>
          ) : (
            <span className="inline-block text-sm tracking-[0.2em] uppercase font-medium text-brand-400">
              Free Entry
            </span>
          )}
        </div>
      )}
    </div>
  );
}
