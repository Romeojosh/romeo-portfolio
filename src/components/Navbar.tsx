import React, { useState, useEffect } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

interface NavLink {
  label: string;
  href: string;
}

const NAV_LINKS: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Discipline", href: "#discipline" },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Monitor scroll position for subtle opacity/border change
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll(); // Initial check
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-4 md:top-5 inset-x-0 z-50 px-4 pointer-events-none">
      <nav
        aria-label="Main Navigation"
        className={`max-w-[1000px] mx-auto rounded-full px-4 sm:px-5 py-2.5 flex items-center justify-between pointer-events-auto transition-all duration-300 ${
          isScrolled
            ? "bg-[rgba(24,26,29,0.95)] border border-[rgba(255,255,255,0.08)] shadow-2xl shadow-black/50 backdrop-blur-md"
            : "bg-[rgba(24,26,29,0.85)] border border-[rgba(255,255,255,0.08)] shadow-lg shadow-black/30 backdrop-blur-md hover:border-[rgba(230,154,58,0.3)]"
        }`}
      >
        {/* Left: RJ Monogram & Status indicator */}
        <a
          href="#hero"
          aria-label="Romeo Josh C. Requiron Home"
          data-cursor="link"
          onClick={closeMobileMenu}
          className="flex items-center gap-2 group rounded-full focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#E69A3A]"
        >
          <div className="w-8 h-8 rounded-full bg-[#22252A] border border-[rgba(255,255,255,0.08)] flex items-center justify-center font-display font-extrabold text-sm tracking-tighter text-[#F3F2EE] group-hover:border-[#E69A3A] group-hover:text-[#E69A3A] transition-colors">
            RJ
          </div>
          <span
            className="w-1.5 h-1.5 rounded-full bg-[#E69A3A] animate-pulse"
            aria-hidden="true"
          />
        </a>

        {/* Center: Desktop Navigation Links */}
        <ul className="hidden md:flex items-center gap-7 text-xs font-mono tracking-widest uppercase text-[#A6A8AD]">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                data-cursor="link"
                className="hover:text-[#F6B85F] transition-colors py-1 focus-visible:outline-none focus-visible:text-[#F6B85F] focus-visible:ring-1 focus-visible:ring-[#E69A3A] rounded"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right: CTA Button (Desktop) & Mobile Hamburger Toggle */}
        <div className="flex items-center gap-2">
          <a
            href="#contact"
            data-cursor="link"
            onClick={closeMobileMenu}
            className="hidden sm:flex items-center gap-1.5 px-4 py-1.5 text-xs font-mono uppercase tracking-wider rounded-full bg-[#22252A] border border-[rgba(255,255,255,0.08)] text-[#F3F2EE] hover:border-[#E69A3A] hover:text-[#F6B85F] hover:bg-[#E69A3A]/10 transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#E69A3A]"
          >
            <span>Let's Talk</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#E69A3A]" aria-hidden="true" />
          </a>

          {/* Mobile Menu Trigger Button (below md) */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-nav-menu"
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="md:hidden flex items-center justify-center w-8 h-8 rounded-full bg-[#22252A] border border-[rgba(255,255,255,0.08)] text-[#F3F2EE] hover:border-[#E69A3A] hover:text-[#E69A3A] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#E69A3A]"
          >
            {isMobileMenuOpen ? (
              <X className="w-4 h-4" aria-hidden="true" />
            ) : (
              <Menu className="w-4 h-4" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu Container */}
      {isMobileMenuOpen && (
        <div
          id="mobile-nav-menu"
          className="md:hidden max-w-[1000px] mx-auto mt-2 pointer-events-auto transition-all animate-in fade-in slide-in-from-top-2 duration-200"
        >
          <div className="bg-[rgba(24,26,29,0.95)] backdrop-blur-xl border border-[rgba(255,255,255,0.08)] rounded-2xl p-5 shadow-lg space-y-4">
            <ul className="space-y-3 font-mono text-xs uppercase tracking-widest text-[#A6A8AD]">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    data-cursor="link"
                    onClick={closeMobileMenu}
                    className="block py-2 px-3 rounded-lg text-[#F3EEE8] hover:text-[#E69A3A] hover:bg-[#22252A] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#E69A3A]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="pt-3 border-t border-[rgba(246,184,95,0.16)] sm:hidden">
              <a
                href="#contact"
                data-cursor="link"
                onClick={closeMobileMenu}
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 text-xs font-mono uppercase tracking-wider rounded-xl bg-[#22252A] border border-[rgba(246,184,95,0.2)] text-[#F3EEE8] hover:border-[#E69A3A] hover:text-[#F6B85F] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#E69A3A]"
              >
                <span>Let's Talk</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#E69A3A]" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
