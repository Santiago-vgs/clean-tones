import { BAND_EMAIL } from "@/lib/constants";

export default function PressKit() {
  return (
    <section className="border-t border-brand-800 pt-16">
      <p className="text-brand-400 text-xs tracking-[0.3em] uppercase mb-3">For Media & Bookers</p>
      <h2 className="font-display text-4xl font-bold text-brand-50 uppercase mb-8">
        Bookings & Press
      </h2>

      <div className="bg-brand-900/40 border border-brand-800 rounded-none p-6 mb-12">
        <h3 className="text-brand-200 font-semibold mb-4">Get in Touch</h3>
        <p className="text-brand-400 text-sm mb-4 leading-relaxed">
          For booking enquiries, press requests, or general info, reach out directly. Feel free to grab any photos from our gallery.
        </p>
        <a
          href={`mailto:${BAND_EMAIL}`}
          className="btn"
        >
          Email the Band
        </a>
        <p className="text-brand-600 text-xs mt-3">{BAND_EMAIL}</p>
      </div>
    </section>
  );
}
