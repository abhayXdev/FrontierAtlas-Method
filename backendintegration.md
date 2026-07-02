# Backend Integration Guide for Frontier Atlas

This guide is intended for the backend engineering team to connect the Frontier Atlas frontend (Next.js App Router) to the PostgreSQL database.

## 1. Database Connection

A Neon PostgreSQL instance has been provisioned. The connection string is already saved in `.env.local`:

```env
DATABASE_URL="postgresql://<username>:<password>@<host>/<database>?sslmode=require&channel_binding=require"
```

You can use `pg` or an ORM like Prisma / Drizzle to connect to this database using `process.env.DATABASE_URL`.

## 2. Integration Point (`src/lib/api.ts`)

The frontend UI components are **100% decoupled** from the database logic. The frontend relies entirely on a single file to fetch data: `src/lib/api.ts`.

Currently, `api.ts` exports a function `getMethodDetailBySlug(slug: string)` which returns a Promise resolving to a strongly typed object (or mock data).

**Your Task:**
1. Open `src/lib/api.ts`.
2. Connect to the Neon DB using the `DATABASE_URL`.
3. Rewrite the `getMethodDetailBySlug` function to execute a SQL query (e.g., `SELECT * FROM methods WHERE slug = $1`) instead of returning the `mockMethodDetails` object.
4. Ensure the returned object matches the expected TypeScript shape (title, description, architectureUrl, tasks, implementations, sotaResults, papers).

## 3. Graceful UI Fallbacks

You do not need to worry about breaking the UI if your database is missing certain arrays or fields yet!

The `src/app/methods/[slug]/page.tsx` component is designed with robust null-checks and fallbacks:
- If `methodDetail.papers` is empty, the UI will just show an empty papers feed.
- If `methodDetail.architectureUrl` is missing, the UI renders a beautiful CSS-based neural network diagram fallback.
- If `methodDetail.sotaResults` is missing, the UI will safely map over an empty array or use the fallback metrics.

You can safely deploy partial database tables and the UI will continue to function perfectly.
