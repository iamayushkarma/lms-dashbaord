interface ScoreRingProps {
  score: number;
  size?: number;
}

export default function ScoreRing({ score, size = 30 }: ScoreRingProps) {
  const normalizedScore = Math.max(0, Math.min(100, score));

  const colors =
    normalizedScore >= 75
      ? ["#86EFAC", "#07803D"]
      : normalizedScore >= 50
        ? ["#FDE68A", "#E9A23B"]
        : ["#FDA4AF", "#E11D48"];

  // Variant 2: Normal solid-color ring
  // const solidColor =
  //   normalizedScore >= 75
  //     ? "#16A34A"
  //     : normalizedScore >= 50
  //       ? "#E9A23B"
  //       : "#E11D48";

  const strokeWidth = 3.5;
  const center = size / 2;
  const radius = (size - strokeWidth) / 2;
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
        aria-hidden="true"
      >
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke="#E9EAF0"
          strokeWidth={strokeWidth}
        />

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
              colors[0],
              colors[1],
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

        {/*
          Variant 2: Normal solid-color ring
          Replace the segmented paths above with this circle.

          <circle
            cx={center}
            cy={center}
            r={radius}
            fill="none"
            stroke={solidColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={`${(normalizedScore / 100) * 2 * Math.PI * radius} ${2 * Math.PI * radius}`}
            transform={`rotate(-90 ${center} ${center})`}
          />
        */}
      </svg>

      <span
        className="absolute inset-0 flex items-center justify-center font-semibold leading-none text-slate-700"
        style={{ fontSize: Math.max(8, size * 0.3) }}
      >
        {normalizedScore}
      </span>
    </div>
  );
}
