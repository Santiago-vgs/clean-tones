import Hero from "@/components/home/Hero";
import NextGig from "@/components/home/NextGig";
import LatestRelease from "@/components/home/LatestRelease";
import QuickLinks from "@/components/home/QuickLinks";
import { getNextGig } from "@/lib/bandsintown";

export const revalidate = 3600;

export default async function HomePage() {
  const nextGig = await getNextGig();

  return (
    <>
      <Hero />
      <NextGig gig={nextGig} />
      <LatestRelease />
      <QuickLinks />
    </>
  );
}
