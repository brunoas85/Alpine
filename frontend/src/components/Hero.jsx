import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  const stats = [
    { value: t("hero.stat1Value"), label: t("hero.stat1Label") },
    { value: t("hero.stat2Value"), label: t("hero.stat2Label") },
    { value: t("hero.stat3Value"), label: t("hero.stat3Label") },
  ];

  return (
    <section
      id="top"
      className="grid border-b border-ink/10 md:grid-cols-[1.05fr_.95fr]"
    >
      <div className="flex flex-col items-start gap-0 px-6 py-16 sm:px-10 lg:px-14 lg:py-20">
        <span className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-terracotta">
          {t("hero.eyebrow")}
        </span>
        <h1 className="mt-6 max-w-[15ch] text-pretty font-display text-[clamp(2.6rem,5.4vw,4.6rem)] font-normal leading-[1.15] text-ink">
          {t("hero.titleMain")} {t("hero.titleAccent")}
        </h1>
        <p className="mt-6 max-w-[44ch] text-pretty font-sans text-[17px] leading-relaxed text-ink/72">
          {t("hero.subtitle")}
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <a
            href="#quote"
            className="inline-flex items-center rounded-sm bg-forest px-6 py-3.5 font-sans text-sm font-medium text-cream transition-colors hover:bg-ink"
          >
            {t("hero.ctaPrimary")}
          </a>
          <a
            href="#work"
            className="inline-flex items-center rounded-sm border border-ink/24 px-6 py-3.5 font-sans text-sm font-medium text-ink transition-colors hover:border-ink"
          >
            {t("hero.ctaSecondary")}
          </a>
        </div>
        <div className="mt-12 flex w-full flex-wrap gap-8 border-t border-ink/10 pt-7 sm:gap-10">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <span className="font-display text-2xl leading-none text-ink sm:text-3xl">
                {stat.value}
              </span>
              <span className="max-w-[16ch] font-sans text-xs leading-snug text-ink/60">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="min-h-[320px] border-t border-ink/10 md:min-h-[560px] md:border-l md:border-t-0">
        <img
          src="/hero.png"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
    </section>
  );
}
