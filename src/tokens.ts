/**
 * Design Tokens for Romeo Josh Portfolio
 * Visual direction: Premium graphite + amber + gold + bronze
 */

export const DESIGN_TOKENS = {
  colors: {
    background: '#111214',
    surface: '#181A1D',
    elevated: '#22252A',
    amber: '#E69A3A',
    gold: '#F6B85F',
    bronze: '#A86F2C',
    lemon: '#FFFB3C',
    textPrimary: '#F3EEE8',
    textSecondary: '#A6A8AD',
    textMuted: '#74787F',
    hairline: 'rgba(255, 255, 255, 0.08)',
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
  },
} as const;

export type DesignColors = typeof DESIGN_TOKENS.colors;
export type ColorKey = keyof DesignColors;
