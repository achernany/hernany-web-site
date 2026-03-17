import { Container } from "../components/ui/Container";
import { DetailHeader } from "../components/layout/DetailHeader";
import { PageFooter } from "../components/layout/PageFooter";
import { LotoBolaSections } from "./LotoBolaSections";

/* ============================================================
   LotoBolaCaseStudy — standalone page (kept for reference)
   Main entry: /selected-works/lotobola via SelectedWorkDetail
   ============================================================ */

interface LotoBolaCaseStudyProps {
  onNavigate: (path: string) => void;
}

export function LotoBolaCaseStudy({ onNavigate }: LotoBolaCaseStudyProps) {
  return (
    <div>
      <div className="cs-sticky-header">
        <Container>
          <DetailHeader
            title="LotoBola"
            onBack={() => onNavigate("/selected-works/lotobola")}
          />
        </Container>
      </div>
      <Container>
        <LotoBolaSections />
      </Container>
      <PageFooter />
    </div>
  );
}
