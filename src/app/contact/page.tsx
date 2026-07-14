"use client";

import { useState, FormEvent } from "react";
import { BAND_EMAIL, SOCIAL_LINKS } from "@/lib/constants";
import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";
import PageHeader from "@/components/shared/PageHeader";

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID;

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!FORMSPREE_ID) {
      setStatus("error");
      return;
    }

    setStatus("sending");
    const data = new FormData(e.currentTarget);
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="min-h-screen pt-24 pb-24">
      <div className="max-w-2xl mx-auto px-6">

        <PageHeader eyebrow="Get in touch" title="Contact" />

        {status === "sent" ? (
          <div className="text-center py-16">
            <p className="text-brand-50 text-xl font-display uppercase tracking-wider mb-3">Message sent.</p>
            <p className="text-brand-400 text-sm">We&apos;ll get back to you soon.</p>
            <button
              onClick={() => setStatus("idle")}
              className="mt-8 text-brand-500 hover:text-brand-300 text-sm underline underline-offset-4 transition-colors"
            >
              Send another
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 mb-16">
            <div>
              <label htmlFor="name" className="block text-brand-400 text-xs tracking-[0.2em] uppercase mb-2">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full bg-brand-900 border border-brand-800 text-brand-50 px-4 py-3 text-sm focus:outline-none focus:border-brand-600 transition-colors placeholder:text-brand-700"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-brand-400 text-xs tracking-[0.2em] uppercase mb-2">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full bg-brand-900 border border-brand-800 text-brand-50 px-4 py-3 text-sm focus:outline-none focus:border-brand-600 transition-colors placeholder:text-brand-700"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-brand-400 text-xs tracking-[0.2em] uppercase mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                className="w-full bg-brand-900 border border-brand-800 text-brand-50 px-4 py-3 text-sm focus:outline-none focus:border-brand-600 transition-colors placeholder:text-brand-700 resize-none"
                placeholder="What's on your mind?"
              />
            </div>

            {status === "error" && (
              <p className="text-red-400 text-sm">Something went wrong. Try emailing us directly below.</p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className={`link-cta text-sm ${status === "sending" ? "is-disabled" : ""}`}
            >
              {status === "sending" ? "Sending…" : "Send Message"}
            </button>
          </form>
        )}

        {/* Direct contact */}
        <div className="border-t border-brand-800 pt-10 text-center space-y-6">
          <div>
            <p className="text-brand-500 text-xs tracking-[0.2em] uppercase mb-2">Email us directly</p>
            <a
              href={`mailto:${BAND_EMAIL}`}
              className="text-brand-200 hover:text-gold transition-colors text-sm"
            >
              {BAND_EMAIL}
            </a>
          </div>

          <div>
            <p className="text-brand-500 text-xs tracking-[0.2em] uppercase mb-4">Find us on</p>
            <div className="flex items-center justify-center gap-6">
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer"
                className="text-brand-400 hover:text-gold transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer"
                className="text-brand-400 hover:text-gold transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href={SOCIAL_LINKS.tiktok} target="_blank" rel="noopener noreferrer"
                className="text-brand-400 hover:text-gold transition-colors">
                <FaTiktok size={20} />
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
