import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-forest/10 bg-forest text-offwhite/80">
      <div className="mx-auto max-w-5xl px-6 py-8 text-center text-sm">
        <p>{t("footer.tagline")}</p>
        <p className="mt-2">
          © {year} Alpine Garden & Lawn Services. {t("footer.rights")}
        </p>
      </div>
    </footer>
  );
}
