import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Scroll",
  description: "Scroll through Clean Tones clips and live moments.",
};

export default function ScrollLayout({ children }: { children: React.ReactNode }) {
  return children;
}
