import { useTranslation } from "react-i18next";

const PLAN_KEYS = ["basic", "regular", "complete"];

export default function Pricing() {
  const { t } = useTranslation();

  return (
    <section id="pricing" className="border-b border-ink/10 bg-ink px-6 py-20 text-cream sm:px-10 lg:px-14">
      <div className="mb-11 flex flex-wrap items-baseline justify-between gap-6">
        <h2 className="font-display text-3xl font-normal text-cream sm:text-4xl">
          {t("pricing.title")}
        </h2>
        <span className="font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-cream/50">
          {t("pricing.eyebrow")}
        </span>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        {PLAN_KEYS.map((key) => (
          <article
            key={key}
            className={`flex flex-col gap-4 border border-cream/22 p-8 ${
              key === "regular" ? "bg-sage/10" : ""
            }`}
          >
            <span className="font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-sage">
              {t(`pricing.plans.${key}.tag`)}
            </span>
            <h3 className="font-display text-[28px] font-normal leading-none text-cream">
              {t(`pricing.plans.${key}.name`)}
            </h3>
            <div className="flex items-baseline gap-1.5">
              <span className="font-display text-4xl font-normal text-cream">
                {t(`pricing.plans.${key}.price`)}
              </span>
              <span className="font-sans text-[13px] text-cream/60">
                {t(`pricing.plans.${key}.unit`)}
              </span>
            </div>
            <div className="flex flex-col gap-2 border-t border-cream/18 pt-3">
              {t(`pricing.plans.${key}.items`, { returnObjects: true }).map((item) => (
                <span key={item} className="font-sans text-sm text-cream/82">
                  {item}
                </span>
              ))}
            </div>
            <a
              href="#quote"
              className="mt-auto inline-flex items-center justify-center rounded-sm bg-cream px-5 py-3 font-sans text-[13.5px] font-medium text-ink transition-colors hover:bg-sage"
            >
              {t("pricing.chooseCta", { plan: t(`pricing.plans.${key}.name`) })}
            </a>
          </article>
        ))}
      </div>
      <p className="mt-7 font-sans text-[13px] text-cream/55">{t("pricing.disclaimer")}</p>
    </section>
  );
}
