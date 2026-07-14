export interface Gig {
  id: string;
  datetime: string;
  venue: {
    name: string;
    city: string;
    region: string;
    country: string;
  };
  offers: { type: string; url: string; status: string }[];
  lineup: string[];
  description: string;
  title: string;
  url: string;
}
