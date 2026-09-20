export interface SkillGroup {
  id: string;
  number: string;
  label: string;
  skills: string[];
}

export interface StatItem {
  value: string;
  label: string;
  accent?: "amber" | "bronze" | "gradient";
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: "frontend",
    number: "01",
    label: "FRONTEND",
    skills: [
      "React",
      "TypeScript",
      "JavaScript",
      "Next.js",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Responsive Design",
      "Motion / Framer Motion",
    ],
  },
  {
    id: "backend-data",
    number: "02",
    label: "BACKEND & DATA",
    skills: [
      "Supabase",
      "PHP",
      "Node.js",
      "MongoDB",
      "MySQL",
      "PostgreSQL",
      "REST APIs",
      "SQL",
      "Authentication",
      "Role-Based Access Control",
      "Node.js basics",
    ],
  },
  {
    id: "design-workflow",
    number: "03",
    label: "DESIGN & WORKFLOW",
    skills: [
      "Figma",
      "UI/UX Design",
      "Design Systems",
      "Git",
      "GitHub",
      "Responsive UI",
      "Component-Based Development",
    ],
  },
  {
    id: "tools-learning",
    number: "04",
    label: "TOOLS & LEARNING",
    skills: [
      "VS Code",
      "Vite",
      "npm",
      "Debugging",
      "API Integration",
      "Git Workflows",
      "Prompt-Assisted Development",
      "Continuous Learning",
    ],
  },
];

export const STATS: StatItem[] = [
  {
    value: "04",
    label: "CORE SKILL AREAS",
    accent: "gradient",
  },
  {
    value: "03+",
    label: "ACTIVE PROJECTS",
    accent: "amber",
  },
  {
    value: "100%",
    label: "CURIOSITY",
    accent: "gradient",
  },
  {
    value: "∞",
    label: "LEARNING",
    accent: "bronze",
  },
];
