import React from "react";
import { PageShell } from "./components/PageShell";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";

interface SectionPlaceholder {
  id: string;
  number: string;
  name: string;
}

const PLACEHOLDER_SECTIONS: SectionPlaceholder[] = [
  { id: "work", number: "03", name: "Work" },
  { id: "skills", number: "04", name: "Skills" },
  { id: "discipline", number: "05", name: "Discipline" },
  { id: "contact", number: "06", name: "Contact" },
];

export const App: React.FC = () => {
  return (
    <PageShell>
      {/* Real Hero Section */}
      <Hero />

      {/* Real About Section */}
      <About />

      {/* Remaining Section Placeholders */}
      {PLACEHOLDER_SECTIONS.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className="min-h-[85vh] flex items-center border-b border-[rgba(246,184,95,0.12)] scroll-mt-24 md:scroll-mt-28 py-20"
        >
          <div className="portfolio-container w-full">
            <div className="surface-base border border-[rgba(246,184,95,0.16)] p-8 sm:p-12 md:p-16 relative group transition-all duration-300 hover:border-[#E69A3A]/30">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[rgba(246,184,95,0.12)] pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#E69A3A]" aria-hidden="true" />
                  <span className="type-tech-label text-xs text-[#E69A3A]">
                    SECTION {section.number} // PLACEHOLDER
                  </span>
                </div>
                <span className="type-micro-label text-[#AFA49A]">
                  ID: #{section.id}
                </span>
              </div>

              <h2 className="type-display text-3xl sm:text-4xl md:text-5xl text-[#F3EEE8]">
                {section.name}
              </h2>

              <p className="type-body-muted text-sm mt-3 max-w-lg">
                Phase 3 page shell placeholder. Final content and layout will be implemented in subsequent phases.
              </p>
            </div>
          </div>
        </section>
      ))}
    </PageShell>
  );
};

export default App;