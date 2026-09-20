import React, { useEffect, useRef } from "react";
import { useReducedMotion } from "motion/react";

type CursorState = "default" | "link" | "view" | "reveal";

export const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const rafId = useRef<number | null>(null);
  const isVisible = useRef(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!finePointer.matches || !cursorRef.current) return;

    const cursor = cursorRef.current;
    document.documentElement.classList.add("custom-cursor-enabled");

    const setState = (state: CursorState) => {
      cursor.dataset.state = state;
      if (labelRef.current) {
        labelRef.current.textContent = state === "view" ? "VIEW" : state === "reveal" ? "REVEAL" : "";
      }
    };

    const render = () => {
      rafId.current = null;
      const followSpeed = shouldReduceMotion ? 1 : 0.35;
      current.current.x += (target.current.x - current.current.x) * followSpeed;
      current.current.y += (target.current.y - current.current.y) * followSpeed;
      cursor.style.transform = `translate3d(${current.current.x}px, ${current.current.y}px, 0) translate(-50%, -50%)`;

      if (!shouldReduceMotion && isVisible.current) {
        rafId.current = requestAnimationFrame(render);
      }
    };

    const scheduleRender = () => {
      if (!rafId.current) rafId.current = requestAnimationFrame(render);
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType && event.pointerType !== "mouse") return;
      target.current = { x: event.clientX, y: event.clientY };
      const targetElement = event.target instanceof Element ? event.target.closest<HTMLElement>("[data-cursor]") : null;
      setState((targetElement?.dataset.cursor as CursorState | undefined) ?? "default");
      if (!isVisible.current) {
        current.current = target.current;
        isVisible.current = true;
        cursor.style.opacity = "1";
      }
      scheduleRender();
    };

    const handlePointerLeave = () => {
      isVisible.current = false;
      cursor.style.opacity = "0";
      setState("default");
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
        rafId.current = null;
      }
    };

    document.addEventListener("pointermove", handlePointerMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", handlePointerLeave);

    return () => {
      document.removeEventListener("pointermove", handlePointerMove);
      document.documentElement.removeEventListener("mouseleave", handlePointerLeave);
      document.documentElement.classList.remove("custom-cursor-enabled");
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [shouldReduceMotion]);

  return (
    <div ref={cursorRef} aria-hidden="true" className="custom-cursor" data-state="default">
      <span ref={labelRef} className="custom-cursor-label" />
    </div>
  );
};

export default CustomCursor;
