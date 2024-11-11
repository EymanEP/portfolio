import { Project } from "@/interfaces/Project";

const urls = {
  bikematch: "/projects/bikematch/",
  bladesdescent: "/projects/blades-descent/",
};

const bikematchImages = Array.from(
  { length: 6 },
  (_, i) => `${urls.bikematch}bikematch-${i + 1}.png`,
);

const bladesDescentImages = Array.from(
  { length: 9 },
  (_, i) => `${urls.bladesdescent}blades-descent-${i + 1}.png`,
);

export const Projects: Project[] = [
  {
    id: "bike-match",
    images: bikematchImages,
    title: "BikeMatch",
    shortDescription: {
      es: "Aplicación web creada con intenciones de aprender utilizando Angular 18 con componentes standalone y librerías como PrimeNg y TailwindCSS",
      en: "Web application made for learning purposes using Angular 18 with standalone components and PrimeNg along with TailwindCSS",
      bg: "Уеб приложение създадено с цел учене, използващо Angular 18 със Standalone компоненти и библиотеки като PrimeNg и TailwindCSS",
    },
    githubLink: "https://github.com/EymanEP/bike-match",
    deploymentLink: "",
    type: "Frontend",
    description: {
      en: "Application made using Angular for the frontend that consumes an ApiNinja api that returns a json of motorcycles based on the search.\nThis web app then uses the json to show the results and if the user compared more than 2 then it shows a graph and a table comparing everything\nThings learned:\n- Angular 18 with standalone components\n- PrimeNg\n- Fetching json from api\n- Using charts\n- Local storage manipulation\n- Using Angular @Input and @Output decorators\n- Editing app config in new version of Angular to provideAnimations, provideHttpClient, etc.\n- Rxjs Observers, pipes and promises",
      es: "Aplicacion creada con Angular para el frontend que consume una api de motos que proviene de ApiNonja y que utiliza el json que devuelve para mostrar los resultados en base a la búsqueda.\nEsta aplicación muestra busquedas de motos o comparaciónes con un gráfico y una tabla en caso de que el usuario quiera comparar.\nCosas aprendidas:\n- Anuglar 18 con componentes standalone\n- PrimeNg\n- Muestra de datos utilizando una api que devuelve json\n- Uso de gráficos para mostrar datos\n- Manipulación de local storage\n- Uso de decoradores @Input y @Output\n- Edición de la configuración de la app en nuevas versiones de Angular\n- Rxjs Observadores, pipes y promesas",
      bg: "Приложение създадено с Angular за фронтенд, което използва ApiNinja API, който връща JSON с мотоциклети според търсенето.\nТова уеб приложение използва JSON, за да покаже резултатите и ако потребителят сравнява повече от 2, показва графика и таблица с всички сравнения.\nНаучено:\n- Angular 18 с компоненти Standalone\n- PrimeNg\n- Извличане на JSON от API\n- Използване на графики\n- Манипулация с локално съхранение\n- Използване на Angular декоратори @Input и @Output\n- Редактиране на конфигурацията на приложението в новата версия на Angular за предоставяне на анимации, provideHttpClient и др.\n- Rxjs наблюдатели, pipes и обещания",
    },
  },
  {
    id: "blades-descent",
    images: bladesDescentImages,
    title: "Blade's Descent",
    shortDescription: {
      en: "Game made in school as a final project. It's a 3D 1st person shooter made with Unity and CSharp and using tools like Rider, Blender and Mixamo",
      es: "Juego creado durante el final del CFGS de DAM. Es un juego 3D en primera persona creado con Unity utilizando CSharp y herramientas como Rider, Blender y Mixamo.",
      bg: "Игра, създадена по време на училище като финален проект. Това е 3D игра от първо лице, създадена с Unity и CSharp, използвайки инструменти като Rider, Blender и Mixamo",
    },
    githubLink: "",
    driveLink:
      "https://drive.google.com/drive/folders/1JfGAJBi7iMHEwPmgOZ3uaDIkOBw0G0OO?usp=sharing",
    deploymentLink: "",
    type: "Games",
    description: {
      en: "3D 1st person game made as a final project in my Advanced Vocational Study. In this game you have to get out of a level using a key and your only weapon is a sword, you can also slow time and buy upgrades and do parkour like wallrunning.\nThings learned:\n- Exporting and importing Unity packages\n- Creating, transforming and editing GameObjects\n- Simple AI for enemies with established paths\n- Mathematics for transitioning and for gameobject transforms\n- Spawning GameObject in the scene, for example the enemies at the start of the game\n- Project organisation\n- CSharp for programming\n- Using the Unity editor\n- UI Design for games and programming the actions",
      es: "Juego 3D en primera persona creado como TFG en el curso de DAM. El juego consiste en escapar de niveles buscando una llave mientras te enfrentas a enemigos con solo una espada, puedes ralentizar el tiempo y comprar mejoras en la tienda y hacer parkour como por ejemplo correr por las paredes.\nCosas aprendidas\n- Exportación y importación de paquetes de Unity\n- Crear, transformar y editar GameObjects\n- IA simple para los enemigos con caminos preestablecidos\n- Matemáticas para transiciones y transformación de gameobjects\n- Generación de GameObjects en la escena, como por ejemplo los enemigos al comenzar el nivel\n- Organización de proyectos\n- CSharp para la programación\n- El uso del editor de Unity\n- Creación de UI en videojuegos y como funcionan",
      bg: "3D игра от първо лице, създадена като финален проект в моето напреднало професионално обучение. В тази игра трябва да излезеш от ниво, като използваш ключ, а единственото ти оръжие е меч, можеш също да забавиш времето, да купуваш ъпгрейди и да правиш паркур като тичане по стените.\nНаучено:\n- Експортиране и импортиране на Unity пакети\n- Създаване, трансформиране и редактиране на GameObjects\n- Проста изкуствена интелигентност за врагове с установени пътища\n- Математика за преходи и трансформации на обекти в играта\n- Създване на GameObject в сцената, например враговете в началото на играта\n- Организация на проекта\n- CSharp програмиране\n- Използване на Unity редактора\n- Дизайн на UI за игри и програмиране на действията",
    },
  },
];
