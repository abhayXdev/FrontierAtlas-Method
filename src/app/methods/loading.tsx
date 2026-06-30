import * as React from "react";
import { MethodsHero } from "@/components/domain/methods/methods-hero";

export default function Loading() {
  return (
    <div className="w-full bg-surface min-h-[calc(100vh-60px)]">
      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-12 xl:px-20 pb-20">
        <MethodsHero />
        
        <div className="flex flex-col mt-4 border-t border-border-subtle animate-pulse">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="flex flex-col md:flex-row gap-4 md:gap-8 py-5 border-b border-border-subtle">
              
              <div className="flex items-center gap-3 md:w-48 shrink-0 md:pt-1">
                <div className="w-[18px] h-[18px] bg-border-subtle rounded-sm" />
                <div className="h-4 bg-border-subtle rounded-md w-24" />
              </div>
              
              <div className="flex flex-wrap gap-2 flex-1">
                {[1, 2, 3, 4, 5, 6, 7].map((j) => (
                  <div 
                    key={j} 
                    className="h-7 bg-border-subtle rounded-full"
                    style={{ width: `${Math.floor(Math.random() * 40) + 60}px` }}
                  />
                ))}
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
