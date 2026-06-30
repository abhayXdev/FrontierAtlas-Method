import { MethodsHero } from "@/components/domain/methods/methods-hero";
import { CategoryRow } from "@/components/domain/methods/category-row";
import { getMethodsTaxonomy } from "@/lib/api";

export default async function MethodsPage() {
  const methodsTaxonomy = await getMethodsTaxonomy();

  return (
    <div className="w-full bg-surface min-h-[calc(100vh-60px)]">
      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-12 xl:px-20 pb-20">
        <MethodsHero />
        <main className="flex flex-col mt-4 border-t border-border-subtle">
          <h2 className="sr-only">Browse Methods by Category</h2>
          {methodsTaxonomy.map((category, index) => (
            <CategoryRow key={category.id} category={category} index={index} />
          ))}
        </main>
      </div>
    </div>
  );
}
