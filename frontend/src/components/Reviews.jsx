import { useTranslation } from "react-i18next";

const REVIEW_KEYS = ["review1", "review2", "review3"];

export default function Reviews() {
  const { t } = useTranslation();

  return (
    <section className="border-b border-ink/10 px-6 py-20 sm:px-10 lg:px-14">
      <div className="grid grid-cols-1 gap-px bg-ink/10 sm:grid-cols-3">
        {REVIEW_KEYS.map((key) => (
          <figure key={key} className="m-0 flex flex-col gap-5 bg-cream p-8">
            <blockquote className="m-0 text-pretty font-display text-xl font-normal leading-relaxed text-ink">
              “{t(`reviews.items.${key}.quote`)}”
            </blockquote>
            <figcaption className="mt-auto font-mono text-[12.5px] text-ink/55">
              {t(`reviews.items.${key}.who`)}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
