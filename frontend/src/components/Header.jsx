import { useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import AnimatedLogo from "./AnimatedLogo";
import { PHONE_DISPLAY, PHONE_TEL } from "../constants";

const NAV_LINKS = [
  { href: "#services", key: "nav.services" },
  { href: "#work", key: "nav.work" },
  { href: "#process", key: "nav.process" },
  { href: "#pricing", key: "nav.pricing" },
  { href: "#area", key: "nav.area" },
];

function MenuIcon({ open }) {
  return (
    <svg viewBox="0 0 20 20" width="16" height="16" fill="none" aria-hidden="true">
      {open ? (
        <path
          d="M5 5l10 10M15 5L5 15"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      ) : (
        <path
          d="M3 5h14M3 10h14M3 15h14"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      )}
    </svg>
  );
}

export default function Header() {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-10 border-b border-ink/10 bg-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-4 py-1 sm:px-6">
        <a href="#top" className="shrink-0 -ml-2 sm:-ml-[100px]">
          <AnimatedLogo className="h-14 lg:h-[110px]" />
        </a>

        <nav className="hidden items-center gap-4 font-sans text-sm font-normal lg:flex xl:gap-7">
          {NAV_LINKS.map(({ href, key }) => (
            <a
              key={href}
              href={href}
              className="group relative whitespace-nowrap py-1 transition-colors duration-200 hover:text-terracotta"
            >
              {t(key)}
              <span className="absolute inset-x-0 -bottom-0.5 h-0.5 origin-center scale-x-0 bg-terracotta transition-transform duration-200 ease-out group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-4">
          <a
            href={`tel:${PHONE_TEL}`}
            className="hidden whitespace-nowrap font-sans text-sm font-medium text-ink sm:inline"
          >
            {PHONE_DISPLAY}
          </a>
          <a
            href="#quote"
            className="whitespace-nowrap rounded-sm bg-forest px-3 py-1.5 font-sans text-xs font-medium text-cream transition-colors hover:bg-ink sm:px-4 sm:py-2 sm:text-sm"
          >
            {t("nav.quote")}
          </a>
          <LanguageSwitcher />
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-label={t("nav.menuLabel")}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-ink/20 text-ink lg:hidden"
          >
            <MenuIcon open={menuOpen} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="border-t border-ink/10 bg-cream px-4 py-3 lg:hidden">
          <ul className="flex flex-col gap-1 font-sans text-sm">
            {NAV_LINKS.map(({ href, key }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-lg px-3 py-2 transition-colors duration-200 hover:bg-forest/10 hover:text-forest"
                >
                  {t(key)}
                </a>
              </li>
            ))}
            <li>
              <a href={`tel:${PHONE_TEL}`} className="block rounded-lg px-3 py-2 font-medium">
                {PHONE_DISPLAY}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
