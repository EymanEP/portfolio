import Certificate from "@/interfaces/Certificate";

const docUrl = "/documents/certs/";

const Certifications: Certificate[] = [
  {
    id: 1,
    image: "/logos/openwebinars-logo.png",
    name: {
      en: "Typescript Course",
      es: "Curso de Typescript",
      bg: "Курс по TypeScript",
    },
    date: "3/9/2023",
    category: {
      en: "Programming Language",
      es: "Lenguaje de Programación",
      bg: "Програмен език",
    },
    link: `${docUrl}certificado_curso_de_typescript.pdf`,
    technologies: ["TypeScript"],
    duration: {
      en: "Duration: 14 hours",
      es: "Duración: 14 horas",
      bg: "Продължителност: 14 часа",
    },
    foundation: "OpenWebinars",
  },
  {
    id: 2,
    image: "/logos/openwebinars-logo.png",
    name: {
      en: "Angular Foundations",
      es: "Fundamentos de Angular",
      bg: "Основи на Angular",
    },
    date: "12/2/2024",
    category: {
      en: "Frontend Development",
      es: "Desarrollo Frontend",
      bg: "Фронтенд разработка",
    },
    link: `${docUrl}certificado_fundamentos_de_angular.pdf`,
    technologies: ["Angular"],
    duration: {
      en: "Duration: 7 hours",
      es: "Duración 7 horas",
      bg: "Продължителност: 7 часа",
    },
    foundation: "OpenWebinars",
  },
  {
    id: 3,
    image: "/logos/openwebinars-logo.png",
    name: {
      en: "Mobile app development with Ionic",
      es: "Desarrollo de aplicaciones móviles con Ionic",
      bg: "Разработка на мобилни приложения с Ionic",
    },
    date: "31/3/2024",
    category: {
      en: "Mobile App Development",
      es: "Desarrollo de aplicaciones móviles",
      bg: "Разработка на мобилни приложения",
    },
    link: `${docUrl}certificado_desarrollo_de_aplicaciones_móviles_con_ionic.pdf`,
    technologies: [
      "Angular",
      "Ionic",
      "Google Play Deployment",
      "Apple Store Deployment",
    ],
    duration: {
      en: "Duration: 16 hours",
      es: "Duración 16 horas",
      bg: "Продължителност: 16 часа",
    },
    foundation: "OpenWebinars",
  },
  {
    id: 4,
    image: "/logos/fcc-logo.png",
    name: {
      en: "JavaScript Algorithms and Data Structures",
      es: "Estructuras de Datos y Algoritmos en JavaScript",
      bg: "Алгоритми и структури от данни с JavaScript",
    },
    date: "24/8/2021",
    category: {
      en: "Programming Language",
      es: "Lenguaje de Programación",
      bg: "Програмен език",
    },
    link: "https://www.freecodecamp.org/certification/ayen_a/javascript-algorithms-and-data-structures",
    technologies: ["JavaScript"],
    duration: {
      en: "Duration: 8 hours",
      es: "Duración: 8 horas",
      bg: "Продължителност: 8 часа",
    },
    foundation: "FreecodeCamp",
  },
];

export default Certifications;
