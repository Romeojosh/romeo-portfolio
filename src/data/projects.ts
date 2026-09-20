export interface ProjectMockupDetail {
  headerTag: string;
  sublabel: string;
  statusBadge?: string;
  workflowSteps: Array<{
    label: string;
    description: string;
  }>;
  systemArchitecture: string;
}

export interface Project {
  id: string;
  number: string;
  title: string;
  year: string;
  category: string;
  description: string;
  technologies: string[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  caseStudyUrl?: string;
  accent?: "amber" | "bronze" | "gold";
  mockup: ProjectMockupDetail;
}

export const PROJECTS: Project[] = [
  {
    id: "iloprisaa",
    number: "01",
    title: "ILOPRISAA",
    year: "2026",
    category: "ATHLETE DOCUMENT MANAGEMENT SYSTEM",
    description:
      "Web-based athlete document management and eligibility verification system for PRISAA. Coaches can upload athlete requirements, eligibility committee members can review and verify submissions, and users can track document and eligibility status through centralized dashboards.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Supabase", "ExcelJS"],
    accent: "bronze",
    mockup: {
      headerTag: "ILOPRISAA // ELIGIBILITY WORKFLOW",
      sublabel: "DOCUMENT VALIDATION MODULE",
      statusBadge: "ACTIVE PIPELINE",
      workflowSteps: [
        {
          label: "SUBMISSION PORTAL",
          description: "Coach batch requirement uploads & credential validation",
        },
        {
          label: "COMMITTEE REVIEW",
          description: "Eligibility committee verification & approval status",
        },
        {
          label: "CENTRAL DASHBOARD",
          description: "Unified athlete status tracking & roster reporting",
        },
      ],
      systemArchitecture: "ROLE-BASED ACCESS • CENTRALIZED DOCUMENT TRACKING",
    },
  },
  {
    id: "schedmate",
    number: "02",
    title: "SchedMate",
    year: "2026",
    category: "SMART SCHEDULING SYSTEM",
    description:
      "Scheduling application designed to organize and manage academic schedules, rooms, and time assignments in a clearer and more structured workflow.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
    accent: "amber",
    mockup: {
      headerTag: "SCHEDMATE // TIMETABLE ENGINE",
      sublabel: "ROOM & TIME ALLOCATION",
      statusBadge: "STRUCTURED WORKFLOW",
      workflowSteps: [
        {
          label: "FACILITY ALLOCATION",
          description: "Laboratory & lecture room capacity assignments",
        },
        {
          label: "FACULTY TIMETABLES",
          description: "Structured section periods & instructor load mapping",
        },
        {
          label: "TIMELINE VISUALIZER",
          description: "Weekly academic calendar & schedule conflict view",
        },
      ],
      systemArchitecture: "STRUCTURED TIMETABLE MATRIX • ACADEMIC PLANNING",
    },
  },
  {
    id: "nexrun",
    number: "03",
    title: "Nexrun",
    year: "2025",
    category: "RUNNING EVENT DISCOVERY PLATFORM",
    description:
      "Running event discovery platform created to help runners find races in Iloilo and other locations, with filters for distance, date and time, and location.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    accent: "amber",
    mockup: {
      headerTag: "NEXRUN // RACE DISCOVERY",
      sublabel: "EVENT INDEXING ENGINE",
      statusBadge: "COMMUNITY RUNS",
      workflowSteps: [
        {
          label: "EVENT REGISTRY",
          description: "Curated race listings across Iloilo & regional venues",
        },
        {
          label: "MULTI-CATEGORY FILTERS",
          description: "Distance categories (5K, 10K, 21K, 42K) & date selection",
        },
        {
          label: "LOCATION DIRECTORY",
          description: "Venue guidelines, start schedule & organizer details",
        },
      ],
      systemArchitecture: "LOCALIZED RACE DIRECTORY • ENDURANCE ATHLETE COMMERCE",
    },
  },
];
