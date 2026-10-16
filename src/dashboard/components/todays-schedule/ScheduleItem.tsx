import { ScheduleIcon } from "./icons";
import type { DotColor, ScheduleEvent, TileColor } from "./types";

const dotThemes: Record<DotColor, { dot: string; ring: string; line: string }> = {
  violet: { dot: "bg-violet-500", ring: "ring-violet-100", line: "from-violet-400" },
  blue: { dot: "bg-blue-400", ring: "ring-blue-100", line: "from-blue-300" },
  emerald: { dot: "bg-emerald-400", ring: "ring-emerald-100", line: "from-emerald-300" },
  amber: { dot: "bg-amber-400", ring: "ring-amber-100", line: "from-amber-400" },
};

const tileThemes: Record<TileColor, string> = {
  rose: "bg-rose-100 text-rose-500",
  violet: "bg-violet-100 text-violet-600",
  indigo: "bg-indigo-100 text-indigo-600",
  emerald: "bg-emerald-100 text-emerald-600",
};

type ScheduleItemProps = {
  event: ScheduleEvent;
  onAction?: (event: ScheduleEvent) => void;
};

export default function ScheduleItem({ event, onAction }: ScheduleItemProps) {
  const dot = dotThemes[event.dotColor];
  const isLive = event.status === "live";

  return (
    <li className="relative flex items-center gap-3 py-3 sm:gap-4">
      {/* Timeline dot + short line */}
      <div className="relative h-full w-3 shrink-0 self-stretch">
        <span
          className={`absolute left-0 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full ring-4 ${dot.dot} ${dot.ring}`}
        />
        <span
          className={`absolute left-[5px] top-1/2 mt-3 h-4 w-0.5 rounded-full bg-gradient-to-b to-transparent ${dot.line}`}
        />
      </div>

      <p className="w-[4.5rem] shrink-0 text-sm font-medium text-slate-700 sm:w-24">
        {event.time}
      </p>

      <span
        className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl ${tileThemes[event.tileColor]}`}
      >
        <ScheduleIcon name={event.icon} />
      </span>

      <div className="min-w-0 flex-1">
        <h3 className="truncate text-[15px] font-semibold text-slate-900">{event.title}</h3>
        <p className="mt-0.5 flex items-center gap-1.5 text-xs text-slate-400">
          <span>{event.type}</span>
          <span className="h-1 w-1 rounded-full bg-slate-300" />
          <span>{event.duration}</span>
        </p>
      </div>

      <button
        type="button"
        onClick={() => onAction?.(event)}
        className={`h-10 w-20 shrink-0 rounded-lg text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-500 sm:w-28 ${
          isLive
            ? "bg-violet-600 text-white shadow-sm hover:bg-violet-700"
            : "bg-violet-50 text-violet-600 hover:bg-violet-100"
        }`}
      >
        {isLive ? "Join" : "Start"}
      </button>
    </li>
  );
}
