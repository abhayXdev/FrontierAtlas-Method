import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    
    const variants = {
      primary: "bg-brand text-inverse hover:bg-brand-hover shadow-sm hover:shadow-md",
      secondary: "bg-base text-primary hover:bg-hover border border-default",
      outline: "border border-default bg-surface hover:bg-hover hover:border-hover text-primary shadow-sm",
      ghost: "bg-transparent hover:bg-hover text-primary",
    };

    const sizes = {
      sm: "h-8 px-3 text-xs",
      md: "h-10 px-4 py-2 text-sm",
      lg: "h-12 px-8 text-base",
    };

    return (
      <button
        ref={ref}
        type={props.type || "button"}
        className={cn(
          "inline-flex items-center justify-center rounded-md font-bold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-1 disabled:pointer-events-none disabled:opacity-50 cursor-pointer uppercase tracking-wide active:scale-95",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
