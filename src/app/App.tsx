import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { HomePage } from "./components/home-page";
import { ProjectsPage } from "./components/projects-page";
import { CaseStudyPage } from "./components/case-study-page";
import { ContactPage } from "./components/contact-page";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const handleNavigate = (page: string, projectId?: string) => {
    setCurrentPage(page);
    if (projectId) {
      setSelectedProject(projectId);
    }
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
        return <ProjectsPage onNavigate={handleNavigate} />;
      case "case-study":
        return (
          <CaseStudyPage
            projectId={selectedProject || "lotobola"}
            onNavigate={handleNavigate}
          />
        );
      case "contact":
        return <ContactPage />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      {/* Importante: no forzar h-screen ni overflow-hidden aquí */}
      <main className="min-h-[100svh]">{renderPage()}</main>
      {currentPage !== "home" && (
        <footer className="pb-6 md:pb-8">
          <p className="text-center text-[11px] text-muted-foreground">
            © 2026 Hernany Acosta. All rights reserved.
          </p>
        </footer>
      )}
    </div>
  );
}
