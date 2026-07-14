export const BAND_NAME = "Clean Tones";
export const BAND_LOCATION = "Perth, Western Australia";
export const BAND_EMAIL = "thecleantones@gmail.com";
export const BANDSINTOWN_ARTIST = "Clean Tones";

export const NAV_LINKS = [
  { href: "/shows", label: "Shows" },
  { href: "/music", label: "Music" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/cleantonesband/",
  facebook: "https://www.facebook.com/cleantonesband/",
  spotify: "https://open.spotify.com/album/5fJk45febDSjaB7FOxBPKY",
  appleMusic: "https://music.apple.com/us/artist/clean-tones/1857419655",
  youtube: "https://www.youtube.com/channel/UCGC65VUrijUgR9gWAZAxvXQ",
  tiktok: "https://www.tiktok.com/@cleantonesband",
  bandcamp: "#",
};

export const RELEASES = [
  {
    id: "beggin-please",
    title: "Beggin Please",
    type: "Single" as const,
    year: "2026",
    spotifyEmbedSrc:
      "https://open.spotify.com/embed/album/5fJk45febDSjaB7FOxBPKY?utm_source=generator",
    spotifyUrl: "https://open.spotify.com/album/5fJk45febDSjaB7FOxBPKY",
    appleMusicUrl: "https://music.apple.com/us/album/beggin-please-single/1872309967",
    youtubeUrl: "#",
    bandcampUrl: "#",
    coverImage: "/images/releases/beggin_please.png",
    featured: true,
  },
  {
    id: "summertime",
    title: "Summertime",
    type: "Single" as const,
    year: "2025",
    spotifyEmbedSrc:
      "https://open.spotify.com/embed/track/6LekaD4iMFYBaoa6UjFOqq?utm_source=generator",
    spotifyUrl: "https://open.spotify.com/album/3nECMprt2QiR9v2R1R1Ake",
    appleMusicUrl: "https://music.apple.com/us/album/summertime-single/1857451391",
    youtubeUrl: "#",
    bandcampUrl: "#",
    coverImage: "/images/releases/summertime.jpg",
    featured: false,
  },
];

export const LATEST_RELEASE = RELEASES[0];

export const VIDEOS = [
  {
    id: "2dHwfkHFVeA",
    title: "When the Drummer Won't End the Song",
    type: "live" as const,
  },
  {
    id: "prusPNnK9w4",
    title: "Did This Perth Band Just Drop the Song of the Summer?",
    type: "clip" as const,
  },
  {
    id: "S5syUU08MWk",
    title: "Beggin Please at Clancy's Fish Pub in Fremantle",
    type: "live" as const,
    isShort: true,
  },
  {
    id: "SBhRaIIdcnM",
    title: "Live Performance",
    type: "live" as const,
  },
];
