import { getImageProps } from "next/image";
import Link from "next/link";
import { BAND_NAME } from "@/lib/constants";

export default function Hero() {
  // Art direction: wide band photo on desktop, the 2x2 member grid on mobile
  // (a portrait mobile viewport would crop the end members out of the wide shot).
  const common = { alt: `${BAND_NAME} band photo`, fill: true, sizes: "100vw", priority: true };
  const {
    props: { srcSet: desktopSrcSet },
  } = getImageProps({ ...common, src: "/images/band/hero.jpg" });
  const {
    props: { srcSet: mobileSrcSet, ...imgProps },
  } = getImageProps({ ...common, src: "/images/band/groupshot.jpeg" });

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-neutral-900">
      {/* Background photo (art-directed) */}
      <picture>
        <source media="(min-width: 768px)" srcSet={desktopSrcSet} />
        <source media="(max-width: 767px)" srcSet={mobileSrcSet} />
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <img {...imgProps} className="object-cover object-center" />
      </picture>

      {/* Dark overlay so the band photo carries light type (hero stays dark
          even though the rest of the site is on paper white) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/25 to-black/85" />
      <div className="absolute inset-0 bg-black/10" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="reveal-load text-white/85 text-sm tracking-[0.3em] uppercase mb-4 font-semibold [text-shadow:0_1px_12px_rgba(0,0,0,0.8)]" style={{ animationDelay: "0.1s" }}>
          Perth, Western Australia
        </p>
        <h1 className="reveal-load font-display text-7xl md:text-9xl text-white uppercase mb-6 leading-[0.9] [text-shadow:0_3px_24px_rgba(0,0,0,0.85)]" style={{ animationDelay: "0.2s" }}>
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

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/60 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
