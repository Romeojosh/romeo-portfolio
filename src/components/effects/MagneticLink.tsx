import React, { useRef } from "react";
import { animate, motion, useMotionValue, useReducedMotion } from "motion/react";

export interface MagneticLinkProps {
  children: React.ReactNode;
  className?: string;
}

const MAGNETIC_STRENGTH = 0.15;
const MAX_TRAVEL = 8;

const clamp = (value: number) => Math.max(-MAX_TRAVEL, Math.min(MAX_TRAVEL, value));

export const MagneticLink: React.FC<MagneticLinkProps> = ({ children, className = "" }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const shouldReduceMotion = useReducedMotion();

  const canUseMagneticMotion = () =>
    !shouldReduceMotion && window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!canUseMagneticMotion() || !wrapperRef.current) return;

    const rect = wrapperRef.current.getBoundingClientRect();
    const offsetX = event.clientX - (rect.left + rect.width / 2);
    const offsetY = event.clientY - (rect.top + rect.height / 2);

    x.set(clamp(offsetX * MAGNETIC_STRENGTH));
    y.set(clamp(offsetY * MAGNETIC_STRENGTH));
  };

  const handlePointerLeave = () => {
    if (shouldReduceMotion) {
      x.set(0);
      y.set(0);
      return;
    }

    const transition = { duration: 0.2, ease: [0.16, 1, 0.3, 1] as const };
    animate(x, 0, transition);
    animate(y, 0, transition);
  };

  return (
    <motion.div
      ref={wrapperRef}
      style={{ x, y }}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default MagneticLink;
