import * as React from "react";
import Link from "next/link";
import { getMethodDetailBySlug } from "@/lib/api";
import { mockMethodDetails, mockMethodCategories } from "@/lib/mockData";
import { FileText, Code, ChevronRight } from "lucide-react";
import { ExpandableDescription } from "@/components/ui/expandable-description";
import { generateSlug } from "@/lib/utils";
import { PapersFeed } from "@/components/domain/methods/papers-feed";
import { SotaTable } from "@/components/domain/methods/sota-table";

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

  const sourcePaper = methodDetail.papers && methodDetail.papers.length > 0 ? methodDetail.papers[0] : null;

  // Find the category this method belongs to, to get related methods
  let relatedMethods: string[] = ["WaveNet", "Conformer", "Spectrogram", "TDT"]; // Fallback
  const category = mockMethodCategories.find(cat => cat.methods.some(m => m.id === resolvedParams.slug));
  const categoryName = category ? category.name : "Language";
  if (category) {
    relatedMethods = category.methods
      .filter(m => m.id !== resolvedParams.slug)
      .slice(0, 5)
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

  const fallbackMetrics = {
    papersUsing: 1547,
    components: 4,
    repos: 24
  };

  const fallbackSota = [
    { dataset: "LibriSpeech (test-other)", task: "ASR", metric: "WER", score: "2.1%", model: "Whisper large-v3" },
    { dataset: "Common Voice 15.0", task: "Multilingual ASR", metric: "WER", score: "8.4%", model: "Whisper large-v3" },
    { dataset: "Switchboard (Hub5'00)", task: "ASR", metric: "WER", score: "4.2%", model: "Conformer-RNNT" },
    { dataset: "VoxCeleb1", task: "Speaker Verification", metric: "EER", score: "0.68%", model: "ECAPA-TDNN" },
    { dataset: "LRS3-TED", task: "Audio-Visual ASR", metric: "WER", score: "1.7%", model: "AV-HuBERT" },
    { dataset: "AudioSet", task: "Audio Classification", metric: "mAP", score: "0.493", model: "AST" }
  ];

  const fallbackUsageTrend = [
    { year: "2022", value: 40 },
    { year: "2023", value: 70 },
    { year: "2024 (Est.)", value: 100 }
  ];

  const tasksToRender = methodDetail.tasks && methodDetail.tasks.length > 0 ? methodDetail.tasks : fallbackTasks;
  const implementationsToRender = methodDetail.implementations && methodDetail.implementations.length > 0 ? methodDetail.implementations : fallbackImplementations;
  const metricsToRender = methodDetail.metrics || fallbackMetrics;
  const sotaToRender = methodDetail.sotaResults && methodDetail.sotaResults.length > 0 ? methodDetail.sotaResults : fallbackSota;
  const usageTrendToRender = methodDetail.usageTrend && methodDetail.usageTrend.length > 0 ? methodDetail.usageTrend : fallbackUsageTrend;

  return (
    <div className="w-full bg-[#F3F3EE] min-h-[calc(100vh-60px)]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 py-10">
        
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-[13px] text-secondary mb-10">
          <Link href="/methods" className="hover:text-primary transition-colors">Methods</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href={`/methods?category=${categoryName.toLowerCase()}`} className="hover:text-primary transition-colors">{categoryName}</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-primary font-medium">{methodDetail.title}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column (Content) */}
          <div className="lg:col-span-8 flex flex-col gap-10">
            
            {/* Hero Section */}
            <div>
              <h4 className="text-[11px] font-semibold text-secondary tracking-widest uppercase mb-2">Method</h4>
              <h1 className="text-[48px] font-bold text-primary tracking-tight leading-tight mb-4">
                {methodDetail.title}
              </h1>
              <div className="text-base text-secondary mb-6 max-w-3xl leading-relaxed">
                <ExpandableDescription text={methodDetail.description} />
              </div>
              
              {/* Main Paper Card */}
              {sourcePaper && (
                <div className="bg-surface border border-[#E1E1D7] rounded-lg p-4 flex flex-col gap-2">
                  <div className="flex justify-between items-start">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-semibold bg-gray-100 text-gray-600 px-2 py-0.5 rounded tracking-widest uppercase">Paper</span>
                        <span className="text-[11px] font-semibold bg-black text-white px-2 py-0.5 rounded tracking-widest uppercase">Official</span>
                      </div>
                      <Link href={`/paper/${sourcePaper.id}`}>
                        <h3 className="text-xl font-bold text-primary mt-1 hover:text-brand transition-colors">{sourcePaper.title}</h3>
                      </Link>
                      <p className="text-[13px] text-secondary">{sourcePaper.authors.slice(0, 4).join(", ")}{sourcePaper.authors.length > 4 ? " et al." : ""}</p>
                    </div>
                    <span className="text-[12px] font-medium text-secondary">{sourcePaper.date.split('-')[0]}</span>
                  </div>
                  <div className="text-[13px] text-secondary mt-2 line-clamp-2">
                    {sourcePaper.abstract}
                  </div>
                  <div className="flex items-center gap-4 mt-2">
                    <Link href={`/paper/${sourcePaper.id}`} className="flex items-center gap-1 text-[11px] font-semibold text-brand hover:underline">
                      <FileText className="w-3.5 h-3.5" /> PDF
                    </Link>
                    <Link href="#" className="flex items-center gap-1 text-[11px] font-semibold text-secondary hover:text-primary transition-colors">
                      <Code className="w-3.5 h-3.5" /> Code
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-surface border border-[#E1E1D7] rounded-lg p-4 flex flex-col items-center justify-center text-center">
                <span className="text-[11px] font-semibold text-secondary uppercase tracking-wider mb-2">Papers Using</span>
                <span className="text-3xl font-bold text-primary">{metricsToRender.papersUsing.toLocaleString()}</span>
              </div>
              <div className="bg-surface border border-[#E1E1D7] rounded-lg p-4 flex flex-col items-center justify-center text-center">
                <span className="text-[11px] font-semibold text-secondary uppercase tracking-wider mb-2">Introduced</span>
                <span className="text-3xl font-bold text-primary">{sourcePaper ? sourcePaper.date.split('-')[0] : "2022"}</span>
              </div>
              <div className="bg-surface border border-[#E1E1D7] rounded-lg p-4 flex flex-col items-center justify-center text-center">
                <span className="text-[11px] font-semibold text-secondary uppercase tracking-wider mb-2">Components</span>
                <span className="text-3xl font-bold text-primary">{metricsToRender.components}</span>
              </div>
              <div className="bg-surface border border-[#E1E1D7] rounded-lg p-4 flex flex-col items-center justify-center text-center">
                <span className="text-[11px] font-semibold text-secondary uppercase tracking-wider mb-2">Repos</span>
                <span className="text-3xl font-bold text-primary">{metricsToRender.repos}</span>
              </div>
            </div>

            {/* Usage Trend Chart (Visual Placeholder matched to Stitch) */}
            <div className="bg-surface border border-[#E1E1D7] rounded-lg p-4">
              <h4 className="text-[11px] font-semibold text-secondary uppercase tracking-wider mb-6">Usage Trend</h4>
              <div className="h-48 w-full bg-gradient-to-t from-blue-50/50 to-white relative flex items-end rounded-b-md overflow-hidden">
                <svg className="w-full h-full absolute inset-0" preserveAspectRatio="none" viewBox="0 0 100 100">
                  <path d="M0,100 L0,80 Q25,75 50,60 T100,20 L100,100 Z" fill="rgba(59, 130, 246, 0.05)" stroke="rgba(59, 130, 246, 0.4)" strokeWidth="2"></path>
                </svg>
                <div className="w-full flex justify-between text-[11px] font-semibold text-secondary z-10 pb-1 px-1">
                  <span>{usageTrendToRender[0]?.year || '2017'}</span>
                  <span>{usageTrendToRender[1]?.year || '2020'}</span>
                  <span>{usageTrendToRender[usageTrendToRender.length-1]?.year || '2024 (Est.)'}</span>
                </div>
              </div>
            </div>

            {/* SOTA Table */}
            <SotaTable results={sotaToRender} />

            {/* Related Methods */}
            <div>
              <h4 className="text-[11px] font-semibold text-secondary uppercase tracking-wider mb-4">Related Methods</h4>
              <div className="flex flex-wrap gap-2">
                {relatedMethods.map((method, idx) => (
                  <Link key={method} href={`/methods/${generateSlug(method)}`}>
                    <span className={`px-3 py-1.5 border border-[#E1E1D7] rounded-full text-[11px] font-semibold cursor-pointer transition-colors ${idx < 3 ? 'text-brand bg-white hover:bg-[#E8E8DE]' : 'text-secondary bg-white hover:bg-[#E8E8DE]'}`}>
                      {method}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Step 5: Papers Feed */}
            <PapersFeed papers={methodDetail.papers} methodTitle={methodDetail.title} />

          </div>

          {/* Right Column (Sidebar) */}
          <div className="lg:col-span-4 flex flex-col gap-10">
            {/* Architecture Diagram */}
            <div className="bg-surface border border-[#E1E1D7] rounded-lg p-4 sticky top-24">
              <h4 className="text-[11px] font-semibold text-secondary uppercase tracking-wider mb-6">Architecture</h4>
              <div className="flex flex-col items-center gap-4 py-6 border border-[#E1E1D7] rounded bg-[#F3F3EE]/30 relative overflow-hidden">
                {methodDetail.architectureUrl ? (
                  <img src={methodDetail.architectureUrl} alt={`${methodDetail.title} Architecture`} className="w-full h-auto object-contain" />
                ) : (
                  <>
                    <div className="w-4/5 grid grid-cols-2 gap-4 relative z-10">
                      <div className="border border-[#E1E1D7] bg-white rounded p-3 text-center text-[11px] font-semibold text-secondary">Encoder Block</div>
                      <div className="border border-[#E1E1D7] bg-white rounded p-3 text-center text-[11px] font-semibold text-secondary">Decoder Block</div>
                      <div className="border border-[#E1E1D7] bg-white rounded p-3 text-center text-[11px] font-semibold text-secondary">Encoder Block</div>
                      <div className="border border-[#E1E1D7] bg-white rounded p-3 text-center text-[11px] font-semibold text-secondary">Decoder Block</div>
                      <div className="text-center font-bold text-secondary">⋮</div>
                      <div className="text-center font-bold text-secondary">⋮</div>
                      <div className="border border-[#E1E1D7] bg-white rounded p-3 text-center text-[11px] font-semibold text-secondary">Encoder Block</div>
                      <div className="border border-[#E1E1D7] bg-white rounded p-3 text-center text-[11px] font-semibold text-secondary">Decoder Block</div>
                    </div>
                    {/* Animated Data Pulse behind the grid */}
                    <div className="absolute top-1/2 -translate-y-1/2 left-0 h-[2px] w-12 bg-brand rounded-full shadow-[0_0_8px_rgba(244,62,1,0.8)] blur-[1px] animate-flow-data z-0"></div>
                  </>
                )}
              </div>
              <div className="mt-4 pt-4 border-t border-[#E1E1D7] text-center">
                <Link href={methodDetail.sourceUrl || "#"} className="text-[11px] font-medium text-secondary hover:text-brand break-all transition-colors">
                  {methodDetail.sourceUrl ? methodDetail.sourceUrl.replace(/^https?:\/\//, '') : `https://arxiv.org/abs/1706.03762`}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
