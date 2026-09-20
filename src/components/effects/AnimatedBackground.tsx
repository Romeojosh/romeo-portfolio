import React from "react";
import { motion, useReducedMotion } from "motion/react";

const ambientTransition = {
  duration: 20,
  ease: "easeInOut" as const,
  repeat: Infinity,
  repeatType: "mirror" as const,
};

export const AnimatedBackground: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      <motion.div
        className="absolute -left-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-[#E69A3A]/[0.07] blur-[150px] sm:h-[34rem] sm:w-[34rem]"
        animate={
          shouldReduceMotion
            ? undefined
            : { x: [0, 28, -12, 0], y: [0, -18, 12, 0], scale: [1, 1.04, 1.02, 1] }
        }
        transition={ambientTransition}
      />

      <motion.div
        className="absolute -bottom-40 -right-40 h-[34rem] w-[34rem] rounded-full bg-[#A86F2C]/[0.09] blur-[165px] sm:h-[42rem] sm:w-[42rem]"
        animate={
          shouldReduceMotion
            ? undefined
            : { x: [0, -24, 16, 0], y: [0, 22, -14, 0], scale: [1, 1.03, 1.05, 1] }
        }
        transition={{ ...ambientTransition, duration: 22, delay: 1.5 }}
      />

      <motion.div
        className="absolute right-[18%] top-[34%] h-[24rem] w-[24rem] rounded-full bg-[#22252A]/[0.42] blur-[170px] opacity-40 sm:h-[30rem] sm:w-[30rem]"
        animate={
          shouldReduceMotion
            ? undefined
            : { x: [0, -16, 10, 0], y: [0, 14, -10, 0], scale: [1, 1.02, 1.04, 1] }
        }
        transition={{ ...ambientTransition, duration: 18, delay: 0.5 }}
      />
    </div>
  );
};

export default AnimatedBackground;
