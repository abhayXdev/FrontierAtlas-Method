import * as React from "react";

export function MethodsHero() {
  return (
    <header className="py-12 md:py-24 relative overflow-hidden flex items-center justify-between rounded-3xl">
      <div className="relative z-10 max-w-2xl w-full">
        <p className="text-[11px] md:text-sm font-extrabold text-primary uppercase tracking-[0.2em] mb-5">
          Methods Library
        </p>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-text-main mb-6 leading-[1.05] font-sans">
          Explore All <br aria-hidden="true" /> AI Methods
        </h1>
        <p className="text-text-muted text-base md:text-lg max-w-md leading-relaxed font-medium">
          A comprehensive collection of AI methods across all domains and applications.
        </p>
      </div>
    </header>
  );
}
