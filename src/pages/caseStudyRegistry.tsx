import type { ReactElement } from "react";
import { LotoBolaSections } from "./LotoBolaSections";
import { PlayzonBetSections } from "./PlayzonBetSections";
import { EvaSections } from "./EvaSections";
import { AlazSections } from "./AlazSections";

export const CASE_STUDY_ORDER = ["lotobola", "playzonbet", "eva", "alaz"] as const;

export type CaseStudySlug = typeof CASE_STUDY_ORDER[number];

export const CASE_STUDY_CONTENT: Record<CaseStudySlug, ReactElement> = {
  lotobola: <LotoBolaSections />,
  playzonbet: <PlayzonBetSections />,
  eva: <EvaSections />,
  alaz: <AlazSections />,
};

export function isCaseStudySlug(slug: string): slug is CaseStudySlug {
  return CASE_STUDY_ORDER.includes(slug as CaseStudySlug);
}
