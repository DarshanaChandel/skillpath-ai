import { 
  CheckCircle2, 
  BarChart3, 
  Target, 
  Compass, 
  BookOpen, 
  FolderGit2, 
  LayoutDashboard,
  UserPlus,
  Cpu,
  Route,
  Trophy
} from 'lucide-react';

export const LANDING_HERO = {
  badge: "AI-Powered Career Intelligence for Students",
  title: "Understand your skills. Discover your gaps. Build your career.",
  description: "SkillPath AI analyzes your education, technical skills, and project experience against real-world industry career benchmarks — giving you precise readiness scores and personalized learning roadmaps.",
  primaryCta: "Analyze My Skills Free",
  secondaryCta: "Explore How It Works",
  stats: [
    { label: "Target Career Benchmarks", value: "50+" },
    { label: "Skill Vector Accuracy", value: "98%" },
    { label: "Recommended Projects", value: "200+" },
    { label: "Student Cost", value: "100% Free" }
  ]
};

export const LANDING_FEATURES = [
  {
    id: "skill-assessment",
    title: "Skill Assessment",
    description: "Catalog your programming languages, frameworks, databases, and tool proficiencies (1-5 scale) with structured self & project evaluations.",
    icon: Target,
    badge: "Input Tier",
    highlight: "Structured Taxonomy"
  },
  {
    id: "readiness-analysis",
    title: "Career Readiness Analysis",
    description: "Compute quantitative percentage match scores comparing your current skill profile against real industry benchmarks for target software engineering roles.",
    icon: BarChart3,
    badge: "Core Scoring",
    highlight: "Real-time Metrics"
  },
  {
    id: "gap-detection",
    title: "Skill Gap Detection",
    description: "Pinpoint exact technical deficiencies, missing prerequisites, and critical tool requirements standing between you and your target role.",
    icon: Cpu,
    badge: "Diagnostics",
    highlight: "Precision Mapping"
  },
  {
    id: "learning-path",
    title: "Personalized Learning Path",
    description: "Receive step-by-step learning recommendations prioritized by industry demand and prerequisite dependencies to bridge your gaps fast.",
    icon: Route,
    badge: "Roadmap",
    highlight: "Step-by-Step Guidance"
  },
  {
    id: "project-recommendations",
    title: "Project Recommendations",
    description: "Get curated portfolio project ideas designed specifically to demonstrate the exact missing skills required by recruiters for your target role.",
    icon: FolderGit2,
    badge: "Portfolio",
    highlight: "Practical Showcase"
  },
  {
    id: "career-dashboard",
    title: "Career Dashboard",
    description: "Track your ongoing skill progression, view historical readiness growth, update project portfolios, and prepare for technical interviews.",
    icon: LayoutDashboard,
    badge: "Analytics",
    highlight: "Growth Tracking"
  }
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: "01",
    title: "Create Student Profile",
    description: "Input your degree, current skills, proficiencies, and existing projects. Select your target career role (e.g., Full Stack Engineer, ML Engineer).",
    icon: UserPlus
  },
  {
    step: "02",
    title: "AI Skill Gap Analysis",
    description: "SkillPath AI compares your skill vector against target role requirements to identify missing core technologies and calculate your readiness score.",
    icon: Cpu
  },
  {
    step: "03",
    title: "Receive Custom Roadmap",
    description: "Get prioritized skill recommendations and portfolio project suggestions tailored to upgrade your readiness efficiently.",
    icon: Compass
  },
  {
    step: "04",
    title: "Build & Achieve Readiness",
    description: "Build recommended projects, update your skill levels, and watch your career readiness score rise toward top-tier job suitability.",
    icon: Trophy
  }
];

export const POPULAR_CAREER_TRACKS = [
  {
    title: "Full Stack Engineer",
    demand: "Very High",
    avgSalary: "$115,000 / yr",
    keySkills: ["React", "Node.js", "Express", "MongoDB / SQL", "REST APIs", "Git"],
    badgeColor: "indigo"
  },
  {
    title: "Machine Learning Engineer",
    demand: "Extreme Demand",
    avgSalary: "$135,000 / yr",
    keySkills: ["Python", "Pandas", "Scikit-Learn", "FastAPI", "Deep Learning", "Math/Stats"],
    badgeColor: "cyan"
  },
  {
    title: "Data Scientist",
    demand: "High",
    avgSalary: "$120,000 / yr",
    keySkills: ["Python", "SQL", "Pandas", "Statistical Modeling", "Matplotlib", "Big Data"],
    badgeColor: "emerald"
  },
  {
    title: "Frontend Engineer",
    demand: "High",
    avgSalary: "$105,000 / yr",
    keySkills: ["JavaScript", "TypeScript", "React", "Tailwind CSS", "UI/UX", "Web Performance"],
    badgeColor: "purple"
  },
  {
    title: "Backend Engineer",
    demand: "Very High",
    avgSalary: "$122,000 / yr",
    keySkills: ["Node.js", "Python / Go", "PostgreSQL", "System Design", "Docker", "Microservices"],
    badgeColor: "blue"
  },
  {
    title: "DevOps & Cloud Engineer",
    demand: "Extreme Demand",
    avgSalary: "$130,000 / yr",
    keySkills: ["Docker", "Kubernetes", "AWS / GCP", "CI/CD", "Linux", "Terraform"],
    badgeColor: "amber"
  }
];
