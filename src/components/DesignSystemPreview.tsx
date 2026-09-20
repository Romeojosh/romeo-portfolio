import React from "react";
import { ArrowUpRight, Code2, Flame, Layers, Sparkles, Terminal } from "lucide-react";
import { DESIGN_TOKENS } from "../tokens";

export const DesignSystemPreview: React.FC = () => {
  const colorList = [
    { name: "Background", token: "--color-background", value: DESIGN_TOKENS.colors.background, textDark: false },
    { name: "Surface", token: "--color-surface", value: DESIGN_TOKENS.colors.surface, textDark: false },
    { name: "Elevated", token: "--color-elevated", value: DESIGN_TOKENS.colors.elevated, textDark: false },
    { name: "Amber", token: "--color-amber", value: DESIGN_TOKENS.colors.amber, textDark: true },
    { name: "Gold", token: "--color-gold", value: DESIGN_TOKENS.colors.gold, textDark: true },
    { name: "Athletic Red", token: "--color-athletic-red", value: DESIGN_TOKENS.colors.athleticRed, textDark: false },
    { name: "Deep Red", token: "--color-deep-red", value: DESIGN_TOKENS.colors.deepRed, textDark: false },
    { name: "Text Primary", token: "--color-text-primary", value: DESIGN_TOKENS.colors.textPrimary, textDark: true },
    { name: "Text Secondary", token: "--color-text-secondary", value: DESIGN_TOKENS.colors.textSecondary, textDark: true },
    { name: "Hairline", token: "--color-hairline", value: DESIGN_TOKENS.colors.hairline, textDark: false, isBorder: true },
  ];

  return (
    <div className="min-h-screen bg-[#0B0908] text-[#F3EEE8] relative selection:bg-[#E69A3A] selection:text-[#0B0908]">
      {/* Subtle Ambient Background Lighting */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] ambient-glow-amber opacity-60" />
        <div className="absolute top-1/2 -right-40 w-[600px] h-[600px] ambient-glow-red opacity-40" />
      </div>

      <div className="relative portfolio-container py-12 md:py-20">
        {/* Header telemetry and title */}
        <header className="border-hairline-b pb-8 mb-12">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 bg-[#E69A3A] rounded-full animate-pulse" />
              <span className="type-tech-label text-[#E69A3A]">
                PHASE 02 // DESIGN SYSTEM SPECIFICATION
              </span>
            </div>
            <span className="type-metadata">
              TOKENS &bull; UTILITIES &bull; PREVIEW
            </span>
          </div>

          <h1 className="type-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#F3EEE8]">
            ROMEO <span className="text-[#E69A3A]">JOSH</span>
          </h1>

          <p className="type-body text-lg sm:text-xl text-[#AFA49A] mt-3 max-w-2xl">
            Developer &bull; Athlete &bull; Creator
          </p>
        </header>

        <div className="space-y-16">
          {/* SECTION 1: COLOR SWATCHES */}
          <section className="space-y-6">
            <div className="flex items-center justify-between border-hairline-b pb-3">
              <div className="flex items-center gap-3">
                <Layers className="w-4 h-4 text-[#E69A3A]" />
                <h2 className="type-section-heading text-xl sm:text-2xl text-[#F3EEE8]">
                  01 / Design Tokens — Colors
                </h2>
              </div>
              <span className="type-micro-label text-[#AFA49A]">10 PALETTE TOKENS</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {colorList.map((c) => (
                <div
                  key={c.token}
                  className="surface-base border-hairline p-3 flex flex-col justify-between h-36 relative group transition-all duration-300 hover:border-[#E69A3A]/40"
                >
                  <div
                    className="w-full h-14 border border-white/5 relative"
                    style={{
                      backgroundColor: c.isBorder ? "transparent" : c.value,
                      borderColor: c.isBorder ? c.value : undefined,
                      borderWidth: c.isBorder ? "2px" : undefined,
                    }}
                  >
                    {c.isBorder && (
                      <span className="absolute inset-0 flex items-center justify-center text-[10px] font-mono text-[#AFA49A]">
                        Hairline 16%
                      </span>
                    )}
                  </div>
                  <div>
                    <div className="type-tech-label text-xs text-[#F3EEE8] truncate">{c.name}</div>
                    <div className="type-micro-label text-[#AFA49A] text-[10px] mt-0.5 font-mono truncate">
                      {c.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 2: TYPOGRAPHY HIERARCHY */}
          <section className="space-y-6">
            <div className="flex items-center justify-between border-hairline-b pb-3">
              <div className="flex items-center gap-3">
                <Code2 className="w-4 h-4 text-[#E69A3A]" />
                <h2 className="type-section-heading text-xl sm:text-2xl text-[#F3EEE8]">
                  02 / Typography Utilities
                </h2>
              </div>
              <span className="type-micro-label text-[#AFA49A]">SPACE GROTESK &bull; PLUS JAKARTA &bull; SPACE MONO</span>
            </div>

            <div className="surface-base border-hairline divide-y divide-[#F6B85F]/15">
              {/* Display Heading */}
              <div className="p-6 space-y-2">
                <span className="type-micro-label text-[#E69A3A]">Display Heading (.type-display)</span>
                <p className="type-display text-3xl sm:text-5xl md:text-6xl text-[#F3EEE8]">
                  ROMEO JOSH
                </p>
                <p className="type-metadata text-[11px] text-[#AFA49A]">
                  Font: Space Grotesk Bold &bull; Tracking: -0.035em &bull; Line-height: 0.95 &bull; Uppercase
                </p>
              </div>

              {/* Section Heading */}
              <div className="p-6 space-y-2">
                <span className="type-micro-label text-[#E69A3A]">Section Heading (.type-section-heading)</span>
                <h3 className="type-section-heading text-2xl sm:text-3xl md:text-4xl text-[#F3EEE8]">
                  Architectural Precision Meets Athletic Resilience
                </h3>
                <p className="type-metadata text-[11px] text-[#AFA49A]">
                  Font: Space Grotesk Bold &bull; Tracking: -0.025em &bull; Line-height: 1.1
                </p>
              </div>

              {/* Body Text */}
              <div className="p-6 space-y-2">
                <span className="type-micro-label text-[#E69A3A]">Body Text (.type-body)</span>
                <p className="type-body max-w-3xl text-base sm:text-lg">
                  Developer &bull; Athlete &bull; Creator. Building high-performance systems and cinematic web interfaces with architectural restraint and kinetic discipline.
                </p>
                <p className="type-metadata text-[11px] text-[#AFA49A]">
                  Font: Plus Jakarta Sans Regular &bull; 16px/1.65 &bull; Text Primary (#F3EEE8)
                </p>
              </div>

              {/* Muted Body Text */}
              <div className="p-6 space-y-2">
                <span className="type-micro-label text-[#E69A3A]">Muted Body Text (.type-body-muted)</span>
                <p className="type-body-muted max-w-3xl text-sm sm:text-base">
                  Every section is calculated for maximum contrast and zero fluff. Dark obsidian foundation accented with warm amber and athletic red.
                </p>
                <p className="type-metadata text-[11px] text-[#AFA49A]">
                  Font: Plus Jakarta Sans Regular &bull; 15px/1.6 &bull; Text Secondary (#AFA49A)
                </p>
              </div>

              {/* Technical Label */}
              <div className="p-6 space-y-2">
                <span className="type-micro-label text-[#E69A3A]">Technical Label (.type-tech-label)</span>
                <p className="type-tech-label text-sm text-[#F3EEE8]">
                  SYS_BUILD_SPEC // STACK: REACT + TS + VITE + TAILWIND + MOTION
                </p>
                <p className="type-metadata text-[11px] text-[#AFA49A]">
                  Font: Space Mono Medium &bull; 13px &bull; Tracking: 0.08em &bull; Uppercase
                </p>
              </div>

              {/* Micro Label */}
              <div className="p-6 space-y-2">
                <span className="type-micro-label text-[#E69A3A]">Micro Label (.type-micro-label)</span>
                <p className="type-micro-label text-xs text-[#E69A3A]">
                  COORDINATES // 14.5995° N, 120.9842° E &bull; STATUS: ONLINE
                </p>
                <p className="type-metadata text-[11px] text-[#AFA49A]">
                  Font: Space Mono Medium &bull; 11px &bull; Tracking: 0.12em &bull; Uppercase
                </p>
              </div>

              {/* Uppercase Metadata */}
              <div className="p-6 space-y-2">
                <span className="type-micro-label text-[#E69A3A]">Uppercase Metadata (.type-metadata)</span>
                <p className="type-metadata text-xs">
                  RELEASE: VER 2.0.0 &bull; REPO: ROMEO-PORTFOLIO &bull; ENGINE: VITE 8
                </p>
                <p className="type-metadata text-[11px] text-[#AFA49A]">
                  Font: Space Mono Medium &bull; 12px &bull; Tracking: 0.06em &bull; Text Secondary
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 3: BUTTON STYLES */}
          <section className="space-y-6">
            <div className="flex items-center justify-between border-hairline-b pb-3">
              <div className="flex items-center gap-3">
                <Sparkles className="w-4 h-4 text-[#E69A3A]" />
                <h2 className="type-section-heading text-xl sm:text-2xl text-[#F3EEE8]">
                  03 / Reusable Button Styles
                </h2>
              </div>
              <span className="type-micro-label text-[#AFA49A]">INTERACTIVE TOKENS</span>
            </div>

            <div className="surface-base border-hairline p-6 md:p-8">
              <div className="flex flex-wrap items-center gap-6">
                {/* Primary Button */}
                <button type="button" className="btn-primary">
                  <span>Explore Portfolio</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                {/* Secondary Button */}
                <button type="button" className="btn-secondary">
                  <span>View Technical Spec</span>
                  <Terminal className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 pt-6 border-hairline-t">
                <div>
                  <span className="type-micro-label text-[#E69A3A]">Primary Button Specs:</span>
                  <p className="type-body-muted text-xs mt-1">
                    Solid amber background (#E69A3A), dark obsidian text (#0B0908), subtle warm glow shadow, transitions to gold (#F6B85F) on hover.
                  </p>
                </div>
                <div>
                  <span className="type-micro-label text-[#E69A3A]">Secondary Button Specs:</span>
                  <p className="type-body-muted text-xs mt-1">
                    Transparent background, hairline border (rgba(246, 184, 95, 0.16)), warm-white text, transitions to amber border and text on hover.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 4: SURFACE UTILITIES */}
          <section className="space-y-6">
            <div className="flex items-center justify-between border-hairline-b pb-3">
              <div className="flex items-center gap-3">
                <Layers className="w-4 h-4 text-[#E69A3A]" />
                <h2 className="type-section-heading text-xl sm:text-2xl text-[#F3EEE8]">
                  04 / Surface Utilities
                </h2>
              </div>
              <span className="type-micro-label text-[#AFA49A]">BASE &bull; ELEVATED &bull; PANELS &bull; BLUR</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Base Surface */}
              <div className="surface-base border-hairline p-6 space-y-2">
                <span className="type-micro-label text-[#E69A3A]">.surface-base</span>
                <h4 className="type-section-heading text-lg text-[#F3EEE8]">Base Surface</h4>
                <p className="type-body-muted text-xs">
                  #15100D &bull; Standard background for cards, list items, and contained structural modules.
                </p>
              </div>

              {/* Elevated Surface */}
              <div className="surface-elevated border-hairline p-6 space-y-2">
                <span className="type-micro-label text-[#E69A3A]">.surface-elevated</span>
                <h4 className="type-section-heading text-lg text-[#F3EEE8]">Elevated Surface</h4>
                <p className="type-body-muted text-xs">
                  #211813 &bull; Higher tonal elevation for active states, modals, floating triggers, and popovers.
                </p>
              </div>

              {/* Hairline Border Example */}
              <div className="surface-base border-hairline p-6 space-y-2">
                <span className="type-micro-label text-[#E69A3A]">.border-hairline</span>
                <h4 className="type-section-heading text-lg text-[#F3EEE8]">Hairline Border</h4>
                <p className="type-body-muted text-xs">
                  1px solid rgba(246, 184, 95, 0.16) &bull; Architectural single-pixel demarcation.
                </p>
              </div>

              {/* Warm Translucent Panel */}
              <div className="panel-warm p-6 space-y-2">
                <span className="type-micro-label text-[#E69A3A]">.panel-warm</span>
                <h4 className="type-section-heading text-lg text-[#F3EEE8]">Warm Translucent Panel</h4>
                <p className="type-body-muted text-xs">
                  rgba(21, 16, 13, 0.75) with backdrop blur 14px and hairline border.
                </p>
              </div>

              {/* Subtle Backdrop Blur Surface */}
              <div className="surface-blur border-hairline p-6 space-y-2">
                <span className="type-micro-label text-[#E69A3A]">.surface-blur</span>
                <h4 className="type-section-heading text-lg text-[#F3EEE8]">Backdrop Blur Surface</h4>
                <p className="type-body-muted text-xs">
                  rgba(11, 9, 8, 0.82) with backdrop blur 16px. Ideal for fixed navigation bars.
                </p>
              </div>

              {/* Layout Container Rule */}
              <div className="surface-base border-hairline p-6 space-y-2">
                <span className="type-micro-label text-[#E69A3A]">.portfolio-container</span>
                <h4 className="type-section-heading text-lg text-[#F3EEE8]">Max-Width Grid Bounds</h4>
                <p className="type-body-muted text-xs">
                  Max width 1400px &bull; Responsive horizontal padding clamp(1.25rem, 4vw, 3rem).
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 5: VISUAL EFFECT UTILITIES */}
          <section className="space-y-6">
            <div className="flex items-center justify-between border-hairline-b pb-3">
              <div className="flex items-center gap-3">
                <Flame className="w-4 h-4 text-[#C92328]" />
                <h2 className="type-section-heading text-xl sm:text-2xl text-[#F3EEE8]">
                  05 / Visual Effect Utilities
                </h2>
              </div>
              <span className="type-micro-label text-[#AFA49A]">SUBTLE GLOWS &bull; NO NEON OVERSATURATION</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Amber Glow */}
              <div className="surface-base border-hairline glow-amber p-6 space-y-2">
                <span className="type-micro-label text-[#E69A3A]">.glow-amber</span>
                <h4 className="type-section-heading text-lg text-[#F3EEE8]">Amber Glow</h4>
                <p className="type-body-muted text-xs">
                  Subtle warm amber radiance box shadow for primary focal elements.
                </p>
              </div>

              {/* Red Glow */}
              <div className="surface-base border-hairline glow-red p-6 space-y-2">
                <span className="type-micro-label text-[#C92328]">.glow-red</span>
                <h4 className="type-section-heading text-lg text-[#F3EEE8]">Red Glow</h4>
                <p className="type-body-muted text-xs">
                  Athletic red radiance box shadow for high-intensity athletic elements.
                </p>
              </div>

              {/* Grain Overlay */}
              <div className="surface-base border-hairline grain-overlay p-6 space-y-2 relative">
                <span className="type-micro-label text-[#E69A3A]">.grain-overlay</span>
                <h4 className="type-section-heading text-lg text-[#F3EEE8]">Grain Overlay</h4>
                <p className="type-body-muted text-xs">
                  Subtle 24px warm grid dot grain pattern adding organic analog texture.
                </p>
              </div>

              {/* Ambient Amber Radial Glow */}
              <div className="h-40 surface-base border-hairline ambient-glow-amber p-6 flex flex-col justify-between">
                <span className="type-micro-label text-[#E69A3A]">.ambient-glow-amber</span>
                <p className="type-metadata text-xs text-[#E69A3A]">
                  Soft radial amber aura &bull; Center peak 12% opacity
                </p>
              </div>

              {/* Ambient Red Radial Glow */}
              <div className="h-40 surface-base border-hairline ambient-glow-red p-6 flex flex-col justify-between">
                <span className="type-micro-label text-[#C92328]">.ambient-glow-red</span>
                <p className="type-metadata text-xs text-[#C92328]">
                  Soft radial deep red aura &bull; Center peak 18% opacity
                </p>
              </div>

              {/* Sample Copy Card */}
              <div className="surface-base border-hairline p-6 flex flex-col justify-between">
                <span className="type-micro-label text-[#AFA49A]">Sample Copy Representation</span>
                <div>
                  <p className="type-display text-2xl text-[#F3EEE8]">ROMEO JOSH</p>
                  <p className="type-body-muted text-xs mt-1">Developer &bull; Athlete &bull; Creator</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Footer info */}
        <footer className="mt-20 pt-8 border-hairline-t flex flex-wrap items-center justify-between gap-4">
          <div className="type-tech-label text-xs text-[#AFA49A]">
            ROMEO JOSH &bull; DESIGN SYSTEM VERIFIED &bull; READY FOR PHASE 3
          </div>
          <div className="type-micro-label text-[#E69A3A]">
            OBSIDIAN + AMBER + ATHLETIC RED
          </div>
        </footer>
      </div>
    </div>
  );
};
