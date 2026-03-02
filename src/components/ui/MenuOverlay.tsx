import { useI18n } from "../../i18n";
import { cn } from "../../lib/cn";

interface MenuItem {
  key: string;
  path: string;
}

interface MenuOverlayProps {
  open: boolean;
  currentPath: string;
  onNavigate: (path: string) => void;
  onClose: () => void;
}

const menuItems: MenuItem[] = [
  { key: "systems", path: "/" },
  { key: "approach", path: "/approach" },
  { key: "selectedWork", path: "/selected-works" },
  { key: "extendedWork", path: "/extended-works" },
  { key: "contact", path: "/contact" },
];

export function MenuOverlay({ open, currentPath, onNavigate, onClose }: MenuOverlayProps) {
  const { t, lang, setLang } = useI18n();

  if (!open) {
    return null;
  }

  return (
    <aside className="ui-menu-overlay" aria-modal="true" role="dialog">
      <div className="ui-menu-overlay__content">
        <nav className="ui-menu-overlay__list">
          {menuItems.map((item, index) => {
            const isActive =
              currentPath === item.path ||
              (item.path !== "/" && currentPath.startsWith(item.path));

            return (
              <button
                key={item.path}
                type="button"
                onClick={() => {
                  onNavigate(item.path);
                  onClose();
                }}
                className={cn("ui-menu-overlay__item", isActive && "ui-menu-overlay__item--active")}
                style={{ ["--menu-item-delay" as string]: `${100 + index * 70}ms` }}
              >
                {t(`menu.${item.key}`)}
              </button>
            );
          })}
        </nav>

        <div className="ui-menu-overlay__lang-wrap">
          <div className="ui-menu-overlay__lang" role="group" aria-label="Language selector">
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
        </div>
      </div>
    </aside>
  );
}
