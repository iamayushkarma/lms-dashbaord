import { ChartNoAxesColumn, BookOpen, Clock3, Trophy } from "lucide-react";

const stats = [
  {
    label: "Average Score",
    value: "67%",
    description: "Based on 3 attempts",
    icon: ChartNoAxesColumn,
    color: "text-violet-600",
    iconBg: "bg-violet-50",
    progress: 67,
    barColor: "bg-gradient-to-r from-violet-300 to-violet-600",
  },
  {
    label: "Quizzes Attempted",
    value: "4 / 5",
    description: "1 quiz remaining",
    icon: BookOpen,
    color: "text-cyan-600",
    iconBg: "bg-cyan-50",
    progress: 80,
    barColor: "bg-gradient-to-r from-emerald-300 to-emerald-600",
  },
  {
    label: "Time Spent",
    value: "24m 30s",
    description: "Total time on quizzes",
    icon: Clock3,
    color: "text-violet-600",
    iconBg: "bg-violet-50",
    progress: null,
    barColor: "",
  },
  {
    label: "Rank in Class",
    value: "8 / 33",
    description: "Based on average score",
    icon: Trophy,
    color: "text-amber-600",
    iconBg: "bg-amber-50",
    progress: null,
    barColor: "",
  },
];

function StudentStats() {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.label}
            className="flex min-w-0 gap-3 rounded-xl border border-slate-200/70 bg-white p-4 shadow-[0_2px_8px_rgba(15,23,42,0.04),0_1px_2px_rgba(15,23,42,0.03)] transition-shadow duration-200 hover:shadow-[0_6px_16px_rgba(15,23,42,0.07)]"
          >
            <div
              className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${stat.iconBg} ${stat.color}`}
            >
              <Icon size={22} strokeWidth={2} />
            </div>

            <div className="min-w-0 flex-1">
              <p className="text-xs font-medium text-slate-600">{stat.label}</p>

              <p className="mt-1 text-xl font-semibold tracking-tight text-slate-900">
                {stat.value}
              </p>

              {stat.progress !== null && (
                <div
                  className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-100"
                  role="progressbar"
                  aria-label={stat.label}
                  aria-valuenow={stat.progress}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div
                    className={`h-full rounded-full ${stat.barColor}`}
                    style={{ width: `${stat.progress}%` }}
                  />
                </div>
              )}

              <p className="mt-2 text-[11px] text-slate-500">
                {stat.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default StudentStats;
