import { Languages } from "lucide-react";
import { useLanguage, type Language } from "@/lib/i18n";

const languages: Array<{ code: string; label: string; domain: string; flag: string; language: Language }> = [
  { code: "EN", label: "English", domain: "withimpulso.com", flag: "🇬🇧", language: "en" },
  { code: "NL", label: "Nederlands", domain: "withimpulso.nl", flag: "🇳🇱", language: "nl" },
  { code: "ES", label: "Español", domain: "withimpulso.es", flag: "🇪🇸", language: "es" },
  { code: "CA", label: "Català", domain: "withimpulso.cat", flag: "🏴", language: "ca" },
];

const getCurrentDomain = () => {
  if (typeof window === "undefined") return "withimpulso.com";
  return window.location.hostname.replace(/^www\./, "");
};

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  const currentDomain = getCurrentDomain();
  const currentLanguage = languages.find((option) => option.language === language) || languages[0];
  const getLanguageHref = (domain: string, nextLanguage: Language) => {
    return `https://${domain}/?lang=${nextLanguage}`;
  };

  return (
    <details className="relative group">
      <summary className="flex items-center gap-2 cursor-pointer list-none text-sm font-medium text-primary-foreground/70 hover:text-accent transition-colors">
        <Languages className="w-4 h-4" />
        <span>{currentLanguage.code}</span>
      </summary>
      <div className="absolute right-0 top-full mt-3 w-40 rounded-md border border-navy-light bg-primary p-2 shadow-lg">
        {languages.map((language) => (
          <a
            key={language.code}
            href={getLanguageHref(language.domain, language.language)}
            onClick={() => setLanguage(language.language)}
            className={`flex items-center gap-2 rounded px-3 py-2 text-sm transition-colors hover:bg-navy-light hover:text-accent ${
              language.domain === currentDomain ? "text-accent" : "text-primary-foreground/70"
            }`}
          >
            <span aria-hidden="true">{language.flag}</span>
            <span>{language.label}</span>
          </a>
        ))}
      </div>
    </details>
  );
};

export default LanguageSwitcher;