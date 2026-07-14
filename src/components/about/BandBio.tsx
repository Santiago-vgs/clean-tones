export default function BandBio() {
  return (
    <section data-reveal className="mb-20">
      <h2 className="font-display text-4xl font-bold text-brand-50 uppercase mb-8">
        The Band
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-5 text-brand-300 leading-relaxed">
          <p>
            Clean Tones are an alternative rock band from Perth, though the label barely holds, since the songs cover many genres.
          </p>
          <p>
            What people really latch onto is the energy. You can tell these four are having fun up on stage, and it turns out that&apos;s pretty contagious.
          </p>
          <p>
            Formed in 2022, they dropped their first single in December 2025 and followed it up in February 2026, with a debut album now in the works.
          </p>
        </div>

        <div className="aspect-[3/4] rounded-none overflow-hidden border border-brand-800">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/band/bandphoto.jpg"
            alt="Clean Tones"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
