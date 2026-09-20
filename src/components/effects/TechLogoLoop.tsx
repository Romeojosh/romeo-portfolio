import React from "react";
import { useReducedMotion } from "motion/react";
import type { TechStackItem } from "../../data/skills";

interface TechLogoLoopProps {
  items: TechStackItem[];
}

const TechItem: React.FC<{ item: TechStackItem }> = ({ item }) => {
  const Icon = item.icon;

  return (
    <div className="flex shrink-0 items-center gap-2.5 rounded-full border border-[rgba(255,255,255,0.08)] bg-[#181A1D] px-4 py-2.5 text-[#A6A8AD] sm:px-5 sm:py-3">
      <Icon className="h-4 w-4" style={{ color: item.color }} aria-hidden="true" />
      <span className="whitespace-nowrap text-xs font-mono tracking-wide sm:text-sm">{item.label}</span>
    </div>
  );
};

export const TechLogoLoop: React.FC<TechLogoLoopProps> = ({ items }) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div className="flex flex-wrap gap-2.5" aria-label="Technology stack">
        {items.map((item) => <TechItem key={item.label} item={item} />)}
      </div>
    );
  }

  return (
    <div
      className="tech-logo-loop relative overflow-hidden py-1 focus-within:[&_.tech-logo-loop-track]:[animation-play-state:paused] hover:[&_.tech-logo-loop-track]:[animation-play-state:paused]"
      aria-label="Technology stack"
      tabIndex={0}
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[#111214] to-transparent sm:w-24" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[#111214] to-transparent sm:w-24" aria-hidden="true" />
      <div className="tech-logo-loop-track flex w-max">
        {[0, 1].map((sequence) => (
          <div key={sequence} className="flex shrink-0 gap-2.5 pr-2.5 sm:gap-4 sm:pr-4" aria-hidden={sequence === 1}>
            {items.map((item) => <TechItem key={`${sequence}-${item.label}`} item={item} />)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechLogoLoop;
