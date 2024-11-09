import Lang from "@/interfaces/Lang";

export type Foundation = "OpenWebinars" | "FreecodeCamp";
export default interface Certificate {
  id: number;
  image: string;
  name: Lang;
  category: Lang;
  link: string;
  date: string;
  technologies: string[];
  foundation: Foundation;
  duration: Lang;
}
