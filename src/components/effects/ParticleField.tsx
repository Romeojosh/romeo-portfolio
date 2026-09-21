import React, { useEffect, useRef } from "react";
import { useReducedMotion } from "motion/react";

interface Particle {
  x: number;
  y: number;
  radius: number;
  vx: number;
  vy: number;
  alpha: number;
  phase: number;
  twinkle: number;
  color: string;
  isAccent: boolean;
}

interface ParticleColor {
  value: string;
  ambientAlpha: number;
  accentAlpha: number;
}

const DARK_COLORS: ParticleColor[] = [
  { value: "246,184,95", ambientAlpha: 0.58, accentAlpha: 0.86 },
  { value: "255,224,160", ambientAlpha: 0.52, accentAlpha: 0.94 },
  { value: "230,154,58", ambientAlpha: 0.48, accentAlpha: 0.74 },
  { value: "168,111,44", ambientAlpha: 0.35, accentAlpha: 0.56 },
];

const LIGHT_COLORS: ParticleColor[] = [
  { value: "122,81,36", ambientAlpha: 0.34, accentAlpha: 0.72 },
  { value: "169,101,22", ambientAlpha: 0.40, accentAlpha: 0.80 },
  { value: "145,105,47", ambientAlpha: 0.32, accentAlpha: 0.68 },
  { value: "82,84,88", ambientAlpha: 0.26, accentAlpha: 0.56 },
];

const ACCENT_COLORS = [0, 1, 2, 0, 2, 0, 1, 3];

const ACCENT_ZONES = [
  [0.14, 0.18], [0.5, 0.16], [0.84, 0.2],
  [0.2, 0.5], [0.8, 0.52], [0.14, 0.82],
  [0.5, 0.84], [0.86, 0.8],
] as const;

const createParticles = (
  width: number,
  height: number,
  count: number,
  accentCount: number,
  colors: ParticleColor[],
): Particle[] =>
  Array.from({ length: count }, (_, index) => ({
    x: index < accentCount
      ? Math.max(0, Math.min(width, (ACCENT_ZONES[index % ACCENT_ZONES.length][0] + (Math.random() - 0.5) * 0.18) * width))
      : Math.random() * width,
    y: index < accentCount
      ? Math.max(0, Math.min(height, (ACCENT_ZONES[index % ACCENT_ZONES.length][1] + (Math.random() - 0.5) * 0.18) * height))
      : Math.random() * height,
    radius: index < accentCount
      ? index < Math.min(4, accentCount) ? 3.2 + Math.random() * 0.8 : 2.4 + Math.random()
      : index % 3 === 0 ? 1 + Math.random() * 0.2 : index % 3 === 1 ? 1.1 + Math.random() * 0.4 : 1.3 + Math.random() * 0.5,
    vx: (Math.random() - 0.5) * 0.18,
    vy: (Math.random() - 0.5) * 0.14,
    alpha: (index < accentCount ? colors[ACCENT_COLORS[index % ACCENT_COLORS.length]].accentAlpha : colors[index % colors.length].ambientAlpha)
      * (index < accentCount ? 0.92 + Math.random() * 0.08 : index % 3 === 0 ? 0.68 : index % 3 === 1 ? 0.84 : 1)
      * (0.9 + Math.random() * 0.1),
    phase: Math.random() * Math.PI * 2,
    twinkle: 0.25 + Math.random() * 0.45,
    color: (index < accentCount ? colors[ACCENT_COLORS[index % ACCENT_COLORS.length]] : colors[index % colors.length]).value,
    isAccent: index < accentCount,
  }));

