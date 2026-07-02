import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getPaperDetailById } from "@/lib/api";
import { CopyBibtexButton } from "@/components/domain/paper/copy-bibtex-button";
import { ExpandableDescription } from "@/components/ui/expandable-description";

export default async function PaperDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const paper = await getPaperDetailById(resolvedParams.id);

  if (!paper) {
    return <div className="p-12 text-center text-primary">Paper not found.</div>;
  }

  // Format date to "Dec 6, 2017" style if it's YYYY-MM-DD
  const formattedDate = paper.publicationDate 
    ? new Date(paper.publicationDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    : "Unknown Date";

  return (
    <main className="w-full max-w-5xl mx-auto py-10 px-4 space-y-10">
      
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="text-[13px] font-medium text-secondary flex items-center gap-2">
        <Link href="/" className="hover:text-brand transition-colors">Home</Link>
        <span>›</span>
        <Link href="/methods" className="hover:text-brand transition-colors">Methods</Link>
        <span>›</span>
        <span className="text-brand">Paper</span>
      </nav>

      {/* Hero Section */}
      <header className="space-y-6">
        {paper.arxivId && (
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-brand/20 bg-brand/5 text-brand text-xs font-bold mb-2">
            <svg className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
            arXiv:{paper.arxivId}
          </div>
        )}
        
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tight text-brand leading-[1.15]">
            {paper.title || "Untitled Paper"}
          </h1>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[14px] font-medium text-secondary">
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
              Published {formattedDate}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
              {(paper.citations || 0).toLocaleString()} Citations
            </span>
          </div>
          <div className="text-[14px] font-medium text-primary mt-2">
            By: {(paper.authors || []).length > 0 ? (paper.authors || []).join(", ") : "Unknown Author"}
          </div>
        </div>

        <div className="flex flex-wrap gap-3 pt-2">
          {paper.pdfUrl && (
            <Link href={paper.pdfUrl}>
              <Button variant="primary" className="gap-2">
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z"/><path d="m18 13.5-6-6"/><path d="M4 22V4c0-.5.2-1 .6-1.4C5 2.2 5.5 2 6 2h8l6 6v14"/></svg>
                PDF
              </Button>
            </Link>
          )}
          {paper.arxivUrl && (
            <Link href={paper.arxivUrl}>
              <Button variant="outline" className="gap-2">
                arXiv Page
                <svg className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>
              </Button>
            </Link>
          )}
          {paper.githubUrl && (
            <Link href={paper.githubUrl}>
              <Button variant="outline" className="gap-2">
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                GitHub {paper.githubStars && `★ ${(paper.githubStars / 1000).toFixed(1)}k`}
              </Button>
            </Link>
          )}
          <Button variant="outline" className="gap-2">
            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/></svg>
            Save
          </Button>
        </div>
      </header>

      {/* Content Sections */}
      <div className="space-y-8">
        
        {/* AI Summary Card */}
        {paper.aiSummary && (
          <Card className="border-brand/20 bg-surface shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow">
            <div className="absolute top-0 left-0 w-1 h-full bg-brand" />
            <div className="absolute right-[-20px] top-1/2 -translate-y-1/2 opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity duration-500">
              <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"/><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"/><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"/><path d="M3.477 10.896a4 4 0 0 1 .585-.396"/><path d="M19.938 10.5a4 4 0 0 1 .585.396"/><path d="M6 18a4 4 0 0 1-1.967-.516"/><path d="M19.967 17.484A4 4 0 0 1 18 18"/></svg>
            </div>
            
            <CardHeader className="pb-3 relative z-10">
              <CardTitle className="text-brand flex items-center gap-2">
                <svg className="w-5 h-5 animate-pulse" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>
                AI-Generated Summary
              </CardTitle>
            </CardHeader>
            <CardContent className="relative z-10">
              <p className="text-[15px] leading-relaxed text-brand font-medium max-w-3xl">
                {paper.aiSummary}
              </p>
            </CardContent>
          </Card>
        )}

        {/* Abstract Card */}
        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2">
              <svg className="w-5 h-5 text-secondary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
              Abstract
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-[15px] leading-relaxed text-secondary">
              <ExpandableDescription text={paper.abstract} />
            </div>
          </CardContent>
        </Card>

        {/* Split Tasks & Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2">
                <svg className="w-5 h-5 text-secondary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><line x1="3" x2="21" y1="9" y2="9"/><line x1="9" x2="9" y1="21" y2="9"/></svg>
                Tasks
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {paper.tasks && paper.tasks.length > 0 ? (
                  paper.tasks.map((task: string) => (
                    <Badge key={task} variant="green">{task}</Badge>
                  ))
                ) : (
                  <span className="text-[13px] text-secondary">No tasks specified.</span>
                )}
              </div>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2">
                <svg className="w-5 h-5 text-secondary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
                Methods
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {paper.methods && paper.methods.length > 0 ? (
                  paper.methods.map((method: string) => (
                    <Badge key={method} variant="orange">{method}</Badge>
                  ))
                ) : (
                  <span className="text-[13px] text-secondary">No methods specified.</span>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Citation Card */}
        {paper.bibtex && (
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-3">
              <CardTitle className="flex items-center gap-2">
                <svg className="w-5 h-5 text-secondary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/></svg>
                Citation
              </CardTitle>
              <CopyBibtexButton bibtex={paper.bibtex} />
            </CardHeader>
            <CardContent>
              <pre className="bg-hover p-4 rounded-md text-[13px] text-secondary overflow-x-auto border border-default font-mono">
                <code>{paper.bibtex}</code>
              </pre>
            </CardContent>
          </Card>
        )}

      </div>
    </main>
  );
}
