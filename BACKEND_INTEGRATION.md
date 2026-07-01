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
We recently added "Applied Tasks" and "Top Implementations" sections to the bottom of the Method Detail page (`src/app/methods/[slug]/page.tsx`). These are currently hardcoded placeholders.

**To make them dynamic:**
1. Update the `MethodDetail` interface in `src/types/index.ts` to accept these new arrays:
   ```typescript
   export interface MethodDetail {
     // ... existing fields ...
     tasks?: { name: string; count: number }[];
     implementations?: { repo: string; framework: string; stars: number }[];
   }
   ```
2. Feed real arrays from your backend through `api.ts`.
3. Open `src/app/methods/[slug]/page.tsx` (this is the *only* UI file you need to touch). Scroll to the bottom ("Step 6") and map over your new arrays instead of the hardcoded JSX blocks. Look for the comments: `{/* Backend Team: Map your tasks data here */}`.

## Step 4: Routing Strategy (SSG vs. ISR)
Currently, the dynamic routes in Next.js use `generateStaticParams()` to pre-build a set of slugs at compile time. 
* If your backend is relatively static, keep `generateStaticParams()` and have it fetch all slugs from your database during the CI/CD build process.
* If your database updates frequently, consider adding `export const revalidate = 3600;` at the top of `page.tsx` to utilize Incremental Static Regeneration (ISR). This will rebuild the pages in the background every hour when new data is available.
