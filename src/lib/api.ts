import { MethodCategory } from "@/types";
import { mockMethodCategories } from "./mockData";

/**
 * Simulates a network request to fetch the Methods taxonomy.
 * This is the single integration point to replace when connecting to a real backend.
 * It must return a Promise<MethodCategory[]>.
 * 
 * Example real implementation:
 * export async function getMethodsTaxonomy(): Promise<MethodCategory[]> {
 *   return fetch('https://api.example.com/methods').then(res => res.json());
 * }
 */
export async function getMethodsTaxonomy(): Promise<MethodCategory[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockMethodCategories);
    }, 500);
  });
}
