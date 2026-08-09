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
          d="M0,30 Q40,10 80,32 T160,20 Q200,45 240,15 T320,35 Q360,10 400,30 T480,18 Q520,42 560,14 T640,32 Q680,8 720,34 T800,20 Q840,44 880,16 T960,30 Q1000,10 1040,32 T1120,22 Q1160,40 1200,25 L1200,90 L0,90 Z"
          fill={topColor}
        />
      </svg>
    </div>
  );
}
