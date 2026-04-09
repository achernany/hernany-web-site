import { Container } from "../components/ui/Container";
import { Typography, Accent } from "../components/ui/Typography";
import { SegmentedControl } from "../components/ui/SegmentedControl";
import { StatPill } from "../components/ui/StatPill";
import { PageFooter } from "../components/layout/PageFooter";
import { DetailHeader } from "../components/layout/DetailHeader";
import { LotoBolaGate } from "../components/ui/LotoBolaGate";
import { CaseStudyShell } from "../components/case-study/CaseStudyShell";
import { useI18n } from "../i18n";
import { CASE_STUDY_CONTENT, CASE_STUDY_ORDER, isCaseStudySlug } from "./caseStudyRegistry";

interface SelectedWorkDetailProps {
  slug: string;
  onNavigate: (path: string) => void;
}

interface WorkTranslation {
  name: string;
  kicker: string;
  descriptionAccent: string;
  descriptionRest: string;
  stats: {
    role: string;
    scope: string;
    timeline: string;
    scale: string;
  };
}

export function SelectedWorkDetail({ slug, onNavigate }: SelectedWorkDetailProps) {
  const { t, tn } = useI18n();

  const fallbackSlug = isCaseStudySlug(slug) ? slug : CASE_STUDY_ORDER[0];
  const selected = tn(`selectedWorks.works.${fallbackSlug}`) as WorkTranslation;

  const segmentedItems = CASE_STUDY_ORDER.map((item) => ({
    id: item,
    label: String(t(`selectedWorks.works.${item}.name`)),
  }));

  /* ── Full case studies: single render path so header + tab bar never remount ── */
  if (fallbackSlug in CASE_STUDY_CONTENT) {
    return (
      <CaseStudyShell
        caseStudyId={fallbackSlug}
        title={t("menu.selectedWork")}
        activeSlug={fallbackSlug}
        segmentedItems={segmentedItems}
        segmentedAriaLabel={t("selectedWorks.segmentLabel")}
        onNavigate={onNavigate}
        guard={fallbackSlug === "lotobola" ? <LotoBolaGate /> : undefined}
      >
        {CASE_STUDY_CONTENT[fallbackSlug]}
      </CaseStudyShell>
    );
  }

  /* ── All other projects: compact stats layout ── */
  return (
    <Container>
      <section className="selected-detail">
        <DetailHeader title={t("menu.selectedWork")} onBack={() => onNavigate("/selected-works")} />

        <div className="selected-detail__content">
          <Typography variant="h1" center>{selected.name}</Typography>
          <Typography variant="micro" center>
            <Accent>{selected.kicker}</Accent>
          </Typography>
          <Typography variant="bodyLg" center>
            <Accent>{selected.descriptionAccent}</Accent> {selected.descriptionRest}
          </Typography>

          <div className="ui-stat-grid">
            <StatPill label={t("selectedWorks.statLabels.role")} value={selected.stats.role} />
            <StatPill label={t("selectedWorks.statLabels.scope")} value={selected.stats.scope} />
            <StatPill label={t("selectedWorks.statLabels.timeline")} value={selected.stats.timeline} />
            <StatPill label={t("selectedWorks.statLabels.scale")} value={selected.stats.scale} />
          </div>
        </div>

        <div className="selected-detail__segmented">
          <SegmentedControl
            ariaLabel={t("selectedWorks.segmentLabel")}
            items={segmentedItems}
            activeId={fallbackSlug}
            onChange={(next) => onNavigate(`/selected-works/${next}`)}
          />
        </div>
      </section>
      <PageFooter />
    </Container>
  );
}
