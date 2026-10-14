// Original palette-matched illustrations (SVG) used in place of stock photography,
// so every non-office visual is guaranteed to match the theme. Colors come from the CSS variables.
const scenes = {
  coast: (
    <>
      <rect width="400" height="500" className="fill-paper" />
      <circle cx="250" cy="200" r="120" className="fill-accent/20" />
      <circle cx="250" cy="200" r="72" className="fill-accent" />
      <path d="M0 300 Q50 284 100 300 T200 300 T300 300 T400 300 V500 H0Z" className="fill-primary/30" />
      <path d="M0 335 Q50 319 100 335 T200 335 T300 335 T400 335 V500 H0Z" className="fill-primary/50" />
      <path d="M0 375 Q50 359 100 375 T200 375 T300 375 T400 375 V500 H0Z" className="fill-primary/75" />
      <path d="M0 420 Q50 404 100 420 T200 420 T300 420 T400 420 V500 H0Z" className="fill-primary" />
      <path d="M0 465 Q50 449 100 465 T200 465 T300 465 T400 465 V500 H0Z" className="fill-primary-dark" />
    </>
  ),
  arch: (
    <>
      <rect width="400" height="500" className="fill-secondary-deep" />
      <path d="M90 470 V230 a110 110 0 0 1 220 0 V470Z" className="fill-primary" />
      <path d="M130 470 V235 a70 70 0 0 1 140 0 V470Z" className="fill-accent" />
      <path d="M200 340 L330 470 H200Z" className="fill-paper/30" />
      <rect y="470" width="400" height="30" className="fill-primary-dark" />
    </>
  ),
  ripples: (
    <>
      <rect width="400" height="500" className="fill-primary" />
      {[200, 160, 120, 82, 48].map((r, i) => (
        <circle key={r} cx="200" cy="250" r={r} fill="none" strokeWidth={i % 2 ? 2 : 6} className={i % 2 ? "stroke-secondary/60" : "stroke-secondary/25"} />
      ))}
      <circle cx="200" cy="250" r="26" className="fill-accent" />
    </>
  ),
  dunes: (
    <>
      <rect width="400" height="500" className="fill-secondary" />
      <circle cx="285" cy="170" r="44" className="fill-accent" />
      <path d="M0 300 C90 240 170 250 260 290 S360 300 400 270 V500 H0Z" className="fill-accent/40" />
      <path d="M0 360 C80 310 180 320 270 360 S360 370 400 345 V500 H0Z" className="fill-primary/40" />
      <path d="M0 420 C100 380 200 390 290 425 S370 430 400 410 V500 H0Z" className="fill-primary/75" />
      <path d="M0 470 C120 445 240 450 400 462 V500 H0Z" className="fill-primary-dark" />
    </>
  ),
};

export default function Art({ variant = "coast", alt, className = "" }) {
  return (
    <svg
      viewBox="0 0 400 500"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label={alt}
      className={`block h-full w-full ${className}`}
    >
      {scenes[variant]}
    </svg>
  );
}
