import { MethodCategory } from "@/types";
import { mockMethodCategories } from "./mockData";

/**
 * Simulates a network request to fetch the Methods taxonomy.
 * Resolves with mock data after an artificial latency.
 */
export async function getMethodsTaxonomy(): Promise<MethodCategory[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockMethodCategories);
    }, 500);
  });
}
