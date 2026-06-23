import { useLocale } from "@/i18n/LocaleContext";
import type { Locale } from "@/i18n/types";

const langs: { id: Locale; label: string }[] = [
  { id: "pt", label: "PT" },
  { id: "en", label: "EN" },
  { id: "es", label: "ES" },
];

interface LanguageSwitcherProps {
  variant?: "dark" | "light";
  className?: string;
}

export function LanguageSwitcher({ variant = "dark", className = "" }: LanguageSwitcherProps) {
  const { locale, setLocale } = useLocale();

  return (
    <div
      className={`flex items-center gap-1 bg-white/5 border border-white/10 rounded-lg p-1 ${className}`}
      role="group"
      aria-label="Language"
    >
      {langs.map(({ id, label }) => (
        <button
          key={id}
          type="button"
          onClick={() => setLocale(id)}
          className={`px-2.5 sm:px-3 py-1.5 text-xs font-mono font-medium rounded-md transition-colors ${
            locale === id
              ? "bg-forest text-white"
              : variant === "light"
                ? "text-primary/70 hover:text-primary hover:bg-black/5"
                : "text-white/60 hover:text-white hover:bg-white/5"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
