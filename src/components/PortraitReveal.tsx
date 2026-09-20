import React, { useRef, useEffect, useCallback } from "react";
import { useReducedMotion } from "motion/react";

export interface PortraitRevealProps {
  developerSrc: string;
  athleteSrc: string;
  developerAlt: string;
  athleteAlt: string;
  maskRadius?: number;
  className?: string;
}

export const PortraitReveal: React.FC<PortraitRevealProps> = ({
  developerSrc,
  athleteSrc,
  developerAlt,
  athleteAlt,
  maskRadius = 140,
  className = "",
}) => {
  const shouldReduceMotion = useReducedMotion();

  const containerRef = useRef<HTMLDivElement>(null);
  const athleteLayerRef = useRef<HTMLDivElement>(null);
  const lensRingRef = useRef<HTMLDivElement>(null);
  const hintPillRef = useRef<HTMLDivElement>(null);

  // High performance coordinate & interaction tracking via refs (no React state re-renders on RAF)
  const targetCoords = useRef({ x: 0, y: 0 });
  const currentCoords = useRef({ x: 0, y: 0 });
  const isInteracting = useRef(false);
  const isFirstEnter = useRef(true);
  const rafId = useRef<number | null>(null);

  const updateMaskStyles = useCallback((x: number, y: number) => {
    const formattedX = x.toFixed(2);
    const formattedY = y.toFixed(2);
    const maskString = `radial-gradient(circle ${maskRadius}px at ${formattedX}px ${formattedY}px, black 70%, transparent 100%)`;

    if (athleteLayerRef.current) {
      athleteLayerRef.current.style.maskImage = maskString;
      athleteLayerRef.current.style.webkitMaskImage = maskString;
    }

    if (lensRingRef.current) {
      lensRingRef.current.style.transform = `translate3d(${formattedX}px, ${formattedY}px, 0) translate(-50%, -50%)`;
    }
  }, [maskRadius]);

  const startLoop = useCallback(() => {
    function loop() {
      if (!isInteracting.current) {
        rafId.current = null;
        return;
      }

      // Responsive interpolation factor (0.15 for smooth fluid tracking)
      const factor = shouldReduceMotion ? 1 : 0.15;
      currentCoords.current.x += (targetCoords.current.x - currentCoords.current.x) * factor;
      currentCoords.current.y += (targetCoords.current.y - currentCoords.current.y) * factor;

      updateMaskStyles(currentCoords.current.x, currentCoords.current.y);

      rafId.current = requestAnimationFrame(loop);
    }

    if (!rafId.current) {
      rafId.current = requestAnimationFrame(loop);
    }
  }, [shouldReduceMotion, updateMaskStyles]);

  const startInteraction = (clientX: number, clientY: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const y = Math.max(0, Math.min(clientY - rect.top, rect.height));

    targetCoords.current = { x, y };

    // Snap starting point immediately on first enter to prevent mask sliding from (0,0)
    if (isFirstEnter.current) {
      currentCoords.current = { x, y };
      updateMaskStyles(x, y);
      isFirstEnter.current = false;
    }

    isInteracting.current = true;

    // Show athlete reveal layer & lens ring; dim hint pill
    if (athleteLayerRef.current) {
      athleteLayerRef.current.style.opacity = "1";
    }
    if (lensRingRef.current) {
      lensRingRef.current.style.opacity = "1";
    }
    if (hintPillRef.current) {
      hintPillRef.current.style.opacity = "0";
    }

    startLoop();
  };

  const updateCoordinates = (clientX: number, clientY: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const y = Math.max(0, Math.min(clientY - rect.top, rect.height));

    targetCoords.current = { x, y };
  };

  const endInteraction = () => {
    isInteracting.current = false;
    isFirstEnter.current = true;

    // Smoothly fade out reveal layer & lens ring; restore hint pill
    if (athleteLayerRef.current) {
      athleteLayerRef.current.style.opacity = "0";
    }
    if (lensRingRef.current) {
      lensRingRef.current.style.opacity = "0";
    }
    if (hintPillRef.current) {
      hintPillRef.current.style.opacity = "1";
    }

    if (rafId.current) {
      cancelAnimationFrame(rafId.current);
      rafId.current = null;
    }
  };

  // Pointer Event Handlers (Unifies Mouse, Pen, and Touch)
  const handlePointerEnter = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === "mouse") {
      startInteraction(e.clientX, e.clientY);
    }
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isInteracting.current) {
      updateCoordinates(e.clientX, e.clientY);
    }
  };

  const handlePointerLeave = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === "mouse") {
      endInteraction();
    }
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === "touch" || e.pointerType === "pen") {
      startInteraction(e.clientX, e.clientY);
      try {
        e.currentTarget.setPointerCapture(e.pointerId);
      } catch {
        // Fallback for browsers with restricted pointer capture
      }
    }
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === "touch" || e.pointerType === "pen") {
      try {
        if (e.currentTarget.hasPointerCapture(e.pointerId)) {
          e.currentTarget.releasePointerCapture(e.pointerId);
        }
      } catch {
        // Pointer capture cleanup fallback
      }
      endInteraction();
    }
  };

  const handlePointerCancel = () => {
    endInteraction();
  };

  // Cleanup animation frame on unmount
  useEffect(() => {
    return () => {
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, []);

  const lensRingDiameter = maskRadius * 2;

  return (
    <div
      ref={containerRef}
      onPointerEnter={handlePointerEnter}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerCancel}
      className={`relative aspect-[4/5] w-full rounded-2xl overflow-hidden border border-[rgba(246,184,95,0.16)] bg-[#15100D] shadow-2xl shadow-black/80 cursor-crosshair select-none touch-pan-y ${className}`}
    >
      {/* Base Layer: Developer Portrait (Default visible state) */}
      <img
        src={developerSrc}
        alt={developerAlt}
        className="w-full h-full object-cover object-top block select-none pointer-events-none"
        loading="eager"
      />

      {/* Reveal Layer: Athlete Portrait (Interactive masked overlay) */}
      <div
        ref={athleteLayerRef}
        aria-hidden="true"
        className="absolute inset-0 w-full h-full pointer-events-none select-none transition-opacity duration-300 ease-out"
        style={{
          opacity: 0,
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          willChange: "mask-image, -webkit-mask-image",
        }}
      >
        <img
          src={athleteSrc}
          alt={athleteAlt}
          className="w-full h-full object-cover object-top block select-none pointer-events-none"
          loading="eager"
        />
      </div>

      {/* Amber Lens Ring Cursor Tracker */}
      <div
        ref={lensRingRef}
        aria-hidden="true"
        className="absolute top-0 left-0 rounded-full pointer-events-none transition-opacity duration-300 ease-out"
        style={{
          width: `${lensRingDiameter}px`,
          height: `${lensRingDiameter}px`,
          border: "1.5px solid rgba(246, 184, 95, 0.65)",
          boxShadow:
            "0 0 35px rgba(230,154,58,0.30), inset 0 0 24px rgba(168,111,44,0.18)",
          opacity: 0,
          willChange: "transform",
        }}
      />

      {/* Interactive Bottom Hint Indicator Pill */}
      <div
        ref={hintPillRef}
        aria-hidden="true"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-[#0B0908]/85 backdrop-blur-md border border-[rgba(246,184,95,0.16)] flex items-center gap-2 pointer-events-none z-30 transition-opacity duration-300 ease-out"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#E69A3A] animate-ping" />
        <span className="text-[10px] font-mono uppercase tracking-widest text-[#F3EEE8]">
          Move to Reveal ⤢
        </span>
      </div>

      {/* Subtle Technical Corner Hairlines */}
      <div
        className="absolute top-2.5 left-2.5 w-2.5 h-2.5 border-t border-l border-[#E69A3A]/50 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-2.5 right-2.5 w-2.5 h-2.5 border-t border-r border-[#E69A3A]/50 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-2.5 left-2.5 w-2.5 h-2.5 border-b border-l border-[#E69A3A]/50 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-2.5 right-2.5 w-2.5 h-2.5 border-b border-r border-[#E69A3A]/50 pointer-events-none"
        aria-hidden="true"
      />
    </div>
  );
};

export default PortraitReveal;
