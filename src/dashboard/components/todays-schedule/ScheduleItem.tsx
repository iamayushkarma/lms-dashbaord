import { ScheduleIcon } from "./icons";
import type { DotColor, ScheduleEvent, TileColor } from "./types";

const dotThemes: Record<
  DotColor,
  { dot: string; ring: string; from: string; to: string }
> = {
  violet: {
    dot: "bg-[#2563eb]",
    ring: "ring-blue-100",
    from: "from-[#2563eb]",
    to: "to-[#2563eb]",
  },
  blue: {
    dot: "bg-[#2563eb]",
    ring: "ring-blue-100",
    from: "from-[#2563eb]",
    to: "to-[#2563eb]",
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
  violet: "bg-blue-50 text-[#2563eb]",
  indigo: "bg-blue-100 text-[#2563eb]",
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
      {/* Timeline connector */}
      {next && (
        <span
          aria-hidden
          className={`absolute left-[5px] top-[22px] -bottom-[22px] w-0.5 bg-gradient-to-b @[30rem]:top-[25px] @[30rem]:-bottom-[25px] ${dot.from} ${next.to}`}
        />
      )}

      {/* Timeline dot */}
      <span
        aria-hidden
        className={`absolute left-0 top-4 z-10 h-3 w-3 rounded-full ring-4 @[30rem]:top-[19px] ${dot.dot} ${dot.ring}`}
      />

      <div className="flex items-center gap-2 py-3 @[30rem]:gap-4">
        {/* Time and course name */}
        <div className="min-w-0 flex-1 @[30rem]:w-40 @[30rem]:flex-none @[30rem]:shrink-0">
          <p className="whitespace-nowrap text-sm font-medium text-slate-700">
            {event.time}
          </p>

          <p className="mt-0.5 line-clamp-2 text-xs leading-snug text-slate-500">
            {event.title}
          </p>
        </div>

        {/* Icon tile — wide card only */}
        <span
          className={`hidden h-11 w-11 shrink-0 place-items-center rounded-xl @[30rem]:grid ${tileThemes[event.tileColor]}`}
        >
          <ScheduleIcon name={event.icon} />
        </span>

        {/* Type and duration — wide card only */}
        <div className="hidden min-w-0 flex-1 @[30rem]:block">
          <p className="flex items-center gap-1.5 text-sm text-slate-500">
            <span className="truncate">{event.type}</span>

            <span className="h-1 w-1 shrink-0 rounded-full bg-slate-300" />

            <span className="whitespace-nowrap">{event.duration}</span>
          </p>
        </div>

        {/* Action button */}
        <button
          type="button"
          onClick={() => onAction?.(event)}
          className={`h-8 w-16 shrink-0 cursor-pointer rounded-lg text-xs font-semibold transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563eb] @[30rem]:h-10 @[30rem]:w-28 @[30rem]:text-sm ${
            isLive
              ? "bg-[#2563eb] text-white shadow-sm hover:bg-[#1d4ed8] active:bg-[#1e40af]"
              : "bg-blue-50 text-[#2563eb] hover:bg-[#dbeafe] active:bg-[#bfdbfe]"
          }`}
        >
          {isLive ? "Join" : "Start"}
        </button>
      </div>
    </li>
  );
}
