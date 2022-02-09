interface IDateExperience {
  title: string;
}

export interface IMissionDescription {
  poste?: string;
  contrat?: string;
  entreprise?: string;
  date?: string;
  lieu?: string;
  presentation: string | string[];
  task: string | string[];
  techno: string;
}

export const dateExperience: IDateExperience[] = [
  { title: "Janvier 2022" },
  { title: "Septembre 2021" },
  { title: "Octobre 2020" },
  { title: "Mai 2020" },
  { title: "Janvier 2020" },
];

export const missionDescription: IMissionDescription[] = [
  {
    presentation:
      "Créer en décembre 2019, Coding Accelerator est un programme d'accompagnement en ligne pour devenir développeur indépendant. Il a déjà permis d'accompagner plusieurs centaines de personnes.",
    task: ["Correction individuel des épreuves en visio", "Proposer des axes d'amélioration aux élèves"],
    techno: "Bash, GIT, JavaScript, PHP, Ruby, React, TypeScript",
    poste: "Mentor",
    contrat: "Freelance",
    entreprise: "Coding Accelerator",
    date: "Janvier 2022",
    lieu: "Paris",
  },
  {
    presentation: "Un indépendant dans le domaine de la thérapie brève avais besoin d'un site vitrine pour son lancement d'activité prévu mi 2022",
    task: ["Création d'un site vitrine", "Création d'un système de prise de rdv en ligne", "Création d'un livre d'or"],
    techno: "React, TypeScript, Redux, Firebase, Git, HTML5, CSS3",
    poste: "Developpeur Web",
    contrat: "Freelance",
    entreprise: "Private",
    date: "Septembre 2021 à Décembre 2021",
    lieu: "Nantes",
  },
  {
    presentation: [
      "Refonte des outils back office magasin destiné à la gestion des promotions (préparation de la maquette pour les impression de prospectus, mise a jours des prix promo sur les étiquette électronique et la caisse ... ) puis la refonte de l'outil de gestion des produit pour les magasin ( inventaire, réception de livraison, emplacement des produit pour la mise en rayon...)",
      "Le client disposé d'une interface en flash player qu'il faillais faire évolué vers une techno plus récente tout en gardant la contrainte d'un navigateur plus ancien pour continué de pouvoir utilisé certaine application non migré vers React",
    ],
    task: [
      "Développement d'une appli PWA à destination des employer magasin",
      "Développement d'une appli Web à destination des responsables magasin",
      "Restructuration du projet en rendant le plus générique possible les composant existant",
      "Correction des bugs",
    ],
    techno: "React, Redux, GitFlow, API REST, Bootstrap, SASS",
    poste: "Developpeur Front End",
    contrat: "Freelance",
    entreprise: "Supermarché Match",
    date: "Octobre 2020 à Aout 2021",
    lieu: "Lille",
  },
  {
    presentation: [
      "Alania Cosmétiques, est une société de cosmétique bio qui vend en principalement en ligne ses produits.",
      "J'ai pu développer mes compétences en wordpress et react sur un projet de mise à jour du site",
    ],
    task: "Refonte d'un site de e-commerce",
    techno: "API REST, GIT, HTML5, CSS3, React, TypeScript, Redux, Wordpress",
    poste: "Developpeur Web",
    contrat: "Freelance",
    entreprise: "Alania Cosmétiques",
    date: "Mai 2020 à Septembre 2020",
    lieu: "Lyon",
  },
  {
    presentation:
      "Une société d'architecte composer de 10 salarié aillant besoin de centraliser les demandes clients par projets vers leurs CRM de manière automatiser",
    task: [
      "Création d'un Dashboard pour les clients de l'architecte qui a pour but le suivi et la création de demandes par projet",
      "Création d'un Dashboard pour l'équipe d'architecte qui permet de valider les demandes projet et les ajouter au CRM",
    ],
    techno: "React, TypeScript, Redux, Firebase, Git, HTML, CSS",
    poste: "Developpeur Web",
    contrat: "Freelance",
    entreprise: "Private",
    date: "Janvier 2020 à Mai 2020",
    lieu: "Lille",
  },
];

interface IContactData {
  icon: string;
  link?: string;
  label: string;
}

export const contactData: IContactData[] = [
  {
    icon: "faLocationArrow",
    label: "Moutonnerie - Nantes 44300",
  },
  {
    icon: "faPhoneAlt",
    link: "tel:0658930421",
    label: "06 58 93 04 21",
  },
  {
    icon: "faEnvelope",
    link: "mailto:anthony.carreta@gmail.com",
    label: "anthony.carreta@gmail.com",
  },
];

export interface ISocialData {
  icon: string;
  link: string;
}

export const socialData: ISocialData[] = [
  {
    icon: "faLinkedin",
    link: "https://www.linkedin.com/in/anthony-carreta",
  },
  {
    icon: "faGithub",
    link: "https://github.com/BackGrowZ",
  },
];

export const URLCalendly: string = "https://calendly.com/anthony-carreta/30min";

