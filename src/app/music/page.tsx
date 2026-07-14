"use client";

import { useState } from "react";
import { RELEASES } from "@/lib/constants";
import ReleaseCard from "@/components/music/ReleaseCard";
import VideoGrid from "@/components/music/VideoGrid";
import PageHeader from "@/components/shared/PageHeader";

export default function MusicPage() {
  const [activeRelease, setActiveRelease] = useState(RELEASES[0]);

  return (
    <div className="min-h-screen pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Page header */}
        <PageHeader eyebrow="Discography" title="Music" />

        {/* Featured player + release grid */}
        <section className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* Sticky Spotify embed */}
            <div className="lg:sticky lg:top-28">
              <p className="text-brand-500 text-xs tracking-widest uppercase mb-2">
                Now playing
              </p>
              <h2 className="font-display text-3xl font-bold text-brand-50 mb-6">
                {activeRelease.title}
              </h2>
              <div className="rounded-xl overflow-hidden shadow-2xl shadow-brand-950">
                <iframe
                  key={activeRelease.id}
                  src={activeRelease.spotifyEmbedSrc}
                  width="100%"
                  height="352"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  className="block"
                />
              </div>
            </div>

            {/* Release cards */}
            <div>
              <p className="text-brand-500 text-xs tracking-widest uppercase mb-6">
                All Releases
              </p>
              <div className="grid grid-cols-2 gap-4">
                {RELEASES.map((release) => (
                  <ReleaseCard
                    key={release.id}
                    release={release}
                    onSelect={setActiveRelease}
                    isActive={activeRelease.id === release.id}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Videos section */}
        <section>
          <div className="border-t border-brand-800 pt-16">
            <p className="text-brand-400 text-xs tracking-[0.3em] uppercase mb-3">Watch</p>
            <h2 className="font-display text-4xl font-bold text-brand-50 uppercase mb-12">
              Videos
            </h2>
            <VideoGrid />
          </div>
        </section>

      </div>
    </div>
  );
}
