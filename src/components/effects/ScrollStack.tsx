import React from "react";
import { useReducedMotion } from "motion/react";

export interface ScrollStackProps {
  children: React.ReactNode;
  index: number;
  top: number;
  className?: string;
}

export const ScrollStack: React.FC<ScrollStackProps> = ({
  children,
  index,
  top,
  className = "",
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      className={`scroll-stack-item ${className}`}
      data-stack-index={index}
      style={{
        ["--scroll-stack-top" as string]: `${top}px`,
        ["--scroll-stack-scale" as string]: shouldReduceMotion ? 1 : 1 - index * 0.01,
        ["--scroll-stack-index" as string]: index + 1,
      } as React.CSSProperties}
    >
      <div className="scroll-stack-sticky">{children}</div>
    </div>
  );
};

export default ScrollStack;
