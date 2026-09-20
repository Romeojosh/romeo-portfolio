import React, { useCallback, useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";

export type TextScrambleTrigger = "hover" | "view" | "both";

export interface TextScrambleProps {
  text: string;
  trigger?: TextScrambleTrigger;
  className?: string;
  duration?: number;
}

const CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789./[]-_+";
const FRAME_INTERVAL = 30;

export const TextScramble: React.FC<TextScrambleProps> = ({
  text,
  trigger = "hover",
  className = "",
  duration = 420,
}) => {
  const [displayText, setDisplayText] = useState(text);
  const containerRef = useRef<HTMLSpanElement>(null);
  const timerRef = useRef<number | null>(null);
  const hasViewed = useRef(false);
  const isHovering = useRef(false);
  const shouldReduceMotion = useReducedMotion();

  const clearTimer = useCallback(() => {
    if (timerRef.current !== null) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const scramble = useCallback(() => {
    clearTimer();

    if (shouldReduceMotion) {
      setDisplayText(text);
      return;
    }

    const totalFrames = Math.max(1, Math.ceil(duration / FRAME_INTERVAL));
    let frame = 0;

    const update = () => {
      frame += 1;
      const progress = frame / totalFrames;
      const resolvedCount = Math.floor(text.length * progress);
      const nextText = text
        .split("")
        .map((character, index) => {
          if (character === " " || index < resolvedCount) return character;
          return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
        })
        .join("");

      setDisplayText(frame >= totalFrames ? text : nextText);

      if (frame >= totalFrames) clearTimer();
    };

    update();
    timerRef.current = window.setInterval(update, FRAME_INTERVAL);
  }, [clearTimer, duration, shouldReduceMotion, text]);

  useEffect(() => {
    if (trigger === "hover" || shouldReduceMotion || !containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasViewed.current) {
          hasViewed.current = true;
          scramble();
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [scramble, shouldReduceMotion, trigger]);

  useEffect(() => clearTimer, [clearTimer]);

  const handlePointerEnter = () => {
    const supportsHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (supportsHover && (trigger === "hover" || trigger === "both") && !isHovering.current) {
      isHovering.current = true;
      scramble();
    }
  };

  const handlePointerLeave = () => {
    isHovering.current = false;
    clearTimer();
    setDisplayText(text);
  };

  return (
    <span
      ref={containerRef}
      className={`inline-grid ${className}`}
      aria-label={text}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
    >
      <span className="col-start-1 row-start-1" aria-hidden="true">
        {displayText}
      </span>
      <span className="sr-only">{text}</span>
    </span>
  );
};

export default TextScramble;
