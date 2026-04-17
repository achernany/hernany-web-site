import type { PropsWithChildren, ReactNode } from "react";
import { cn } from "../../lib/cn";
import { Container } from "../ui/Container";
import { SegmentedControl, type SegmentedItem } from "../ui/SegmentedControl";
import { PageFooter } from "../layout/PageFooter";
import { DetailHeader } from "../layout/DetailHeader";

interface CaseStudyShellProps extends PropsWithChildren {
  caseStudyId: string;
  title: string;
  activeSlug: string;
  segmentedItems: SegmentedItem[];
  segmentedAriaLabel: string;
  onNavigate: (path: string) => void;
  guard?: ReactNode;
}

export function CaseStudyShell({
  caseStudyId,
  title,
  activeSlug,
  segmentedItems,
  segmentedAriaLabel,
  onNavigate,
  guard,
  children,
}: CaseStudyShellProps) {
  return (
    <div className={cn("cs-case-page", `cs-case-page--${caseStudyId}`)}>
      {guard}

      <div className="cs-sticky-header">
        <Container>
          <DetailHeader
            title={title}
            onBack={() => onNavigate("/selected-works")}
          />
        </Container>
      </div>

      <Container>{children}</Container>

      <div className="cs-tab-bar">
        <SegmentedControl
          ariaLabel={segmentedAriaLabel}
          items={segmentedItems}
          activeId={activeSlug}
          onChange={(next) => onNavigate(`/selected-works/${next}`)}
        />
      </div>

      <PageFooter />
    </div>
  );
}
