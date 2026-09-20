/**
 * Design Tokens for Romeo Josh Portfolio
 * Visual direction: Dark warm obsidian + amber + bronze + olive
 */

export const DESIGN_TOKENS = {
  colors: {
    background: '#0B0908',
    surface: '#15100D',
    elevated: '#211813',
    amber: '#E69A3A',
    gold: '#F6B85F',
    bronze: '#A86F2C',
    olive: '#8E9A46',
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
    bronze: 'rgba(168, 111, 44, 0.24)',
    olive: 'rgba(142, 154, 70, 0.18)',
  },
} as const;

export type DesignColors = typeof DESIGN_TOKENS.colors;
export type ColorKey = keyof DesignColors;
