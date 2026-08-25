export default function HeroArt() {
  // A hand-built abstract mark — concentric arcs + a diagonal grid + a
  // scatter of nodes — meant to sit at low opacity over the panel photos,
  // echoing a studio's own construction lines rather than decorating.
  return (
    <svg
      viewBox="0 0 1600 1000"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g stroke="#ffffff" strokeWidth="1" fill="none" opacity="0.5">
        <circle cx="800" cy="500" r="140" />
        <circle cx="800" cy="500" r="260" />
        <circle cx="800" cy="500" r="380" />
        <circle cx="800" cy="500" r="500" />
      </g>
      <g stroke="#ffffff" strokeWidth="1" opacity="0.35">
        <line x1="0" y1="120" x2="1600" y2="360" />
        <line x1="0" y1="860" x2="1600" y2="640" />
        <line x1="260" y1="0" x2="520" y2="1000" />
        <line x1="1080" y1="0" x2="1340" y2="1000" />
      </g>
      <g fill="#ffffff" opacity="0.6">
        <circle cx="260" cy="0" r="4" />
        <circle cx="520" cy="1000" r="4" />
        <circle cx="1080" cy="0" r="4" />
        <circle cx="1340" cy="1000" r="4" />
        <circle cx="800" cy="140" r="5" />
        <circle cx="800" cy="860" r="5" />
        <circle cx="1180" cy="500" r="5" />
        <circle cx="420" cy="500" r="5" />
      </g>
      <g fill="none" stroke="#ffffff" strokeWidth="1.5" opacity="0.45">
        <path d="M 60 500 L 100 480 L 100 520 Z" />
        <path d="M 1540 500 L 1500 480 L 1500 520 Z" />
      </g>
    </svg>
  );
}
