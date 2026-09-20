import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { SKILL_GROUPS, STATS } from "../data/skills";

export const Skills: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const transitionBase = {
    duration: shouldReduceMotion ? 0 : 0.6,
    ease: [0.16, 1, 0.3, 1] as const,
  };

  return (
    <section
      id="skills"
      aria-label="Tech Stack & Capabilities"
      className="py-20 sm:py-24 md:py-28 px-4 sm:px-6 lg:px-12 border-t border-[rgba(246,184,95,0.16)] relative scroll-mt-24 md:scroll-mt-28"
    >
      <div className="max-w-[1400px] mx-auto">

        {/* Section Header Index */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={transitionBase}
          className="flex items-center gap-3 text-xs font-mono tracking-widest uppercase text-[#E69A3A] mb-8 sm:mb-10"
        >
          <span>[ 03 ]</span>
          <span className="w-8 h-[1px] bg-[#E69A3A]/40" aria-hidden="true" />
          <span className="text-[#AFA49A]">Tech Stack &amp; Capabilities</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...transitionBase, delay: shouldReduceMotion ? 0 : 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display uppercase tracking-tight text-[#F3EEE8] m-0 mb-12 sm:mb-16"
        >
          WHAT I<br />
          <span className="text-gradient-amber-lemon inline-block">
            WORK WITH.
          </span>
        </motion.h2>

        {/* Skill Groups: 4-col desktop, 2-col tablet, 1-col mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[rgba(246,184,95,0.12)]">
          {SKILL_GROUPS.map((group, groupIndex) => (
            <motion.div
              key={group.id}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                ...transitionBase,
                delay: shouldReduceMotion ? 0 : 0.15 + groupIndex * 0.07,
              }}
              className="px-0 sm:px-6 lg:px-8 py-8 sm:py-0 first:pl-0 last:pr-0"
            >
              {/* Group Header */}
              <div className="mb-5">
                <span className="text-[10px] font-mono tracking-widest text-[#E69A3A] uppercase block mb-1">
                  {group.number} //
                </span>
                <span className="text-xs font-mono tracking-widest text-[#AFA49A] uppercase">
                  {group.label}
                </span>
              </div>

              {/* Skill List */}
              <ul className="space-y-2.5 list-none m-0 p-0">
                {group.skills.map((skill) => (
                  <li key={skill} className="group/skill flex items-start gap-2">
                    <span
                      className="mt-[0.45em] w-1 h-1 rounded-full bg-[#E69A3A]/40 shrink-0 group-hover/skill:bg-[#E69A3A] transition-colors duration-200"
                      aria-hidden="true"
                    />
                    <span className="text-sm text-[#AFA49A] font-sans leading-snug group-hover/skill:text-[#F3EEE8] transition-colors duration-200">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Stats Row */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...transitionBase, delay: shouldReduceMotion ? 0 : 0.45 }}
          className="mt-16 sm:mt-20 pt-10 sm:pt-12 border-t border-[rgba(246,184,95,0.16)]"
        >
          {/* Contextual label */}
          <p className="text-[10px] font-mono tracking-widest text-[#AFA49A]/60 uppercase mb-8 sm:mb-10">
            CURRENT FOCUS // 2026
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
            {STATS.map((stat) => {
              const valueClass =
                stat.accent === "gradient"
                  ? "text-gradient-amber-lemon"
                  : stat.accent === "red"
                  ? "text-[#C92328]"
                  : "text-[#E69A3A]";

              return (
                <div
                  key={stat.label}
                  className="border-l-2 border-[rgba(246,184,95,0.2)] pl-5 sm:pl-6"
                >
                  <div
                    className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight leading-none ${valueClass}`}
                  >
                    {stat.value}
                  </div>
                  <div className="text-[10px] font-mono tracking-widest text-[#AFA49A] uppercase mt-2.5">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
