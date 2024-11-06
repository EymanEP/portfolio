import {ReactNode} from "react";

type ProjectType = "Fullstack" | "Frontend" | "Backend" | "Games" | "Software";

export interface Technology {
    key: string;
    icon: ReactNode;
}

export interface Project {
    image: string;
    title: string;
    shortDescription: string;
    description: string;
    githubLink: string;
    deploymentLink: string;
    type: ProjectType;
    technologies: Technology[];
}