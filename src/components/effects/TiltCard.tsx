import React from "react";
import { animate, motion, useMotionValue, useReducedMotion } from "motion/react";

export interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
}

const MAX_ROTATE_X = 4;
const MAX_ROTATE_Y = 6;
const MAX_SCALE = 1.01;

const clamp = (value: number, max: number) => Math.max(-max, Math.min(max, value));

export const TiltCard: React.FC<TiltCardProps> = ({ children, className = "" }) => {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const scale = useMotionValue(1);
  const shouldReduceMotion = useReducedMotion();

  const canTilt = () =>
    !shouldReduceMotion && window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!canTilt()) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const normalizedX = (event.clientX - rect.left) / rect.width - 0.5;
    const normalizedY = (event.clientY - rect.top) / rect.height - 0.5;

    rotateX.set(clamp(-normalizedY * (MAX_ROTATE_X * 2), MAX_ROTATE_X));
    rotateY.set(clamp(normalizedX * (MAX_ROTATE_Y * 2), MAX_ROTATE_Y));
    scale.set(MAX_SCALE);
  };

  const handlePointerLeave = () => {
    if (shouldReduceMotion) {
      rotateX.set(0);
      rotateY.set(0);
      scale.set(1);
      return;
    }

    const transition = { duration: 0.22, ease: [0.16, 1, 0.3, 1] as const };
    animate(rotateX, 0, transition);
    animate(rotateY, 0, transition);
    animate(scale, 1, transition);
  };

  return (
    <motion.div
      style={{
        rotateX,
        rotateY,
        scale,
        transformPerspective: 900,
        transformStyle: "preserve-3d",
      }}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default TiltCard;
