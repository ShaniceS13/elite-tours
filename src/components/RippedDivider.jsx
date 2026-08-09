import "../styles/RippedDivider.css";

export default function RippedDivider({
  topColor,
  bottomColor,
  flip = false,
  height = 90,
}) {
  const filterId = `ripped-shadow-${topColor.replace("#", "")}-${bottomColor.replace("#", "")}`;

  return (
    <div
      className={`ripped-divider ${flip ? "ripped-divider--flip" : ""}`}
      style={{ "--ripped-h": `${height}px`, background: bottomColor }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 1200 90" preserveAspectRatio="none">
        <defs>
          <filter id={filterId} x="-10%" y="-10%" width="120%" height="150%">
            <feDropShadow
              dx="0"
              dy="4"
              stdDeviation="4"
              floodColor="#000"
              floodOpacity="0.2"
            />
          </filter>
        </defs>
        <path
          filter={`url(#${filterId})`}
          d="M0,0 C150,60 250,0 400,35 C550,65 650,5 800,35 C950,65 1050,5 1200,0 L1200,90 L0,90 Z"
          fill={topColor}
        />
      </svg>
    </div>
  );
}
