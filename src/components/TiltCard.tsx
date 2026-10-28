"use client";

import { useRef, type ReactNode, type MouseEvent } from "react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
}

export default function TiltCard({ children, className = "" }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = ref.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(1000px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) scale3d(1.02,1.02,1.02)`;
  };

  const handleLeave = () => {
    const card = ref.current;
    if (!card) return;
    card.style.transition = "transform 0.5s cubic-bezier(0.23,1,0.32,1)";
    card.style.transform = "perspective(1000px) rotateY(0) rotateX(0) scale3d(1,1,1)";
  };

  const handleEnter = () => {
    const card = ref.current;
    if (card) card.style.transition = "none";
  };

  return (
    <div
      ref={ref}
      className={`tilt-card ${className}`}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onMouseEnter={handleEnter}
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </div>
  );
}
