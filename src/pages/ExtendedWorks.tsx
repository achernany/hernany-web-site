import { ArrowDown } from "lucide-react";
import { Container } from "../components/ui/Container";
import { Section } from "../components/ui/Section";
import { Card } from "../components/ui/Card";
import { Typography, Accent } from "../components/ui/Typography";
import { Tag } from "../components/ui/Tag";
import { IconButton } from "../components/ui/IconButton";
import { Divider } from "../components/ui/Divider";
import { PageFooter } from "../components/layout/PageFooter";
import { useI18n } from "../i18n";

interface ExtendedWorksProps {
  onNavigate: (path: string) => void;
}

export function ExtendedWorks({ onNavigate }: ExtendedWorksProps) {
  const { t, tn } = useI18n();
  const appliedTags = (tn("extendedWorks.cards.applied.tags") as string[]) ?? [];
  const consultingTags = (tn("extendedWorks.cards.consulting.tags") as string[]) ?? [];

  return (
    <Container>
      <Section className="page-center" fullHeight>
        <div className="page-stack page-stack--center">
          <Typography variant="h1" center>
            <Accent>{t("extendedWorks.titleLine1")}</Accent>
            <br />
            {t("extendedWorks.titleLine2")}
          </Typography>

          <Typography variant="bodyLg" center>
            <Accent>{t("extendedWorks.descriptionAccent")}</Accent> {t("extendedWorks.descriptionRest")}
          </Typography>

          <Divider short />

          <div className="extended-grid">
            <Card className="extended-card">
              <Typography variant="h3">{t("extendedWorks.cards.applied.title")}</Typography>
              <Typography variant="bodyMd">{t("extendedWorks.cards.applied.description")}</Typography>
              <div className="extended-card__tags">
                {appliedTags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
              <div className="extended-card__cta">
                <Typography variant="micro"><Accent>{t("common.actions.viewAppliedCases")}</Accent></Typography>
                <IconButton onClick={() => onNavigate("/extended-works/applied")} aria-label={t("common.actions.viewAppliedCases")}>
                  <ArrowDown size={16} />
                </IconButton>
              </div>
            </Card>

            <Card className="extended-card">
              <Typography variant="h3">{t("extendedWorks.cards.consulting.title")}</Typography>
              <Typography variant="bodyMd">{t("extendedWorks.cards.consulting.description")}</Typography>
              <div className="extended-card__tags">
                {consultingTags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
              <div className="extended-card__cta">
                <Typography variant="micro"><Accent>{t("common.actions.viewAppliedCases")}</Accent></Typography>
                <IconButton onClick={() => onNavigate("/extended-works/consulting")} aria-label={t("common.actions.viewAppliedCases")}>
                  <ArrowDown size={16} />
                </IconButton>
              </div>
            </Card>
          </div>
        </div>
      </Section>
      <PageFooter />
    </Container>
  );
}
