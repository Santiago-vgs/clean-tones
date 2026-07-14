"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { NAV_LINKS } from "@/lib/constants";
import SocialIcons from "@/components/shared/SocialIcons";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-40 flex flex-col bg-brand-950/95 backdrop-blur-xl">
      <div className="flex flex-col items-center justify-center flex-1 gap-8">
        {NAV_LINKS.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            onClick={onClose}
            className={`text-4xl font-display font-bold tracking-wider transition-colors duration-200 ${
              pathname === href
                ? "text-gold"
                : "text-brand-100 hover:text-gold"
            }`}
          >
            {label}
          </Link>
        ))}
      </div>
      <div className="pb-12 flex justify-center">
        <SocialIcons iconClassName="!text-brand-300 hover:!text-gold" />
      </div>
    </div>
  );
}
