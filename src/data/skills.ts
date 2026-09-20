import type { IconType } from "react-icons";
import {
  SiCss,
  SiFigma,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiNpm,
  SiPhp,
  SiPostgresql,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

export interface SkillGroup {
  id: string;
  number: string;
  label: string;
  description: string;
  skills: string[];
}

export interface TechStackItem {
  label: string;
  category: "frontend" | "backend" | "design" | "workflow";
  icon: IconType;
  color: string;
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
    description: "Building responsive interfaces and reusable web components.",
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
      "Component-Based Development",
    ],
  },
  {
    id: "backend-data",
    number: "02",
    label: "BACKEND & DATA",
    description: "Connecting applications to dependable data, APIs, and access control.",
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
    ],
  },
  {
    id: "design",
    number: "03",
    label: "DESIGN",
    description: "Shaping clear, responsive interfaces with practical design systems.",
    skills: [
      "Figma",
      "UI/UX Design",
      "Design Systems",
      "Interface Design",
      "Responsive Design",
      "Responsive UI",
    ],
  },
  {
    id: "development-workflow",
    number: "04",
    label: "DEVELOPMENT WORKFLOW",
    description: "Working iteratively through version control, debugging, and integration.",
    skills: [
      "VS Code",
      "Vite",
      "npm",
      "Git",
      "GitHub",
      "Debugging",
      "API Integration",
      "Git Workflows",
      "Prompt-Assisted Development",
      "Continuous Learning",
    ],
  },
];

export const TECH_STACK: TechStackItem[] = [
  { label: "React", category: "frontend", icon: SiReact, color: "#61DAFB" },
  { label: "TypeScript", category: "frontend", icon: SiTypescript, color: "#3178C6" },
  { label: "JavaScript", category: "frontend", icon: SiJavascript, color: "#F7DF1E" },
  { label: "Next.js", category: "frontend", icon: SiNextdotjs, color: "#FFFFFF" },
  { label: "HTML", category: "frontend", icon: SiHtml5, color: "#E34F26" },
  { label: "CSS", category: "frontend", icon: SiCss, color: "#1572B6" },
  { label: "Tailwind CSS", category: "frontend", icon: SiTailwindcss, color: "#06B6D4" },
  { label: "Supabase", category: "backend", icon: SiSupabase, color: "#3ECF8E" },
  { label: "PostgreSQL", category: "backend", icon: SiPostgresql, color: "#4169E1" },
  { label: "PHP", category: "backend", icon: SiPhp, color: "#777BB4" },
  { label: "Node.js", category: "backend", icon: SiNodedotjs, color: "#339933" },
  { label: "MongoDB", category: "backend", icon: SiMongodb, color: "#47A248" },
  { label: "MySQL", category: "backend", icon: SiMysql, color: "#4479A1" },
  { label: "REST APIs", category: "backend", icon: TbApi, color: "#A6A8AD" },
  { label: "Figma", category: "design", icon: SiFigma, color: "#F24E1E" },
  { label: "Git", category: "workflow", icon: SiGit, color: "#F05032" },
  { label: "GitHub", category: "workflow", icon: SiGithub, color: "#FFFFFF" },
  { label: "Vite", category: "workflow", icon: SiVite, color: "#646CFF" },
  { label: "npm", category: "workflow", icon: SiNpm, color: "#CB3837" },
];

export const STATS: StatItem[] = [
  { value: "04", label: "CORE SKILL AREAS", accent: "gradient" },
  { value: "03+", label: "ACTIVE PROJECTS", accent: "amber" },
  { value: "100%", label: "CURIOSITY", accent: "gradient" },
  { value: "∞", label: "LEARNING", accent: "bronze" },
];
