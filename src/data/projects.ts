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

/** Verified secondary projects kept out of the current featured-work layout. */
export interface SecondaryProject {
  id: string;
  title: string;
  description: string;
  category: "APP PROJECT" | "UI/UX PROTOTYPE";
  liveUrl?: string;
  figmaUrl?: string;
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
    githubUrl: "https://github.com/Romeojosh/nexrun",
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

export const SECONDARY_PROJECTS: SecondaryProject[] = [
  {
    id: "carsada",
    title: "Carsada",
    description:
      "Carsada assists commuters in Iloilo City by helping them find jeepney routes and connections to reach their destination.",
    category: "APP PROJECT",
    liveUrl: "https://carsadaapp.vercel.app/",
  },
  {
    id: "tidytime",
    title: "TidyTime",
    description:
      "A student productivity and organization app designed to help students stay organized, productive, and on track.",
    category: "UI/UX PROTOTYPE",
    figmaUrl:
      "https://www.figma.com/design/OfTVrpp5NaxoqzNzjtols5/prototype-for-design-thinking-challenge?node-id=0-1&p=f&t=dxNEwBfbiNL316om-0",
  },
  {
    id: "daily-ui-challenge-1-add-to-cart",
    title: "Daily UI Challenge #1 — Add to Cart",
    description:
      "A UI design created for Daily UI Challenge #1 focused on an Add to Cart interface.",
    category: "UI/UX PROTOTYPE",
    figmaUrl:
      "https://www.figma.com/design/jcppgu5nlYwbR0i8JBFLfm/Daily-UI-Challenge--1-Requiron?node-id=0-1&p=f&t=GZ8DFznAXOGKeoEv-0",
  },
];

// Awesome Todos is intentionally not included: the only known repository URL is a placeholder.
