import { useState } from "react";
import { useTranslation } from "react-i18next";

const EXAMPLES = [
  {
    key: "mowing",
    before: "linear-gradient(135deg, #8a7a52, #6b5b3d)",
    after: "linear-gradient(135deg, #4f7942, #2d5a27)",
  },
  {
    key: "beds",
    before: "linear-gradient(135deg, #7a6248, #5c4a3a)",
    after: "linear-gradient(135deg, #d9cba3, #4f7942)",
  },
  {
    key: "winter",
    before: "linear-gradient(135deg, #9c8a5e, #7a6b4a)",
    after: "linear-gradient(135deg, #2d5a27, #1f3f1c)",
  },
];

function BeforeAfterSlider({ example }) {
  const { t } = useTranslation();
  const [pos, setPos] = useState(50);

  return (
    <div className="overflow-hidden rounded-2xl border border-forest/10 bg-white/60 shadow-sm">
      <div className="relative aspect-[4/3] select-none overflow-hidden">
        <div
          className="absolute inset-0 flex items-end p-3 text-xs font-semibold text-offwhite/90"
          style={{ background: example.before }}
        >
          {t("beforeAfter.before")}
        </div>
        <div
          className="absolute inset-0 flex items-end justify-end p-3 text-xs font-semibold text-offwhite/90"
          style={{ background: example.after, clipPath: `inset(0 0 0 ${pos}%)` }}
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
