import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { HomePage } from "./components/home-page";
import { ProjectsPage } from "./components/projects-page";
import { ContactPage } from "./components/contact-page";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Set dark mode by default
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage onNavigate={handleNavigate} />;
      case "projects":
        return <ProjectsPage />;
      case "contact":
        return <ContactPage />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-[100svh] bg-background text-foreground flex flex-col">
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="flex-1 min-h-0">{renderPage()}</main>
      {currentPage !== "home" && (
        <footer className="py-3 md:py-4">
          <p className="text-center text-[11px] text-muted-foreground">
            © 2026 Hernany Acosta. All rights reserved.
          </p>
        </footer>
      )}
    </div>
  );
}
