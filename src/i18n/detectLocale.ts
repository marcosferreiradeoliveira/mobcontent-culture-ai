import type { Locale } from "./types";

const STORAGE_KEY = "mobcontent-locale";

export function detectLocale(): Locale {
  if (typeof window === "undefined") return "pt";

  const stored = localStorage.getItem(STORAGE_KEY) as Locale | null;
  if (stored && (stored === "pt" || stored === "en" || stored === "es")) {
    return stored;
  }

  const langs = navigator.languages?.length
    ? navigator.languages
    : [navigator.language];

  for (const raw of langs) {
    const code = raw.toLowerCase().split("-")[0];
    if (code === "pt" || code === "en" || code === "es") return code;
  }

  return "pt";
}

export function persistLocale(locale: Locale) {
  localStorage.setItem(STORAGE_KEY, locale);
}

export function getHtmlLang(locale: Locale): string {
  return locale === "pt" ? "pt-BR" : locale === "es" ? "es" : "en";
}
