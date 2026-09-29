"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  /** stagger delay in ms, applied as inline transition-delay */
  delay?: number;
  as?: "div" | "li";
}

export function Reveal({ children, className, delay = 0, as = "div" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const Component = as;

  return (
    <Component
      ref={ref as never}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        "transition-all duration-700 ease-[var(--ease-out-quart)]",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7",
        className,
      )}
    >
      {children}
    </Component>
  );
}
