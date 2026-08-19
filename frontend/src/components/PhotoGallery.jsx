import { useTranslation } from "react-i18next";

const TILE_COUNT = 6;

function ImagePlaceholderIcon() {
  return (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" aria-hidden="true">
      <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="8.5" cy="9.5" r="1.5" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M3 16.5 8 12l3.5 3.2L16 11l5 6"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function PhotoGallery() {
  const { t } = useTranslation();

  return (
    <section id="photo-gallery" className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="text-center text-3xl font-semibold text-forest">
        {t("photoGallery.title")}
      </h2>
      <p className="mt-2 text-center text-earth/80">{t("photoGallery.subtitle")}</p>

      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
        {Array.from({ length: TILE_COUNT }).map((_, i) => (
          <div
            key={i}
            className="flex aspect-square items-center justify-center rounded-2xl border border-dashed border-forest/20 bg-white/60 text-forest/30"
          >
            <ImagePlaceholderIcon />
          </div>
        ))}
      </div>

      <p className="mt-6 text-center text-xs text-earth/50">
        {t("photoGallery.placeholderNotice")}
      </p>
    </section>
  );
}
