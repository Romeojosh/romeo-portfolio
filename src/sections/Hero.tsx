import React from "react";
import { motion, useReducedMotion } from "motion/react";
import romeoDeveloperImg from "../assets/portraits/romeo-developer.png";
import romeoAthleteImg from "../assets/portraits/romeo-athlete.png";
import { PortraitReveal } from "../components/PortraitReveal";
import { TextScramble } from "../components/effects/TextScramble";
import { AnimatedBackground } from "../components/effects/AnimatedBackground";
import { ParticleField } from "../components/effects/ParticleField";

export const Hero: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  // Animation variants conforming to subtle motion requirements
  const transitionBase = {
    duration: shouldReduceMotion ? 0 : 0.6,
    ease: [0.16, 1, 0.3, 1] as const,
  };

  return (
    <section
      id="hero"
      aria-label="Hero Introduction"
      className="relative min-h-[92vh] lg:min-h-screen pt-28 md:pt-36 pb-16 md:pb-24 px-4 sm:px-6 lg:px-12 flex items-center overflow-clip bg-[#111214]"
    >
      <AnimatedBackground />
      <ParticleField />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-[2] grain-overlay opacity-[0.07]" />

      {/* 12-Column Responsive Layout Container */}
      <div className="max-w-[1400px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Hero Content Column (~7 cols on desktop) */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6 sm:space-y-7">
          
          {/* Hero Eyebrow / Status Pill */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={transitionBase}
            className="theme-hero-eyebrow inline-flex items-center gap-3 self-start px-3.5 py-1.5 rounded-full bg-[#181A1D] border border-[rgba(255,255,255,0.08)] text-[#A6A8AD] text-[11px] font-mono tracking-widest uppercase shadow-sm"
          >
            <span
              className="theme-hero-eyebrow-dot w-2 h-2 rounded-full bg-[#E69A3A] shadow-[0_0_8px_#E69A3A] shrink-0"
              aria-hidden="true"
            />
            <TextScramble
              text="PORTFOLIO / 2026 • ATHLETE & TECHNOLOGIST"
              trigger="both"
              className="truncate"
            />
          </motion.div>

          {/* Hero Heading & Role Label */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transitionBase, delay: shouldReduceMotion ? 0 : 0.1 }}
          >
            <h1 className="m-0 font-display text-5xl font-extrabold uppercase leading-[0.88] tracking-
  tight text-[#F3F2EE] sm:text-7xl md:text-8xl lg:text-[7.25rem] xl:text-[7.75rem]">
    ROMEO JOSH C.
    <br />
    <span className="theme-hero-gradient bg-gradient-to-r from-[#E69A3A] via-[#F6B85F] to-[#FFFB3C] bg-clip-text
    text-transparent drop-shadow-sm drop-shadow-[0_0_28px_rgba(246,184,95,0.4)]">
      REQUIRON
    </span>
  </h1>

            {/* Role Label */}
            <p className="text-xs sm:text-sm font-mono tracking-[0.25em] text-[#AFA49A] uppercase mt-4 sm:mt-5">
              IT STUDENT • ATHLETE • ASPIRING DEVELOPER
            </p>
          </motion.div>

          {/* Hero Description */}
          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transitionBase, delay: shouldReduceMotion ? 0 : 0.2 }}
            className="theme-hero-secondary text-base sm:text-lg text-[#AFA49A] font-light max-w-xl leading-relaxed"
          >
            I build digital experiences where design, technology, and performance meet. Engineering high-resilience web architectures shaped by endurance athletics and precise design execution.
          </motion.p>

          {/* Hero CTA Buttons */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transitionBase, delay: shouldReduceMotion ? 0 : 0.3 }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <a
              href="#work"
              data-cursor="link"
              className="theme-hero-focus theme-hero-primary-cta px-7 py-3.5 rounded-full bg-[#E69A3A] hover:bg-[#F6B85F] text-[#111214] font-display font-bold text-sm tracking-wide transition-all duration-200 shadow-[0_0_25px_rgba(230,154,58,0.25)] hover:shadow-[0_0_35px_rgba(246,184,95,0.4)] flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E69A3A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#111214]"
            >
              <span>View Projects</span>
              <span aria-hidden="true">↓</span>
            </a>
            <a
              href="#about"
              data-cursor="link"
              className="theme-hero-focus theme-hero-secondary-cta px-7 py-3.5 rounded-full border border-[rgba(255,255,255,0.08)] hover:border-[#E69A3A]/60 hover:bg-[#E69A3A]/5 text-[#F3F2EE] font-display text-sm tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E69A3A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#111214]"
            >
              About Me
            </a>
          </motion.div>

          {/* Factual Identity Metadata */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transitionBase, delay: shouldReduceMotion ? 0 : 0.35 }}
            className="theme-hero-metadata flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-[rgba(246,184,95,0.16)] pt-6 text-[10px] font-mono uppercase tracking-[0.16em] text-[#A6A8AD] sm:text-[11px]"
          >
            <span className="text-[#F6B85F]">ILOILO, PH</span>
            <span className="text-[#74787F]" aria-hidden="true">|</span>
            <span>WESTERN INSTITUTE OF TECHNOLOGY</span>
            <span className="text-[#74787F]" aria-hidden="true"></span>

          </motion.div>
        </div>

        {/* Right Hero Portrait (~5 cols on desktop) */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ ...transitionBase, duration: shouldReduceMotion ? 0 : 0.7, delay: shouldReduceMotion ? 0 : 0.2 }}
          className="lg:col-span-5 flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-[440px]">
            {/* Technical Caption Above */}
            <div className="theme-hero-caption text-[10px] font-mono text-[#AFA49A]/60 tracking-widest uppercase mb-2.5 px-1">
              [ FIG. 01 — DUAL IDENTITY ]
            </div>

            {/* Interactive Portrait Reveal Frame */}
            <PortraitReveal
              developerSrc={romeoDeveloperImg}
              athleteSrc={romeoAthleteImg}
              developerAlt="Romeo Josh C. Requiron — Technologist & Developer Portrait"
              athleteAlt="Romeo Josh C. Requiron — Western Institute of Technology Athlete Portrait"
            />

            {/* Bottom Captions */}
            <div className="theme-hero-caption flex items-center justify-between text-[11px] font-mono text-[#AFA49A]/70 tracking-widest uppercase mt-3 px-1">
              <span className="text-[#A86F2C]">WIT VARSITY // LENS</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
