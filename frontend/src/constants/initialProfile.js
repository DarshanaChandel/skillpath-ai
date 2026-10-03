export const INITIAL_STUDENT_PROFILE = {
  fullName: "Alex Rivera",
  email: "alex.rivera@university.edu",
  phone: "+1 (555) 019-2834",
  university: "State University of Technology",
  degree: "Bachelor of Science in Computer Science",
  graduationYear: "2026",
  currentGPA: "3.85",
  targetRole: "fullstack-dev",
  bio: "Passionate CS student driven to build intuitive, scalable web applications and explore AI-powered developer tools.",
  skills: [
    { id: 1, name: "JavaScript (ES6+)", level: 4, category: "Languages" },
    { id: 2, name: "React.js", level: 4, category: "Frontend" },
    { id: 3, name: "HTML5 / CSS3", level: 4, category: "Frontend" },
    { id: 4, name: "Tailwind CSS", level: 3, category: "Frontend" },
    { id: 5, name: "Node.js", level: 3, category: "Backend" },
    { id: 6, name: "Express.js", level: 3, category: "Backend" },
    { id: 7, name: "Python", level: 3, category: "Languages" },
    { id: 8, name: "Git & GitHub", level: 4, category: "Tools" },
    { id: 9, name: "MongoDB", level: 2, category: "Databases" }
  ],
  projects: [
    {
      id: 1,
      title: "Campus Event Portal",
      description: "A responsive web application enabling student societies to host and manage events with automated email notifications.",
      techStack: "React, Node.js, Express, MongoDB",
      githubUrl: "https://github.com/example/campus-events",
      liveUrl: "https://campus-events-demo.vercel.app"
    },
    {
      id: 2,
      title: "DevTracker Dashboard",
      description: "A personal productivity tracking tool with interactive charts and automated task prioritization.",
      techStack: "React, Tailwind CSS, LocalStorage",
      githubUrl: "https://github.com/example/dev-tracker",
      liveUrl: ""
    }
  ],
  experiences: [
    {
      id: 1,
      role: "Frontend Developer Intern",
      organization: "TechNova Solutions",
      duration: "June 2025 - August 2025",
      description: "Collaborated with senior engineers to implement UI components in React and improved page load times by 25%."
    }
  ],
  interests: [
    "Full-Stack Web Development",
    "Machine Learning Integration",
    "API Design & Cloud Deployment",
    "Open Source Contribution"
  ]
};
