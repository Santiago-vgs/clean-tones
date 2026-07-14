interface MemberBioData {
  influences: string[];
  favouriteFood: string;
  funFact: string;
  howJoined: string;
  films: string[];
  filmsNote?: string;
}

interface MemberCardProps {
  name: string;
  role: string;
  photo?: string;
  objectPosition?: string;
  bio?: MemberBioData;
  revealDelay?: number;
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="py-2 border-b border-brand-800/70 last:border-0">
      <p className="text-gold/80 text-[10px] uppercase tracking-widest mb-0.5">{label}</p>
      <p className="text-brand-100 text-sm leading-snug">{value}</p>
    </div>
  );
}

export default function MemberCard({ name, role, photo, objectPosition = "center", bio, revealDelay }: MemberCardProps) {
  return (
    <div
      data-reveal
      style={revealDelay ? { transitionDelay: `${revealDelay}ms` } : undefined}
      className="flex flex-col overflow-hidden rounded-none border-2 border-gold/60 bg-brand-950 shadow-xl shadow-black/40"
    >
      {/* Position ribbon */}
      <div className="flex items-center justify-between bg-gold px-4 py-2">
        <span className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-950">
          {role}
        </span>
        <span className="text-xs font-medium uppercase tracking-[0.15em] text-brand-950/60">
          Est. 2022
        </span>
      </div>

      {/* Photo with name banner (card front) */}
      <div className="relative aspect-[4/5] bg-gradient-to-br from-brand-800 to-brand-950">
        {photo && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={photo}
            alt={name}
            className="h-full w-full object-cover"
            style={{ objectPosition }}
          />
        )}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent px-4 pt-10 pb-3">
          <h3 className="font-display text-3xl font-black uppercase leading-none text-white">
            {name}
          </h3>
          <p className="text-gold text-[11px] uppercase tracking-widest mt-1">Clean Tones</p>
        </div>
      </div>

      {/* Stats (card back) */}
      {bio && (
        <div className="flex-1 px-4 py-3">
          <Stat label="Influences" value={bio.influences.join(", ")} />
          <Stat label="Favourite Food" value={bio.favouriteFood} />
          <Stat label="Fun Fact" value={bio.funFact} />
          <Stat label="How I Joined" value={bio.howJoined} />

          <div className="py-2">
            <p className="text-gold/80 text-[10px] uppercase tracking-widest mb-1.5">Letterboxd Top 4</p>
            <ol className="space-y-1">
              {bio.films.map((film, i) => (
                <li key={film} className="flex gap-2 text-brand-100 text-sm">
                  <span className="w-3 shrink-0 font-mono tabular-nums text-gold/70">{i + 1}</span>
                  {film}
                </li>
              ))}
            </ol>
            {bio.filmsNote && (
              <p className="mt-2 text-xs italic text-brand-500">{bio.filmsNote}</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
