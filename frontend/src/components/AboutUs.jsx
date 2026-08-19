import { useTranslation } from "react-i18next";

const BADGE_KEYS = ["badge1", "badge2", "badge3"];

export default function AboutUs() {
  const { t } = useTranslation();

  return (
    <section id="about" className="bg-white/60 py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl font-semibold text-forest">{t("about.title")}</h2>
        <p className="mt-4 text-earth/80">{t("about.body")}</p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {BADGE_KEYS.map((key) => (
            <span
              key={key}
              className="rounded-full border border-forest/20 bg-sand/30 px-4 py-1.5 text-sm font-medium text-forest"
            >
              {t(`about.${key}`)}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
