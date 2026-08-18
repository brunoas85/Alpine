import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import AnimatedLogo from "./AnimatedLogo";

export default function Header() {
  const { t } = useTranslation();

  return (
    <header className="sticky top-0 z-10 border-b border-forest/10 bg-offwhite/95 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-1">
        <a href="#top">
          <AnimatedLogo className="h-[140px]" />
        </a>

        <nav className="hidden items-center gap-6 text-sm font-medium text-gray-700 sm:flex">
          <a href="#services" className="hover:text-forest">
            {t("nav.services")}
          </a>
          <a href="#gallery" className="hover:text-forest">
            {t("nav.gallery")}
          </a>
          <a href="#quote" className="hover:text-forest">
            {t("nav.quote")}
          </a>
          <a href="#contact" className="hover:text-forest">
            {t("nav.contact")}
          </a>
        </nav>

        <LanguageSwitcher />
      </div>
    </header>
  );
}
