import { StaticImageData } from "next/image";

export interface AnimeProp {
  id: string;
  name: string;
  image: string | StaticImageData;
  kind: string;
  episodes: number;
  episodes_aired: number;
  score: string;
}