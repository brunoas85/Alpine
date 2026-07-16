import { useTranslation } from "react-i18next";

const SERVICE_KEYS = ["mowing", "pruning", "beds", "winter"];

export default function Services() {
  const { t } = useTranslation();

  return (
    <section id="services" className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="text-center text-3xl font-semibold text-forest">
        {t("services.title")}
      </h2>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {SERVICE_KEYS.map((key) => (
          <div
            key={key}
            className="rounded-2xl border border-forest/10 bg-white/60 p-6 shadow-sm"
          >
            <h3 className="font-semibold text-forest">
              {t(`services.${key}.title`)}
            </h3>
            <p className="mt-2 text-sm text-earth/80">
              {t(`services.${key}.description`)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
