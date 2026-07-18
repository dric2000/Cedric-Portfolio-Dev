export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tags: string[];
  featured?: boolean;
  demoUrl?: string;
  repoUrl?: string;
  // Nouveaux champs pour l'étude de cas
  client?: string;
  period?: string;
  role?: string;
  problem?: string;
  solution?: string;
  decisions?: string[];
  challenges?: string[];
  results?: string[];
  screenshots?: string[];
}

export const projects: Project[] = [
  {
    slug: "mmte",
    title: "MMTE",
    subtitle: "Plateforme de compatibilité matière",
    description:
      "Solution de gestion des entrées et des sorties du Port Autonome de Cotonou",
    image: "/MMTE.png",
    tags: ["React", "TypeScript", "Django REST", "PostgreSQL"],
    featured: true,
    demoUrl: "https://mad-vrac.com",
    repoUrl: "https://github.com/cedric/mad-vrac",
    client: "Port Autonome de Cotonou",
    period: "2024 - Aujourd'hui",
    role: "Lead Fullstack Developer",
    problem:
      "Le Port Autonome de Cotonou gérait ses entrées et sorties de marchandises avec des outils obsolètes, causant des retards et des erreurs de saisie. Il fallait une plateforme centralisée pour suivre en temps réel les flux de matières et assurer la traçabilité.",
    solution:
      "Développement d'une application web avec tableau de bord dynamique, scan des documents, et suivi des mouvements de marchandises par lots.",
    decisions: [
      "Choix de Django REST pour une API robuste et sécurisée",
      "Utilisation de React avec TypeScript pour l'interface réactive",
      "Base de données PostgreSQL pour la fiabilité des transactions",
      "Intégration d'un système de logs pour l'audit",
    ],
    challenges: [
      "Gestion des gros volumes de données en temps réel",
      "Intégration avec les systèmes legacy du port",
      "Sécurisation des accès avec rôle utilisateur",
    ],
    results: [
      "Réduction de 40% des erreurs de saisie",
      "Temps de traitement des entrées/sorties divisé par 2",
      "Traçabilité complète des marchandises",
    ],
    screenshots: ["/images/mmte-1.png", "/images/mmte-2.png"],
  },
  {
    slug: "work",
    title: "Work",
    subtitle: "Gestion de projets informatiques",
    description: "Solution de gestion de projets et de tâches en entreprise",
    image: "/Work.png",
    tags: ["React", "Tailwind", "Django Rest", "PostgreSQL"],
    demoUrl: "https://yemo.bj",
    repoUrl: "https://github.com/cedric/yemo",
    client: "Entreprise Tech Bénin",
    period: "2023",
    role: "Fullstack Developer",
    problem:
      "Les équipes techniques utilisaient des outils disparates (Trello, Excel, mails) pour la gestion de projets, ce qui créait une perte d'information et un manque de visibilité.",
    solution:
      "Création d'un outil centralisé avec gestion des projets, des tâches, des sprints, et des utilisateurs, avec des rapports automatiques.",
    decisions: [
      "API REST avec Django Rest Framework",
      "Frontend React avec Tailwind pour un design moderne",
      "Base de données PostgreSQL",
      "Authentification JWT",
    ],
    challenges: [
      "Gestion des dépendances entre tâches",
      "Visualisation des progrès (diagrammes de Gantt)",
      "Performance avec des projets de grande envergure",
    ],
    results: [
      "Adoption par 5 équipes de développement",
      "Gain de temps de 25% sur la planification",
      "Meilleure visibilité des chefs de projet",
    ],
    screenshots: ["/public/Work.png", "/public/work-2.png"],
  },
  {
    slug: "fix",
    title: "FIX",
    subtitle: "Application de signalement citoyen",
    description:
      "Signalement des problèmes de voirie et d'infrastructure urbaine.",
    image: "/Fix.png",
    tags: ["React", "Tailwind - Shad CN", "Django Rest", "PostgreSQL"],
    demoUrl: "https://fix-civalert.bj",
    repoUrl: "https://github.com/cedric/fix-civalert",
    client: "Mairie de Cotonou",
    period: "2022 - 2023",
    role: "Lead Developer",
    problem:
      "Les citoyens ne pouvaient pas facilement signaler les problèmes de voirie (nids-de-poule, éclairage, déchets). Les réclamations se faisaient par téléphone ou en personne, sans suivi.",
    solution:
      "Application web et mobile permettant de signaler un problème en quelques clics, avec géolocalisation, photo, et suivi du traitement.",
    decisions: [
      "Frontend React avec shadcn/ui pour une UI moderne",
      "API Django REST",
      "PostgreSQL + PostGIS pour la géolocalisation",
      "Déploiement cloud pour la scalabilité",
    ],
    challenges: [
      "Gestion des photos et géolocalisation",
      "Intégration avec les services municipaux",
      "Interface mobile responsive",
    ],
    results: [
      "Plus de 1000 signalements traités en 6 mois",
      "Temps moyen de résolution réduit de 30%",
      "Satisfaction citoyenne en hausse",
    ],
    screenshots: ["/public/fix-1.png", "/public/fix-2.png"],
  },
  {
    slug: "overwatch",
    title: "OverWatch",
    subtitle: "Gestion de stock",
    description:
      "Gestion des entrées et des sorties pour un laboratoire d'analyses biomédicales",
    image: "/OverWatch.png",
    tags: ["React", "TypeScript", "Django", "PostgreSQL"],
    demoUrl: "https://benintche.bj",
    repoUrl: "https://github.com/cedric/benin-tche",
    client: "Laboratoire Biomédical",
    period: "2021 - 2022",
    role: "Fullstack Developer",
    problem:
      "Le laboratoire gérait son stock de réactifs et consommables manuellement, avec des pertes et des ruptures fréquentes.",
    solution:
      "Application de gestion de stock avec alertes de seuil, traçabilité des lots, et historique des mouvements.",
    decisions: [
      "React + TypeScript pour un frontend robuste",
      "Django pour le backend et l'admin",
      "PostgreSQL pour les données",
      "Génération de rapports automatisés",
    ],
    challenges: [
      "Gestion des expirations de lots",
      "Intégration avec le système d'achat",
      "Contrôle d'accès pour différents utilisateurs",
    ],
    results: [
      "Réduction de 50% des pertes dues aux expirations",
      "Stock toujours disponible",
      "Gain de temps pour les techniciens",
    ],
    screenshots: ["/public/overwatch.png", "/public/overwatch-2.png"],
  },
];
