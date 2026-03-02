import { createRoot } from "react-dom/client";
import App from "./app/App";
import { LanguageProvider } from "./i18n";
import "./theme/vars.css";
import "./theme/base.css";

createRoot(document.getElementById("root")!).render(
  <LanguageProvider>
    <App />
  </LanguageProvider>,
);
