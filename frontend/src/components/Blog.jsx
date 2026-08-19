import { useTranslation } from "react-i18next";

const POST_KEYS = ["winterPrep", "summerWatering", "pruningTiming"];

export default function Blog() {
  const { t } = useTranslation();

  return (
    <section id="blog" className="bg-white/60 py-20">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-center text-3xl font-semibold text-forest">
          {t("blog.title")}
        </h2>
        <p className="mt-2 text-center text-earth/80">{t("blog.subtitle")}</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {POST_KEYS.map((key) => (
            <article
              key={key}
              className="rounded-2xl border border-forest/10 bg-white p-6 shadow-sm"
            >
              <h3 className="font-semibold text-forest">
                {t(`blog.posts.${key}.title`)}
              </h3>
              <p className="mt-2 text-sm text-earth/80">
                {t(`blog.posts.${key}.excerpt`)}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
