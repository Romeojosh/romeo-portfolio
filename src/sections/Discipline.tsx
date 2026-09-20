import React from "react";
import { motion, useReducedMotion } from "motion/react";
import athletePortrait from "../assets/romeo-athlete.png";

const telemetryCards = [
  {
    label: "IDENTITY",
    value: "WIT Varsity Athlete",
    subtext: "Student • Runner • Developer",
  },
  {
    label: "WHAT SPORT TAUGHT ME",
    value: "Consistency",
    subtext: "Patience • Discipline • Resilience",
  },
  {
    label: "WHAT IT SUPPORTS",
    value: "Education",
    subtext: "Using talent as an opportunity to keep learning",
  },
];

export const Discipline: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const transitionBase = {
    duration: shouldReduceMotion ? 0 : 0.6,
    ease: [0.16, 1, 0.3, 1] as const,
  };

  return (
    <section
      id="discipline"
      aria-label="Endurance and Athletics"
      className="relative overflow-hidden border-t border-[rgba(255,255,255,0.08)] bg-[#111214] px-4 py-20 scroll-mt-24 sm:px-6 sm:py-24 md:scroll-mt-28 md:py-28 lg:px-12"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_84%_42%,rgba(168,111,44,0.16),transparent_35%)]" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(168,111,44,0.035)_50%,transparent_100%)]" />

      <div className="relative z-10 mx-auto max-w-[1400px]">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={transitionBase}
          className="mb-10 flex items-center gap-3 text-xs font-mono uppercase tracking-[0.18em] text-[#A86F2C] sm:mb-12"
        >
          <span>[ 04 ]</span>
          <span className="h-px w-8 bg-[#A86F2C]/60" aria-hidden="true" />
          <span className="text-[#AFA49A]">Endurance &amp; Athletics</span>
        </motion.div>

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8 xl:gap-14">
          <div className="lg:col-span-7">
            <motion.h2
              initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...transitionBase, delay: shouldReduceMotion ? 0 : 0.08 }}
              className="m-0 max-w-4xl font-display text-[clamp(3rem,8vw,7rem)] font-extrabold uppercase leading-[0.84] tracking-[-0.055em]"
            >
              <span className="block text-[#F3EEE8]">CODE.</span>
              <span className="text-gradient-amber-lemon block">RUN.</span>
              <span className="block text-[#F3F2EE]">REPEAT.</span>
            </motion.h2>

            <div className="mt-10 max-w-2xl space-y-6 sm:mt-12">
              <motion.p
                initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...transitionBase, delay: shouldReduceMotion ? 0 : 0.15 }}
                className="m-0 text-base leading-[1.75] text-[#F3EEE8] sm:text-lg"
              >
                Running is more than a sport to me. It has shaped how I think, how I work, and how I handle difficult situations. Training has taught me patience, consistency, discipline, and the importance of showing up even when progress feels slow.
              </motion.p>

              <motion.p
                initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...transitionBase, delay: shouldReduceMotion ? 0 : 0.22 }}
                className="m-0 text-sm leading-[1.8] text-[#AFA49A] sm:text-base"
              >
                Those same lessons carry into programming. Whether I’m working through a difficult bug, learning a new technology, or building a project over several weeks, I approach it the same way I approach training: stay consistent, adjust when needed, and keep moving forward.
              </motion.p>
            </div>

            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...transitionBase, delay: shouldReduceMotion ? 0 : 0.3 }}
              className="mt-10 border-l-2 border-[#A86F2C] bg-[#181A1D]/75 px-5 py-5 sm:mt-12 sm:px-6"
            >
              <span className="mb-3 block text-[10px] font-mono uppercase tracking-[0.16em] text-[#A86F2C]">
                Mindset // In Practice
              </span>
              <p className="m-0 font-display text-base leading-relaxed text-[#F3EEE8] sm:text-lg">
                Discipline connects the athlete I am with the developer I’m becoming.
              </p>
            </motion.div>

            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...transitionBase, delay: shouldReduceMotion ? 0 : 0.36 }}
              className="mt-10 border-t border-[rgba(246,184,95,0.16)] pt-6 sm:mt-12 sm:pt-8"
            >
              <span className="mb-4 block text-xs font-mono uppercase tracking-[0.15em] text-[#E69A3A]">
                Why the WIT Jersey Matters
              </span>
              <div className="space-y-5 text-sm leading-[1.8] text-[#AFA49A] sm:text-base">
                <p className="m-0">
                  The WIT jersey represents an important part of who I am. I’m proud to be a student-athlete of Western Institute of Technology and to represent the school as a varsity athlete. Being part of the WIT varsity program has given me opportunities to develop my talent while continuing my education.
                </p>
                <p className="m-0">
                  I’m also deeply grateful to the Salas family for their generosity, kindness, and support for WIT varsity athletes. Their care gives student-athletes like me the opportunity to use our talents not only in competition, but also as a pathway toward a quality education and finishing our studies.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...transitionBase, delay: shouldReduceMotion ? 0 : 0.44 }}
              className="mt-10 grid grid-cols-1 border-y border-[rgba(246,184,95,0.16)] sm:grid-cols-3 sm:divide-x sm:divide-[rgba(246,184,95,0.16)]"
            >
              {telemetryCards.map((card) => (
                <div key={card.label} className="border-b border-[rgba(246,184,95,0.16)] py-5 last:border-b-0 sm:border-b-0 sm:px-5 sm:first:pl-0 sm:last:pr-0">
                  <span className="block text-[10px] font-mono uppercase tracking-[0.14em] text-[#AFA49A]">{card.label}</span>
                  <p className="mt-2 mb-1 font-display text-base font-semibold text-[#F3EEE8]">{card.value}</p>
                  <span className="block text-[11px] leading-relaxed text-[#E69A3A]/80">{card.subtext}</span>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.figure
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ ...transitionBase, duration: shouldReduceMotion ? 0 : 0.75, delay: shouldReduceMotion ? 0 : 0.16 }}
            className="m-0 lg:col-span-5 lg:justify-self-end"
          >
            <div className="w-full max-w-[470px] lg:ml-auto">
              <figcaption className="mb-2.5 px-1 text-[10px] font-mono uppercase tracking-[0.16em] text-[#AFA49A]/70">
                [ FIG. 02 — STUDENT ATHLETE ]
              </figcaption>
              <div className="relative aspect-[4/5] overflow-hidden border border-[rgba(168,111,44,0.42)] bg-[#181A1D] shadow-[0_0_50px_rgba(168,111,44,0.18)]">
                <div aria-hidden="true" className="absolute inset-0 z-10 bg-gradient-to-t from-[#111214]/55 via-transparent to-[#A86F2C]/10" />
                <img
                  src={athletePortrait}
                  alt="Romeo Josh wearing the Western Institute of Technology varsity jersey"
                  className="block h-full w-full object-cover object-top"
                  loading="lazy"
                />
                <span aria-hidden="true" className="absolute left-3 top-3 z-20 h-3 w-3 border-l border-t border-[#E69A3A]/70" />
                <span aria-hidden="true" className="absolute right-3 top-3 z-20 h-3 w-3 border-r border-t border-[#E69A3A]/70" />
                <span aria-hidden="true" className="absolute bottom-3 left-3 z-20 h-3 w-3 border-b border-l border-[#E69A3A]/70" />
                <span aria-hidden="true" className="absolute bottom-3 right-3 z-20 h-3 w-3 border-b border-r border-[#E69A3A]/70" />
              </div>
              <div className="mt-3 flex items-center justify-between gap-4 px-1 text-[10px] font-mono uppercase tracking-[0.14em] text-[#AFA49A]/75 sm:text-[11px]">
                <span>WIT VARSITY</span>
                <span className="text-[#A86F2C]">STUDENT ATHLETE // ILOILO</span>
              </div>
            </div>
          </motion.figure>
        </div>
      </div>
    </section>
  );
};

export default Discipline;
