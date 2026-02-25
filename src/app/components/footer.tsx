import { Mail, Linkedin, Download } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border mt-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="flex flex-col gap-4">
            <a
              href="mailto:hey@hernanyacosta.com"
              className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail size={20} />
              <span>hey@hernanyacosta.com</span>
            </a>
            <a
              href="https://linkedin.com/in/hernanyacosta"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin size={20} />
              <span>LinkedIn Profile</span>
            </a>
          </div>
          <a
            href="/Hernany-Acosta-CV.pdf"
            download="Hernany-Acosta-CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 border border-border hover:bg-muted rounded-lg transition-colors"
          >
            <Download size={20} />
            <span>Download CV</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
