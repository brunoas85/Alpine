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

export default function QuoteForm() {
  const { t } = useTranslation();
  const [size, setSize] = useState(2000);
  const [service, setService] = useState("mowing");
  const [frequency, setFrequency] = useState("oneTime");
  const [submitted, setSubmitted] = useState(false);

  const estimate = useMemo(
    () => estimatePrice(size, service, frequency),
    [size, service, frequency],
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="quote" className="bg-white/60 py-20">
      <div className="mx-auto max-w-2xl px-6">
        <h2 className="text-center text-3xl font-semibold text-forest">
          {t("quote.title")}
        </h2>
        <p className="mt-2 text-center text-earth/80">{t("quote.subtitle")}</p>

        <form onSubmit={handleSubmit} className="mt-10 space-y-8">
          <div>
            <label htmlFor="size" className="block font-medium text-earth">
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
            <label htmlFor="service" className="block font-medium text-earth">
              {t("quote.serviceLabel")}
            </label>
            <select
              id="service"
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="mt-2 w-full rounded-lg border border-forest/20 bg-white px-4 py-2 focus:border-forest focus:outline-none"
            >
              {Object.keys(SERVICE_RATES).map((key) => (
                <option key={key} value={key}>
                  {t(`quote.serviceOptions.${key}`)}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="frequency" className="block font-medium text-earth">
              {t("quote.frequencyLabel")}
            </label>
            <select
              id="frequency"
              value={frequency}
              onChange={(e) => setFrequency(e.target.value)}
              className="mt-2 w-full rounded-lg border border-forest/20 bg-white px-4 py-2 focus:border-forest focus:outline-none"
            >
              {Object.keys(FREQUENCY_DISCOUNTS).map((key) => (
                <option key={key} value={key}>
                  {t(`quote.frequencyOptions.${key}`)}
                </option>
              ))}
            </select>
          </div>

          <div className="rounded-2xl bg-forest px-6 py-5 text-center text-offwhite">
            <p className="text-sm uppercase tracking-wide text-offwhite/70">
              {t("quote.estimateLabel")}
            </p>
            <p className="mt-1 text-3xl font-semibold">
              ${estimate.toFixed(0)}
            </p>
            <p className="mt-2 text-xs text-offwhite/70">
              {t("quote.estimateDisclaimer")}
            </p>
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-earth px-8 py-3 font-medium text-offwhite transition-colors hover:bg-forest-dark"
          >
            {t("quote.submitCta")}
          </button>

          {submitted && (
            <p className="text-center text-sm text-forest">
              {t("contact.successMessage")}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
