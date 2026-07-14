import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Music",
  description: "Stream The Clean Tones singles Beggin Please and Summertime, plus live videos.",
};

export default function MusicLayout({ children }: { children: React.ReactNode }) {
  return children;
}
