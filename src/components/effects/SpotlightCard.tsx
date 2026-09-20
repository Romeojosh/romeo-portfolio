import React, { useRef } from "react";
import { useReducedMotion } from "motion/react";

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
}

export const SpotlightCard: React.FC<SpotlightCardProps> = ({ children, className = "" }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const canUseSpotlight = () =>
    !shouldReduceMotion && window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!canUseSpotlight() || !cardRef.current || !spotlightRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    cardRef.current.style.setProperty("--spotlight-x", `${event.clientX - rect.left}px`);
    cardRef.current.style.setProperty("--spotlight-y", `${event.clientY - rect.top}px`);
    spotlightRef.current.style.opacity = "1";
  };

  const handlePointerLeave = () => {
    if (spotlightRef.current) spotlightRef.current.style.opacity = "0";
  };

  return (
    <div
      ref={cardRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className={`relative overflow-hidden rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[#181A1D] ${className}`}
      style={{ "--spotlight-x": "50%", "--spotlight-y": "50%" } as React.CSSProperties}
    >
      <div
        ref={spotlightRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200"
        style={{ background: "radial-gradient(300px circle at var(--spotlight-x) var(--spotlight-y), rgba(246,184,95,0.10), transparent 60%)" }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
};

export default SpotlightCard;
