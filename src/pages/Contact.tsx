import { Download, Linkedin, Mail } from "lucide-react";
import { Container } from "../components/ui/Container";
import { Section } from "../components/ui/Section";
import { Typography, Accent } from "../components/ui/Typography";
import { Divider } from "../components/ui/Divider";
import { PageFooter } from "../components/layout/PageFooter";
import { useI18n } from "../i18n";

export function Contact() {
  const { t, lang } = useI18n();
  const cvHref = lang === "es" ? "/Hernany-Acosta-CV.pdf" : "/Hernany-Acosta-CV-EN.pdf";
  const cvFileName = lang === "es" ? "Hernany-Acosta-CV.pdf" : "Hernany-Acosta-CV-EN.pdf";

  return (
    <Container>
      <Section className="page-center">
        <div className="page-stack page-stack--center">
          <Typography variant="h1" center>
            <Accent>{t("contact.titleLine1")}</Accent>
            <br />
            {t("contact.titleLine2")}
          </Typography>

          <Typography variant="bodyLg" center>
            {t("contact.descriptionPrefix")} <Accent>{t("contact.descriptionAccent")}</Accent> {t("contact.descriptionSuffix")}
          </Typography>

          <div className="contact-actions">
            <a href="mailto:hey@hernanyacosta.com" className="ui-button ui-button--primary">
              <Mail size={16} />
              {t("common.actions.startConversation")}
            </a>
            <a
              href="https://linkedin.com/in/hernanyacosta"
              target="_blank"
              rel="noopener noreferrer"
              className="ui-button ui-button--secondary"
            >
              <Linkedin size={16} />
              {t("common.actions.connectLinkedIn")}
            </a>
          </div>

          <div className="page-divider-wrap">
            <Divider />
          </div>

          <div className="contact-downloads">
            <a
              href={cvHref}
              download={cvFileName}
              className="ui-button ui-button--secondary"
            >
              <Download size={16} />
              {t("common.actions.downloadExecutiveCV")}
            </a>
            <a
              href="/Hernany-Acosta-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="ui-button ui-button--secondary"
            >
              <Download size={16} />
              {t("common.actions.downloadPortfolio")}
            </a>
          </div>
        </div>
      </Section>
      <PageFooter />
    </Container>
  );
}
