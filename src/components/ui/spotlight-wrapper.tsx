"use client";

import * as React from "react";

export function SpotlightWrapper({ children, className, style }: { children: React.ReactNode, className?: string, style?: React.CSSProperties }) {
  const divRef = React.useRef<HTMLDivElement>(null);
  const [opacity, setOpacity] = React.useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    divRef.current.style.setProperty("--spot-x", `${x}px`);
    divRef.current.style.setProperty("--spot-y", `${y}px`);
  };

  return (
    <section 
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={`relative overflow-hidden group ${className || ""}`}
      style={style}
    >
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-0"
        style={{
          opacity,
          background: `radial-gradient(400px circle at var(--spot-x, 0px) var(--spot-y, 0px), rgba(245, 80, 54, 0.05), transparent 40%)`,
        }}
        aria-hidden="true"
      />
      {children}
    </section>
  );
}
