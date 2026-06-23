import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { detectLocale, getHtmlLang, persistLocale } from "./detectLocale";
import { translations } from "./locales";
import type { Locale, Translations } from "./types";

interface LocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translations;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => detectLocale());

  const setLocale = (next: Locale) => {
    setLocaleState(next);
    persistLocale(next);
  };

  useEffect(() => {
    document.documentElement.lang = getHtmlLang(locale);
  }, [locale]);

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t: translations[locale] }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return ctx;
}

export function getWhatsAppUrl(message: string) {
  return `https://wa.me/5521966225632?text=${encodeURIComponent(message)}`;
}
