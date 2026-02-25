export type ProjectContentSectionKey =
  | "overview"
  | "positioning"
  | "services"
  | "technology"
  | "performance"
  | "responsive"
  | "features"
  | "result"
  | "custom";

export interface ProjectContentMetadata {
  websiteUrl?: string;
  industry?: string;
  projectType?: string;
}

export interface ProjectContentSection {
  key: ProjectContentSectionKey;
  title: string;
  paragraphs?: string[];
  bullets?: string[];
}

export interface ProjectContent {
  summary: string;
  metadata?: ProjectContentMetadata;
  sections: ProjectContentSection[];
}

export type ServicesType =
  | "production"
  | "web-development"
  | "design"
  | "branding";

export interface Project {
  name: string;
  image: string;
  priority: number;
  year: string;
  service: ServicesType;
  serviceSubType?: string;
  slug: string;
  externalUrl?: string;
  content: ProjectContent;
}

import { aircrew } from "./projects/aircrew";
import { alKatheebInteriors } from "./projects/alKatheebInteriors";
import { alQadisiahRoadsMaintenance } from "./projects/alQadisiahRoadsMaintenance";
import { bertonGolden } from "./projects/bertonGolden";
import { bertonPerfumes } from "./projects/berton-perfumes";
import { collinsEquipmentTrading } from "./projects/collinsEquipmentTrading";
import { everestConsultancyServices } from "./projects/everest-consultancy-services";
import { hufiShippingLine } from "./projects/hufiShippingLine";
import { hufiWorld } from "./projects/hufiWorld";
import { liveAdventure } from "./projects/live-adventure";
import { livaBusinessHub } from "./projects/livaBusinessHub";
import { modovate } from "./projects/modovate";
import { ruqiyaWellness } from "./projects/ruqiyaWellness";
import { shezastar } from "./projects/shezastar";
import { steelcoreUae } from "./projects/steelcoreUae";
import { tomrichWatches } from "./projects/tomrich-watches";
import { transKingLogistic } from "./projects/transKingLogistic";
import { transMasterLogistics } from "./projects/transMasterLogistics";
import { xenseFragrance } from "./projects/xenseFragrance";
import { yashabab } from "./projects/yashabab";

export const projects: Project[] = [
  transKingLogistic,
  xenseFragrance,
  transMasterLogistics,
  hufiWorld,
  hufiShippingLine,
  everestConsultancyServices,
  livaBusinessHub,
  modovate,
  collinsEquipmentTrading,
  liveAdventure,
  aircrew,
  alKatheebInteriors,
  alQadisiahRoadsMaintenance,
  tomrichWatches,
  yashabab,
  bertonPerfumes,
  shezastar,
  bertonGolden,
  ruqiyaWellness,
  steelcoreUae,
];
