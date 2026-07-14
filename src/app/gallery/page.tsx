"use client";

import { useState, useEffect } from "react";
import PageHeader from "@/components/shared/PageHeader";

const PHOTOS = [
  { src: "/images/band/groupshot.jpeg", alt: "The Clean Tones" },
  { src: "/images/band/hero.jpg", alt: "The Clean Tones" },
  { src: "/images/band/bandphoto.jpg", alt: "The Clean Tones" },
  { src: "/images/releases/beggin_please.png", alt: "Beggin Please single cover" },
  { src: "/images/releases/summertime.jpg", alt: "Summertime single cover" },
  { src: "/images/members/jayden.jpg", alt: "Jayden" },
  { src: "/images/members/santy.jpg", alt: "Santy" },
  { src: "/images/members/jay.jpg", alt: "Jay" },
  { src: "/images/members/joseph.jpg", alt: "Joseph" },
  { src: "/images/gallery/jay-vic.jpeg", alt: "Jay with Victor Wooten backstage" },
];

export default function GalleryPage() {
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    if (selected === null) return;
    document.body.style.overflow = "hidden";
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") setSelected(Math.min(selected + 1, PHOTOS.length - 1));
      if (e.key === "ArrowLeft") setSelected(Math.max(selected - 1, 0));
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", handler);
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <>
      <div className="min-h-screen pt-24 pb-24">
        <div className="max-w-5xl mx-auto px-6">

          <PageHeader eyebrow="Photos" title="Gallery" />

          <div data-reveal className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {PHOTOS.map((photo, i) => (
              <button
                key={i}
                onClick={() => setSelected(i)}
                className="aspect-square overflow-hidden block focus:outline-none focus:ring-2 focus:ring-gold"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </button>
            ))}
          </div>

        </div>
      </div>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={() => setSelected(null)}
        >
          {/* Close */}
          <button
            className="absolute top-6 right-6 text-white/60 hover:text-white text-3xl leading-none"
            onClick={() => setSelected(null)}
            aria-label="Close"
          >
            ×
          </button>

          {/* Prev */}
          {selected > 0 && (
            <button
              className="absolute left-4 md:left-8 text-white/60 hover:text-white text-4xl leading-none px-2 py-4"
              onClick={(e) => { e.stopPropagation(); setSelected(selected - 1); }}
              aria-label="Previous"
            >
              ‹
            </button>
          )}

          {/* Image */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={PHOTOS[selected].src}
            alt={PHOTOS[selected].alt}
            className="max-h-[90vh] max-w-[90vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Next */}
          {selected < PHOTOS.length - 1 && (
            <button
              className="absolute right-4 md:right-8 text-white/60 hover:text-white text-4xl leading-none px-2 py-4"
              onClick={(e) => { e.stopPropagation(); setSelected(selected + 1); }}
              aria-label="Next"
            >
              ›
            </button>
          )}

          {/* Counter */}
          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40 text-xs tracking-widest">
            {selected + 1} / {PHOTOS.length}
          </p>
        </div>
      )}
    </>
  );
}
