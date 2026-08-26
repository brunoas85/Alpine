import { useTranslation } from "react-i18next";

const STEP_KEYS = ["step1", "step2", "step3", "step4"];

export default function Process() {
  const { t } = useTranslation();

  return (
    <section
      id="process"
      className="grid gap-12 border-b border-ink/10 px-6 py-20 sm:px-10 lg:grid-cols-[.85fr_1.15fr] lg:gap-16 lg:px-14"
    >
      <div>
        <span className="font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-ink/45">
          {t("process.eyebrow")}
        </span>
        <h2 className="mt-4 max-w-[17ch] font-display text-3xl font-normal leading-[1.15] text-ink sm:text-4xl">
          {t("process.title")}
        </h2>
        <p className="mt-5 max-w-[38ch] font-sans text-[15.5px] leading-relaxed text-ink/70">
          {t("process.subtitle")}
        </p>
      </div>
      <div className="flex flex-col">
        {STEP_KEYS.map((key) => (
          <div
            key={key}
            className="grid grid-cols-[64px_1fr] gap-6 border-t border-ink/14 py-6"
          >
            <span className="font-display text-3xl leading-none text-terracotta">
              {t(`process.steps.${key}.num`)}
            </span>
            <div className="flex flex-col gap-1.5">
              <h3 className="font-sans text-base font-medium leading-tight text-ink">
                {t(`process.steps.${key}.title`)}
              </h3>
              <p className="max-w-[52ch] text-pretty font-sans text-[14.5px] leading-relaxed text-ink/68">
                {t(`process.steps.${key}.description`)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
