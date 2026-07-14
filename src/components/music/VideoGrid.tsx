"use client";

import { useState } from "react";
import { VIDEOS } from "@/lib/constants";
import { FaPlay, FaTimes, FaYoutube } from "react-icons/fa";
import Image from "next/image";

export default function VideoGrid() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <div>
      {/* Thumbnail grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {VIDEOS.map((video) => (
          <button
            key={video.id}
            onClick={() => setActiveId(video.id)}
            className="group relative aspect-video rounded-xl overflow-hidden border border-brand-800 hover:border-brand-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-950"
          >
            <Image
              src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
              alt={video.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-brand-950/50 group-hover:bg-brand-950/30 transition-colors duration-300" />

            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-gold/90 group-hover:bg-gold rounded-full w-14 h-14 flex items-center justify-center transition-all duration-200 group-hover:scale-110 shadow-lg">
                <FaPlay size={20} className="text-brand-950 ml-1" />
              </div>
            </div>

            {/* Title */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-brand-950/90 to-transparent">
              <p className="text-brand-100 text-sm font-medium leading-tight line-clamp-2 text-left">
                {video.title}
              </p>
              {video.isShort && (
                <span className="text-xs text-gold tracking-wider uppercase mt-1 inline-block">
                  Short
                </span>
              )}
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox modal */}
      {activeId && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-brand-950/95 backdrop-blur-sm p-4"
          onClick={() => setActiveId(null)}
        >
          <div
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveId(null)}
              className="absolute -top-12 right-0 text-brand-300 hover:text-gold transition-colors p-2"
              aria-label="Close"
            >
              <FaTimes size={24} />
            </button>
            <div className="aspect-video rounded-xl overflow-hidden shadow-2xl">
              <iframe
                src={`https://www.youtube.com/embed/${activeId}?autoplay=1`}
                width="100%"
                height="100%"
                allow="autoplay; fullscreen"
                allowFullScreen
                className="block w-full h-full"
              />
            </div>
          </div>
        </div>
      )}

      {/* Channel link */}
      <div className="text-center mt-8">
        <a
          href="https://www.youtube.com/channel/UCGC65VUrijUgR9gWAZAxvXQ"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-brand-400 hover:text-gold text-sm transition-colors"
        >
          <FaYoutube size={16} />
          More videos on YouTube →
        </a>
      </div>
    </div>
  );
}
