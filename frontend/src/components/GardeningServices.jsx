import { useTranslation } from "react-i18next";

const ITEM_KEYS = [
  "lawnCare",
  "landscapeDesign",
  "pruning",
  "clearing",
  "plantHealth",
  "irrigation",
];

export default function GardeningServices() {
  const { t } = useTranslation();

  return (
    <section id="gardening" className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="text-center text-3xl font-semibold text-forest">
        {t("gardening.title")}
      </h2>
      <p className="mt-2 text-center text-earth/80">{t("gardening.subtitle")}</p>

      <div className="mx-auto mt-10 max-w-3xl space-y-3">
        {ITEM_KEYS.map((key) => (
          <details
            key={key}
            className="group rounded-2xl border border-forest/10 bg-white/60 p-5 shadow-sm open:bg-white [&::-webkit-details-marker]:hidden"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-forest">
              {t(`gardening.items.${key}.title`)}
              <span className="ml-4 shrink-0 text-xl leading-none text-forest/50 transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-3 text-sm text-earth/80">
              {t(`gardening.items.${key}.description`)}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
