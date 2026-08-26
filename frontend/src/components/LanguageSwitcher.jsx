import { useTranslation } from "react-i18next";

const LANGUAGES = [
  { code: "en", label: "EN" },
  { code: "es", label: "ES" },
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  return (
    <div className="flex items-center gap-1 rounded-full border border-ink/30 p-1">
      {LANGUAGES.map(({ code, label }) => (
        <button
          key={code}
          type="button"
          onClick={() => i18n.changeLanguage(code)}
          aria-pressed={i18n.resolvedLanguage === code}
          className={`rounded-full px-3 py-1 font-sans text-sm font-medium transition-colors ${
            i18n.resolvedLanguage === code
              ? "bg-forest text-cream"
              : "text-ink hover:bg-forest/10"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
