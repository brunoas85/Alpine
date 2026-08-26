import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

const SERVICE_RATES = {
  mowing: { ratePerSqFt: 0.03, minimum: 40 },
  pruning: { ratePerSqFt: 0.05, minimum: 60 },
  beds: { ratePerSqFt: 0.08, minimum: 90 },
  winter: { ratePerSqFt: 0.04, minimum: 55 },
};

const FREQUENCY_DISCOUNTS = {
  oneTime: 0,
  weekly: 0.15,
  biweekly: 0.08,
};

function estimatePrice(size, service, frequency) {
  const { ratePerSqFt, minimum } = SERVICE_RATES[service];
  const discount = FREQUENCY_DISCOUNTS[frequency];
  const raw = size * ratePerSqFt * (1 - discount);
  return Math.max(raw, minimum);
}

export default function QuoteForm({ onRequestQuote }) {
  const { t } = useTranslation();
  const [size, setSize] = useState(2000);
  const [service, setService] = useState("mowing");
  const [frequency, setFrequency] = useState("oneTime");

  const estimate = useMemo(
    () => estimatePrice(size, service, frequency),
    [size, service, frequency],
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    const summary = t("quote.summaryTemplate", {
      service: t(`quote.serviceOptions.${service}`),
      size: size.toLocaleString(),
      frequency: t(`quote.frequencyOptions.${frequency}`),
      estimate: estimate.toFixed(0),
    });

    onRequestQuote?.(summary);
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="quote" className="border-b border-ink/10 bg-cream-muted px-6 py-20 sm:px-10 lg:px-14">
      <div className="mx-auto max-w-2xl">
        <span className="block text-center font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-ink/45">
          {t("quote.eyebrow")}
        </span>
        <h2 className="mt-4 text-center font-display text-3xl font-normal text-ink sm:text-4xl">
          {t("quote.title")}
        </h2>
        <p className="mt-2 text-center font-sans text-[15px] text-ink/70">{t("quote.subtitle")}</p>

        <form onSubmit={handleSubmit} className="mt-10 space-y-8">
          <div>
            <label htmlFor="size" className="block font-sans font-medium text-ink">
              {t("quote.sizeLabel")}: {size.toLocaleString()} {t("quote.sizeUnit")}
            </label>
            <input
              id="size"
              type="range"
              min={500}
              max={10000}
              step={100}
              value={size}
              onChange={(e) => setSize(Number(e.target.value))}
              className="mt-3 w-full accent-forest"
            />
          </div>

          <div>
            <label htmlFor="service" className="block font-sans font-medium text-ink">
              {t("quote.serviceLabel")}
            </label>
            <select
              id="service"
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="mt-2 w-full rounded-sm border border-ink/24 bg-cream px-4 py-2 font-sans focus:border-ink focus:outline-none"
            >
              {Object.keys(SERVICE_RATES).map((key) => (
                <option key={key} value={key}>
                  {t(`quote.serviceOptions.${key}`)}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="frequency" className="block font-sans font-medium text-ink">
              {t("quote.frequencyLabel")}
            </label>
            <select
              id="frequency"
              value={frequency}
              onChange={(e) => setFrequency(e.target.value)}
              className="mt-2 w-full rounded-sm border border-ink/24 bg-cream px-4 py-2 font-sans focus:border-ink focus:outline-none"
            >
              {Object.keys(FREQUENCY_DISCOUNTS).map((key) => (
                <option key={key} value={key}>
                  {t(`quote.frequencyOptions.${key}`)}
                </option>
              ))}
            </select>
          </div>

          <div className="bg-ink px-6 py-6 text-center text-cream">
            <p className="font-mono text-xs uppercase tracking-[0.1em] text-cream/70">
              {t("quote.estimateLabel")}
            </p>
            <p className="mt-1 font-display text-4xl font-normal">${estimate.toFixed(0)}</p>
            <p className="mt-2 font-sans text-xs text-cream/70">{t("quote.estimateDisclaimer")}</p>
          </div>

          <button
            type="submit"
            className="w-full rounded-sm bg-forest px-8 py-3.5 font-sans font-medium text-cream transition-colors hover:bg-ink"
          >
            {t("quote.submitCta")}
          </button>
        </form>
      </div>
    </section>
  );
}
