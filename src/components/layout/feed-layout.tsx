import * as React from "react";
import { cn } from "@/lib/utils";

interface FeedLayoutProps {
  leftSidebar: React.ReactNode;
  children: React.ReactNode;
  rightSidebar?: React.ReactNode;
  className?: string;
}

export function FeedLayout({ leftSidebar, children, rightSidebar, className }: FeedLayoutProps) {
  // Dynamically adjust grid columns depending on whether a right sidebar is provided
  const gridClass = rightSidebar 
    ? "grid-cols-1 lg:grid-cols-[240px_minmax(0,1fr)_280px]" 
    : "grid-cols-1 lg:grid-cols-[240px_minmax(0,1fr)]";

  return (
    <div className={cn("w-full max-w-[1400px] mx-auto px-4 md:px-8 py-8", className)}>
      <div className={cn("grid gap-8 lg:gap-12", gridClass)}>
        
        {/* Left Sidebar Navigation */}
        <aside className="hidden lg:block w-full">
          <div className="sticky top-[92px] flex flex-col space-y-8">
            {leftSidebar}
          </div>
        </aside>

        {/* Center Feed */}
        <main className="flex flex-col w-full min-w-0">
          {children}
        </main>

        {/* Right Sidebar Metadata/News */}
        {rightSidebar && (
          <aside className="hidden lg:block w-full">
            <div className="sticky top-[92px] flex flex-col space-y-8">
              {rightSidebar}
            </div>
          </aside>
        )}

      </div>
    </div>
  );
}
