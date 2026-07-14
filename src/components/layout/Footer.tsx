import Link from "next/link";
import { BAND_NAME, BAND_LOCATION, NAV_LINKS } from "@/lib/constants";
import SocialIcons from "@/components/shared/SocialIcons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-950 border-t border-brand-900">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Wordmark + tagline */}
          <div className="space-y-4">
            <Link
              href="/"
              className="block font-display text-2xl font-bold tracking-widest text-brand-50 hover:text-gold transition-colors duration-200 uppercase"
            >
              {BAND_NAME}
            </Link>
            <p className="text-brand-400 text-sm leading-relaxed">
              Alternative rock from {BAND_LOCATION}.
            </p>
          </div>

          {/* Nav links */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-brand-500 mb-4">
              Navigate
            </h3>
            <ul className="space-y-2">
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-brand-300 hover:text-gold text-sm transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow us */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-brand-500 mb-4">
              Follow us
            </h3>
            <p className="text-brand-400 text-sm mb-4">
              Gig dates, new releases, and band news. Catch us here.
            </p>
            <SocialIcons />
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-brand-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-brand-600 text-xs">
          <span>
            &copy; {year} {BAND_NAME}. All rights reserved.
          </span>
          <span>{BAND_LOCATION}</span>
        </div>
      </div>
    </footer>
  );
}
