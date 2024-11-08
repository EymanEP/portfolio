import { ReactNode } from "react";
import Lang from "@/interfaces/Lang";

type ProjectType = "Fullstack" | "Frontend" | "Backend" | "Games" | "Software";

export interface Technology {
  key: string;
  icon: ReactNode;
}

export interface Project {
  id: string;
  images: string[];
  title: string;
  shortDescription: Lang;
  description: Lang;
  githubLink: string;
  driveLink?: string;
  deploymentLink: string;
  type: ProjectType;
}
