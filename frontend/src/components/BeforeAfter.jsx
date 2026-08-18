import { useState } from "react";
import { useTranslation } from "react-i18next";

const EXAMPLES = [
  { key: "mowing", before: "/cesped-before.png", after: "/cesped-after.png" },
  { key: "beds", before: "/cantero-before.png", after: "/cantero-after.png" },
  { key: "winter", before: "/before-winter.svg", after: "/after-winter.svg" },
];

function BeforeAfterSlider({ example }) {
  const { t } = useTranslation();
  const [pos, setPos] = useState(50);

  return (
    <div className="overflow-hidden rounded-2xl border border-forest/10 bg-white/60 shadow-sm">
      <div className="relative aspect-[4/3] select-none overflow-hidden">
        <div
          className="absolute inset-0 flex items-end p-3 text-xs font-semibold text-offwhite/90"
          style={{
            backgroundImage: `url(${example.before})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            textShadow: "0 1px 3px rgba(0,0,0,0.5)",
          }}
        >
          {t("beforeAfter.before")}
        </div>
        <div
          className="absolute inset-0 flex items-end justify-end p-3 text-xs font-semibold text-offwhite/90"
          style={{
            backgroundImage: `url(${example.after})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            clipPath: `inset(0 0 0 ${pos}%)`,
            textShadow: "0 1px 3px rgba(0,0,0,0.5)",
          }}
        >
          {t("beforeAfter.after")}
        </div>

        <div
          className="pointer-events-none absolute inset-y-0 w-0.5 -translate-x-1/2 bg-offwhite"
          style={{ left: `${pos}%` }}
        />
        <div
          className="pointer-events-none absolute top-1/2 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-offwhite text-forest shadow"
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
          aria-label={t("beforeAfter.sliderLabel")}
          className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
        />
      </div>
      <p className="px-4 py-3 text-center text-sm font-medium text-earth">
        {t(`services.${example.key}.title`)}
      </p>
    </div>
  );
}

export default function BeforeAfter() {
  const { t } = useTranslation();

  return (
    <section id="gallery" className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="text-center text-3xl font-semibold text-forest">
        {t("beforeAfter.title")}
      </h2>
      <p className="mt-2 text-center text-earth/80">{t("beforeAfter.subtitle")}</p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {EXAMPLES.map((example) => (
          <BeforeAfterSlider key={example.key} example={example} />
        ))}
      </div>

      <p className="mt-6 text-center text-xs text-earth/50">
        {t("beforeAfter.placeholderNotice")}
      </p>
    </section>
  );
}
