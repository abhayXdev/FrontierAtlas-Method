import * as LucideIcons from "lucide-react";

export type IconName = keyof typeof LucideIcons;

export interface MethodCategory {
  id: string;
  name: string;
  iconName: IconName;
  methods: string[];
}
