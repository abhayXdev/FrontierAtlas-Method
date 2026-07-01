import * as LucideIcons from "lucide-react";

export type IconName = keyof typeof LucideIcons;

export interface MethodCategory {
  id: string;
  name: string;
  iconName: IconName;
  methods: { id: string; name: string }[];
}

export interface MockPaper {
  id: string;
  title: string;
  authors: string[];
  date: string;
  abstract: string;
  citations: number;
  hasCode?: boolean;
}

export interface MethodDetail {
  slug: string;
  title: string;
  description: string;
  papers: MockPaper[];
  tasks?: { name: string; count: number }[];
  implementations?: { repo: string; framework: string; stars: number }[];
  sotaResults?: { dataset: string; task: string; metric: string; score: string; model: string }[];
  metrics?: { papersUsing: number; components: number; repos: number };
  usageTrend?: { year: string; value: number }[];
}
