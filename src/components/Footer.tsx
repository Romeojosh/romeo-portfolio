import React from "react";
import { ArrowUp } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-[rgba(255,255,255,0.08)] bg-[#111214] px-4 py-8 sm:px-6 sm:py-10 lg:px-12">
      <div className="portfolio-container flex flex-col gap-8 sm:gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="m-0 font-display text-sm font-bold uppercase tracking-[0.12em] text-[#F3F2EE]">
            Romeo Josh C. Requiron
          </p>
          <p className="mt-2 mb-0 text-xs font-mono uppercase tracking-[0.14em] text-[#74787F]">
            Developer • Student • Athlete
          </p>
        </div>

        <p className="m-0 text-xs font-mono uppercase tracking-[0.2em] text-[#A86F2C]">
          Code. Run. Repeat.
        </p>

        <div className="flex flex-wrap items-center gap-5 text-xs font-mono uppercase tracking-[0.12em] text-[#74787F]">
          <span>© 2026 Romeo Josh C. Requiron</span>
          <a
            href="#hero"
            className="inline-flex items-center gap-1.5 rounded-sm text-[#A6A8AD] transition-colors hover:text-[#E69A3A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E69A3A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#111214]"
            aria-label="Back to top"
          >
            Back to top <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
