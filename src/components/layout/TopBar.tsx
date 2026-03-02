import { Menu } from "lucide-react";
import { useI18n } from "../../i18n";

interface TopBarProps {
  onOpenMenu: () => void;
  onNavigateHome: () => void;
  scrolled: boolean;
}

export function TopBar({ onOpenMenu, onNavigateHome, scrolled }: TopBarProps) {
  const { t } = useI18n();

  return (
    <header className={`topbar${scrolled ? " topbar--scrolled" : ""}`}>
      <div className="topbar__inner">
        <button
          type="button"
          className="topbar__brand-link"
          aria-label={t("menu.systems")}
          onClick={onNavigateHome}
        >
          <img
            src="/logo-menu.svg"
            alt={t("common.brand")}
            className="topbar__brand-logo topbar__brand-logo--menu"
          />
        </button>
        <button
          type="button"
          className="topbar__menu"
          onClick={onOpenMenu}
          aria-label={t("common.menuOpen")}
        >
          <Menu size={18} />
        </button>
      </div>
    </header>
  );
}
