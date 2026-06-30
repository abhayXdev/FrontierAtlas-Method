import * as React from "react";

export function MethodsHero() {
  return (
    <header className="py-12 md:py-24 relative overflow-hidden flex items-center justify-between rounded-3xl">
      {/* Ambient AI Aurora / Orb Glow Effect */}
      <div className="absolute inset-0 right-0 top-0 w-full h-full pointer-events-none z-0">
        <div className="absolute -right-[10%] -top-[20%] w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-primary/10 rounded-full mix-blend-multiply filter blur-[80px] md:blur-[120px] animate-pulse opacity-80" />
        <div className="absolute right-[10%] top-[20%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-blue-400/10 rounded-full mix-blend-multiply filter blur-[60px] md:blur-[100px] animate-pulse opacity-60" style={{ animationDelay: '2s', animationDuration: '4s' }} />
        <div className="absolute right-[5%] bottom-[-20%] w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-orange-400/10 rounded-full mix-blend-multiply filter blur-[60px] md:blur-[80px] animate-pulse opacity-70" style={{ animationDelay: '4s', animationDuration: '5s' }} />
      </div>

      <div className="relative z-10 max-w-2xl w-full">
        <p className="text-[11px] md:text-sm font-extrabold text-primary uppercase tracking-[0.2em] mb-5 animate-fade-in-up">
          Methods Library
        </p>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-text-main mb-6 leading-[1.05] font-sans animate-fade-in-up" style={{ animationDelay: '150ms' }}>
          Explore All <br aria-hidden="true" /> AI Methods
        </h1>
        <p className="text-text-muted text-base md:text-lg max-w-md leading-relaxed font-medium animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          A comprehensive collection of AI methods across all domains and applications.
        </p>
      </div>
    </header>
  );
}
