import Info from "@/interfaces/Info";

const ExperienceStudiesInfo: Info[] = [
    {
        id: 1,
        type: "experience",
        title: {
            en: "Frontend Developer",
            es: "Desarrollador Frontend",
        },
        place: "Globant Gut",
        date: {
            es: "Enero 2024 - Junio 2024",
            en: "January 2024 - June 2024",
        },
        description: {
            es: "Desarrollo de páginas para clientes utilizando Nuxt y Tailwind \n" +
                "Trabajo en proyectos internos donde aprendí React, NestJS, Supabase y Astro entre otras",
            en: "Web development for clients using Nuxt mainly and Tailwind \n" +
                "Internal projects with React and learning NestJs, Supabase and other technologies"
        },
        imgSrc: "/logos/globant.png",
    },
    {
        id: 2,
        type: "experience",
        title: {
            en: "Frontend Developer",
            es: "Desarrollador Frontend",
        },
        place: "Globant Gut",
        date: {
            es: "Marzo 2023 - Junio 2023",
            en: "March 2023 - June 2023",
        },
        description: {
            es: "Proyectos internos utilizando Astro, HTML, JavaScript y Tailwind \n" +
                "Trabajo en proyectos de clientes utilizando Nuxt",
            en: "Internal web apps using Astro, HTML, JS and Tailwind\n" +
                "Client projects with Nuxt/Vue"
        },
        imgSrc: "/logos/globant.png",
    },
    {
        id: 3,
        type: "experience",
        title: {
            en: "R+D Technician",
            es: "Técnico I+D",
        },
        place: "Bodegas Franco - Españolas",
        date: {
            es: "Marzo 2022 - Junio 2022",
            en: "March 2022 - June 2022",
        },
        description: {
            es: "Administración de servidores y servicio técnico \n" +
                "Ubuntu Server y Windows Server con Active Directory \n" +
                "Investigación y desarrollo en sistemas internos probando aplicaciones",
            en: "Server management and Helpdesk \n" +
                "Ubuntu Server and Windows Server using Active Directory \n" +
                "Research and development of internal systems and applications"
        },
        imgSrc: "/logos/francoespañolas.jpg",
    },
    {
        id: 10,
        type: "studies",
        title: {
            en: "Advanced Vocational Training in App Development",
            es: "CFGS Desarrollo de Aplicaciones Multiplataforma",
        },
        place: "Jesuitas - Sagrado Corazón",
        date: {
            en: "Sept. 2022 - June 2024",
            es: "Sept. 2022 - Junio 2024"
        },
        description: {
            en: "Java development\n" +
                "Frontend development using Angular\n" +
                "Backend development using Hibernate and SpringBoot\n" +
                "Mobile development using Kotlin and Jetpack Compose\n" +
                "Plugin and deployment for Odoo using Python\n" +
                "Deployments using Docker and Linux",
            es: "Programación con Java\n" +
                "Desarrollo frontend con Angular\n" +
                "Desarrollo backend con Hibernate y SpringBoot\n" +
                "Desarrollo de aplicaciones móviles con Kotlin y Jetpack Compose\n" +
                "Programación de plugins y despliegue de Odoo con Python\n" +
                "Uso y despliegue con Docker y Linux"
        },
        imgSrc: "/logos/jesuitas.png",
    },
    {
        id: 11,
        type: "studies",
        title: {
            en: "Intermediate Vocational Training in Computer Science and Networking",
            es: "CFGM en Sistemas Microinformáticos y Redes",
        },
        place: "Jesuitas - Sagrado Corazón",
        date: {
            en: "Sept. 2020 - June 2022",
            es: "Sept. 2020 - Junio 2022"
        },
        imgSrc: "/logos/jesuitas.png",
    },
    {
        id: 12,
        type: "studies",
        title: {
            en: "Secondary Education",
            es: "ESO",
        },
        place: "IES Delhuyar",
        date: {
            en: "Sept. 2016 - June 2020",
            es: "Sept. 2016 - Junio 2020"
        },
        imgSrc: "/logos/delhuyar.png",
    },
]

export default ExperienceStudiesInfo;