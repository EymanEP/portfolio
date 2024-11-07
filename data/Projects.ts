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
    shortDescription:
      "Web application made for learning purposes using Angular 18 with standalone components and PrimeNg along with TailwindCSS",
    githubLink: "https://github.com/EymanEP/bike-match",
    deploymentLink: "",
    type: "Frontend",
    description:
      "Application made using Angular for the frontend that consumes an ApiNinja api that returns a json of motorcycles based on the search. This web app then uses the json to show the results and if the user compared more than 2 then it shows a graph and a table comparing everything"
  },
  {
    id: "blades-descent",
    images: bladesDescentImages,
    title: "Blade's Descent",
    shortDescription:
      "Game made in school as a final project. It's a 3D 1st person shooter made with Unity and CSharp and using tools like Rider, Blender and Mixamo",
    githubLink: "",
    driveLink: "https://drive.google.com/drive/folders/1JfGAJBi7iMHEwPmgOZ3uaDIkOBw0G0OO?usp=sharing",
    deploymentLink: "",
    type: "Games",
    description:
      "3D 1st person game made as a final project in my Advanced Vocational Study. In this game you have to get out of a level using a key and your only weapon is a sword, you can also slow time and buy upgrades",
  },
];
