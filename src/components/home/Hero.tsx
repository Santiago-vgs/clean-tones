"use client";

import { getImageProps } from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { BAND_NAME } from "@/lib/constants";

export default function Hero() {
  const [peeking, setPeeking] = useState(false);
  const holdTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const didPeek = useRef(false);

  // Press-and-hold to reveal the photo without the overlay.
  const startHold = () => {
    holdTimer.current = setTimeout(() => {
      didPeek.current = true;
      setPeeking(true);
    }, 180);
  };
  const endHold = () => {
    if (holdTimer.current) {
      clearTimeout(holdTimer.current);
      holdTimer.current = null;
    }
    setPeeking(false);
  };
  // Swallow the click that follows a peek-hold so links don't navigate.
  const handleClickCapture = (e: React.MouseEvent) => {
    if (didPeek.current) {
      e.preventDefault();
      e.stopPropagation();
      didPeek.current = false;
    }
  };

  // Art direction: wide band photo on desktop, portrait band photo on mobile
  // (the wide shot crops the end members out on a portrait phone).
  const common = { alt: `${BAND_NAME} band photo`, fill: true, sizes: "100vw", priority: true };
  const {
    props: { srcSet: desktopSrcSet },
  } = getImageProps({ ...common, src: "/images/band/hero.jpg" });
  const {
    props: { srcSet: mobileSrcSet, ...imgProps },
  } = getImageProps({ ...common, src: "/images/band/bandphoto.jpg" });

  const fade = `transition-opacity duration-300 ${peeking ? "opacity-0" : "opacity-100"}`;

  return (
    <section
      className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-neutral-900 select-none [-webkit-touch-callout:none]"
      onPointerDown={startHold}
      onPointerUp={endHold}
      onPointerLeave={endHold}
      onPointerCancel={endHold}
      onClickCapture={handleClickCapture}
      onContextMenu={(e) => e.preventDefault()}
    >
      {/* Background photo (art-directed) */}
      <picture>
        <source media="(min-width: 768px)" srcSet={desktopSrcSet} />
        <source media="(max-width: 767px)" srcSet={mobileSrcSet} />
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <img {...imgProps} draggable={false} className="object-cover object-center" />
      </picture>

      {/* Dark overlay + all text fade out while peeking */}
      <div className={`absolute inset-0 bg-gradient-to-b from-black/60 via-black/25 to-black/85 ${fade}`} />
      <div className={`absolute inset-0 bg-black/10 ${fade}`} />

      {/* Content */}
      <div className={`relative z-10 text-center px-6 max-w-4xl mx-auto ${fade} ${peeking ? "pointer-events-none" : ""}`}>
        <p className="reveal-load text-white/85 text-[0.65rem] tracking-[0.2em] sm:text-sm sm:tracking-[0.3em] uppercase mb-3 sm:mb-4 font-semibold [text-shadow:0_1px_12px_rgba(0,0,0,0.8)]" style={{ animationDelay: "0.1s" }}>
          Perth, Western Australia
        </p>
        <h1 className="reveal-load font-display text-7xl md:text-9xl text-white/50 uppercase mb-6 leading-[0.9] [text-shadow:0_2px_12px_rgba(0,0,0,0.4)]" style={{ animationDelay: "0.2s" }}>
          Clean Tones
        </h1>
        <p className="reveal-load text-white/85 text-lg md:text-xl mb-10 tracking-wide [text-shadow:0_1px_16px_rgba(0,0,0,0.8)]" style={{ animationDelay: "0.42s" }}>
          Jay, Jayden, Santy and Joseph
        </p>
        <div className="reveal-load flex flex-col sm:flex-row gap-8 justify-center items-center" style={{ animationDelay: "0.56s" }}>
          <Link href="/music" className="btn">
            Listen Now
          </Link>
          <Link
            href="/shows"
            className="btn !bg-none !border-white !text-white hover:!bg-white hover:!text-brand-50"
          >
            See Shows
          </Link>
        </div>
      </div>

      {/* Hold-to-peek hint */}
      <div className={`absolute top-20 left-1/2 -translate-x-1/2 text-white/55 text-[10px] tracking-[0.25em] uppercase pointer-events-none ${fade}`}>
        Hold to view photo
      </div>

      {/* Scroll cue */}
      <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 ${fade}`}>
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/60 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
