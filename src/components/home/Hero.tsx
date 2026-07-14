import Image from "next/image";
import Link from "next/link";
import { BAND_NAME } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background photo */}
      <Image
        src="/images/band/hero.jpg"
        alt={`${BAND_NAME} band photo`}
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Blue overlay gradient — light in the middle so the band shows through,
          darker top/bottom for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-950/55 via-brand-950/20 to-brand-950/90" />
      <div className="absolute inset-0 bg-brand-950/15" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="text-brand-100 text-sm tracking-[0.3em] uppercase mb-4 font-medium [text-shadow:0_1px_12px_rgba(0,0,0,0.7)]">
          Perth, Western Australia
        </p>
        <h1 className="font-display text-6xl md:text-8xl font-black tracking-tight text-brand-50 uppercase mb-6 leading-none [text-shadow:0_2px_24px_rgba(0,0,0,0.7)]">
          Clean Tones
        </h1>
        <p className="text-brand-100 text-lg md:text-xl mb-10 tracking-wide [text-shadow:0_1px_16px_rgba(0,0,0,0.7)]">
          Jay, Jayden, Santy and Joseph
        </p>
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
          <Link href="/music" className="link-cta text-sm">
            Listen Now
          </Link>
          <Link href="/shows" className="link-cta text-sm">
            See Shows
          </Link>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-brand-500">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-brand-500 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
