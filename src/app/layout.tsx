import type { Metadata } from "next";
import { Bodoni_Moda, Archivo } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PickCursor from "@/components/shared/PickCursor";
import ScrollReveal from "@/components/shared/ScrollReveal";

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {
    default: "Clean Tones · Perth Alternative Rock",
    template: "%s · Clean Tones",
  },
  description:
    "Clean Tones are an alternative rock band from Perth, Western Australia. Catch them live, stream their music, and stay in the loop.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Clean Tones",
    description: "Alternative rock from Perth, Western Australia.",
    url: "/",
    siteName: "Clean Tones",
    locale: "en_AU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bodoni.variable} ${archivo.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased">
        <PickCursor />
        <ScrollReveal />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
