"use client";

import { useCallback, useRef } from "react";
import { cn } from "@/lib/cn";

interface Tilt3DProps {
  children: React.ReactNode;
  className?: string;
  /** maximum rotation in degrees */
  intensity?: number;
  /** adds a subtle scale-up + shadow lift on hover */
  lift?: boolean;
}

/**
 * Wraps its children in a perspective stage and rotates them in 3D
 * space in response to pointer position, producing a tactile "product
 * held in your hand" effect. Falls back to a static state for touch /
 * reduced-motion users.
 */
export function Tilt3D({ children, className, intensity = 10, lift = true }: Tilt3DProps) {
  const stageRef = useRef<HTMLDivElement>(null);
  const elRef = useRef<HTMLDivElement>(null);
  const frame = useRef<number | null>(null);

  const handleMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (e.pointerType === "touch") return;
      const stage = stageRef.current;
      const el = elRef.current;
      if (!stage || !el) return;

      const rect = stage.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;
      const rotateY = (px - 0.5) * intensity * 2;
      const rotateX = (0.5 - py) * intensity * 2;

      if (frame.current) cancelAnimationFrame(frame.current);
      frame.current = requestAnimationFrame(() => {
        el.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) ${
          lift ? "scale3d(1.03, 1.03, 1.03)" : ""
        }`;
      });
    },
    [intensity, lift],
  );

  const handleLeave = useCallback(() => {
    const el = elRef.current;
    if (!el) return;
    if (frame.current) cancelAnimationFrame(frame.current);
    el.style.transform = "rotateX(0deg) rotateY(0deg) scale3d(1,1,1)";
  }, []);

  return (
    <div
      ref={stageRef}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      className={cn("tilt-stage", className)}
    >
      <div ref={elRef} className="tilt-el h-full w-full">
        {children}
      </div>
    </div>
  );
}
