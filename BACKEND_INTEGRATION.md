# Backend Integration Guide for Frontier Atlas

This document is for the backend engineering team. It explains exactly how to replace the current frontend mock data with real production API calls without breaking any UI components or layouts.

## Overview
The frontend is built using Next.js (App Router) and relies on Server Components to fetch and render data on the server. The data fetching logic has been strictly isolated to a single file: `src/lib/api.ts`. **You do not need to edit any UI components in the `src/app/` or `src/components/` directories.**

## Step 1: Update `src/lib/api.ts`
All mock data is currently hardcoded in `src/lib/mockData.ts` and returned via delayed Promises in `src/lib/api.ts`. 

To integrate your backend, open `src/lib/api.ts` and replace the mock functions with real `fetch()` calls pointing to your REST or GraphQL endpoints.

### Example: Fetching the Taxonomy
```typescript
// Replace this:
export async function getMethodsTaxonomy(): Promise<MethodCategory[]> {
  return new Promise((resolve) => setTimeout(() => resolve(mockMethodCategories), 500));
}

// With this:
export async function getMethodsTaxonomy(): Promise<MethodCategory[]> {
  const response = await fetch('https://api.yourbackend.com/v1/taxonomy');
  return response.json();
}
```

### Example: Fetching Method Details
```typescript
// Replace this:
export async function getMethodDetailBySlug(slug: string): Promise<MethodDetail> {
  // ... current mock logic ...
}

// With this:
export async function getMethodDetailBySlug(slug: string): Promise<MethodDetail | null> {
  const response = await fetch(`https://api.yourbackend.com/v1/methods/${slug}`);
  if (!response.ok) return null;
  return response.json();
}
```

## Step 2: Match the TypeScript Interfaces (or Map Your Data)
Your API responses must match the TypeScript interfaces defined in `src/types/index.ts`. If your backend schema differs slightly, do **not** rewrite the UI components. Instead, map the data directly inside `src/lib/api.ts`.

### Expected Schema for a Method (`MethodDetail`)
```typescript
export interface MethodDetail {
  slug: string;
  title: string;
  description: string;
  papers: {
    id: string;
    title: string;
    authors: string[];
    date: string;       // e.g., "2023-11-15"
    abstract: string;
    citations: number;
  }[];
}
```

## Step 3: Populate the New PapersWithCode Components
The UI is now equipped with dynamic components for SOTA Results, Usage Trends, and general Metrics. These components have built-in graceful fallbacks if the backend data is absent, so you can adopt them one at a time.

**To make them fully dynamic, provide these arrays in your API response:**

```typescript
export interface MethodDetail {
  // ... existing fields ...
  tasks?: { name: string; count: number }[];
  implementations?: { repo: string; framework: string; stars: number }[];
  sotaResults?: { dataset: string; task: string; metric: string; score: string; model: string }[];
  metrics?: { papersUsing: number; components: number; repos: number };
  usageTrend?: { year: string; value: number }[];
  sourceUrl?: string; // e.g. "https://openai.com/research/whisper"
  architectureUrl?: string; // Optional image URL for the architecture diagram
}
```

Additionally, the `MockPaper` interface now accepts optional `hasCode` and `stars` properties:
```typescript
export interface MockPaper {
  // ... existing fields
  hasCode?: boolean; // Renders a "Code Available" badge
  stars?: number; // Real GitHub stars (falls back to a mock calculation if missing)
}
```

The `src/app/methods/[slug]/page.tsx` file handles this mapping automatically. You do **not** need to touch the JSX logic. Just provide the data via `api.ts` and the UI will hydrate!

## Step 4: Routing Strategy (SSG vs. ISR)
Currently, the dynamic routes in Next.js use `generateStaticParams()` to pre-build a set of slugs at compile time. 
* If your backend is relatively static, keep `generateStaticParams()` and have it fetch all slugs from your database during the CI/CD build process.
* If your database updates frequently, consider adding `export const revalidate = 3600;` at the top of `page.tsx` to utilize Incremental Static Regeneration (ISR). This will rebuild the pages in the background every hour when new data is available.
