/**
 * Design Tokens for Romeo Josh Portfolio
 * Visual direction: Dark warm obsidian + amber + athletic red
 */

export const DESIGN_TOKENS = {
  colors: {
    background: '#0B0908',
    surface: '#15100D',
    elevated: '#211813',
    amber: '#E69A3A',
    gold: '#F6B85F',
    athleticRed: '#C92328',
    deepRed: '#75191B',
    textPrimary: '#F3EEE8',
    textSecondary: '#AFA49A',
    hairline: 'rgba(246, 184, 95, 0.16)',
  },
  typography: {
    display: "'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    body: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    mono: "'Space Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
  },
  layout: {
    maxWidth: '1400px',
    containerPadding: 'clamp(1.25rem, 4vw, 3rem)',
    sectionSpacingY: 'clamp(4rem, 8vw, 7.5rem)',
  },
  glows: {
    amber: 'rgba(230, 154, 58, 0.28)',
    gold: 'rgba(246, 184, 95, 0.22)',
    red: 'rgba(201, 35, 40, 0.28)',
    deepRed: 'rgba(117, 25, 27, 0.35)',
  },
} as const;

export type DesignColors = typeof DESIGN_TOKENS.colors;
export type ColorKey = keyof DesignColors;
