import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section id="top" className="bg-forest text-offwhite">
      <div className="mx-auto max-w-5xl px-6 py-24 text-center">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          {t("hero.title")}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-offwhite/85">
          {t("hero.subtitle")}
        </p>
        <a
          href="#quote"
          className="mt-8 inline-block rounded-full bg-sand px-8 py-3 font-medium text-earth transition-colors hover:bg-offwhite"
        >
          {t("hero.cta")}
        </a>
      </div>
    </section>
  );
}
