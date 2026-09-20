import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { PROJECTS, SECONDARY_PROJECTS } from "../data/projects";
import { TextScramble } from "../components/effects/TextScramble";
import { ProjectCarousel, type CarouselProject } from "../components/effects/ProjectCarousel";

export const Projects: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const transitionBase = {
    duration: shouldReduceMotion ? 0 : 0.6,
    ease: [0.16, 1, 0.3, 1] as const,
  };

  const carouselProjects: CarouselProject[] = [
    ...PROJECTS.map((project) => ({
      id: project.id,
      number: project.number,
      title: project.title,
      category: project.category,
      subtitle: project.mockup.sublabel,
      description: project.description,
      technologies: project.technologies,
      visualLabel: project.mockup.headerTag,
      links: [
        ...(project.liveUrl ? [{ label: "View Project", href: project.liveUrl }] : []),
        ...(project.githubUrl ? [{ label: "GitHub", href: project.githubUrl }] : []),
      ],
    })),
    ...SECONDARY_PROJECTS.map((project, index) => ({
      id: project.id,
      number: String(PROJECTS.length + index + 1).padStart(2, "0"),
      title: project.title,
      category: project.category,
      description: project.description,
      visualLabel: project.category === "UI/UX PROTOTYPE" ? "INTERFACE STUDY" : "APP PROJECT",
      links: [
        ...(project.liveUrl ? [{ label: "Live Site", href: project.liveUrl }] : []),
        ...(project.figmaUrl ? [{ label: "Figma", href: project.figmaUrl }] : []),
      ],
    })),
  ];

  return (
    <section
      id="work"
      aria-label="Selected Work"
      className="relative overflow-visible border-t border-[rgba(255,255,255,0.08)] bg-[#111214] px-4 py-20 scroll-mt-24 sm:px-6 sm:py-24 md:scroll-mt-28 md:py-28 lg:pl-20"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-12 flex flex-col justify-between gap-4 sm:mb-16 md:flex-row md:items-end">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={transitionBase}
          >
            <div className="mb-3 flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#E69A3A]">
              <span>[ 02 ]</span>
              <span className="h-px w-8 bg-[#E69A3A]/40" aria-hidden="true" />
              <TextScramble text="Engineered Products" trigger="both" className="text-[#A6A8AD]" />
            </div>
            <h2 className="m-0 font-display text-4xl font-extrabold uppercase tracking-tight text-[#F3EEE8] sm:text-5xl lg:text-6xl">
              SELECTED <span className="text-gradient-amber-lemon inline-block">WORK.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ ...transitionBase, delay: shouldReduceMotion ? 0 : 0.15 }}
            className="text-xs font-mono uppercase tracking-widest text-[#74787F]"
          >
            PRODUCTION DEPLOYMENTS // 2025 — 2026
          </motion.div>
        </div>

        <div className="mb-6 flex items-center gap-3 text-[11px] font-mono uppercase tracking-[0.22em] text-[#74787F]">
          <span className="text-[#E69A3A]">FEATURED PROJECTS</span>
          <span className="h-px w-16 bg-[rgba(255,255,255,0.08)]" aria-hidden="true" />
          <span>INTERACTIVE SPLIT SHOWCASE</span>
        </div>

        <ProjectCarousel items={carouselProjects} />
      </div>
    </section>
  );
};

export default Projects;
