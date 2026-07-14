import Link from "next/link";

const links = [
  {
    href: "/shows",
    label: "Shows",
    description: "Catch us live",
  },
  {
    href: "/music",
    label: "Music",
    description: "Stream our releases",
  },
  {
    href: "/gallery",
    label: "Gallery",
    description: "Photos from the road",
  },
  {
    href: "/about",
    label: "About",
    description: "Our story + press kit",
  },
];

export default function QuickLinks() {
  return (
    <section className="py-24 px-6 bg-brand-900/20">
      <div className="max-w-7xl mx-auto">
        <p className="text-brand-400 text-xs tracking-[0.3em] uppercase mb-12 text-center">
          Explore
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {links.map(({ href, label, description }) => (
            <Link
              key={href}
              href={href}
              className="group relative bg-brand-900/60 hover:bg-brand-800/60 border border-brand-800 hover:border-brand-600 rounded-none p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-900/50"
            >
              <h3 className="font-display text-xl font-bold text-brand-50 group-hover:text-gold transition-colors duration-200 uppercase tracking-wider mb-1">
                {label}
              </h3>
              <p className="text-brand-500 text-xs">{description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
