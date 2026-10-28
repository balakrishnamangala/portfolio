"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const cursor = cursorRef.current;
    const dot = dotRef.current;
    if (!cursor || !dot) return;

    let cx = 0, cy = 0, dx = 0, dy = 0;

    const onMove = (e: MouseEvent) => {
      cx = e.clientX;
      cy = e.clientY;
      dot.style.left = `${cx}px`;
      dot.style.top = `${cy}px`;
    };

    const loop = () => {
      dx += (cx - dx) * 0.12;
      dy += (cy - dy) * 0.12;
      cursor.style.left = `${dx}px`;
      cursor.style.top = `${dy}px`;
      requestAnimationFrame(loop);
    };

    document.addEventListener("mousemove", onMove);
    loop();

    const hoverTargets = document.querySelectorAll(
      "a, button, .tilt-card, .pill, .contact-item"
    );
    hoverTargets.forEach((el) => {
      el.addEventListener("mouseenter", () => cursor.classList.add("hover"));
      el.addEventListener("mouseleave", () => cursor.classList.remove("hover"));
    });

    return () => document.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed w-5 h-5 border border-white/50 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-all duration-300 mix-blend-difference hidden md:block [&.hover]:w-12 [&.hover]:h-12 [&.hover]:border-white [&.hover]:bg-white/5"
      />
      <div
        ref={dotRef}
        className="fixed w-1 h-1 bg-white rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 hidden md:block"
      />
    </>
  );
}
