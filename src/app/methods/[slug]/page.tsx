import * as React from "react";
import Link from "next/link";

// In Next.js 15, `params` is a Promise, so we must await it.
export default async function MethodDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  // Decode the URL slug back to readable text for the placeholder
  const methodName = decodeURIComponent(resolvedParams.slug).replace(/-/g, ' ').toUpperCase();

  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
      <div className="w-16 h-16 bg-brand/10 text-brand flex items-center justify-center rounded-full mb-6">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>
      </div>
      <h1 className="text-3xl font-bold text-brand mb-4">
        {methodName}
      </h1>
      <p className="text-secondary max-w-md mb-8">
        This is a placeholder for the Method Detail page. The actual feed of papers using this method will be implemented here in Phase 2.
      </p>
      <Link 
        href="/methods" 
        className="bg-brand hover:bg-brand-hover text-inverse px-6 py-2 rounded-full font-bold transition-colors"
      >
        &larr; Back to Methods
      </Link>
    </div>
  );
}
