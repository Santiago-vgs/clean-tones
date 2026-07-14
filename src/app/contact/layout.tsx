import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with The Clean Tones for bookings, press, and general enquiries.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
