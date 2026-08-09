import "../styles/WaveDivider.css";

export default function WaveDivider({
  topColor,
  bottomColor,
  flip = false,
  height = 100,
}) {
  return (
    <div
      className={`wave-divider ${flip ? "wave-divider--flip" : ""}`}
      style={{ "--wave-h": `${height}px`, background: bottomColor }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path
          d="M0,0 L0,40 Q300,90 600,50 T1200,45 L1200,0 Z"
          fill={topColor}
        />
      </svg>
    </div>
  );
}
