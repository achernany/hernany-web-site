import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(mediaQuery.matches);
    update();
    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  // Lock scroll ONLY while menu is open
  useEffect(() => {
    if (!isMenuOpen) return;

    const prevHtmlOverflow = document.documentElement.style.overflow;
    const prevBodyOverflow = document.body.style.overflow;

    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.documentElement.style.overflow = prevHtmlOverflow;
      document.body.style.overflow = prevBodyOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isMenuOpen]);

  const menuItems = [
    { id: "home", label: "Home" },
    { id: "projects", label: "Works" },
    { id: "contact", label: "Contact" },
  ];

  const isHomeMobile = currentPage === "home" && isMobile;

  const handleNavigate = (page: string) => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  const ICON_BOX = "h-10 w-10";
  const ICON_SIZE = 22;

  return (
    <>
      <nav
        className={[
          // ✅ IMPORTANT: nav must be ABOVE the fullscreen menu layer on mobile
          "fixed top-0 left-0 right-0 z-[70]",
          "transition-colors duration-300",
          isHomeMobile && !isMenuOpen
            ? "bg-transparent border-b border-transparent backdrop-blur-0"
            : isScrolled || isMenuOpen
              ? "bg-black/45 backdrop-blur-2xl border-b border-white/10"
              : "bg-transparent border-b border-transparent",
        ].join(" ")}
        aria-label="Primary"
      >
        <div
          className="max-w-7xl mx-auto h-20 flex items-center justify-between"
          style={{
            paddingLeft: "max(1.5rem, env(safe-area-inset-left))",
            paddingRight: "max(1.5rem, env(safe-area-inset-right))",
          }}
        >
          {/* Logo (link to Home) */}
          <button
            onClick={() => handleNavigate("home")}
            className="inline-flex items-center hover:opacity-85 transition-opacity"
            aria-label="Go to Home"
            type="button"
          >
            <div className="relative h-4 w-[120px] sm:w-[140px] overflow-hidden">
              <AnimatePresence mode="wait" initial={false}>
                {!isMenuOpen ? (
                  <motion.img
                    key="logo-closed"
                    src="/logo.svg"
                    alt="Hernany Acosta"
                    className="absolute inset-0 h-full w-full object-contain object-left"
                    initial={{ opacity: 0, y: 4, filter: "blur(6px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -4, filter: "blur(6px)" }}
                    transition={{ duration: 0.22, ease: "easeOut" }}
                    decoding="async"
                    draggable={false}
                  />
                ) : (
                  <motion.img
                    key="logo-open"
                    src="/logo-menu.svg"
                    alt="Hernany Acosta"
                    className="absolute inset-0 h-full w-full object-contain object-left"
                    initial={{ opacity: 0, y: 4, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -4, filter: "blur(8px)" }}
                    transition={{ duration: 0.24, ease: "easeOut" }}
                    decoding="async"
                    draggable={false}
                  />
                )}
              </AnimatePresence>
            </div>
          </button>

          {/* Menu toggle */}
          <button
            onClick={() => setIsMenuOpen((v) => !v)}
            type="button"
            className={[
              "inline-flex items-center justify-center",
              ICON_BOX,
              "shrink-0",
              "rounded-lg",
              "hover:bg-white/10 active:bg-white/15",
              "transition-colors",
            ].join(" ")}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            <span className="inline-flex items-center justify-center">
              {isMenuOpen ? <X size={ICON_SIZE} /> : <Menu size={ICON_SIZE} />}
            </span>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Overlay */}
            <motion.button
              type="button"
              aria-label="Close menu overlay"
              onClick={() => setIsMenuOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-xl"
            />

            {/* Menu */}
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.99 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.99 }}
              transition={{ duration: 0.22 }}
              className="fixed inset-0 z-50 pointer-events-none"
            >
              <div className="pointer-events-auto h-full w-full max-w-xl mx-auto px-6 relative">
                <div className="h-full flex items-center justify-center text-center">
                  <div className="flex flex-col gap-7 max-[740px]:gap-5">
                    {menuItems.map((item) => {
                      const isActive = currentPage === item.id;
                      return (
                        <button
                          key={item.id}
                          onClick={() => handleNavigate(item.id)}
                          type="button"
                          className={[
                            "tracking-tight transition-opacity",
                            "text-4xl sm:text-5xl md:text-7xl max-[740px]:text-4xl",
                            isActive
                              ? "opacity-100"
                              : "opacity-55 hover:opacity-90",
                          ].join(" ")}
                        >
                          {item.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
