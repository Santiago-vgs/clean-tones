"use client";

import { LATEST_RELEASE } from "@/lib/constants";
import { FaSpotify, FaYoutube, FaBandcamp } from "react-icons/fa";
import { SiApplemusic } from "react-icons/si";

const streamingLinks = [
  { label: "Spotify", href: LATEST_RELEASE.spotifyUrl, Icon: FaSpotify },
  { label: "Apple Music", href: LATEST_RELEASE.appleMusicUrl, Icon: SiApplemusic },
  { label: "YouTube", href: LATEST_RELEASE.youtubeUrl, Icon: FaYoutube },
  { label: "Bandcamp", href: LATEST_RELEASE.bandcampUrl, Icon: FaBandcamp },
].filter((l) => l.href !== "#");

export default function LatestRelease() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <p className="text-brand-400 text-xs tracking-[0.3em] uppercase mb-3 text-center">
          Latest Release
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-50 text-center mb-12">
          {LATEST_RELEASE.title}
        </h2>

        <div className="max-w-2xl mx-auto">
          {/* Spotify embed */}
          <div className="rounded-none overflow-hidden mb-8 shadow-2xl shadow-brand-950">
            <iframe
              src={LATEST_RELEASE.spotifyEmbedSrc}
              width="100%"
              height="352"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="block"
            />
          </div>

          {/* Streaming links */}
          {streamingLinks.length > 0 && (
            <div className="flex flex-wrap justify-center gap-4">
              {streamingLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 border border-brand-700 hover:border-gold hover:text-gold text-brand-300 px-5 py-2 rounded-none text-sm transition-colors duration-200"
                >
                  <Icon size={16} />
                  {label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
