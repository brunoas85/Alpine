import { useTranslation } from "react-i18next";

const ITEM_KEYS = ["decor", "maintenance", "advice", "planters"];

export default function IndoorGardening() {
  const { t } = useTranslation();

  return (
    <section id="indoor-gardening" className="bg-white/60 py-20">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-center text-3xl font-semibold text-forest">
          {t("indoorGardening.title")}
        </h2>
        <p className="mt-2 text-center text-earth/80">
          {t("indoorGardening.subtitle")}
        </p>

        <div className="mx-auto mt-10 max-w-3xl space-y-3">
          {ITEM_KEYS.map((key) => (
            <details
              key={key}
              className="group rounded-2xl border border-forest/10 bg-white p-5 shadow-sm open:bg-sand/10 [&::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-forest">
                {t(`indoorGardening.items.${key}.title`)}
                <span className="ml-4 shrink-0 text-xl leading-none text-forest/50 transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm text-earth/80">
                {t(`indoorGardening.items.${key}.description`)}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
