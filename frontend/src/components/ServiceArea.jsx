import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Index-matched to the "area.towns" translation array
// (Aspen, Snowmass Village, Basalt, Carbondale, Woody Creek, Old Snowmass, El Jebel, Glenwood Springs).
const TOWN_COORDS = [
  [39.1911, -106.8175],
  [39.211, -106.9378],
  [39.3702, -107.0334],
  [39.4025, -107.2101],
  [39.2461, -106.8908],
  [39.3016, -106.9522],
  [39.3877, -107.0937],
  [39.5505, -107.3248],
];

function makeMarkerIcon(label, isHome) {
  return L.divIcon({
    className: "",
    html: `
      <div style="display:flex;align-items:center;gap:6px;white-space:nowrap;transform:translate(-4px,-4px)">
        <span style="display:block;width:${isHome ? 11 : 8}px;height:${isHome ? 11 : 8}px;border-radius:9999px;background:${isHome ? "#B5643C" : "#234A32"};border:1.5px solid #F4F1E9;box-shadow:0 0 0 1px rgba(22,36,27,.25)"></span>
        <span style="font-family:'IBM Plex Mono',monospace;font-size:11px;color:#16241B;font-weight:${isHome ? 600 : 400};background:rgba(244,241,233,.88);padding:1px 5px;border-radius:2px">${label}${isHome ? " · HQ" : ""}</span>
      </div>
    `,
    iconSize: [0, 0],
  });
}

function MapIllustration({ towns }) {
  const containerRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    const map = L.map(containerRef.current, {
      scrollWheelZoom: false,
      zoomControl: true,
      attributionControl: true,
    }).setView([39.35, -107.05], 10);
    mapRef.current = map;

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 18,
    }).addTo(map);

    TOWN_COORDS.forEach((coords, i) => {
      L.marker(coords, { icon: makeMarkerIcon(towns[i], i === 0) }).addTo(map);
    });

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, [towns]);

  return (
    <div className="relative isolate min-h-[360px] overflow-hidden border-t border-ink/10 md:min-h-[440px] md:border-l md:border-t-0">
      <div ref={containerRef} className="h-full min-h-[360px] w-full md:min-h-[440px]" />
    </div>
  );
}

export default function ServiceArea() {
  const { t } = useTranslation();
  const towns = t("area.towns", { returnObjects: true });

  return (
    <section id="area" className="grid border-b border-ink/10 md:grid-cols-2">
      <div className="px-6 py-16 sm:px-10 lg:px-14 lg:py-20">
        <span className="font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-ink/45">
          {t("area.eyebrow")}
        </span>
        <h2 className="mt-4 max-w-[19ch] font-display text-3xl font-normal leading-[1.15] text-ink sm:text-4xl">
          {t("area.title")}
        </h2>
        <p className="mt-2 font-sans text-[14.5px] text-ink/60">{t("area.subtitle")}</p>
        <div className="mt-7 flex flex-wrap gap-2">
          {towns.map((town) => (
            <span
              key={town}
              className="rounded-full border border-ink/20 px-3.5 py-2 font-sans text-[13px] text-ink"
            >
              {town}
            </span>
          ))}
        </div>
        <p className="mt-7 max-w-[42ch] font-sans text-[14.5px] leading-relaxed text-ink/70">
          {t("area.note")}
        </p>
      </div>
      <MapIllustration towns={towns} />
    </section>
  );
}
