interface ScoreRingProps {
  score: number;
  size?: number;
}

export default function ScoreRing({ score, size = 30 }: ScoreRingProps) {
  const normalizedScore = Math.max(0, Math.min(100, score));

  const gradientColors =
    normalizedScore >= 75
      ? ["#86EFAC", "#07803D"]
      : normalizedScore >= 50
        ? ["#FDE68A", "#E9A23B"]
        : ["#FDA4AF", "#E11D48"];

  const strokeWidth = 3.5;
  const center = size / 2;
  const radius = (size - strokeWidth) / 2;
  //   const circumference = 2 * Math.PI * radius;

  //   const progress = (normalizedScore / 100) * circumference;
  const progressAngle = (normalizedScore / 100) * 360;

  const segmentCount = Math.max(1, Math.ceil(progressAngle / 4));

  const startAngle = -90;
  const gapAngle = 1.5;

  function polarToCartesian(angle: number) {
    const radians = (angle * Math.PI) / 180;

    return {
      x: center + radius * Math.cos(radians),
      y: center + radius * Math.sin(radians),
    };
  }

  function getColor(start: string, end: string, t: number) {
    const hexToRgb = (hex: string) => {
      const value = hex.replace("#", "");
      return [
        parseInt(value.slice(0, 2), 16),
        parseInt(value.slice(2, 4), 16),
        parseInt(value.slice(4, 6), 16),
      ];
    };

    const startRgb = hexToRgb(start);
    const endRgb = hexToRgb(end);

    const rgb = startRgb.map((value, index) =>
      Math.round(value + (endRgb[index] - value) * t),
    );

    return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
  }

  return (
    <div
      className="relative inline-flex shrink-0 items-center justify-center"
      style={{ width: size, height: size }}
      role="img"
      aria-label={`Score: ${normalizedScore}%`}
    >
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="overflow-visible"
        aria-hidden="true"
      >
        {/* Background track */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke="#E9EAF0"
          strokeWidth={strokeWidth}
        />

        {/* Progress arc with a gradient following the stroke */}
        {normalizedScore > 0 &&
          Array.from({ length: segmentCount }, (_, index) => {
            const segmentStart =
              startAngle + (index / segmentCount) * progressAngle;

            const segmentEnd =
              startAngle + ((index + 1) / segmentCount) * progressAngle;

            const visibleStart =
              index === 0 ? segmentStart : segmentStart + gapAngle / 2;

            const visibleEnd =
              index === segmentCount - 1
                ? segmentEnd
                : segmentEnd - gapAngle / 2;

            const startPoint = polarToCartesian(visibleStart);
            const endPoint = polarToCartesian(visibleEnd);

            const largeArc = visibleEnd - visibleStart > 180 ? 1 : 0;

            const color = getColor(
              gradientColors[0],
              gradientColors[1],
              index / Math.max(1, segmentCount - 1),
            );

            return (
              <path
                key={index}
                d={`M ${startPoint.x} ${startPoint.y} A ${radius} ${radius} 0 ${largeArc} 1 ${endPoint.x} ${endPoint.y}`}
                fill="none"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
              />
            );
          })}
      </svg>

      {/* Center score */}
      <span
        className="absolute inset-0 flex items-center justify-center font-semibold leading-none text-slate-700"
        style={{ fontSize: Math.max(8, size * 0.3) }}
      >
        {normalizedScore}
      </span>
    </div>
  );
}
