export interface Skill {
  name: string;
  icon?: string;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      { name: "React" },
      { name: "TypeScript" },
      { name: "Redux / Zustand" },
      { name: "Tailwind CSS" },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Django REST" },
      { name: "FastAPI" },
      { name: "PostgreSQL" },
      { name: "Node.js" },
    ],
  },
  {
    name: "Outils",
    skills: [
      { name: "Git" },
      { name: "Figma" },
      { name: "Testing (Jest)" },
      { name: "Vercel / Netlify" },
    ],
  },
];
