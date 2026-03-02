import { Download, Linkedin, Mail } from "lucide-react";
import { Container } from "../components/ui/Container";
import { Section } from "../components/ui/Section";
import { Typography, Accent } from "../components/ui/Typography";
import { Button } from "../components/ui/Button";
import { Divider } from "../components/ui/Divider";
import { PageFooter } from "../components/layout/PageFooter";
import { useI18n } from "../i18n";

export function Contact() {
  const { t } = useI18n();

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
            <Button variant="primary" onClick={() => window.open("mailto:hey@hernanyacosta.com", "_blank")}> 
              <Mail size={16} />
              {t("common.actions.startConversation")}
            </Button>
            <Button variant="secondary" onClick={() => window.open("https://linkedin.com/in/hernanyacosta", "_blank")}> 
              <Linkedin size={16} />
              {t("common.actions.connectLinkedIn")}
            </Button>
          </div>

          <div className="page-divider-wrap">
            <Divider />
          </div>

          <div className="contact-downloads">
            <Button variant="secondary" onClick={() => window.open("/Hernany-Acosta-CV.pdf", "_blank")}> 
              <Download size={16} />
              {t("common.actions.downloadExecutiveCV")}
            </Button>
            <Button variant="secondary" onClick={() => window.open("/Hernany-Acosta-CV.pdf", "_blank")}> 
              <Download size={16} />
              {t("common.actions.downloadPortfolio")}
            </Button>
          </div>
        </div>
      </Section>
      <PageFooter />
    </Container>
  );
}
