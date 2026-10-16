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
  iconBg: string; // tailwind classes for icon tile
  barColor: string; // tailwind bg class for mini bars
  bars: number[]; // heights in %, for the mini chart
};

const STATS: Stat[] = [
  {
    label: "Total Students",
    value: 248,
    change: "12%",
    trend: "up",
    icon: Users,
    iconBg: "bg-blue-100 text-blue-600",
    barColor: "bg-blue-500",
    bars: [30, 45, 38, 60, 52, 75, 90],
  },
  {
    label: "Active Courses",
    value: 12,
    change: "2",
    trend: "up",
    icon: BookOpen,
    iconBg: "bg-violet-100 text-violet-600",
    barColor: "bg-violet-500",
    bars: [40, 25, 55, 35, 70, 50, 85],
  },
  {
    label: "Assignments",
    value: 48,
    change: "5%",
    trend: "down",
    icon: FileText,
    iconBg: "bg-orange-100 text-orange-500",
    barColor: "bg-orange-400",
    bars: [35, 60, 45, 80, 55, 70, 50],
  },
  {
    label: "Live Classes",
    value: 18,
    change: "100%",
    trend: "up",
    icon: Video,
    iconBg: "bg-emerald-100 text-emerald-600",
    barColor: "bg-emerald-500",
    bars: [20, 35, 30, 55, 65, 80, 95],
  },
];

function StatsCards() {
  return (
    // 1 col on very small phones, 2 cols on larger phones/tablets,
    // 4 cols in one row on desktop (matches the reference dashboard)
    <div className="grid w-full grid-cols-1 gap-4 min-[480px]:grid-cols-2 xl:grid-cols-4">
      {STATS.map(
        ({ label, value, change, trend, icon: Icon, iconBg, barColor, bars }) => {
          const isUp = trend === "up";
          return (
            <div
              key={label}
              className="flex min-w-0 items-center gap-2.5 overflow-hidden rounded-xl border border-slate-100 bg-white p-3 shadow-sm"
            >
              {/* Icon tile */}
              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${iconBg}`}
              >
                <Icon className="h-5 w-5" />
              </div>

              {/* Count + label + trend */}
              <div className="min-w-0 flex-1">
                <p className="text-xl font-bold leading-none text-slate-900">
                  {value}
                </p>
                <p className="mt-1 truncate text-[11px] text-slate-500">
                  {label}
                </p>
                <p
                  className={`mt-0.5 flex items-center gap-0.5 text-[11px] font-semibold ${
                    isUp ? "text-emerald-600" : "text-rose-500"
                  }`}
                >
                  {isUp ? (
                    <ArrowUp className="h-3 w-3" />
                  ) : (
                    <ArrowDown className="h-3 w-3" />
                  )}
                  {change}
                </p>
              </div>

              {/* Mini bar chart: hidden between xl and 1400px where 4 cards get narrow */}
              <div
                className="flex h-10 w-12 shrink-0 items-end gap-[3px] xl:hidden min-[1400px]:flex"
                aria-hidden="true"
              >
                {bars.map((h, i) => (
                  <span
                    key={i}
                    style={{ height: `${h}%` }}
                    className={`w-full rounded-sm opacity-80 ${barColor}`}
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