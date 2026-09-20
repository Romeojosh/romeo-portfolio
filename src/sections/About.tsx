import React from "react";
import { motion, useReducedMotion } from "motion/react";

export const About: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const transitionBase = {
    duration: shouldReduceMotion ? 0 : 0.6,
    ease: [0.16, 1, 0.3, 1] as const,
  };

  return (
    <section
      id="about"
      aria-label="Origin & Philosophy"
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
          <span>[ 01 ]</span>
          <span className="w-8 h-[1px] bg-[#E69A3A]/40" aria-hidden="true" />
          <span className="text-[#AFA49A]">Origin &amp; Philosophy</span>
        </motion.div>

        {/* 12-Column Asymmetric Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-start">
          
          {/* Left Column (~5 columns): Heading & Motto */}
          <div className="lg:col-span-5">
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...transitionBase, delay: shouldReduceMotion ? 0 : 0.1 }}
              className="lg:sticky lg:top-28"
            >
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display uppercase tracking-tight leading-[0.95] text-[#F3EEE8] m-0">
                MORE THAN<br />
                <span className="text-gradient-amber-lemon tracking-tight inline-block">
                  ONE DISCIPLINE.
                </span>
              </h2>

              {/* Athletic Motto Block (Desktop) */}
              <div className="hidden lg:block mt-10 p-6 rounded-2xl bg-[#15100D] border border-[rgba(246,184,95,0.16)]">
                <span className="text-xs font-mono tracking-widest text-[#E69A3A] uppercase block mb-2.5">
                  Athletic Mindset
                </span>
                <p className="text-sm font-sans text-[#F3EEE8] leading-relaxed m-0">
                  Consistency matters more than one perfect day.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column (~7 columns): Editorial Narrative, Cards, Philosophy */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Primary Paragraph */}
            <motion.p
              initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...transitionBase, delay: shouldReduceMotion ? 0 : 0.15 }}
              className="text-lg sm:text-xl text-[#F3EEE8] font-normal leading-relaxed m-0"
            >
              I’m an Information Technology student who enjoys building digital systems, learning how technology works, and turning ideas into practical web experiences. Outside development, I’m also a student-athlete, and the discipline I’ve developed through running influences how I approach learning, problem-solving, and long-term projects.
            </motion.p>

            {/* Supporting Paragraph */}
            <motion.p
              initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...transitionBase, delay: shouldReduceMotion ? 0 : 0.2 }}
              className="text-base sm:text-lg text-[#AFA49A] font-light leading-relaxed m-0"
            >
              Programming and athletics may look very different, but both reward consistency. Whether I’m debugging a feature, learning a new technology, or working through a difficult training session, I’ve learned to stay patient, adjust when something is not working, and keep improving one step at a time.
            </motion.p>

            {/* Metadata / Info Cards (3 Cards) */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...transitionBase, delay: shouldReduceMotion ? 0 : 0.25 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-6 border-t border-[rgba(246,184,95,0.16)]"
            >
              {/* Card 1: Based In */}
              <div className="p-5 rounded-xl bg-[#15100D] border border-[rgba(246,184,95,0.16)] transition-all duration-300 hover:border-[#E69A3A]/30">
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#AFA49A] block mb-1.5">
                  BASED IN
                </span>
                <p className="text-sm font-display font-semibold text-[#F3EEE8] m-0">
                  Iloilo, Philippines
                </p>
                <span className="text-[11px] font-mono text-[#E69A3A]/80 block mt-1.5">
                  Western Visayas
                </span>
              </div>

              {/* Card 2: Core Focus */}
              <div className="p-5 rounded-xl bg-[#15100D] border border-[rgba(246,184,95,0.16)] transition-all duration-300 hover:border-[#E69A3A]/30">
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#AFA49A] block mb-1.5">
                  CORE FOCUS
                </span>
                <p className="text-sm font-display font-semibold text-[#F3EEE8] m-0">
                  Web Development
                </p>
                <span className="text-[11px] font-mono text-[#E69A3A]/80 block mt-1.5">
                  UI/UX • Systems • Programming
                </span>
              </div>

              {/* Card 3: Discipline */}
              <div className="p-5 rounded-xl bg-[#15100D] border border-[rgba(246,184,95,0.16)] transition-all duration-300 hover:border-[#E69A3A]/30">
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#AFA49A] block mb-1.5">
                  DISCIPLINE
                </span>
                <p className="text-sm font-display font-semibold text-[#F3EEE8] m-0">
                  Student • Developer • Athlete
                </p>
                <span className="text-[11px] font-mono text-[#C92328] block mt-1.5">
                  Learning through consistency
                </span>
              </div>
            </motion.div>

            {/* Philosophy / Highlight Block */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...transitionBase, delay: shouldReduceMotion ? 0 : 0.3 }}
              className="p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-[#211813] to-[#15100D] border-l-2 border-l-[#E69A3A] border-t border-r border-b border-[rgba(246,184,95,0.16)]"
            >
              <span className="text-xs font-mono tracking-widest uppercase text-[#AFA49A] block mb-2.5">
                HOW I APPROACH THE WORK
              </span>
              <p className="text-sm sm:text-base text-[#F3EEE8] leading-relaxed m-0 font-normal">
                I try to build with clarity, learn from mistakes, and improve through iteration. I care about making interfaces understandable, systems useful, and every project a chance to become a better developer.
              </p>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
