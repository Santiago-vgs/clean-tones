"use client";

import { useState } from "react";
import { RELEASES } from "@/lib/constants";
import { FaSpotify, FaYoutube, FaBandcamp } from "react-icons/fa";
import { SiApplemusic } from "react-icons/si";

type Release = (typeof RELEASES)[number];

interface ReleaseCardProps {
  release: Release;
  onSelect: (release: Release) => void;
  isActive: boolean;
}

export default function ReleaseCard({ release, onSelect, isActive }: ReleaseCardProps) {
  return (
    <button
      onClick={() => onSelect(release)}
      className={`group text-left w-full rounded-none border transition-all duration-300 overflow-hidden ${
        isActive
          ? "border-gold bg-brand-800/60 shadow-lg shadow-brand-950"
          : "border-brand-800 bg-brand-900/40 hover:border-brand-600 hover:bg-brand-800/40"
      }`}
    >
      {/* Artwork placeholder */}
      <div className="aspect-square bg-gradient-to-br from-brand-800 to-brand-950 flex items-center justify-center relative overflow-hidden">
        {release.coverImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={release.coverImage}
            alt={release.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="flex flex-col items-center gap-2 text-brand-700">
            <FaSpotify size={40} />
            <span className="text-xs tracking-widest uppercase">No artwork yet</span>
          </div>
        )}
        {isActive && (
          <div className="absolute inset-0 border-2 border-gold/40 rounded-none pointer-events-none" />
        )}
      </div>

      {/* Info */}
      <div className="p-4">
        <p className="text-brand-500 text-xs uppercase tracking-widest mb-1">
          {release.type} · {release.year}
        </p>
        <h3
          className={`font-display font-bold text-lg leading-tight transition-colors ${
            isActive ? "text-gold" : "text-brand-50 group-hover:text-gold"
          }`}
        >
          {release.title}
        </h3>

        {/* Streaming icons */}
        <div className="flex gap-3 mt-3">
          {release.spotifyUrl !== "#" && (
            <a
              href={release.spotifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-brand-500 hover:text-[#1DB954] transition-colors"
              aria-label="Spotify"
            >
              <FaSpotify size={16} />
            </a>
          )}
          {release.appleMusicUrl !== "#" && (
            <a
              href={release.appleMusicUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-brand-500 hover:text-[#FC3C44] transition-colors"
              aria-label="Apple Music"
            >
              <SiApplemusic size={16} />
            </a>
          )}
          {release.youtubeUrl !== "#" && (
            <a
              href={release.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-brand-500 hover:text-[#FF0000] transition-colors"
              aria-label="YouTube"
            >
              <FaYoutube size={16} />
            </a>
          )}
          {release.bandcampUrl !== "#" && (
            <a
              href={release.bandcampUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-brand-500 hover:text-[#1DA0C3] transition-colors"
              aria-label="Bandcamp"
            >
              <FaBandcamp size={16} />
            </a>
          )}
        </div>
      </div>
    </button>
  );
}
