import * as React from "react";
import * as LucideIcons from "lucide-react";
import Link from "next/link";
import { MethodCategory } from "@/types";
import { Badge } from "@/components/ui/badge";
import { SpotlightWrapper } from "@/components/ui/spotlight-wrapper";
import { slugify } from "@/lib/utils";

export function CategoryRow({ category, index = 0 }: { category: MethodCategory, index?: number }) {
  const Icon = LucideIcons[category.iconName as keyof typeof LucideIcons] as React.ElementType | undefined;
  const staggerDelay = Math.min(index * 100 + 150, 1500); // 150ms base delay + 100ms per row, capped at 1500ms so late rows don't wait too long

  return (
    <SpotlightWrapper 
      className="flex flex-col md:flex-row gap-4 md:gap-8 py-5 -mx-2 px-2 hover:bg-surface/50 transition-colors animate-fade-in-up"
      style={{ animationDelay: `${staggerDelay}ms` }}
    >
      {/* Left Column: Icon and Title */}
      <div className="relative z-10 flex items-center gap-3 md:w-48 shrink-0 md:pt-1">
        {Icon ? (
          <div className="animate-pop-in" style={{ animationDelay: `${staggerDelay + 250}ms` }}>
            <Icon className="w-[18px] h-[18px] text-brand" strokeWidth={1.5} aria-hidden="true" />
          </div>
        ) : null}
        <h3 className="text-[14px] font-bold text-primary">{category.name}</h3>
      </div>
      
      <ul role="list" className="relative z-10 flex flex-wrap gap-2 flex-1 m-0 p-0 list-none">
        {category.methods.map((method) => {
          return (
            <li key={method.id}>
              <Link 
                href={`/methods/${slugify(method.name)}`}
                className="group/badge focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded-full inline-block"
                aria-label={`View papers using ${method.name}`}
              >
                <Badge variant="default" className="group-hover/badge:border-brand/40">
                  {method.name}
                </Badge>
              </Link>
            </li>
          );
        })}
      </ul>
    </SpotlightWrapper>
  );
}
