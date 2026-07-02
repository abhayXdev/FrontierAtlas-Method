import { MethodCategory, MethodDetail } from "@/types";
import { mockMethodCategories, mockMethodDetails } from "./mockData";

/**
 * Simulates a network request to fetch the Methods taxonomy.
 * This is the single integration point to replace when connecting to a real backend.
 * It must return a Promise<MethodCategory[]>.
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

export async function getPaperDetailById(id: string): Promise<any> {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Import here to avoid circular dependencies if needed, or rely on global
      const { mockPaperDetails } = require('./mockData');
      if (mockPaperDetails[id]) {
        resolve(mockPaperDetails[id]);
      } else {
        // Fallback for unknown papers
        resolve({
          id,
          title: `Research Paper: ${id}`,
          authors: ["Unknown Author"],
          publicationDate: "2024-01-01",
          citations: 0,
          abstract: "Abstract not available for this mock paper.",
          tasks: ["Unknown Task"],
          methods: ["Unknown Method"],
          bibtex: "Not available",
          aiSummary: "Summary not available."
        });
      }
    }, 500);
  });
}
