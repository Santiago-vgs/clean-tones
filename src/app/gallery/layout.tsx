import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photos of Clean Tones live and behind the scenes.",
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
