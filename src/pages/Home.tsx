import { ArrowRight, Download, Github, Instagram, Linkedin } from "lucide-react";
import { Container } from "../components/ui/Container";
import { Typography, Accent } from "../components/ui/Typography";
import { Button } from "../components/ui/Button";
import { useI18n } from "../i18n";

interface HomeProps {
  onNavigate: (path: string) => void;
}

export function Home({ onNavigate }: HomeProps) {
  const { t, lang } = useI18n();
  const cvHref = lang === "es" ? "/Hernany-Acosta-CV.pdf" : "/Hernany-Acosta-CV-EN.pdf";
  const cvFileName = lang === "es" ? "Hernany-Acosta-CV.pdf" : "Hernany-Acosta-CV-EN.pdf";

  return (
    <section className="home-hero">
      <div className="home-hero__bg" aria-hidden />
      <Container className="home-hero__content">
        <div className="home-hero__panel">
          <Typography variant="h1" className="home-hero__title">
            <Accent>{t("home.titleLine1")}</Accent>
            <br />
            {t("home.titleLine2")}
          </Typography>

          <Typography variant="bodyLg" tone="secondary" className="home-hero__description">
            <Accent>{t("home.descriptionAccent")}</Accent> {t("home.descriptionRest")}
          </Typography>

          <Typography variant="bodyMd" tone="secondary" className="home-hero__meta">
            {t("home.meta")}
          </Typography>

          <div className="home-hero__actions">
            <Button variant="primary" onClick={() => onNavigate("/selected-works")}>
              {t("common.actions.enterSystems")}
              <ArrowRight size={16} />
            </Button>
            <Button variant="secondary" onClick={() => onNavigate("/contact")}>
              {t("common.actions.startConversation")}
            </Button>
          </div>
        </div>

        <div className="home-hero__bottom">
          <a href={`mailto:${t("home.email")}`} className="home-hero__email home-hero__email-link">
            <Typography variant="bodyMd" className="home-hero__email">
              {t("home.email")}
            </Typography>
          </a>

          <div className="home-hero__social" aria-label="Social links">
            <a
              href="https://linkedin.com/in/hernanyacosta"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
            <a
              href="https://github.com/achernany"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>
            <a
              href="https://instagram.com/hernanyac"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram size={16} />
            </a>
          </div>

          <a
            className="ui-button ui-button--ghost home-hero__download"
            href={cvHref}
            download={cvFileName}
          >
            <Download size={16} />
            {t("common.actions.downloadExecutiveCV")}
          </a>
        </div>

        <p className="page-footer__copy home-hero__copyright">
          {t("common.copyright")}
        </p>
      </Container>
    </section>
  );
}
