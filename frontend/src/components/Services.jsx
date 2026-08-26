import { useTranslation } from "react-i18next";

const SERVICE_KEYS = [
  "lawnCare",
  "pruning",
  "landscapeDesign",
  "irrigation",
  "plantHealth",
  "winter",
];

export default function Services() {
  const { t } = useTranslation();

  return (
    <section id="services" className="border-b border-ink/10 px-6 py-20 sm:px-10 lg:px-14">
      <div className="mb-11 flex flex-wrap items-baseline justify-between gap-6">
        <h2 className="font-display text-3xl font-normal text-ink sm:text-4xl">
          {t("services.title")}
        </h2>
        <span className="font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-ink/45">
          {t("services.eyebrow")}
        </span>
      </div>

      <div className="grid grid-cols-1 gap-px bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICE_KEYS.map((key) => (
          <article
            key={key}
            className="flex min-h-[230px] flex-col gap-3 bg-cream p-7 transition-colors hover:bg-cream-muted"
          >
            <span className="font-mono text-[10px] font-medium tracking-[0.14em] text-terracotta">
              {t(`services.items.${key}.num`)}
            </span>
            <h3 className="font-display text-2xl font-normal leading-snug text-ink">
              {t(`services.items.${key}.title`)}
            </h3>
            <p className="text-pretty font-sans text-[14.5px] leading-relaxed text-ink/70">
              {t(`services.items.${key}.description`)}
            </p>
            <span className="mt-auto font-mono text-[12.5px] text-ink/50">
              {t(`services.items.${key}.price`)}
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}
