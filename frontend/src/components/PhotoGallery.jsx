import { useTranslation } from "react-i18next";

const PHOTOS = [
  "/Galería/alexander-grey-fSlCxR0dnZY-unsplash.webp",
  "/Galería/annie-spratt-3vFbHoKYltE-unsplash.webp",
  "/Galería/corina-ardeleanu-sWlxCweDzzs-unsplash.webp",
  "/Galería/gerome-bruneau-RPmWEtZLh7U-unsplash.webp",
  "/Galería/glen-carrie-y8dgMhxaoKk-unsplash.webp",
  "/Galería/irina-iriser-mNz9Pa3tz34-unsplash.webp",
  "/Galería/jan-canty-KcQuXaHCSPE-unsplash.webp",
  "/Galería/look-up-look-down-photography--o7ASOHDV9E-unsplash.webp",
  "/Galería/martin-martz-JjT_7MwREm4-unsplash.webp",
  "/Galería/mio-ito-DaGIjXNl5oA-unsplash.webp",
  "/Galería/onehundredseventyfive-Cxr73PWFP_o-unsplash.webp",
  "/Galería/pankaj-shah-1ff_i7jO-4g-unsplash.webp",
  "/Galería/petar-tonchev-c-5-QE5kBYk-unsplash.webp",
  "/Galería/sandie-clarke-q13Zq1Jufks-unsplash.webp",
  "/Galería/shalev-cohen-uRlnISgCtME-unsplash.webp",
  "/Galería/tatyana-rubleva-I-GrLHl5I10-unsplash.webp",
  "/Galería/veronica-reverse-qYwyRF9u-uo-unsplash.webp",
  "/Galería/yash-mannepalli-9kqc8DrkpHY-unsplash.webp",
];

export default function PhotoGallery() {
  const { t } = useTranslation();

  return (
    <section id="photo-gallery" className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="text-center text-3xl font-semibold text-forest">
        {t("photoGallery.title")}
      </h2>
      <p className="mt-2 text-center text-earth/80">{t("photoGallery.subtitle")}</p>

      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
        {PHOTOS.map((src) => (
          <div
            key={src}
            className="aspect-square overflow-hidden rounded-2xl border border-forest/10 bg-white/60 shadow-sm"
          >
            <img
              src={src}
              alt={t("photoGallery.title")}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
