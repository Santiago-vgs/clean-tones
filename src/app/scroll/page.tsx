"use client";

import { useEffect, useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { SHORTS } from "@/lib/constants";

export default function ScrollPage() {
  const [active, setActive] = useState(0);
  const slideRefs = useRef<(HTMLElement | null)[]>([]);

  // Autoplay whichever short is in view; others fall back to a thumbnail.
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.6) {
            setActive(Number((entry.target as HTMLElement).dataset.index));
          }
        }
      },
      { threshold: [0.6] }
    );
    slideRefs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="h-dvh overflow-y-scroll snap-y snap-mandatory bg-black">
      {SHORTS.map((short, i) => (
        <section
          key={`${short.id}-${i}`}
          data-index={i}
          ref={(el) => {
            slideRefs.current[i] = el;
          }}
          className="relative h-dvh snap-start snap-always flex items-center justify-center"
        >
          {/* Vertical player column (phone-sized on desktop, full-width on mobile) */}
          <div className="relative h-full w-full max-w-[430px] bg-neutral-900 aspect-[9/16] max-h-dvh mx-auto">
            {i === active ? (
              <iframe
                src={`https://www.youtube.com/embed/${short.id}?autoplay=1&mute=1&playsinline=1&loop=1&playlist=${short.id}&controls=1&rel=0&modestbranding=1`}
                title={short.title}
                allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                className="absolute inset-0 h-full w-full"
              />
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={`https://i.ytimg.com/vi/${short.id}/hqdefault.jpg`}
                alt={short.title}
                className="absolute inset-0 h-full w-full object-cover opacity-80"
              />
            )}

            {/* Caption */}
            <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/80 to-transparent px-5 pb-6 pt-14 pointer-events-none">
              <p className="text-white text-sm font-semibold [text-shadow:0_1px_10px_rgba(0,0,0,0.9)]">
                {short.title}
              </p>
              <p className="text-white/60 text-xs mt-1">Clean Tones</p>
            </div>
          </div>

          {/* Scroll hint on the first slide */}
          {i === 0 && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/70 pointer-events-none">
              <span className="text-[10px] tracking-[0.25em] uppercase">Scroll for more</span>
              <FaChevronDown size={12} className="animate-bounce" />
            </div>
          )}
        </section>
      ))}
    </div>
  );
}
