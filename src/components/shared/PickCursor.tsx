"use client";

import { useEffect, useRef } from "react";

// Offset of the pick's point within its box after the 135° rotation,
// so the tip lands exactly on the pointer.
const TIP_X = 4.75;
const TIP_Y = 6.75;

export default function PickCursor() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only on devices with a real pointer (mouse/trackpad), not touch.
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const el = ref.current;
    if (!el) return;

    const root = document.documentElement;
    root.classList.add("has-pick-cursor");

    let shown = false;
    const move = (e: MouseEvent) => {
      el.style.transform = `translate(${e.clientX - TIP_X}px, ${e.clientY - TIP_Y}px)`;
      if (!shown) {
        el.classList.add("is-visible");
        shown = true;
      }
    };
    const hide = () => el.classList.remove("is-visible");
    const show = () => shown && el.classList.add("is-visible");

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", hide);
    document.addEventListener("mouseenter", show);

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", hide);
      document.removeEventListener("mouseenter", show);
      root.classList.remove("has-pick-cursor");
    };
  }, []);

  return (
    <div ref={ref} className="pick-cursor" aria-hidden="true">
      <div className="pick-cursor__pick" />
    </div>
  );
}
