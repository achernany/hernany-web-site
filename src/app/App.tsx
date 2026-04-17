import { useEffect, useMemo, useState } from "react";
import { X } from "lucide-react";
import { matchRoute } from "../lib/router";
import { useI18n } from "../i18n";
import { MenuOverlay } from "../components/ui/MenuOverlay";
import { TopBar } from "../components/layout/TopBar";
import { Home } from "../pages/Home";
import { Approach } from "../pages/Approach";
import { SelectedWorks } from "../pages/SelectedWorks";
import { SelectedWorkDetail } from "../pages/SelectedWorkDetail";
import { ExtendedWorks } from "../pages/ExtendedWorks";
import { ExtendedWorkDetail } from "../pages/ExtendedWorkDetail";
import { Contact } from "../pages/Contact";
import "../components/ui/ui.css";
import "../components/layout/layout.css";
import "../pages/pages.css";

function normalizePath(pathname: string) {
  if (!pathname || pathname === "") {
    return "/";
  }
  const normalized = pathname.replace(/\/+$/g, "");
  return normalized === "" ? "/" : normalized;
}

export default function App() {
  const { t } = useI18n();
  const [path, setPath] = useState(() => normalizePath(window.location.pathname));
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(() => window.scrollY > 0);

  useEffect(() => {
    const onPopState = () => {
      setPath(normalizePath(window.location.pathname));
      setMenuOpen(false);
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    };

    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navigate = (to: string) => {
    const next = normalizePath(to);
    if (next === path) {
      setMenuOpen(false);
      return;
    }

    window.history.pushState({}, "", next);
    setPath(next);
    setMenuOpen(false);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const route = useMemo(() => {
    const selectedDetail = matchRoute("/selected-works/:slug", path);
    if (selectedDetail) {
      return {
        kind: "selectedDetail" as const,
        element: (
          <SelectedWorkDetail slug={selectedDetail.slug ?? "lotobola"} onNavigate={navigate} />
        ),
      };
    }

    const extendedDetail = matchRoute("/extended-works/:slug", path);
    if (extendedDetail) {
      return {
        kind: "extendedDetail" as const,
        element: (
          <ExtendedWorkDetail slug={extendedDetail.slug ?? "applied"} onNavigate={navigate} />
        ),
      };
    }

    if (path === "/") {
      return { kind: "home" as const, element: <Home onNavigate={navigate} /> };
    }

    if (path === "/approach") {
      return { kind: "approach" as const, element: <Approach /> };
    }

    if (path === "/selected-works") {
      return { kind: "selectedWorks" as const, element: <SelectedWorks onNavigate={navigate} /> };
    }

    if (path === "/extended-works") {
      return { kind: "extendedWorks" as const, element: <ExtendedWorks onNavigate={navigate} /> };
    }

    if (path === "/contact") {
      return { kind: "contact" as const, element: <Contact /> };
    }

    return { kind: "home" as const, element: <Home onNavigate={navigate} /> };
  }, [path]);

  const showTopBar =
    route.kind !== "selectedDetail" &&
    route.kind !== "extendedDetail";

  return (
    <div className="app-shell">
      {showTopBar && (
        <TopBar
          onOpenMenu={() => setMenuOpen(true)}
          onNavigateHome={() => navigate("/")}
          scrolled={scrolled}
        />
      )}

      {menuOpen && (
        <div
          className={`topbar${scrolled ? " topbar--scrolled" : ""}`}
          style={{ zIndex: "var(--layer-overlay-panel)" }}
        >
          <div className="topbar__inner">
            <button
              type="button"
              className="topbar__brand-link"
              aria-label={t("menu.systems")}
              onClick={() => navigate("/")}
            >
              <img
                src="/logo.svg"
                alt={t("common.brand")}
                className="topbar__brand-logo topbar__brand-logo--mark"
                width={16}
                height={18}
              />
            </button>
            <button
              type="button"
              className="topbar__menu"
              aria-label={t("common.menuClose")}
              onClick={() => setMenuOpen(false)}
            >
              <X size={18} />
            </button>
          </div>
        </div>
      )}

      <main className="app-main">{route.element}</main>

      <MenuOverlay open={menuOpen} currentPath={path} onNavigate={navigate} onClose={() => setMenuOpen(false)} />
    </div>
  );
}
