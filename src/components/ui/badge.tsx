import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "green" | "orange" | "outline";
}

export function Badge({ className, variant = "default", children, ...props }: BadgeProps) {
  const variants = {
    // Option 3: Upgraded tactile hover state (higher lift, deeper shadow, orange glow)
    default: "border-border-subtle bg-surface text-text-muted hover:text-text-main hover:border-primary/40 hover:bg-surface hover:shadow-md hover:-translate-y-[2px]",
    green: "border-green-200 bg-green-50 text-green-700 hover:bg-green-100 hover:shadow-sm hover:-translate-y-[1px]",
    orange: "border-orange-200 bg-orange-50 text-orange-700 hover:bg-orange-100 hover:shadow-sm hover:-translate-y-[1px]",
    outline: "border-primary/30 bg-transparent text-primary hover:bg-primary/5 hover:shadow-sm hover:-translate-y-[1px]",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3.5 py-1.5 text-[11px] font-bold transition-all duration-300 ease-out cursor-pointer active:scale-95 active:shadow-none active:translate-y-[1px]",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
