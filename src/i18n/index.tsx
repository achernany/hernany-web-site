import { createContext, useContext, useEffect, useMemo, useState, type PropsWithChildren } from "react";
import en from "./locales/en.json";
import es from "./locales/es.json";

type Lang = "en" | "es";
type Dictionary = Record<string, unknown>;

const dictionaries: Record<Lang, Dictionary> = { en, es };
const STORAGE_KEY = "lang";

interface I18nContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
  tn: (key: string) => unknown;
}

const I18nContext = createContext<I18nContextValue | null>(null);

function getNested(dictionary: Dictionary, key: string): unknown {
  return key.split(".").reduce<unknown>((acc, part) => {
    if (typeof acc !== "object" || acc === null || !(part in acc)) {
      return undefined;
    }
    return (acc as Record<string, unknown>)[part];
  }, dictionary);
}

export function LanguageProvider({ children }: PropsWithChildren) {
  const [lang, setLangState] = useState<Lang>(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved === "es" || saved === "en") {
        return saved;
      }
    } catch {
      // Ignore storage access failures and fall back to browser language.
    }

    return navigator.language.toLowerCase().startsWith("es") ? "es" : "en";
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // Ignore storage write failures; language still works in-memory.
    }
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo<I18nContextValue>(() => {
    const dictionary = dictionaries[lang];

    return {
      lang,
      setLang: setLangState,
      t: (key: string) => {
        const value = getNested(dictionary, key);
        return typeof value === "string" ? value : key;
      },
      tn: (key: string) => getNested(dictionary, key),
    };
  }, [lang]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within LanguageProvider");
  }
  return context;
}
