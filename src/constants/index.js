import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  openclassrooms,
  tesla,
  google,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  kasa,
  grimoire,
  portfolioV1,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experiences",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Junior Developeur",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Formation dev web",
    company_name: "OpenClassroom BAC+2",
    icon: openclassrooms,
    iconBg: "#E6DEDD",
    date: "Mars 2023 - Octobre 2023",
    points: [
      "Construire un site web responsive et dynamique",
      "Créer des API et des bases de données",
      "Optimiser les performances et réaliser la maintenance de sites web déjà existants",
      "Gérer un projet web de A à Z : de la conception à la réalisation",
    ],
  },
  {
    title: "Autodidacte",
    company_name: "Internet",
    icon: google,
    iconBg: "#E6DEDD",
    date: "Octobre 2023 - Present",
    points: [
      "Découverte des bibliothèques populaires",
      "Développer mes compétences avec nextjs, typescript, threejs, material-ui, redux, docker, express.js, mongodb ",
      "Developper des systèmes d'autentification",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Kasa",
    description:
      "Site de réservation de logements pour des vacances en famille ou entre amis. Frontend uniquement.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: kasa,
    source_code_link: "https://github.com/AdrienPoua/Poua_Adrien_6_Kasa_072023",
    website: "https://AdrienPoua.github.io/Poua_Adrien_6_Kasa_072023/",
  },
  {
    name: "Grimoire",
    description:
      "Site de référencement et de notation de livres. Backend uniquement.",
    tags: [
      {
        name: "express.js",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "restapi",
        color: "orange-text-gradient",
      },
    ],
    image: grimoire,
    source_code_link:
      "https://github.com/AdrienPoua/Poua_Adrien_7_Grimoire_082023",
    website: "https://AdrienPoua.github.io/Poua_Adrien_7_Grimoire_082023/",
  },
  {
    name: "Portfolio V1",
    description:
      "Mon premier portfolio from scratch. Frontend et backend.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "express.js",
        color: "blue-text-gradient",
      },
      {
        name: "mongoDB",
        color: "green-text-gradient",
      },
      {
        name: "AWS",
        color: "orange-text-gradient",
      },
    ],
    image: portfolioV1,
    source_code_link: "https://github.com/AdrienPoua/Portfolio",
    website: "https://www.codebyadrien.fr",
  },
];

export { services, technologies, experiences, testimonials, projects };
