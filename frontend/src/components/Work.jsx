import { useState } from "react";
import { useTranslation } from "react-i18next";

const EXAMPLES = [
  { key: "mowing", before: "/cesped-before.png", after: "/cesped-after.png" },
  { key: "beds", before: "/cantero-before.png", after: "/cantero-after.png" },
  { key: "winter", before: "/before-winter.svg", after: "/after-winter.svg" },
];

const DETAIL_PHOTOS = [
  { src: "/Galería/annie-spratt-3vFbHoKYltE-unsplash.webp", captionKey: "work.detail1Caption" },
  { src: "/Galería/glen-carrie-y8dgMhxaoKk-unsplash.webp", captionKey: "work.detail2Caption" },
];

function BeforeAfterSlider({ example }) {
  const { t } = useTranslation();
  const [pos, setPos] = useState(50);

  return (
    <div className="overflow-hidden border border-ink/10 bg-cream">
      <div className="relative aspect-[4/3] select-none overflow-hidden">
        <div
          className="absolute inset-0 flex items-end p-3 font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-cream/90"
          style={{
            backgroundImage: `url(${example.before})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            textShadow: "0 1px 3px rgba(0,0,0,0.5)",
          }}
        >
          {t("work.before")}
        </div>
        <div
          className="absolute inset-0 flex items-end justify-end p-3 font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-cream/90"
          style={{
            backgroundImage: `url(${example.after})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            clipPath: `inset(0 0 0 ${pos}%)`,
            textShadow: "0 1px 3px rgba(0,0,0,0.5)",
          }}
        >
          {t("work.after")}
        </div>

        <div
          className="pointer-events-none absolute inset-y-0 w-0.5 -translate-x-1/2 bg-cream"
          style={{ left: `${pos}%` }}
        />
        <div
          className="pointer-events-none absolute top-1/2 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-cream text-ink shadow"
          style={{ left: `${pos}%` }}
        >
          <svg viewBox="0 0 20 20" width="14" height="14" fill="none" aria-hidden="true">
            <path
              d="M7 5 3 10l4 5M13 5l4 5-4 5"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <input
          type="range"
          min={0}
          max={100}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          aria-label={t("work.sliderLabel")}
          className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
        />
      </div>
      <p className="px-4 py-3 text-center font-sans text-sm font-medium text-ink">
        {t(`work.examples.${example.key}`)}
      </p>
    </div>
  );
}

export default function Work() {
  const { t } = useTranslation();

  return (
    <section id="work" className="border-b border-ink/10 bg-cream-muted px-6 py-20 sm:px-10 lg:px-14">
      <div className="mb-11 flex flex-wrap items-baseline justify-between gap-6">
        <h2 className="font-display text-3xl font-normal text-ink sm:text-4xl">
          {t("work.title")}
        </h2>
        <span className="font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-ink/45">
          {t("work.eyebrow")}
        </span>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {EXAMPLES.map((example) => (
          <BeforeAfterSlider key={example.key} example={example} />
        ))}
      </div>

      <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_1.2fr]">
        <div className="grid grid-cols-2 gap-3">
          {DETAIL_PHOTOS.map((photo) => (
            <figure key={photo.src} className="m-0">
              <div className="aspect-square overflow-hidden border border-ink/10">
                <img
                  src={photo.src}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <figcaption className="mt-2 font-mono text-[11px] text-ink/50">
                {t(photo.captionKey)}
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="flex flex-col justify-between gap-6">
          <div className="flex flex-wrap items-baseline justify-between gap-3 border-t border-ink/12 pt-5">
            <span className="font-sans text-[15px] text-ink">{t("work.caseCaption")}</span>
            <a
              href="#work"
              className="whitespace-nowrap font-mono text-[12.5px] font-medium tracking-[0.06em] text-terracotta"
            >
              {t("work.caseLink")} →
            </a>
          </div>
          <p className="m-0 max-w-[52ch] font-sans text-[14.5px] leading-relaxed text-ink/70">
            {t("work.documentationNote")}
          </p>
        </div>
      </div>

      <p className="mt-8 text-center font-sans text-xs text-ink/50">
        {t("work.placeholderNotice")}
      </p>
    </section>
  );
}
