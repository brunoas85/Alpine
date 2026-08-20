export default function AnimatedLogo({ className = "" }) {
  return (
    <div className={`relative ${className}`} style={{ aspectRatio: "1436 / 809" }}>
      <img
        src="/AlpineLogo-Base.webp"
        alt="Alpine Lawn & Garden Services"
        className="absolute inset-0 h-full w-full"
      />
      <img
        src="/AlpineLogo-Flowers.webp"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full animate-sway"
        style={{ transformOrigin: "14% 52%" }}
      />
    </div>
  );
}
