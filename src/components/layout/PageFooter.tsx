import { Container } from "../ui/Container";
import { useI18n } from "../../i18n";

export function PageFooter() {
  const { t } = useI18n();

  return (
    <footer className="page-footer">
      <Container>
        <p className="page-footer__copy">{t("common.copyright")}</p>
      </Container>
    </footer>
  );
}
