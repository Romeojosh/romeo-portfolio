import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { SKILL_GROUPS, STATS, TECH_STACK } from "../data/skills";
import { CountUpStat } from "../components/effects/CountUpStat";
import { SpotlightCard } from "../components/effects/SpotlightCard";
import { TechLogoLoop } from "../components/effects/TechLogoLoop";
import { TextScramble } from "../components/effects/TextScramble";

export const Skills: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const transitionBase = {
    duration: shouldReduceMotion ? 0 : 0.6,
    ease: [0.16, 1, 0.3, 1] as const,
  };

  return (
    <section
      id="skills"
      aria-label="Tech Stack and Capabilities"
      className="relative scroll-mt-24 border-t border-[rgba(255,255,255,0.08)] bg-[#111214] px-4 py-20 sm:px-6 sm:py-24 md:scroll-mt-28 md:py-28 lg:px-12"
    >
      <div className="mx-auto max-w-[1400px]">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={transitionBase}
          className="mb-8 flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#E69A3A] sm:mb-10"
        >
          <span>[ 03 ]</span>
          <span className="h-px w-8 bg-[#E69A3A]/40" aria-hidden="true" />
          <TextScramble text="CURRENT FOCUS // 2026" trigger="both" className="text-[#A6A8AD]" />
        </motion.div>

        <motion.h2
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...transitionBase, delay: shouldReduceMotion ? 0 : 0.1 }}
          className="mb-14 m-0 font-display text-4xl font-extrabold uppercase tracking-tight text-[#F3F2EE] sm:mb-16 sm:text-5xl lg:text-6xl"
        >
          WHAT I<br />
          <span className="text-gradient-amber-lemon inline-block">WORK WITH.</span>
        </motion.h2>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ ...transitionBase, delay: shouldReduceMotion ? 0 : 0.15 }}
        >
          <SectionLabel index="01" label="TECH STACK" />
          <TechLogoLoop items={TECH_STACK} />
        </motion.div>

        <div className="mt-16 sm:mt-20">
          <SectionLabel index="02" label="CAPABILITIES" />
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-6">
            {SKILL_GROUPS.map((group, index) => (
              <motion.div
                key={group.id}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ ...transitionBase, delay: shouldReduceMotion ? 0 : index * 0.07 }}
              >
                <SpotlightCard className="h-full p-6 sm:p-7 lg:p-8">
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div>
                      <span className="mb-2 block text-[10px] font-mono uppercase tracking-[0.18em] text-[#A86F2C]">
                        {group.number} / CAPABILITY
                      </span>
                      <h3 className="m-0 font-display text-xl font-bold uppercase tracking-tight text-[#F3F2EE] sm:text-2xl">
                        {group.label}
                      </h3>
                    </div>
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#E69A3A] shadow-[0_0_10px_rgba(230,154,58,0.28)]" aria-hidden="true" />
                  </div>

                  <p className="mb-6 mt-0 max-w-xl text-sm leading-6 text-[#A6A8AD]">{group.description}</p>

                  <ul className="m-0 flex list-none flex-wrap gap-2 p-0">
                    {group.skills.map((skill) => (
                      <li key={skill} className="rounded-md border border-[rgba(255,255,255,0.08)] bg-[#22252A] px-3 py-1.5 text-xs font-mono text-[#A6A8AD]">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...transitionBase, delay: shouldReduceMotion ? 0 : 0.15 }}
          className="mt-16 border-t border-[rgba(255,255,255,0.08)] pt-10 sm:mt-20 sm:pt-12"
        >
          <SectionLabel index="03" label="STAT ROW" />
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-10">
            {STATS.map((stat) => {
              const valueClass = stat.accent === "gradient"
                ? "text-gradient-amber-lemon"
                : stat.accent === "bronze"
                  ? "text-[#A86F2C]"
                  : "text-[#E69A3A]";

              return (
                <div key={stat.label} className="border-l border-[rgba(255,255,255,0.08)] pl-4 sm:pl-6">
                  <CountUpStat
                    value={stat.value}
                    duration={1100}
                    className={`block font-display text-4xl font-extrabold leading-none tracking-tight sm:text-5xl lg:text-6xl ${valueClass}`}
                  />
                  <p className="mb-0 mt-3 text-[10px] font-mono uppercase tracking-widest text-[#74787F]">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const SectionLabel: React.FC<{ index: string; label: string }> = ({ index, label }) => (
  <div className="mb-6 flex items-center gap-3 text-[10px] font-mono uppercase tracking-[0.2em] text-[#74787F]">
    <span className="text-[#E69A3A]">{index}</span>
    <span className="h-px w-10 bg-[rgba(255,255,255,0.08)]" aria-hidden="true" />
    <span>{label}</span>
  </div>
);

export default Skills;
