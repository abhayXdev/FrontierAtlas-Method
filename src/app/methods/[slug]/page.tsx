import * as React from "react";
import Link from "next/link";
import { getMethodDetailBySlug } from "@/lib/api";
import { mockMethodDetails, mockMethodCategories } from "@/lib/mockData";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Code, ChevronRight } from "lucide-react";
import { ExpandableDescription } from "@/components/ui/expandable-description";
import { generateSlug } from "@/lib/utils";

export async function generateStaticParams() {
  const existingKeys = Object.keys(mockMethodDetails);
  const essentialSlugs = ["rag", "mamba-2", "fine-tuning", "lora"];
  const allSlugs = Array.from(new Set([...existingKeys, ...essentialSlugs]));
  
  return allSlugs.map((slug) => ({
    slug,
  }));
}

export default async function MethodDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const methodDetail = await getMethodDetailBySlug(resolvedParams.slug);

  if (!methodDetail) {
    return <div className="p-12 text-center text-primary">Method not found. Please check the API fallback generator.</div>;
  }

  const sourcePaper = methodDetail.papers.length > 0 ? methodDetail.papers[0] : null;

  // Find the category this method belongs to, to get related methods
  let relatedMethods: string[] = ["WaveNet", "Conformer", "Spectrogram", "TDT"]; // Fallback
  const category = mockMethodCategories.find(cat => cat.methods.some(m => m.id === resolvedParams.slug));
  if (category) {
    relatedMethods = category.methods
      .filter(m => m.id !== resolvedParams.slug)
      .slice(0, 4)
      .map(m => m.name);
  }

  // Gracefully handle missing backend arrays by using fallbacks until the backend provides them
  const fallbackTasks = [
    { name: "Speech Recognition", count: 320 },
    { name: "Audio Classification", count: 150 }
  ];
  
  const fallbackImplementations = [
    { repo: "openai/whisper", framework: "PyTorch", stars: 65000 },
    { repo: "huggingface/transformers", framework: "PyTorch, JAX", stars: 120000 }
  ];

  const tasksToRender = methodDetail.tasks && methodDetail.tasks.length > 0 ? methodDetail.tasks : fallbackTasks;
  const implementationsToRender = methodDetail.implementations && methodDetail.implementations.length > 0 ? methodDetail.implementations : fallbackImplementations;

  return (
    <div className="w-full bg-surface min-h-[calc(100vh-60px)]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Step 2: Breadcrumbs */}
        <nav className="flex items-center text-sm font-medium text-secondary mb-8">
          <Link href="/methods" className="hover:text-brand transition-colors">
            Methods
          </Link>
          <ChevronRight className="w-4 h-4 mx-2 text-default" />
          <span className="text-primary">{methodDetail.title}</span>
        </nav>

        {/* Step 3: Top Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-8 mb-12">
          
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col">
            <span className="text-[11px] font-bold tracking-[0.2em] text-secondary uppercase mb-4">
              Method
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-primary mb-6">
              {methodDetail.title}
            </h1>
            <div className="mb-8">
              <ExpandableDescription 
                text={methodDetail.description} 
                className="text-sm md:text-[15px] text-secondary leading-relaxed max-w-[90%]" 
              />
            </div>
            
            <div className="mb-10">
              <span className="block text-[11px] font-bold text-secondary uppercase mb-2 tracking-[0.2em]">
                Source
              </span>
              <div className="border border-default border-l-[3px] border-l-brand p-5 bg-surface rounded-r-md shadow-sm">
                {sourcePaper ? (
                  <div className="flex flex-col gap-1">
                    <Link href={`/paper/${sourcePaper.id}`} className="text-primary font-bold text-lg hover:text-brand transition-colors">
                      {sourcePaper.title}
                    </Link>
                    <span className="text-[13px] text-secondary font-medium">{sourcePaper.date.split('-')[0]}</span>
                  </div>
                ) : (
                  <span className="text-secondary text-sm">No source available</span>
                )}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 mt-2">
              <div>
                <span className="block text-[11px] font-bold tracking-[0.2em] text-secondary uppercase mb-2">
                  Papers Using
                </span>
                <div className="text-3xl font-bold text-primary">
                  1,547
                </div>
              </div>
              <div>
                <span className="block text-[11px] font-bold tracking-[0.2em] text-secondary uppercase mb-2">
                  Introduced
                </span>
                <div className="text-3xl font-bold text-primary">
                  {sourcePaper ? sourcePaper.date.split('-')[0] : "2022"}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 self-start h-fit">
            <div className="border border-default rounded-lg bg-surface shadow-sm min-h-[400px] flex flex-col p-2">
              <div className="flex-1 flex flex-col items-center justify-center p-8 opacity-80">
                <div className="flex gap-8 items-center w-full max-w-md">
                  {/* Encoder Stack */}
                  <div className="flex flex-col gap-3 w-1/2">
                    <div className="bg-surface border border-default p-3 text-center text-xs font-medium text-secondary rounded-sm shadow-sm">Encoder Block</div>
                    <div className="bg-surface border border-default p-3 text-center text-xs font-medium text-secondary rounded-sm shadow-sm">Encoder Block</div>
                    <div className="text-center text-secondary leading-none py-1">⋮</div>
                    <div className="bg-surface border border-default p-3 text-center text-xs font-medium text-secondary rounded-sm shadow-sm">Encoder Block</div>
                  </div>
                  
                  {/* Connection Arrow */}
                  <div className="flex-1 h-px bg-default relative">
                     <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-px border-t-[4px] border-b-[4px] border-l-[6px] border-transparent border-l-default"></div>
                  </div>
                  
                  {/* Decoder Stack */}
                  <div className="flex flex-col gap-3 w-1/2">
                    <div className="bg-surface border border-default p-3 text-center text-xs font-medium text-secondary rounded-sm shadow-sm">Decoder Block</div>
                    <div className="bg-surface border border-default p-3 text-center text-xs font-medium text-secondary rounded-sm shadow-sm">Decoder Block</div>
                    <div className="text-center text-secondary leading-none py-1">⋮</div>
                    <div className="bg-surface border border-default p-3 text-center text-xs font-medium text-secondary rounded-sm shadow-sm">Decoder Block</div>
                  </div>
                </div>
              </div>
              <div className="mt-4 border-t border-default pt-3 pb-2 w-full text-center">
                <Link href="#" className="text-[11px] font-mono text-secondary hover:text-brand hover:underline">
                  https://example.com/method/{resolvedParams.slug}
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Step 4: Full-Width Metadata Bands */}
        <div className="border border-default rounded-md p-4 flex flex-wrap items-center gap-3 mb-10 bg-surface shadow-sm">
          <span className="text-[11px] font-bold text-secondary uppercase mr-2 tracking-widest">
            Related Methods
          </span>
          {relatedMethods.map((method) => (
            <Link key={method} href={`/methods/${generateSlug(method)}`}>
              <Badge variant="outline" className="border-default rounded-md bg-surface hover:border-brand hover:text-brand transition-colors cursor-pointer text-xs py-1 px-3">
                {method}
              </Badge>
            </Link>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-default pb-4 mb-8 gap-4">
          <div className="flex items-center gap-3">
            <button className="px-3 py-1 text-[13px] font-bold bg-primary text-inverse rounded-[4px] transition-colors">
              trending
            </button>
            <button className="px-3 py-1 text-[13px] font-medium text-secondary hover:text-primary transition-colors">
              newest
            </button>
            <button className="px-3 py-1 text-[13px] font-medium text-secondary hover:text-primary transition-colors">
              most cited
            </button>
          </div>
          <div className="text-[13px] text-secondary font-medium font-mono">
            {methodDetail.papers.length} papers using {methodDetail.title}
          </div>
        </div>

        {/* Step 5: Papers Feed */}
        <div className="flex flex-col">
          {methodDetail.papers.map((paper) => (
            <Card 
              key={paper.id} 
              className="border-0 border-t border-default bg-transparent shadow-none rounded-none py-6 px-0 hover:bg-surface/50 transition-colors first:border-t-0"
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
                  {paper.authors.join(", ")} • {paper.date}
                </p>
                <p className="text-primary text-sm line-clamp-2 mb-4">
                  {paper.abstract}
                </p>
                
                <div className="flex items-center gap-3">
                  <Badge variant="outline" className="flex items-center gap-1.5 font-medium">
                    <FileText className="w-3.5 h-3.5" />
                    {paper.citations.toLocaleString()} Citations
                  </Badge>
                  <Badge variant="outline" className="flex items-center gap-1.5 font-medium">
                    <Code className="w-3.5 h-3.5" />
                    {(paper.citations * 3 + 150).toLocaleString()} Stars
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Step 6: Code Implementations & Models (PWC Style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 pt-8 border-t border-default">
          {/* Tasks Section */}
          <div>
            <h3 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
               Applied Tasks
            </h3>
            <div className="flex flex-col gap-2">
               {tasksToRender.map((task, idx) => (
                 <div key={idx} className="flex justify-between items-center p-3 border border-default hover:border-brand transition-colors cursor-pointer bg-surface/50">
                   <span className="text-sm font-semibold text-primary">{task.name}</span>
                   <span className="text-xs text-secondary">{task.count} papers</span>
                 </div>
               ))}
            </div>
          </div>

          {/* Top Implementations Section */}
          <div>
            <h3 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
               Top Implementations
            </h3>
            <div className="flex flex-col gap-2">
               {implementationsToRender.map((impl, idx) => (
                 <div key={idx} className="flex justify-between items-center p-3 border border-default hover:border-brand transition-colors cursor-pointer bg-surface/50">
                   <div className="flex flex-col">
                     <span className="text-sm font-semibold text-primary">{impl.repo}</span>
                     <span className="text-xs text-secondary">{impl.framework}</span>
                   </div>
                   <Badge variant="outline" className="flex items-center gap-1">
                     <Code className="w-3 h-3" /> {impl.stars >= 1000 ? `${(impl.stars / 1000).toFixed(0)}k` : impl.stars}
                   </Badge>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
