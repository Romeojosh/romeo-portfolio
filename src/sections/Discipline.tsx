import React from "react";
import { motion, useReducedMotion } from "motion/react";
import athletePortrait from "../assets/romeo-athlete.png";
import { TextScramble } from "../components/effects/TextScramble";

const supportingFacts = [
  "WIT VARSITY ATHLETE",
  "MIDDLE / LONG DISTANCE RUNNER",
  "IT STUDENT • ATHLETE • ASPIRING DEVELOPER",
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
          <TextScramble text="Endurance & Athletics" trigger="both" className="text-[#AFA49A]" />
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

            <motion.p
              initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...transitionBase, delay: shouldReduceMotion ? 0 : 0.15 }}
              className="mt-10 max-w-2xl text-base leading-[1.8] text-[#AFA49A] sm:mt-12 sm:text-lg"
            >
              Running has shaped how I think, work, and handle difficult situations. Training taught me patience, consistency, and discipline — lessons I carry into debugging, learning new technology, and building long-term projects. When something is not working, I adjust, stay patient, and keep improving.
            </motion.p>

            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...transitionBase, delay: shouldReduceMotion ? 0 : 0.24 }}
              className="mt-8 border-l-2 border-[#A86F2C] bg-[#181A1D]/75 px-5 py-5 sm:mt-10 sm:px-6"
            >
              <span className="mb-3 block text-[10px] font-mono uppercase tracking-[0.16em] text-[#A86F2C]">
                WIT VARSITY ATHLETE
              </span>
              <div className="space-y-3 text-sm leading-[1.75] text-[#AFA49A] sm:text-base">
                <p className="m-0">
                  I’m proud to represent Western Institute of Technology as a varsity athlete. WIT has given me the opportunity to use my talent in athletics as a pathway to a free college education, allowing me to continue pursuing my studies while representing the school through sports.
                </p>
                <p className="m-0 text-[#74787F]">
                  I’m deeply grateful to the Salas family for their generosity and support for WIT varsity athletes.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...transitionBase, delay: shouldReduceMotion ? 0 : 0.32 }}
              className="mt-8 grid grid-cols-1 border-y border-[rgba(246,184,95,0.16)] sm:grid-cols-3 sm:divide-x sm:divide-[rgba(246,184,95,0.16)]"
            >
              {supportingFacts.map((fact) => (
                <div key={fact} className="border-b border-[rgba(246,184,95,0.16)] py-4 text-[10px] font-mono uppercase tracking-[0.14em] text-[#A6A8AD] last:border-b-0 sm:border-b-0 sm:px-5 sm:first:pl-0 sm:last:pr-0">
                  {fact}
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