export const ParticleField: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const frameRef = useRef<number | null>(null);
  const lastTimeRef = useRef(0);
  const sizeRef = useRef({ width: 0, height: 0 });
  const visibleRef = useRef(true);
  const tabVisibleRef = useRef(!document.hidden);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const getParticleConfig = () => window.matchMedia("(max-width: 767px)").matches
      ? { count: 28, accentCount: 5 }
      : { count: 60, accentCount: 10 };
    const lightThemeRef = { current: document.documentElement.classList.contains("light") };

    const getColors = () => lightThemeRef.current ? LIGHT_COLORS : DARK_COLORS;

    const draw = (time = 0) => {
      const { width, height } = sizeRef.current;
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      context.globalAlpha = 1;
      context.globalCompositeOperation = "source-over";
      context.clearRect(0, 0, width, height);

      particlesRef.current.forEach((particle) => {
        const shimmer = shouldReduceMotion
          ? 1
          : particle.isAccent
            ? 1 + Math.sin(time * 0.001 * particle.twinkle + particle.phase) * 0.08
            : 0.82 + Math.sin(time * 0.001 * particle.twinkle + particle.phase) * 0.18;

        const haloAlpha = particle.alpha * shimmer * (lightThemeRef.current ? 0.08 : 0.2);

        context.beginPath();
        context.fillStyle = `rgba(${particle.color},${haloAlpha})`;
        context.arc(particle.x, particle.y, particle.radius + (particle.isAccent ? 3.2 : 2.2), 0, Math.PI * 2);
        context.fill();

        context.beginPath();
        context.fillStyle = `rgba(${particle.color},${particle.alpha * shimmer})`;
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        context.fill();
      });
    };

    const stop = () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
        frameRef.current = null;
      }
      lastTimeRef.current = 0;
    };

    const tick = (time: number) => {
      if (!visibleRef.current || !tabVisibleRef.current || shouldReduceMotion) {
        frameRef.current = null;
        draw();
        return;
      }

      const elapsed = lastTimeRef.current ? Math.min((time - lastTimeRef.current) / 16.67, 2) : 1;
      lastTimeRef.current = time;

      particlesRef.current.forEach((particle) => {
        particle.x += particle.vx * elapsed;
        particle.y += particle.vy * elapsed;

        if (particle.x < -2) particle.x = sizeRef.current.width + 2;
        if (particle.x > sizeRef.current.width + 2) particle.x = -2;
        if (particle.y < -2) particle.y = sizeRef.current.height + 2;
        if (particle.y > sizeRef.current.height + 2) particle.y = -2;
      });

      draw(time);
      frameRef.current = requestAnimationFrame(tick);
    };

    const start = () => {
      if (shouldReduceMotion || !visibleRef.current || !tabVisibleRef.current || frameRef.current !== null) return;
      lastTimeRef.current = 0;
      frameRef.current = requestAnimationFrame(tick);
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      sizeRef.current = { width: rect.width, height: rect.height };
      canvas.width = Math.max(1, Math.floor(rect.width * dpr));
      canvas.height = Math.max(1, Math.floor(rect.height * dpr));
      const { count, accentCount } = getParticleConfig();
      particlesRef.current = createParticles(rect.width, rect.height, count, accentCount, getColors());
      draw();
      start();
    };

    const themeObserver = new MutationObserver(() => {
      const isLight = document.documentElement.classList.contains("light");
      if (isLight === lightThemeRef.current) return;

      lightThemeRef.current = isLight;
      const { width, height } = sizeRef.current;
      if (width && height) {
        const { count, accentCount } = getParticleConfig();
        particlesRef.current = createParticles(width, height, count, accentCount, getColors());
        draw();
      }
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        visibleRef.current = entry.isIntersecting;
        if (visibleRef.current) start();
        else stop();
      },
      { threshold: 0 },
    );

    const handleVisibilityChange = () => {
      tabVisibleRef.current = !document.hidden;
      if (tabVisibleRef.current) start();
      else stop();
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);
    observer.observe(canvas);
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    document.addEventListener("visibilitychange", handleVisibilityChange);
    resize();

    return () => {
      stop();
      resizeObserver.disconnect();
      observer.disconnect();
      themeObserver.disconnect();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [shouldReduceMotion]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="theme-particle-field pointer-events-none absolute inset-0 z-[3] h-full w-full"
    />
  );
};

export default ParticleField;
