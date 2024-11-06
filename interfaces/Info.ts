import { ContentType } from "@/interfaces/ContentType";
import lang from "@/interfaces/Lang";

export default interface Info {
  id: number;
  type: ContentType;
  title: lang;
  place: string;
  date: lang;
  description?: lang;
  imgSrc: string;
}
