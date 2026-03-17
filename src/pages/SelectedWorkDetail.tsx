import { Container } from "../components/ui/Container";
import { Typography, Accent } from "../components/ui/Typography";
import { SegmentedControl } from "../components/ui/SegmentedControl";
import { StatPill } from "../components/ui/StatPill";
import { PageFooter } from "../components/layout/PageFooter";
import { DetailHeader } from "../components/layout/DetailHeader";
import { LotoBolaSections } from "./LotoBolaSections";
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

const order = ["lotobola", "playzonbet", "alaz", "inlearning", "pacasmayo"];

export function SelectedWorkDetail({ slug, onNavigate }: SelectedWorkDetailProps) {
  const { t, tn } = useI18n();

  const fallbackSlug = order.includes(slug) ? slug : order[0]!;
  const selected = tn(`selectedWorks.works.${fallbackSlug}`) as WorkTranslation;

  const segmentedItems = order.map((item) => ({
    id: item,
    label: String(t(`selectedWorks.works.${item}.name`)),
  }));

  /* ── LotoBola: full case study with sticky tab bar ── */
  if (fallbackSlug === "lotobola") {
    return (
      <div>
        {/* Sticky header */}
        <div className="cs-sticky-header">
          <Container>
            <DetailHeader
              title={t("menu.selectedWork")}
              onBack={() => onNavigate("/selected-works")}
            />
          </Container>
        </div>

        {/* Full case study content */}
        <Container>
          <LotoBolaSections />
        </Container>

        {/* Sticky project tab bar — always visible at the bottom */}
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
