import { MethodCategory, MethodDetail } from "@/types";
import { mockMethodCategories, mockMethodDetails } from "./mockData";

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
export async function getMethodDetailBySlug(slug: string): Promise<MethodDetail> {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (mockMethodDetails[slug]) {
        resolve(mockMethodDetails[slug]);
      } else {
        const formattedTitle = slug
          .split('-')
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');

        resolve({
          slug,
          title: formattedTitle,
          description: "A specialized machine learning method and optimization technique utilized to enhance performance across diverse model architectures.",
          papers: [
            {
              id: `${slug}-paper-1`,
              title: `Advances in ${formattedTitle} Architectures`,
              authors: ["Jane Doe", "John Smith"],
              date: "2023-11-15",
              abstract: `This paper explores the foundational principles and recent advancements in ${formattedTitle}, highlighting key improvements in efficiency and scalability.`,
              citations: 1240,
            },
            {
              id: `${slug}-paper-2`,
              title: `Scaling ${formattedTitle} for Next-Generation Models`,
              authors: ["Alice Johnson", "Bob Lee"],
              date: "2024-02-10",
              abstract: `An empirical study on the scaling properties of ${formattedTitle} when applied to ultra-large parameter regimes.`,
              citations: 890,
            },
          ],
        });
      }
    }, 500);
  });
}
