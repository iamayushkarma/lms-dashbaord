import { ScheduleIcon } from "./icons";
import type { DotColor, ScheduleEvent, TileColor } from "./types";

const dotThemes: Record<
  DotColor,
  { dot: string; ring: string; from: string; to: string }
> = {
  violet: {
    dot: "bg-violet-500",
    ring: "ring-violet-100",
    from: "from-violet-300",
    to: "to-violet-300",
  },
  blue: {
    dot: "bg-blue-400",
    ring: "ring-blue-100",
    from: "from-blue-300",
    to: "to-blue-300",
  },
  emerald: {
    dot: "bg-emerald-400",
    ring: "ring-emerald-100",
    from: "from-emerald-300",
    to: "to-emerald-300",
  },
  amber: {
    dot: "bg-amber-400",
    ring: "ring-amber-100",
    from: "from-amber-300",
    to: "to-amber-300",
  },
};

const tileThemes: Record<TileColor, string> = {
  rose: "bg-rose-100 text-rose-500",
  violet: "bg-violet-100 text-violet-600",
  indigo: "bg-indigo-100 text-indigo-600",
  emerald: "bg-emerald-100 text-emerald-600",
};

type ScheduleItemProps = {
  event: ScheduleEvent;
  /** Dot color of the next event. Omit for the last item (no line is drawn). */
  nextDotColor?: DotColor;
  onAction?: (event: ScheduleEvent) => void;
};

export default function ScheduleItem({
  event,
  nextDotColor,
  onAction,
}: ScheduleItemProps) {
  const dot = dotThemes[event.dotColor];
  const next = nextDotColor ? dotThemes[nextDotColor] : null;
  const isLive = event.status === "live";

  return (
    <li className="relative pl-7">
      {/* Line: runs from this dot's center to the next dot's center */}
      {next && (
        <span
          aria-hidden
          className={`absolute left-[5px] top-[22px] -bottom-[22px] w-0.5 bg-gradient-to-b @[30rem]:top-[25px] @[30rem]:-bottom-[25px] ${dot.from} ${next.to}`}
        />
      )}

      {/* Dot (sits above the line, aligned with the time text) */}
      <span
        aria-hidden
        className={`absolute left-0 top-4 z-10 h-3 w-3 rounded-full ring-4 @[30rem]:top-[19px] ${dot.dot} ${dot.ring}`}
      />

      <div className="flex items-center gap-2 py-3 @[30rem]:gap-4">
        {/* Time + course name below it (all sizes) */}
        <div className="min-w-0 flex-1 @[30rem]:w-40 @[30rem]:flex-none @[30rem]:shrink-0">
          <p className="whitespace-nowrap text-sm font-medium text-slate-700">
            {event.time}
          </p>
          <p className="mt-0.5 line-clamp-2 text-xs leading-snug text-slate-500">
            {event.title}
          </p>
        </div>

        {/* Icon tile (wide card only) */}
        <span
          className={`hidden h-11 w-11 shrink-0 place-items-center rounded-xl @[30rem]:grid ${tileThemes[event.tileColor]}`}
        >
          <ScheduleIcon name={event.icon} />
        </span>

        {/* Type + duration (wide card only) */}
        <div className="hidden min-w-0 flex-1 @[30rem]:block">
          <p className="flex items-center gap-1.5 text-sm text-slate-500">
            <span className="truncate">{event.type}</span>
            <span className="h-1 w-1 shrink-0 rounded-full bg-slate-300" />
            <span className="whitespace-nowrap">{event.duration}</span>
          </p>
        </div>

        {/* Action button: small on narrow cards, full size on wide cards */}
        <button
          type="button"
          onClick={() => onAction?.(event)}
          className={`h-8 w-16 shrink-0 rounded-lg text-xs font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-500 @[30rem]:h-10 @[30rem]:w-28 @[30rem]:text-sm ${
            isLive
              ? "bg-violet-600 text-white shadow-sm hover:bg-violet-700"
              : "bg-violet-50 text-violet-600 hover:bg-violet-100"
          }`}
        >
          {isLive ? "Join" : "Start"}
        </button>
      </div>
    </li>
  );
}