export interface AboutData {
  text: string;
  stats: {
    label: string;
    value: string;
  }[];
}

export const aboutData: AboutData = {
  text: "Développeur Frontend basé à Cotonou, je conçois des interfaces soignées et des applications robustes. Passionné par l'écosystème tech, je reste à l'affut des nouvelles technologies et cherche constamment à monter en compétences en travaillant sur des projets innovants.",
  stats: [
    { label: "Projets livrés", value: "12" },
    { label: "Année d'expérience", value: "6" },
    { label: "Stagiaires accompagnés", value: "2" },
  ],
};
