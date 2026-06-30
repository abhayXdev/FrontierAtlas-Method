import { FeedLayout } from "@/components/layout/feed-layout";

export default function HomePage() {
  return (
    <div className="w-full bg-surface min-h-[calc(100vh-60px)]">
      <FeedLayout
        leftSidebar={<nav className="text-sm font-medium text-text-muted">Navigation placeholder</nav>}
        rightSidebar={<aside className="text-sm text-text-muted">Sidebar placeholder</aside>}
      >
        <div className="py-12 md:py-24">
          <h1 className="text-4xl font-bold tracking-tight text-text-main mb-4">Home feed — coming soon</h1>
          <p className="text-text-muted">The main feed is under construction.</p>
        </div>
      </FeedLayout>
    </div>
  );
}
