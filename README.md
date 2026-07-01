# FrontierAtlas Methods Library

This is the FrontierAtlas Methods page repository — a methods library similar to paperswithcode.com, built specifically for the Frontier Atlas platform.

## Tech Stack
- **Framework:** Next.js 16
- **UI:** React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Icons:** lucide-react

## How to run locally
``bash
npm install
npm run dev
``

## Project Structure
- src/app/methods/page.tsx: The main methods page
- src/components/domain/methods/: Domain-specific components (CategoryRow, MethodsHero)
- src/components/ui/: Reusable UI components (Badge, SpotlightWrapper)
- src/lib/api.ts: Data fetching functions
- src/lib/mockData.ts: Mock taxonomy data for development
- src/lib/utils.ts: Utility functions (cn, slugify)
- src/types/index.ts: Shared TypeScript types (e.g., MethodCategory)

## API Integration

To swap the mock data for a real backend API, you only need to update the getMethodsTaxonomy() function in src/lib/api.ts. This is the single integration point. It must return a Promise<MethodCategory[]> matching the type defined in src/types/index.ts.

### MethodCategory Interface
``typescript
export interface MethodCategory {
  id: string; // Unique identifier for the category
  name: string; // Display name of the category
  iconName: string; // Name of the Lucide icon to display
  methods: Array<{
    id: string; // Unique identifier for the method
    name: string; // Display name of the method
  }>;
}
``

## Design Tokens
All design tokens and colors are centralized in the src/app/globals.css @theme block. These have been verified against the official groq.com palette. The typography uses the Inter font to match frontieratlas.co.

## Note on Completeness
The /methods page is complete and pixel-perfect to the reference specification. Other pages such as /, /methods/[slug], and /paper/[id] are currently stubs and are meant for other team members to implement.
