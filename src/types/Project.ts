import type { JSX } from "react";

export interface Project {
  name: string;
  page: string;
  shortDesc: string;
  steamId: string;
  youtubeId: string;
  released: boolean;
  longDesc: JSX.Element;
}
