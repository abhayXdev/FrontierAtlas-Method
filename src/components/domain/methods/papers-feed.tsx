"use client";

import * as React from "react";
import Link from "next/link";
import { MockPaper } from "@/types";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Code } from "lucide-react";

type SortType = "trending" | "newest" | "most cited";

export function PapersFeed({ papers, methodTitle }: { papers: MockPaper[]; methodTitle: string }) {
  const [sortBy, setSortBy] = React.useState<SortType>("trending");

  const sortedPapers = React.useMemo(() => {
    const safeArray = [...(papers || [])];
    if (sortBy === "newest") {
      return safeArray.sort((a, b) => new Date(b.date || 0).getTime() - new Date(a.date || 0).getTime());
    } else if (sortBy === "most cited") {
      return safeArray.sort((a, b) => (b.citations || 0) - (a.citations || 0));
    }
    // "trending" default - sort by a combined score of citations and stars
    return safeArray.sort((a, b) => {
      const scoreA = (a.citations || 0) + (a.stars ?? ((a.citations || 0) * 3 + 150));
      const scoreB = (b.citations || 0) + (b.stars ?? ((b.citations || 0) * 3 + 150));
      return scoreB - scoreA;
    });
  }, [papers, sortBy]);

  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-default pb-4 mb-8 gap-4">
        <div className="flex items-center gap-3 bg-surface border border-default p-1 rounded-md shadow-sm">
          <button 
            onClick={() => setSortBy("trending")}
            className={`px-3 py-1.5 text-[12px] uppercase tracking-wider rounded-[4px] transition-all duration-200 ${sortBy === 'trending' ? 'font-bold bg-primary text-inverse shadow-sm' : 'font-medium text-secondary hover:text-primary hover:bg-default/50'}`}
          >
            Trending
          </button>
          <button 
            onClick={() => setSortBy("newest")}
            className={`px-3 py-1.5 text-[12px] uppercase tracking-wider rounded-[4px] transition-all duration-200 ${sortBy === 'newest' ? 'font-bold bg-primary text-inverse shadow-sm' : 'font-medium text-secondary hover:text-primary hover:bg-default/50'}`}
          >
            Newest
          </button>
          <button 
            onClick={() => setSortBy("most cited")}
            className={`px-3 py-1.5 text-[12px] uppercase tracking-wider rounded-[4px] transition-all duration-200 ${sortBy === 'most cited' ? 'font-bold bg-primary text-inverse shadow-sm' : 'font-medium text-secondary hover:text-primary hover:bg-default/50'}`}
          >
            Most Cited
          </button>
        </div>
        <div className="text-[13px] text-secondary font-medium font-mono bg-surface border border-default px-3 py-1.5 rounded-md shadow-sm">
          {papers?.length || 0} papers using {methodTitle}
        </div>
      </div>

      <div className="flex flex-col">
        {sortedPapers.length === 0 ? (
          <div className="py-12 text-center text-secondary">No papers found for this method.</div>
        ) : (
          sortedPapers.map((paper) => (
            <Card 
              key={paper.id} 
              className="border-0 border-t border-default bg-transparent shadow-none rounded-none py-6 px-0 hover:bg-surface/30 transition-colors first:border-t-0"
            >
              <CardHeader className="p-0 mb-3">
                <CardTitle className="text-xl">
                  <Link href={`/paper/${paper.id}`} className="hover:text-brand transition-colors">
                    {paper.title}
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-sm text-secondary mb-3">
                  {(paper.authors || []).join(", ")} • {paper.date || "Unknown"}
                </p>
                <p className="text-primary text-sm line-clamp-2 mb-4 leading-relaxed opacity-90">
                  {paper.abstract}
                </p>
                
                <div className="flex items-center gap-3">
                  <Badge variant="outline" className="flex items-center gap-1.5 font-medium bg-surface shadow-sm">
                    <FileText className="w-3.5 h-3.5" />
                    {paper.citations.toLocaleString()} Citations
                  </Badge>
                  <Badge variant="outline" className="flex items-center gap-1.5 font-medium bg-surface shadow-sm">
                    <Code className="w-3.5 h-3.5" />
                    {(paper.stars ?? ((paper.citations || 0) * 3 + 150)).toLocaleString()} Stars
                  </Badge>
                  {paper.hasCode && (
                    <Badge variant="outline" className="flex items-center gap-1.5 font-medium hover:text-brand hover:border-brand cursor-pointer transition-colors bg-brand/5 border-brand/20">
                      <Code className="w-3.5 h-3.5 text-brand" />
                      Code Available
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </>
  );
}
