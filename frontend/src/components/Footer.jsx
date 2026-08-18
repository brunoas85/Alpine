import { useTranslation } from "react-i18next";

const PHONE_DISPLAY = "+1 (970) 948-2429";
const PHONE_HREF = "+19709482429";
const EMAIL = "lawn&garden@alpine.com";
const INSTAGRAM_HANDLE = "alpinegardener";

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
    </svg>
  );
}

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-forest/10 bg-forest text-offwhite/80">
      <div className="mx-auto grid max-w-5xl gap-10 px-6 py-14 sm:grid-cols-3">
        <div>
          <p className="text-lg font-semibold text-offwhite">Alpine Garden & Lawn Services</p>
          <p className="mt-3 text-sm">{t("footer.tagline")}</p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-offwhite/50">
            {t("footer.linksTitle")}
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href="#services" className="transition-colors hover:text-offwhite">
                {t("nav.services")}
              </a>
            </li>
            <li>
              <a href="#gallery" className="transition-colors hover:text-offwhite">
                {t("nav.gallery")}
              </a>
            </li>
            <li>
              <a href="#quote" className="transition-colors hover:text-offwhite">
                {t("nav.quote")}
              </a>
            </li>
            <li>
              <a href="#contact" className="transition-colors hover:text-offwhite">
                {t("nav.contact")}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-offwhite/50">
            {t("footer.contactTitle")}
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href={`tel:${PHONE_HREF}`} className="transition-colors hover:text-offwhite">
                {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`} className="break-all transition-colors hover:text-offwhite">
                {EMAIL}
              </a>
            </li>
            <li>{t("footer.location")}</li>
          </ul>

          <p className="mt-5 text-sm font-semibold uppercase tracking-wide text-offwhite/50">
            {t("footer.followTitle")}
          </p>
          <a
            href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-2 text-sm transition-colors hover:text-offwhite"
          >
            <InstagramIcon />@{INSTAGRAM_HANDLE}
          </a>
        </div>
      </div>

      <div className="border-t border-offwhite/10 px-6 py-6 text-center text-sm">
        © {year} bRuno´s - {t("footer.rights")}
      </div>
    </footer>
  );
}
