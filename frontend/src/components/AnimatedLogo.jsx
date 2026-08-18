export default function AnimatedLogo({ className = "" }) {
  return (
    <div className={`relative ${className}`} style={{ aspectRatio: "551 / 370" }}>
      <img
        src="/logo-text.png"
        alt="Alpine Lawn & Garden Services"
        className="absolute inset-0 h-full w-full"
      />
      <img
        src="/logo-pot.png"
        alt=""
        aria-hidden="true"
        className="absolute"
        style={{ left: "1.63%", top: "6.76%", width: "30.31%", height: "73.51%" }}
      />
      <img
        src="/logo-plant.png"
        alt=""
        aria-hidden="true"
        className="absolute animate-sway"
        style={{
          left: "1.63%",
          top: "6.76%",
          width: "30.31%",
          height: "73.51%",
          transformOrigin: "49.7% 61%",
        }}
      />
    </div>
  );
}
