import React, { useCallback, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { TiltCard } from "./TiltCard";

export interface CarouselProject {
  id: string;
  number: string;
  title: string;
  category: string;
  subtitle?: string;
  description: string;
  technologies?: string[];
  links?: Array<{ label: string; href: string }>;
  visualLabel?: string;
}

interface ProjectCarouselProps {
  items: CarouselProject[];
}

const positionFor = (index: number, activeIndex: number, itemCount: number) => {
  const offset = (index - activeIndex + itemCount) % itemCount;
  if (offset === 0) return 0;
  if (offset === 1) return 1;
  if (offset === itemCount - 1) return -1;
  return 2;
};

export const ProjectCarousel: React.FC<ProjectCarouselProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const selectCard = useCallback((index: number) => {
    setActiveIndex((index + items.length) % items.length);
  }, [items.length]);

  const move = (direction: -1 | 1) => selectCard(activeIndex + direction);

  if (items.length === 0) return null;

  const activeProject = items[activeIndex];

  return (
    <div className="relative mx-auto w-full max-w-6xl">
      <div className="relative h-[32rem] overflow-visible sm:h-[36rem] lg:h-[40rem]" aria-label="Project carousel">
        {items.map((project, index) => {
          const position = positionFor(index, activeIndex, items.length);
          const isActive = position === 0;
          const isSideCard = position === -1 || position === 1;

          return (
            <motion.article
              key={project.id}
              role={isActive ? undefined : "button"}
              tabIndex={isActive ? -1 : position === -1 || position === 1 ? 0 : -1}
              aria-label={`${project.title}. Select project.`}
              data-cursor={isActive ? "view" : "link"}
              onClick={() => {
                if (!isActive) selectCard(index);
              }}
              onKeyDown={(event) => {
                if (!isActive && (event.key === "Enter" || event.key === " ")) {
                  event.preventDefault();
                  selectCard(index);
                }
              }}
              className={`absolute left-1/2 top-1/2 h-[32rem] w-[calc(100%-3rem)] rounded-3xl border bg-[#181A1D] p-4 outline-none sm:h-[34rem] sm:w-[min(58vw,600px)] sm:p-5 lg:h-[38rem] ${
                isActive
                  ? "border-[#E69A3A]/60 shadow-[0_10px_15px_rgba(0,0,0,0.32)]"
                  : "border-[rgba(255,255,255,0.08)] opacity-60 hover:border-[#A86F2C]/60 focus-visible:ring-2 focus-visible:ring-[#A86F2C]"
              }`}
              initial={false}
              animate={{
                x: position === -1 ? "-110%" : position === 1 ? "10%" : "-50%",
                y: "-50%",
                scale: isActive ? 1 : 0.85,
                rotateY: position === -1 ? 20 : position === 1 ? -20 : 0,
                opacity: isSideCard || isActive ? 1 : 0,
              }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.35, ease: [0.16, 1, 0.3, 1] }}
              style={{
                zIndex: isActive ? 30 : isSideCard ? 20 : 1,
                transformPerspective: 1100,
                pointerEvents: isSideCard || isActive ? "auto" : "none",
              }}
            >
              <div className="flex h-full flex-col gap-4">
                <div className="flex items-start justify-between gap-4">
                  <span className="max-w-[80%] text-[10px] font-mono uppercase tracking-[0.18em] text-[#A86F2C]">{project.category}</span>
                  <span className="shrink-0 text-[10px] font-mono tracking-[0.14em] text-[#74787F]">{project.number}</span>
                </div>

                <div data-cursor={isActive ? "view" : "link"} className="shrink-0">
                  {isActive ? (
                    <TiltCard className="relative aspect-[16/8] w-full overflow-hidden rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[#22252A]">
                      <ProjectVisual project={project} />
                    </TiltCard>
                  ) : (
                    <div className="relative aspect-[16/8] w-full overflow-hidden rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[#22252A]">
                      <ProjectVisual project={project} />
                    </div>
                  )}
                </div>

                <div className="flex min-h-0 flex-1 flex-col">
                  <p className="mb-2 text-[10px] font-mono uppercase tracking-[0.16em] text-[#E69A3A]">{project.number} / {project.subtitle ?? project.category}</p>
                  <h3 className="m-0 font-display text-2xl font-bold uppercase tracking-tight text-[#F3F2EE] sm:text-3xl">{project.title}</h3>

                  {isActive ? (
                    <>
                      <p className="mt-3 max-w-3xl text-sm leading-6 text-[#A6A8AD]">{project.description}</p>
                      {project.technologies && project.technologies.length > 0 && (
                        <div className="mt-5 flex flex-wrap gap-2">
                          {project.technologies.map((technology) => <span key={technology} className="rounded-md border border-[rgba(255,255,255,0.08)] bg-[#22252A] px-3 py-1.5 text-xs font-mono text-[#F3F2EE]">{technology}</span>)}
                        </div>
                      )}
                      {project.links && project.links.length > 0 && (
                        <div className="mt-auto flex flex-wrap gap-5 pt-5">
                          {project.links.map((link) => (
                            <a key={link.href} href={link.href} target="_blank" rel="noreferrer" data-cursor="link" className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#E69A3A] transition-colors hover:text-[#F6B85F] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#E69A3A]">
                              {link.label} <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                            </a>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <p className="mt-3 text-xs font-mono uppercase tracking-[0.14em] text-[#74787F]">Select to view project details</p>
                  )}
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>

      <div className="mt-4 flex items-center justify-center gap-5 text-[10px] font-mono uppercase tracking-[0.16em] text-[#74787F]">
        <button type="button" onClick={() => move(-1)} data-cursor="link" aria-label="Previous project" className="inline-flex items-center gap-2 px-2 py-2 text-[#A6A8AD] transition-colors hover:text-[#F6B85F] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#E69A3A]">
          <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" /> PREV
        </button>
        <span className="min-w-16 text-center text-[#E69A3A]">{activeProject.number} / {String(items.length).padStart(2, "0")}</span>
        <button type="button" onClick={() => move(1)} data-cursor="link" aria-label="Next project" className="inline-flex items-center gap-2 px-2 py-2 text-[#A6A8AD] transition-colors hover:text-[#F6B85F] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#E69A3A]">
          NEXT <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
};

const ProjectVisual: React.FC<{ project: CarouselProject }> = ({ project }) => (
  <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(circle_at_50%_35%,rgba(230,154,58,0.14),transparent_62%)] p-6 sm:p-10">
    <div className="w-full max-w-2xl text-center">
      <span className="mb-3 block text-[10px] font-mono uppercase tracking-[0.2em] text-[#E69A3A]">{project.visualLabel ?? "PROJECT STUDY"}</span>
      <span className="block font-display text-3xl font-bold uppercase tracking-tight text-[#F3F2EE] sm:text-6xl">{project.title}</span>
    </div>
  </div>
);

export default ProjectCarousel;