export interface ICardFlip {
  general?: {
    direction?: "horizontal" | "vertical";
    color?: string;
  };
  front: {
    title: string;
    images: string;
  };
  back: {
    finish: boolean;
    annee: number;
    techno: string | string[];
    link?: string;
    github?: string;
  };
}

export const cardFlipData: ICardFlip[] = [
  {
    front: {
      title: "Portfolio",
      images: "https://i.stack.imgur.com/O8z60.png",
    },
    back: {
      finish: true,
      annee: 2022,
      techno: ["React", "TypeScript", "CSS", "HTML"],
      github: "https://github.com/BackGrowZ/portfolio",
    },
  },
  {
    front: {
      title: "Jeu d'échec",
      images: "https://i.stack.imgur.com/O8z60.png",
    },
    back: {
      finish: false,
      annee: 2022,
      techno: ["React", "CSS", "HTML"],
      github: "https://github.com/BackGrowZ/echec",
    },
  },
  {
    front: {
      title: "Sudoku solver",
      images: "http://www.sudoku.com/img/post-images/1541158196-Sudoku-Board-1.jpg",
    },
    back: {
      github: "https://github.com/BackGrowZ/Sudoku-Solver",
      finish: false,
      annee: 2021,
      techno: ["React", "CSS", "HTML"],
    },
  },
  {
    front: {
      title: "Alania Cosmetiques",
      images:
        "https://scontent-cdt1-1.xx.fbcdn.net/v/t1.6435-9/79169796_104913414329198_4563090400503398400_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=z1xlSJMENm8AX_v1jRw&_nc_oc=AQnKzHu2xqUFMzbnNDjdzvqG1eXZTFWd4MaA0sOxZMmDE_0bMtacUfG1rnYubz9ACpE_7E-y43R4JFPD2m-iwp2M&_nc_ht=scontent-cdt1-1.xx&oh=00_AT8gCAY1uyP4FneliCTBVFzezNcUrRhvtQdkYhyoa1sgtQ&oe=6224E551",
    },
    back: {
      link: "https://www.alania-cosmetiques.fr/",
      finish: true,
      annee: 2020,
      techno: ["React", "API REST", "GIT", "HTML5", "CSS3", " WordPress", "TypeScript", "Redux"],
    },
  },
];

export interface ISkillData {
  name: string;
  pourcentage: number;
  icon?: {
    name: string;
    style?: object;
  };
  logo?: {
    link: string;
    style?: object;
  };
}

export const hardSkillData: ISkillData[] = [
  {
    name: "React",
    pourcentage: 80,
    icon: {
      name: "faReact",
      style: { fontSize: "3rem", color: "#61DBFB" },
    },
  },
  {
    name: "Redux",
    pourcentage: 70,
    logo: {
      link: "https://cdn.worldvectorlogo.com/logos/redux.svg",
      style: { width: 40, marginTop: -5, marginBottom: 5 },
    },
  },
  {
    name: "TypeScript",
    pourcentage: 70,
    logo: {
      link: "https://cdn.worldvectorlogo.com/logos/typescript.svg",
      style: { width: 40, marginTop: -5, marginBottom: 5 },
    },
  },
  {
    name: "HTML",
    pourcentage: 100,
    icon: {
      name: "faHtml5",
      style: { fontSize: "3rem", color: "#e34c26" },
    },
  },
  {
    name: "CSS/SASS",
    pourcentage: 80,
    icon: {
      name: "faCss3",
      style: { fontSize: "3rem", color: "#264de4" },
    },
  },
  {
    name: "Bootsrap",
    pourcentage: 70,
    icon: {
      name: "faBootstrap",
      style: { fontSize: "3rem", color: "#337ab7" },
    },
  },
  {
    name: "Wordpress",
    pourcentage: 60,
    icon: {
      name: "faWordpress",
      style: { fontSize: "3rem", color: "#21759b" },
    },
  },
  {
    name: "Git",
    pourcentage: 60,
    icon: {
      name: "faGitAlt",
      style: { fontSize: "3rem", color: "#f34f29" },
    },
  },
  {
    name: "Firebase",
    pourcentage: 40,
    logo: {
      link: "https://cdn.worldvectorlogo.com/logos/firebase-1.svg",
      style: { width: 40, marginTop: -5, marginBottom: 5 },
    },
  },
];

export const softSkillData: ISkillData[] = [
  {
    name: "Intelligence émotionnelle",
    pourcentage: 120,
  },
  {
    name: "Veille technologique",
    pourcentage: 75,
  },
  {
    name: "Travail d'équipe",
    pourcentage: 90,
  },
  {
    name: "Ouverture d'esprit",
    pourcentage: 95,
  },
  {
    name: "Résolution de problème",
    pourcentage: 85,
  },
  {
    name: "Esprit analytique",
    pourcentage: 90,
  },
  {
    name: "Adaptabilité",
    pourcentage: 95,
  },
  {
    name: "Communication",
    pourcentage: 80,
  },
  {
    name: "Résilience",
    pourcentage: 80,
  },
];

export const menuItemList: string[] = ["Présentation", "Experience", "Labs", "Contact"];
