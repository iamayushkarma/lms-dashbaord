import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

type Segment = { name: string; value: number; color: string };

// Replace with API data later
const AVERAGE_SCORE = 78;
const SEGMENTS: Segment[] = [
  { name: "Excellent", value: 45, color: "#13c7a1" },
  { name: "Good", value: 30, color: "#559dfe" },
  { name: "Average", value: 15, color: "#fec459" },
  { name: "Needs Improvement", value: 10, color: "#ff6b7d" },
];

function PerformanceOverview() {
  return (
    <section className="flex h-full min-w-0 flex-col rounded-2xl border border-slate-100 bg-white p-4 shadow-[0_2px_10px_rgba(99,102,241,0.06)]">
      <h3 className="text-sm font-extrabold text-[#0f1240]">
        Performance Overview
      </h3>

      <div className="mt-2 flex flex-1 flex-wrap items-center justify-between gap-x-5 gap-y-3">
        {/* Donut */}
        <div className="relative mx-auto h-28 w-28 shrink-0 min-[1400px]:h-[8.5rem] min-[1400px]:w-[8.5rem]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={SEGMENTS}
                dataKey="value"
                innerRadius="66%"
                outerRadius="100%"
                paddingAngle={1.5}
                startAngle={90}
                endAngle={-270}
                stroke="none"
                cornerRadius={0}
              >
                {SEGMENTS.map((s) => (
                  <Cell key={s.name} fill={s.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>

          {/* Centre label */}
          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-xl font-extrabold leading-none text-[#0f1240] min-[1400px]:text-2xl">
              {AVERAGE_SCORE}%
            </span>
            <span className="mt-1 text-[9px] font-medium text-slate-500 min-[1400px]:text-[10px]">
              Average Score
            </span>
          </div>
        </div>

        {/* Legend */}
        <ul className="min-w-0 grow basis-[150px] space-y-3.5">
          {SEGMENTS.map((s) => (
            <li
              key={s.name}
              className="flex items-center justify-between gap-3 text-xs"
            >
              <span className="flex min-w-0 items-center gap-2 text-[#475578]">
                <span
                  className="h-2.5 w-2.5 shrink-0 rounded-full"
                  style={{ backgroundColor: s.color }}
                />
                <span className="truncate">{s.name}</span>
              </span>
              <span className="font-bold text-[#0f1240]">{s.value}%</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default PerformanceOverview;
