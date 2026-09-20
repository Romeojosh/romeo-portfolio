import React, { useEffect, useMemo, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";

interface CountUpStatProps {
  value: string;
  duration?: number;
  className?: string;
}

export const CountUpStat: React.FC<CountUpStatProps> = ({ value, duration = 1100, className = "" }) => {
  const rootRef = useRef<HTMLSpanElement>(null);
  const frameRef = useRef<number | null>(null);
  const hasAnimated = useRef(false);
  const shouldReduceMotion = useReducedMotion();
  const match = useMemo(() => value.match(/^(\d+)(.*)$/), [value]);
  const [displayValue, setDisplayValue] = useState(shouldReduceMotion ? value : match ? "0" : value);
  const [isVisible, setIsVisible] = useState(Boolean(shouldReduceMotion));

  useEffect(() => {
    const element = rootRef.current;
    if (!element) return;

    if (shouldReduceMotion) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || hasAnimated.current) return;
      hasAnimated.current = true;
      setIsVisible(true);

      if (!match) {
        observer.disconnect();
        return;
      }

      const target = Number(match[1]);
      const suffix = match[2];
      const digits = match[1].length;
      const startedAt = performance.now();

      const tick = (time: number) => {
        const progress = Math.min((time - startedAt) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(target * eased).toString().padStart(digits, "0");
        setDisplayValue(`${current}${suffix}`);
        if (progress < 1) frameRef.current = requestAnimationFrame(tick);
        else frameRef.current = null;
      };

      frameRef.current = requestAnimationFrame(tick);
      observer.disconnect();
    }, { threshold: 0.45 });

    observer.observe(element);
    return () => {
      observer.disconnect();
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    };
  }, [duration, match, shouldReduceMotion, value]);

  return (
    <span ref={rootRef} className={className} aria-label={value}>
      <span aria-hidden="true" className="inline-block transition-all duration-300" style={{ opacity: shouldReduceMotion || isVisible ? 1 : 0, transform: shouldReduceMotion || isVisible ? "translateY(0)" : "translateY(8px)" }}>
        {shouldReduceMotion ? value : displayValue}
      </span>
    </span>
  );
};

export default CountUpStat;
