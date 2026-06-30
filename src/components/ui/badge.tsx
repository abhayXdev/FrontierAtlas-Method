import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "green" | "orange" | "outline";
}

export function Badge({ className, variant = "default", children, ...props }: BadgeProps) {
  const variants = {
    default: "border-border-subtle bg-surface text-text-muted hover:text-text-main",
    green: "border-green-200 bg-green-50 text-green-700",
    orange: "border-orange-200 bg-orange-50 text-orange-700",
    outline: "border-primary/30 bg-transparent text-primary",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3.5 py-1.5 text-[11px] font-bold transition-colors cursor-pointer",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
