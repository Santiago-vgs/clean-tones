import type { Metadata } from "next";
import BandBio from "@/components/about/BandBio";
import MemberCard from "@/components/about/MemberCard";
import PressKit from "@/components/about/PressKit";
import PageHeader from "@/components/shared/PageHeader";

export const metadata: Metadata = {
  title: "About",
  description: "Meet The Clean Tones: the story of the band and the four members behind Perth's alternative rock sound.",
};

const MEMBERS = [
  {
    name: "Jay",
    role: "Lead Bass",
    photo: "/images/members/jay.jpg",
    objectPosition: "50% 65%",
    bio: {
      influences: ["Guns N' Roses", "Red Hot Chili Peppers", "Van Halen", "Steely Dan"],
      favouriteFood: "Coles Ultimate Cookies 40% Chocolate Chip",
      funFact: "Played a gig six weeks after elbow reconstruction surgery",
      howJoined: "Josh Blackwell put my name forward to Jayden, and we played Mojo's with no rehearsal.",
      films: ["Monty Python and the Holy Grail", "The Lord of the Rings", "Mad Max", "Reservoir Dogs"],
    },
  },
  {
    name: "Jayden",
    role: "Lead Singer & Rhythm Guitar",
    photo: "/images/members/jayden.jpg",
    objectPosition: "50% 55%",
    bio: {
      influences: ["The Beatles", "Ball Park Music", "Crowded House", "Arctic Monkeys", "Oasis"],
      favouriteFood: "Chicken Parmi",
      funFact: "Once held the top Tetris ranking in Perth",
      howJoined: "Formed Clean Tones for a gig at Mojo's Bar in 2022.",
      films: ["Parasite", "Shaun of the Dead", "Good Will Hunting", "The Truman Show"],
    },
  },
  {
    name: "Santy",
    role: "Lead Guitar & Backup Vocals",
    photo: "/images/members/santy.jpg",
    objectPosition: "50% 50%",
    bio: {
      influences: ["Led Zeppelin", "The Beatles", "Wings", "Los Retros"],
      favouriteFood: "Swan Draught",
      funFact: "Only uses pedals from Temu",
      howJoined: "Joseph recommended me since we had already played in a band together.",
      films: ["Dazed and Confused", "American Gangster", "Platoon", "Heat"],
    },
  },
  {
    name: "Joseph",
    role: "Drums",
    photo: "/images/members/joseph.jpg",
    objectPosition: "50% 65%",
    bio: {
      influences: ["Foo Fighters", "Red Hot Chili Peppers", "Nate Smith", "CCM drumming (2007–2009)"],
      favouriteFood: "Nacho fries from Guzman y Gomez, with spicy chicken, extra chicken, and a Coke Zero",
      funFact: "Slightly nervous about holding babies, in case he drops one",
      howJoined: "Stepped in when Josh Blackwell moved to South Africa, with the Mojo's gig already booked.",
      films: ["The Empire Strikes Back", "School of Rock", "Project Hail Mary", "Despicable Me"],
    },
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-24">
      <div className="max-w-5xl mx-auto px-6">

        {/* Page header */}
        <PageHeader eyebrow="Our Story" title="About" />

        {/* Bio */}
        <BandBio />

        {/* Members */}
        <section className="mb-20">
          <h2 className="font-display text-3xl font-bold text-brand-50 uppercase tracking-wider mb-10 text-center">
            The Lineup
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {MEMBERS.map((member, i) => (
              <MemberCard
                key={member.name}
                name={member.name}
                role={member.role}
                photo={member.photo}
                objectPosition={member.objectPosition}
                bio={member.bio}
                revealDelay={i * 90}
              />
            ))}
          </div>
        </section>

        {/* Press kit */}
        <PressKit />

      </div>
    </div>
  );
}
