import { useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import AnimatedLogo from "./AnimatedLogo";

const NAV_LINKS = [
  { href: "#services", key: "nav.services" },
  { href: "#about", key: "nav.about" },
  { href: "#gardening", key: "nav.gardening" },
  { href: "#indoor-gardening", key: "nav.indoorGardening" },
  { href: "#photo-gallery", key: "nav.photoGallery" },
  { href: "#gallery", key: "nav.gallery" },
  { href: "#blog", key: "nav.blog" },
  { href: "#contact", key: "nav.contact" },
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
    <header className="sticky top-0 z-10 bg-offwhite/95 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-2 px-4 py-1 sm:px-6">
        <a href="#top" className="shrink-0 -ml-2 sm:-ml-[100px]">
          <AnimatedLogo className="h-14 lg:h-[110px]" />
        </a>

        <nav className="hidden items-center gap-4 text-sm font-medium text-gray-700 lg:flex xl:gap-6">
          {NAV_LINKS.map(({ href, key }) => (
            <a
              key={href}
              href={href}
              className="group relative whitespace-nowrap py-1 transition-colors duration-200 hover:text-forest"
            >
              {t(key)}
              <span className="absolute inset-x-0 -bottom-0.5 h-0.5 origin-center scale-x-0 bg-forest transition-transform duration-200 ease-out group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-4">
          <a
            href="#quote"
            className="whitespace-nowrap rounded-full bg-forest px-3 py-1.5 text-xs font-semibold text-offwhite transition-colors hover:bg-forest/90 sm:px-4 sm:py-2 sm:text-sm"
          >
            {t("nav.quote")}
          </a>
          <LanguageSwitcher />
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-label={t("nav.menuLabel")}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-forest/20 text-forest lg:hidden"
          >
            <MenuIcon open={menuOpen} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="border-t border-forest/10 bg-offwhite px-4 py-3 lg:hidden">
          <ul className="flex flex-col gap-1 text-sm font-medium text-gray-700">
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
          </ul>
        </nav>
      )}
    </header>
  );
}
