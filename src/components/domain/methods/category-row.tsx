import * as React from "react";
import * as LucideIcons from "lucide-react";
import Link from "next/link";
import { MethodCategory } from "@/types";
import { Badge } from "@/components/ui/badge";

export function CategoryRow({ category, index = 0 }: { category: MethodCategory, index?: number }) {
  const Icon = LucideIcons[category.iconName as keyof typeof LucideIcons] as React.ElementType | undefined;
  const staggerDelay = Math.min(index * 100 + 150, 1500);

  return (
    <section 
      className="flex flex-col md:flex-row gap-4 md:gap-8 py-5 border-b border-border-subtle last:border-0 hover:bg-surface/50 transition-colors animate-fade-in-up"
      style={{ animationDelay: `${staggerDelay}ms` }}
    >
      {/* Left Column: Icon and Title */}
      <div className="flex items-center gap-3 md:w-48 shrink-0 md:pt-1">
        {Icon ? <Icon className="w-[18px] h-[18px] text-primary" strokeWidth={1.5} aria-hidden="true" /> : null}
        <h3 className="text-[14px] font-bold text-text-main">{category.name}</h3>
      </div>
      
      {/* Right Column: Methods Flow Grid */}
      <ul role="list" className="flex flex-wrap gap-2 flex-1 m-0 p-0 list-none">
        {category.methods.map((method) => {
          const methodSlug = encodeURIComponent(method.toLowerCase().replace(/\s+/g, '-'));
          return (
            <li key={method}>
              <Link 
                href={`/methods/${methodSlug}`}
                className="group/badge focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-full inline-block"
                aria-label={`View papers using ${method}`}
              >
                <Badge variant="default" className="group-hover/badge:border-primary/40">
                  {method}
                </Badge>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
