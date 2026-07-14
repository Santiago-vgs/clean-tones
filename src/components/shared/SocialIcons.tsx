"use client";

import { SOCIAL_LINKS } from "@/lib/constants";
import {
  FaInstagram,
  FaFacebook,
  FaSpotify,
  FaYoutube,
  FaTiktok,
  FaBandcamp,
} from "react-icons/fa";
import { SiApplemusic } from "react-icons/si";

interface SocialIconsProps {
  className?: string;
  iconClassName?: string;
}

const icons = [
  { href: SOCIAL_LINKS.instagram, Icon: FaInstagram, label: "Instagram" },
  { href: SOCIAL_LINKS.facebook, Icon: FaFacebook, label: "Facebook" },
  { href: SOCIAL_LINKS.spotify, Icon: FaSpotify, label: "Spotify" },
  { href: SOCIAL_LINKS.appleMusic, Icon: SiApplemusic, label: "Apple Music" },
  { href: SOCIAL_LINKS.youtube, Icon: FaYoutube, label: "YouTube" },
  { href: SOCIAL_LINKS.tiktok, Icon: FaTiktok, label: "TikTok" },
  { href: SOCIAL_LINKS.bandcamp, Icon: FaBandcamp, label: "Bandcamp" },
].filter(({ href }) => href && href !== "#");

export default function SocialIcons({ className = "", iconClassName = "" }: SocialIconsProps) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {icons.map(({ href, Icon, label }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-brand-300 hover:text-gold transition-colors duration-200 hover:scale-110 transform ${iconClassName}`}
        >
          <Icon size={20} />
        </a>
      ))}
    </div>
  );
}
