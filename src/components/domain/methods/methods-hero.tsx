import * as React from "react";

export function MethodsHero() {
  return (
    <header className="py-12 md:py-24 relative overflow-hidden flex items-center justify-between rounded-3xl">
      {/* Ambient AI Aurora / Orb Glow Effect */}
      <div className="absolute inset-0 right-0 top-0 w-full h-full pointer-events-none z-0">
        <div className="absolute -right-[10%] -top-[20%] w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-brand/10 rounded-full mix-blend-multiply filter blur-[80px] md:blur-[120px] opacity-80" />
        <div className="absolute right-[10%] top-[20%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-blue-400/10 rounded-full mix-blend-multiply filter blur-[60px] md:blur-[100px] opacity-60" />
        <div className="absolute right-[5%] bottom-[-20%] w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-orange-400/10 rounded-full mix-blend-multiply filter blur-[60px] md:blur-[80px] opacity-70" />
      </div>

      <div className="relative z-10 max-w-2xl w-full">
        <p className="text-[11px] md:text-sm font-extrabold text-brand uppercase tracking-[0.2em] mb-5">
          Methods Library
        </p>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-primary mb-6 leading-[1.05] font-sans">
          Explore All <br aria-hidden="true" /> AI Methods
        </h1>
        <p className="text-secondary text-base md:text-lg max-w-md leading-relaxed font-medium">
          A comprehensive collection of AI methods across all domains and applications.
        </p>
      </div>
    </header>
  );
}
