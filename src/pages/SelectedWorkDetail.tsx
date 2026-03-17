import { Container } from "../components/ui/Container";
import { Typography, Accent } from "../components/ui/Typography";
import { SegmentedControl } from "../components/ui/SegmentedControl";
import { StatPill } from "../components/ui/StatPill";
import { PageFooter } from "../components/layout/PageFooter";
import { DetailHeader } from "../components/layout/DetailHeader";
import { LotoBolaSections } from "./LotoBolaSections";
import { PlayzonBetSections } from "./PlayzonBetSections";
import { EvaSections } from "./EvaSections";
import { AlazSections } from "./AlazSections";
import { useI18n } from "../i18n";

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

// Only slugs with a full case study built — add new entries here as they're created
const order = ["lotobola", "playzonbet", "eva", "alaz"];

// Content map — add new Sections components here when a new case study is built
const caseStudyContent: Record<string, JSX.Element> = {
  lotobola: <LotoBolaSections />,
  playzonbet: <PlayzonBetSections />,
  eva: <EvaSections />,
  alaz: <AlazSections />,
};

export function SelectedWorkDetail({ slug, onNavigate }: SelectedWorkDetailProps) {
  const { t, tn } = useI18n();

  const fallbackSlug = order.includes(slug) ? slug : order[0]!;
  const selected = tn(`selectedWorks.works.${fallbackSlug}`) as WorkTranslation;

  const segmentedItems = order.map((item) => ({
    id: item,
    label: String(t(`selectedWorks.works.${item}.name`)),
  }));

  /* ── Full case studies: single render path so header + tab bar never remount ── */
  if (fallbackSlug in caseStudyContent) {
    return (
      <div className="cs-case-page">
        {/* Sticky header — same element across all case studies, never remounts */}
        <div className="cs-sticky-header">
          <Container>
            <DetailHeader
              title={t("menu.selectedWork")}
              onBack={() => onNavigate("/selected-works")}
            />
          </Container>
        </div>

        {/* Content area — only this swaps when navigating between projects */}
        <Container>
          {caseStudyContent[fallbackSlug]}
        </Container>

        {/* Fixed tab bar — same element across all case studies, never remounts */}
        <div className="cs-tab-bar">
          <SegmentedControl
            ariaLabel={t("selectedWorks.segmentLabel")}
            items={segmentedItems}
            activeId={fallbackSlug}
            onChange={(next) => onNavigate(`/selected-works/${next}`)}
          />
        </div>

        <PageFooter />
      </div>
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
