// ─── Career Goal Options ───────────────────────────────────────────────────
export const CAREER_ROLES = [
  {
    id: 'frontend-dev',
    label: 'Frontend Developer',
    description: 'Build user interfaces & client-side web experiences.',
    icon: '🖥️',
    color: 'indigo'
  },
  {
    id: 'backend-dev',
    label: 'Backend Developer',
    description: 'Design servers, APIs, databases, and system architecture.',
    icon: '⚙️',
    color: 'blue'
  },
  {
    id: 'fullstack-dev',
    label: 'Full Stack Developer',
    description: 'Work across the entire software stack, front to back.',
    icon: '🔗',
    color: 'cyan'
  },
  {
    id: 'data-scientist',
    label: 'Data Scientist',
    description: 'Derive insights from data using statistics & machine learning.',
    icon: '📊',
    color: 'emerald'
  },
  {
    id: 'data-analyst',
    label: 'Data Analyst',
    description: 'Analyze structured data to support business decisions.',
    icon: '📈',
    color: 'teal'
  },
  {
    id: 'ml-engineer',
    label: 'ML Engineer',
    description: 'Build, train, and deploy machine learning systems at scale.',
    icon: '🤖',
    color: 'purple'
  },
  {
    id: 'ui-ux-designer',
    label: 'UI/UX Designer',
    description: 'Design intuitive, accessible, and beautiful user experiences.',
    icon: '🎨',
    color: 'pink'
  },
  {
    id: 'cybersecurity',
    label: 'Cybersecurity Analyst',
    description: 'Protect systems and networks from digital attacks and threats.',
    icon: '🔐',
    color: 'rose'
  }
];

// ─── Skill Categories ──────────────────────────────────────────────────────
export const SKILL_CATEGORIES = [
  'Programming Language',
  'Frontend Framework / Library',
  'Backend Framework',
  'Database',
  'Cloud & DevOps',
  'ML / AI',
  'Data Analysis',
  'UI/UX & Design',
  'Cybersecurity',
  'Version Control & Tools',
  'Testing',
  'Other'
];

// ─── Proficiency Levels ────────────────────────────────────────────────────
export const PROFICIENCY_LEVELS = [
  {
    value: 'beginner',
    label: 'Beginner',
    description: 'Learning the basics, minimal hands-on experience.',
    color: 'slate',
    score: 1
  },
  {
    value: 'intermediate',
    label: 'Intermediate',
    description: 'Can build features independently with some guidance.',
    color: 'indigo',
    score: 2
  },
  {
    value: 'advanced',
    label: 'Advanced',
    description: 'Confident, can mentor others and optimize solutions.',
    color: 'cyan',
    score: 3
  }
];

// ─── Project Levels ───────────────────────────────────────────────────────
export const PROJECT_LEVELS = [
  { value: 'beginner', label: 'Beginner Project', description: 'A learning or practice project (tutorials, clones).' },
  { value: 'intermediate', label: 'Intermediate Project', description: 'Independently built with core features.' },
  { value: 'advanced', label: 'Advanced Project', description: 'Complex, production-ready, or award-winning project.' }
];

// ─── Experience Types ─────────────────────────────────────────────────────
export const EXPERIENCE_TYPES = [
  'Internship',
  'Hackathon',
  'Open Source Contribution',
  'Club / Leadership Role',
  'Certification',
  'Freelance Project',
  'Research / Publication',
  'Other'
];

// ─── Year of Study Options ─────────────────────────────────────────────────
export const STUDY_YEARS = [
  'First Year (FY)',
  'Second Year (SY)',
  'Third Year (TY)',
  'Final Year',
  'Post Graduate (PG)',
  'PhD'
];

// ─── Degree Options ────────────────────────────────────────────────────────
export const DEGREE_OPTIONS = [
  'B.E. (Bachelor of Engineering)',
  'B.Tech (Bachelor of Technology)',
  'B.Sc. (Bachelor of Science)',
  'B.C.A. (Bachelor of Computer Applications)',
  'M.E. / M.Tech',
  'M.Sc.',
  'M.C.A.',
  'MBA (Tech)',
  'Other'
];

// ─── Onboarding Steps Metadata ────────────────────────────────────────────
export const ONBOARDING_STEPS = [
  { id: 1, label: 'Basic Info',    shortLabel: '1' },
  { id: 2, label: 'Career Goal',   shortLabel: '2' },
  { id: 3, label: 'Skills',        shortLabel: '3' },
  { id: 4, label: 'Projects',      shortLabel: '4' },
  { id: 5, label: 'Experience',    shortLabel: '5' },
  { id: 6, label: 'Interests',     shortLabel: '6' },
  { id: 7, label: 'Review',        shortLabel: '7' }
];

// ─── Empty form state ─────────────────────────────────────────────────────
export const EMPTY_ONBOARDING_FORM = {
  // Step 1
  fullName: '',
  college: '',
  degree: '',
  branch: '',
  yearOfStudy: '',

  // Step 2
  targetRole: '',

  // Step 3
  skills: [],

  // Step 4
  projects: [],

  // Step 5
  experiences: [],

  // Step 6
  interests: []
};
