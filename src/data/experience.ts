export interface ExperienceItem {
  date: string;
  title: string;
  description: string;
  company?: string;
}

export const experiences: ExperienceItem[] = [
  {
    date: "2023 - Aujourd'hui",
    title: "Développeur Frontend - Upsilon Consulting",
    description:
      "Conception et développement de l'application MMTE (Comptabilité matière du port autonome de Cotonou)",
  },
  {
    date: "2022 - 2023",
    title: "Développeur Frontend - The Bay Technologies",
    description:
      "Architecture, développement et déploiement de la plateforme e-commerce Africa Baie",
  },
  {
    date: "2021 - 2022",
    title: "Stagiaire Développeur web - RINTIO",
    description:
      "Prise en main des technologies frontend (Vue JS, Tailwindcss...)",
  },
];
