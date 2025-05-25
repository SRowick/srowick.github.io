import type { Project } from "../types/Project";
import PerseusData from "./PerseusDescription";
import OdysseusData from "./OdysseusDescription";

export const projects: Project[] = [
  {
    name: "Aletheia: Prophecy of Perseus",
    page: "perseus",
    shortDesc:
      "A turn-based role-playing game where you play as Perseus on his impossible quest to slay the gorgon Medusa.",
    steamId: "3633220",
    youtubeId: "-I3ObXat858",
    released: false,
    longDesc: <PerseusData />,
  },
  {
    name: "Aletheia: Return of Odysseus",
    page: "odysseus",
    shortDesc: "Embark on an accurate retelling of Homer’s Odyssey.",
    steamId: "1565070",
    youtubeId: "mO26IrafSIw",
    released: false,
    longDesc: <OdysseusData />,
  },
];
