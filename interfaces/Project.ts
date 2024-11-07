import { ReactNode } from "react";

type ProjectType = "Fullstack" | "Frontend" | "Backend" | "Games" | "Software";

export interface Technology {
  key: string;
  icon: ReactNode;
}

export interface Project {
  id: string;
  images: string[];
  title: string;
  shortDescription: string;
  description: string;
  githubLink: string;
  driveLink?: string;
  deploymentLink: string;
  type: ProjectType;
}
