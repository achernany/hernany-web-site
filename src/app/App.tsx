import { useState, useEffect } from "react";
import { Navigation } from "@/app/components/navigation";
import { Footer } from "@/app/components/footer";
import { HomePage } from "@/app/components/home-page";
import { AboutPage } from "@/app/components/about-page";
import { ProjectsPage } from "@/app/components/projects-page";
import { CaseStudyPage } from "@/app/components/case-study-page";
import { ContactPage } from "@/app/components/contact-page";

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
      case "about":
        return <AboutPage />;
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
      <main>{renderPage()}</main>
      <Footer />
    </div>
  );
}
