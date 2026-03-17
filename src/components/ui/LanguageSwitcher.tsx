import { useI18n } from "../../i18n";
import { cn } from "../../lib/cn";

interface LanguageSwitcherProps {
  className?: string;
}

export function LanguageSwitcher({ className }: LanguageSwitcherProps) {
  const { t, lang, setLang } = useI18n();

  return (
    <div
      className={cn("ui-menu-overlay__lang", className)}
      role="group"
      aria-label="Language selector"
    >
      <button
        type="button"
        onClick={() => setLang("en")}
        className={cn(
          "ui-menu-overlay__lang-btn",
          lang === "en" && "ui-menu-overlay__lang-btn--active",
        )}
      >
        {t("common.language.en")}
      </button>
      <button
        type="button"
        onClick={() => setLang("es")}
        className={cn(
          "ui-menu-overlay__lang-btn",
          lang === "es" && "ui-menu-overlay__lang-btn--active",
        )}
      >
        {t("common.language.es")}
      </button>
    </div>
  );
}
