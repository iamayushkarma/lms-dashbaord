import React from "react";
import { ArrowRight, Trophy } from "lucide-react";

const STUDENTS = [
  {
    name: "Amit Kumar",
    score: 92,
    avatar: "https://i.pravatar.cc/100?img=12",
  },
  {
    name: "Sneha Patel",
    score: 88,
    avatar: "https://i.pravatar.cc/100?img=47",
  },
  {
    name: "Rohit Sharma",
    score: 85,
    avatar: "https://i.pravatar.cc/100?img=13",
  },
  {
    name: "Pooja Singh",
    score: 83,
    avatar: "https://i.pravatar.cc/100?img=44",
  },
  {
    name: "Neha Verma",
    score: 80,
    avatar: "https://i.pravatar.cc/100?img=49",
  },
];

function TopPerformers() {
  return (
    <section className="h-full min-w-0 rounded-2xl border border-slate-100 bg-white p-5 shadow-[0_2px_12px_rgba(99,102,241,0.05)]">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between gap-2">
        <div className="flex min-w-0 items-center gap-2">
          <Trophy className="h-5 w-5 shrink-0 text-violet-500" />

          <h3 className="truncate text-sm font-bold text-slate-900">
            Top Performing Students
          </h3>
        </div>

        <button
          type="button"
          className="flex cursor-pointer shrink-0 items-center gap-1 text-xs font-semibold text-[#2563eb] transition-colors hover:text-[#1D4ED8]"
        >
          View All
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>

      {/* Students */}
      <div className="space-y-5">
        {STUDENTS.map((student, index) => (
          <div key={student.name} className="flex items-center gap-3">
            {/* Student Avatar */}
            <div className="relative shrink-0">
              <img
                src={student.avatar}
                alt={student.name}
                className="h-9 w-9 rounded-full border border-slate-100 object-cover"
              />

              {index === 0 && (
                <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-white bg-amber-400">
                  <Trophy className="h-2 w-2 text-white" />
                </span>
              )}
            </div>

            {/* Student Name, Score and Full-Width Progress Bar */}
            <div className="min-w-0 flex-1">
              <div className="mb-2 flex items-center justify-between gap-2">
                <p className="truncate text-xs font-semibold text-slate-800">
                  {student.name}
                </p>

                <span className="shrink-0 text-sm font-bold tabular-nums text-slate-900">
                  {student.score}%
                </span>
              </div>

              <div
                className="h-1.5 w-full overflow-hidden rounded-full bg-slate-100"
                role="progressbar"
                aria-label={`${student.name} score`}
                aria-valuenow={student.score}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div
                  className="h-full rounded-full bg-violet-500 transition-all duration-300"
                  style={{
                    width: `${student.score}%`,
                    background:
                      "linear-gradient(90deg, #2563eb 0%, #60a5fa 100%)",
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TopPerformers;
