const BRAND = "#0097b2";

/**
 * Anirudh Builders house mark — an inline SVG recreation of the logo icon
 * (angled roof + chimney + 4-pane window) so it scales crisply and recolors
 * for light/dark backgrounds. The roof is always brand teal; the window
 * panes take the surrounding tone.
 */
export default function LogoMark({
  className = "h-8 w-auto",
  tone = "dark",
}: {
  className?: string;
  tone?: "light" | "dark";
}) {
  const windowColor = tone === "light" ? "#0d0d0c" : "#ffffff";
  return (
    <svg
      viewBox="0 0 104 56"
      className={className}
      fill="none"
      role="img"
      aria-label="Anirudh Builders"
    >
      {/* Roof line rendered as a constant-thickness band */}
      <path
        d="M6 47 L41 11 L52 28 L99 28"
        stroke={BRAND}
        strokeWidth="9"
        strokeLinejoin="miter"
        strokeMiterlimit="6"
      />
      {/* Chimney */}
      <rect x="15" y="16" width="7" height="17" fill={BRAND} />
      <rect x="13.5" y="14" width="10" height="3.5" fill={BRAND} />
      {/* 4-pane window */}
      <g fill={windowColor}>
        <rect x="35.5" y="31" width="5.5" height="5.5" rx="0.6" />
        <rect x="43" y="31" width="5.5" height="5.5" rx="0.6" />
        <rect x="35.5" y="38.5" width="5.5" height="5.5" rx="0.6" />
        <rect x="43" y="38.5" width="5.5" height="5.5" rx="0.6" />
      </g>
    </svg>
  );
}
