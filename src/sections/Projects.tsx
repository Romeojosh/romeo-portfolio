import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { PROJECTS } from "../data/projects";
import { ProjectCard } from "../components/ProjectCard";
import { TextScramble } from "../components/effects/TextScramble";
import { ScrollStack } from "../components/effects/ScrollStack";

export const Projects: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const transitionBase = {
    duration: shouldReduceMotion ? 0 : 0.6,
    ease: [0.16, 1, 0.3, 1] as const,
  };

  return (
    <section
      id="work"
      aria-label="Selected Work"
      className="py-20 sm:py-24 md:py-28 px-4 sm:px-6 lg:px-12 border-t border-[rgba(255,255,255,0.08)] bg-[#111214] relative scroll-mt-24 md:scroll-mt-28"
    >
      <div className="max-w-[1400px] mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={transitionBase}
          >
            {/* Section Index Tag */}
            <div className="flex items-center gap-3 text-xs font-mono tracking-widest uppercase text-[#E69A3A] mb-3">
              <span>[ 02 ]</span>
              <span className="w-8 h-[1px] bg-[#E69A3A]/40" aria-hidden="true" />
              <TextScramble text="Engineered Products" trigger="both" className="text-[#A6A8AD]" />
            </div>

            {/* Main Section Heading */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display uppercase tracking-tight text-[#F3EEE8] m-0">
              SELECTED{" "}
              <span className="text-gradient-amber-lemon inline-block">
                WORK.
              </span>
            </h2>
          </motion.div>

          {/* Telemetry Tag */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ ...transitionBase, delay: shouldReduceMotion ? 0 : 0.15 }}
            className="text-xs font-mono tracking-widest uppercase text-[#74787F]"
          >
            PRODUCTION DEPLOYMENTS // 2025 — 2026
          </motion.div>
        </div>

        {/* Project Case Study Entries */}
        <div className="space-y-10 sm:space-y-14 lg:space-y-16">
          {PROJECTS.map((project, index) => {
            const isReversed = index % 2 === 1;
            // Alternating subtle motion entrance
            const initialX = shouldReduceMotion ? 0 : isReversed ? 20 : -20;

            return (
              <ScrollStack key={project.id} index={index} top={96 + index * 20}>
                <motion.div
                  initial={shouldReduceMotion ? false : { opacity: 0, x: initialX }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ ...transitionBase, delay: shouldReduceMotion ? 0 : 0.1 }}
                >
                  <ProjectCard
                    project={project}
                    index={index}
                    isReversed={isReversed}
                  />
                </motion.div>
              </ScrollStack>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Projects;
