import React from "react";
import {
  Users,
  BookOpen,
  FileText,
  Video,
  ArrowUp,
  ArrowDown,
  type LucideIcon,
} from "lucide-react";

type Stat = {
  label: string;
  value: number;
  change: string;
  trend: "up" | "down";
  icon: LucideIcon;
  iconBg: string; // soft gradient tile behind the icon
  iconColor: string; // icon stroke colour
  barColor: string; // solid colour for the mini bars
  bars: number[]; // heights in %, for the mini chart
};

// Per-bar opacity: mixes light and dark bars like the reference design
const BAR_OPACITY = [0.4, 0.85, 0.45, 1, 0.55, 0.9, 1];

const STATS: Stat[] = [
  {
    label: "Total Students",
    value: 248,
    change: "12%",
    trend: "up",
    icon: Users,
    iconBg: "bg-gradient-to-br from-blue-100 to-sky-50",
    iconColor: "text-blue-500",
    barColor: "bg-blue-500",
    bars: [35, 55, 40, 70, 50, 80, 95],
  },
  {
    label: "Active Courses",
    value: 12,
    change: "2",
    trend: "up",
    icon: BookOpen,
    iconBg: "bg-gradient-to-br from-violet-100 to-purple-50",
    iconColor: "text-violet-600",
    barColor: "bg-violet-500",
    bars: [30, 60, 40, 75, 45, 85, 95],
  },
  {
    label: "Assignments",
    value: 48,
    change: "5%",
    trend: "down",
    icon: FileText,
    iconBg: "bg-gradient-to-br from-orange-100 to-amber-50",
    iconColor: "text-orange-500",
    barColor: "bg-orange-400",
    bars: [30, 55, 35, 70, 50, 80, 90],
  },
  {
    label: "Live Classes",
    value: 18,
    change: "100%",
    trend: "up",
    icon: Video,
    iconBg: "bg-gradient-to-br from-emerald-100 to-teal-50",
    iconColor: "text-emerald-500",
    barColor: "bg-emerald-500",
    bars: [25, 40, 35, 60, 55, 80, 100],
  },
];

function StatsCards() {
  return (
    // 1 col on very small phones, 2 cols on larger phones/tablets,
    // 4 cols in one row on desktop (matches the reference dashboard)
    <div className="grid w-full grid-cols-1 gap-3 min-[480px]:grid-cols-2 min-[1400px]:gap-4 xl:grid-cols-4">
      {STATS.map(
        ({
          label,
          value,
          change,
          trend,
          icon: Icon,
          iconBg,
          iconColor,
          barColor,
          bars,
        }) => {
          const isUp = trend === "up";
          return (
            <div
              key={label}
              className="flex min-w-0 items-center gap-2 overflow-hidden rounded-xl border border-slate-100 bg-white p-2.5 shadow-[0_2px_10px_rgba(99,102,241,0.06)] min-[1400px]:gap-2.5 min-[1400px]:p-3"
            >
              {/* Icon tile */}
              <div
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl min-[1400px]:h-11 min-[1400px]:w-11 ${iconBg}`}
              >
                <Icon className={`h-5 w-5 min-[1400px]:h-[22px] min-[1400px]:w-[22px] ${iconColor}`} />
              </div>

              {/* Count + label + trend */}
              <div className="min-w-0 flex-1">
                <p className="text-xl font-extrabold leading-none text-slate-900 min-[1400px]:text-2xl">
                  {value}
                </p>
                <p className="mt-1 truncate text-[10px] font-medium text-slate-500 min-[1400px]:text-[11px]">
                  {label}
                </p>
                <p
                  className={`mt-0.5 flex items-center gap-0.5 text-[11px] font-bold ${
                    isUp ? "text-emerald-500" : "text-rose-500"
                  }`}
                >
                  {isUp ? (
                    <ArrowUp className="h-3 w-3" strokeWidth={3} />
                  ) : (
                    <ArrowDown className="h-3 w-3" strokeWidth={3} />
                  )}
                  {change}
                </p>
              </div>

              {/* Mini bar chart: equal fixed-width bars (6 on narrow, 7 on wide screens) */}
              <div
                className="flex h-9 shrink-0 items-end gap-[2px] min-[1400px]:h-11 min-[1400px]:gap-1"
                aria-hidden="true"
              >
                {bars.map((h, i) => (
                  <span
                    key={i}
                    style={{ height: `${h}%`, opacity: BAR_OPACITY[i] }}
                    className={`w-1 shrink-0 rounded-full ${barColor} ${
                      i === 0 ? "hidden min-[1400px]:block" : ""
                    }`}
                  />
                ))}
              </div>
            </div>
          );
        }
      )}
    </div>
  );
}

export default StatsCards;