import { ArrowDown } from "lucide-react";
import { Container } from "../components/ui/Container";
import { Section } from "../components/ui/Section";
import { Typography, Accent } from "../components/ui/Typography";
import { IconButton } from "../components/ui/IconButton";
import { Divider } from "../components/ui/Divider";
import { PageFooter } from "../components/layout/PageFooter";
import { useI18n } from "../i18n";

interface SelectedWorksProps {
  onNavigate: (path: string) => void;
}

export function SelectedWorks({ onNavigate }: SelectedWorksProps) {
  const { t } = useI18n();

  return (
    <Container>
      <Section className="selected-splash" fullHeight>
        <div className="selected-splash__inner">
          <Typography variant="h1" center>
            <Accent>{t("selectedWorks.splashTitleLine1")}</Accent>
            <br />
            {t("selectedWorks.splashTitleLine2")}
          </Typography>

          <Typography variant="bodyLg" center>
            <Accent>{t("selectedWorks.splashDescriptionAccent")}</Accent> {t("selectedWorks.splashDescriptionSuffix")}
          </Typography>

          <Typography variant="bodyMd" center>
            {t("selectedWorks.splashMeta")}
          </Typography>

          <Divider short />

          <div className="selected-splash__cta">
            <Typography variant="micro" center>
              {t("common.actions.startNow")}
            </Typography>
            <IconButton onClick={() => onNavigate("/selected-works/lotobola")} aria-label={t("common.actions.startNow")}>
              <ArrowDown size={16} />
            </IconButton>
          </div>
        </div>
      </Section>
      <PageFooter />
    </Container>
  );
}
