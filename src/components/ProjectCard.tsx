import React from "react";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "../data/projects";

export interface ProjectCardProps {
  project: Project;
  index: number;
  isReversed?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  isReversed = false,
}) => {
  const isBronzeAccent = project.accent === "bronze";
  const projectNumber = project.number || String(index + 1).padStart(2, "0");

  return (
    <article
      aria-labelledby={`project-title-${project.id}`}
      data-cursor="view"
      className="p-6 sm:p-8 lg:p-12 rounded-3xl bg-[#181A1D] border border-[rgba(255,255,255,0.08)] hover:border-[#E69A3A]/40 transition-all duration-300 group relative overflow-hidden shadow-lg"
    >
      {/* Subtle ambient hover highlight */}
      <div
        aria-hidden="true"
        className="absolute -top-24 -right-24 w-72 h-72 bg-[#E69A3A]/5 rounded-full blur-[100px] pointer-events-none group-hover:bg-[#E69A3A]/10 transition-all duration-500"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
        
        {/* Project Information Column (~6 cols on desktop) */}
        <div
          className={`lg:col-span-6 space-y-6 ${
            isReversed ? "order-1 lg:order-2" : "order-1"
          }`}
        >
          {/* Header Metadata: Index, Category, Year */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-mono text-[#E69A3A] font-semibold tracking-wider">
              [{projectNumber}]
            </span>
            <span
              className={`px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest ${
                isBronzeAccent
                  ? "bg-[#A86F2C]/15 text-[#F6B85F] border border-[#A86F2C]/45"
                  : "bg-[#E69A3A]/10 text-[#F6B85F] border border-[#E69A3A]/30"
              }`}
            >
              {project.category}
            </span>
            <span className="text-xs font-mono text-[#74787F] tracking-widest">
              // {project.year}
            </span>
          </div>

          {/* Project Title */}
          <h3
            id={`project-title-${project.id}`}
            className="text-3xl sm:text-4xl font-extrabold font-display uppercase tracking-tight text-[#F3EEE8] group-hover:text-[#E69A3A] transition-colors duration-200 m-0"
          >
            {project.title}
          </h3>

          {/* Project Description */}
          <p className="text-sm sm:text-base text-[#A6A8AD] font-light leading-relaxed m-0">
            {project.description}
          </p>

          {/* Technology Badges */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-md bg-[#22252A] border border-[rgba(255,255,255,0.08)] text-xs font-mono text-[#F3F2EE] hover:border-[#E69A3A]/40 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* External Action Links (rendered only if valid URLs are provided) */}
          {(project.liveUrl || project.githubUrl) && (
            <div className="pt-2 flex flex-wrap items-center gap-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  data-cursor="link"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#E69A3A] hover:text-[#F6B85F] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#E69A3A] rounded py-1"
                >
                  <span>View Project</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  data-cursor="link"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#AFA49A] hover:text-[#F3EEE8] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#E69A3A] rounded py-1"
                >
                  <span>Source Code</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              )}
            </div>
          )}
        </div>

        {/* Visual Mockup Column (~6 cols on desktop) */}
        <div
          className={`lg:col-span-6 ${
            isReversed ? "order-2 lg:order-1" : "order-2"
          }`}
        >
          <div className="relative rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.08)] bg-[#22252A] aspect-[16/10] p-5 sm:p-6 flex flex-col justify-between group-hover:border-[#E69A3A]/30 transition-all duration-300">
            
            {/* Mockup Header */}
            <div className="flex items-center justify-between border-b border-[rgba(246,184,95,0.16)] pb-3.5">
              <span className="text-[11px] font-mono tracking-widest text-[#E69A3A] uppercase truncate max-w-[80%]">
                {project.mockup.headerTag}
              </span>
              <div className="flex items-center gap-2">
                <span
                  className={`w-2 h-2 rounded-full ${
                    isBronzeAccent ? "bg-[#A86F2C]" : "bg-[#E69A3A]"
                  }`}
                  aria-hidden="true"
                />
                <span className="text-[10px] font-mono text-[#74787F] uppercase hidden sm:inline-block">
                  {project.mockup.statusBadge}
                </span>
              </div>
            </div>

            {/* Illustrative Architecture Blueprint (Factual Functional Flow) */}
            <div className="space-y-2.5 py-4">
              {project.mockup.workflowSteps.map((step, stepIndex) => (
                <div
                  key={step.label}
                  className="p-3 bg-[#111214]/80 rounded-lg border border-[rgba(255,255,255,0.08)] flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 text-xs font-mono"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-[#E69A3A]">
                      0{stepIndex + 1} //
                    </span>
                    <span className="text-[#F3EEE8] font-medium tracking-wide">
                      {step.label}
                    </span>
                  </div>
                  <span className="text-[#AFA49A] text-[11px] font-sans font-light truncate max-w-xs">
                    {step.description}
                  </span>
                </div>
              ))}
            </div>

            {/* Mockup Technical Footer */}
            <div className="text-[10px] font-mono text-[#AFA49A]/60 tracking-widest uppercase border-t border-[rgba(246,184,95,0.1)] pt-3 truncate">
              {project.mockup.systemArchitecture}
            </div>

            {/* Subtle Technical Corner Hairlines */}
            <div
              className="absolute top-2 left-2 w-2.5 h-2.5 border-t border-l border-[#E69A3A]/30 pointer-events-none"
              aria-hidden="true"
            />
            <div
              className="absolute top-2 right-2 w-2.5 h-2.5 border-t border-r border-[#E69A3A]/30 pointer-events-none"
              aria-hidden="true"
            />
            <div
              className="absolute bottom-2 left-2 w-2.5 h-2.5 border-b border-l border-[#E69A3A]/30 pointer-events-none"
              aria-hidden="true"
            />
            <div
              className="absolute bottom-2 right-2 w-2.5 h-2.5 border-b border-r border-[#E69A3A]/30 pointer-events-none"
              aria-hidden="true"
            />
          </div>
        </div>

      </div>
    </article>
  );
};

export default ProjectCard;
