import { Container } from "../components/ui/Container";
import { Section } from "../components/ui/Section";
import { Typography, Accent } from "../components/ui/Typography";
import { Divider } from "../components/ui/Divider";
import { PageFooter } from "../components/layout/PageFooter";
import { useI18n } from "../i18n";

export function Approach() {
  const { t } = useI18n();

  return (
    <Container>
      <Section className="page-center">
        <div className="page-stack page-stack--center">
          <Typography variant="h1" center>
            {t("approach.titlePrefix")} <Accent>{t("approach.titleAccent")}</Accent>
          </Typography>

          <div className="approach-list">
            <div className="approach-item">
              <Typography variant="h3" center>{t("approach.systemThinkingTitle")}</Typography>
              <Typography variant="bodyLg" center>{t("approach.systemThinkingBody")}</Typography>
            </div>
            <div className="approach-item">
              <Typography variant="h3" center>{t("approach.integrationTitle")}</Typography>
              <Typography variant="bodyLg" center>{t("approach.integrationBody")}</Typography>
            </div>
            <div className="approach-item">
              <Typography variant="h3" center>{t("approach.executionTitle")}</Typography>
              <Typography variant="bodyLg" center>{t("approach.executionBody")}</Typography>
            </div>
          </div>

          <Divider short />

          <div className="approach-list">
            <Typography variant="h3" center>{t("approach.dontTitle")}</Typography>
            <Typography variant="bodyLg" center>{t("approach.dontOne")}</Typography>
            <Typography variant="bodyLg" center>{t("approach.dontTwo")}</Typography>
            <Typography variant="bodyLg" center>{t("approach.dontThree")}</Typography>
          </div>

          <a href="mailto:hey@hernanyacosta.com" className="ui-button ui-button--primary">
            {t("common.actions.startConversation")}
          </a>
        </div>
      </Section>
      <PageFooter />
    </Container>
  );
}
