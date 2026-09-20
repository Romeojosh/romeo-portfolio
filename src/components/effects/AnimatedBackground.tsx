import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useReducedMotion } from "motion/react";

const ambientTransition = {
  duration: 20,
  ease: "easeInOut" as const,
  repeat: Infinity,
  repeatType: "mirror" as const,
};

export const AnimatedBackground: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const backgroundRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);
  const amberControls = useAnimation();
  const bronzeControls = useAnimation();

  useEffect(() => {
    const element = backgroundRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const staticPosition = { x: 0, y: 0, scale: 1 };

    if (shouldReduceMotion || !isVisible) {
      amberControls.stop();
      bronzeControls.stop();
      amberControls.set(staticPosition);
      bronzeControls.set(staticPosition);
      return;
    }

    void amberControls.start({
      x: [0, 28, -12, 0],
      y: [0, -18, 12, 0],
      scale: [1, 1.04, 1.02, 1],
      transition: ambientTransition,
    });
    void bronzeControls.start({
      x: [0, -24, 16, 0],
      y: [0, 22, -14, 0],
      scale: [1, 1.03, 1.05, 1],
      transition: { ...ambientTransition, duration: 22, delay: 1.5 },
    });

    return () => {
      amberControls.stop();
      bronzeControls.stop();
    };
  }, [amberControls, bronzeControls, isVisible, shouldReduceMotion]);

  return (
    <div
      ref={backgroundRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-clip"
      style={{ contain: "paint" }}
    >
      <motion.div
        className="absolute -left-32 -top-32 h-[28rem] w-[28rem] sm:h-[34rem] sm:w-[34rem]"
        style={{
          background: "radial-gradient(circle, rgba(230,154,58,0.10) 0%, rgba(230,154,58,0.035) 44%, transparent 70%)",
          willChange: "transform",
        }}
        animate={amberControls}
      />

      <motion.div
        className="absolute -bottom-40 -right-40 h-[34rem] w-[34rem] sm:h-[42rem] sm:w-[42rem]"
        style={{
          background: "radial-gradient(circle, rgba(168,111,44,0.12) 0%, rgba(168,111,44,0.04) 48%, transparent 72%)",
          willChange: "transform",
        }}
        animate={bronzeControls}
      />
    </div>
  );
};

export default AnimatedBackground;
