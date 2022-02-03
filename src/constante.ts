interface IItems {
  title: string;
}

export interface IData {
  poste?: string;
  contrat?: string;
  entreprise?: string;
  date?: string;
  lieu?: string;
  presentation: string | string[];
  task: string | string[];
  techno: string;
}

export const items: IItems[] = [
  { title: "Janvier 2022" },
  { title: "Septembre 2021" },
  { title: "Octobre 2020" },
  { title: "Mai 2020" },
  { title: "Janvier 2020" },
];

export const data: IData[] = [
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
    entreprise: "Censored",
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
    entreprise: "Censored",
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
    label: "Dalby Nantes 44300",
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

export const URLCalendly = "https://calendly.com/anthony-carreta/30min";