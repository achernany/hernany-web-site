import { ArrowLeft } from "lucide-react";
import { IconButton } from "../ui/IconButton";
import { useI18n } from "../../i18n";
import { cn } from "../../lib/cn";

interface DetailHeaderProps {
  title: string;
  onBack: () => void;
}

export function DetailHeader({ title, onBack }: DetailHeaderProps) {
  const { t, lang, setLang } = useI18n();

  return (
    <div className="detail-header">
      <div className="detail-header__left">
        <IconButton back onClick={onBack} aria-label={t("common.actions.back")}>
          <ArrowLeft size={16} />
        </IconButton>
        <span className="detail-header__title">{title}</span>
      </div>

      <div className="detail-header__lang" role="group" aria-label="Language selector">
        <button
          type="button"
          onClick={() => setLang("en")}
          className={cn("detail-header__lang-btn", lang === "en" && "detail-header__lang-btn--active")}
        >
          EN
        </button>
        <span className="detail-header__lang-sep" aria-hidden="true">/</span>
        <button
          type="button"
          onClick={() => setLang("es")}
          className={cn("detail-header__lang-btn", lang === "es" && "detail-header__lang-btn--active")}
        >
          ES
        </button>
      </div>
    </div>
  );
}
