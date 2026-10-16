import type { ScheduleIconName } from "./types";

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function ScheduleIcon({
  name,
  className = "h-5 w-5",
}: {
  name: ScheduleIconName;
  className?: string;
}) {
  switch (name) {
    case "video":
      return (
        <svg {...base} className={className}>
          <rect x="3" y="6" width="12" height="12" rx="3" />
          <path d="m15 10 6-3v10l-6-3" />
        </svg>
      );
    case "chat":
      return (
        <svg {...base} className={className}>
          <path d="M5 5h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-7l-5 4v-4H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z" />
          <circle cx="12" cy="11" r="1" fill="currentColor" />
        </svg>
      );
    case "board":
      return (
        <svg {...base} className={className}>
          <rect x="3" y="4" width="18" height="13" rx="2" />
          <path d="M8 21h8M12 17v4" />
          <circle cx="12" cy="10.5" r="2" />
        </svg>
      );
    case "clock":
      return (
        <svg {...base} className={className}>
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4.5" />
          <path d="M12 10v2l1.5 1" />
        </svg>
      );
  }
}

export function ArrowRightIcon({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg {...base} className={className}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
