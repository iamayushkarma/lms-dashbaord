import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { ChevronDown } from "lucide-react";

const COMPLETED = "url(#completedGradient)";
const IN_PROGRESS = "url(#inProgressGradient)";

// Replace with API data later
const DATA = [
  { month: "Jan", completed: 55, inProgress: 85 },
  { month: "Feb", completed: 70, inProgress: 100 },
  { month: "Mar", completed: 95, inProgress: 130 },
  { month: "Apr", completed: 105, inProgress: 140 },
  { month: "May", completed: 120, inProgress: 160 },
  { month: "Jun", completed: 100, inProgress: 150 },
];

function LegendItem({ color, label }: { color: string; label: string }) {
  return (
    <span className="flex items-center gap-1.5 text-[11px] text-slate-500">
      <span
        className="h-2.5 w-2.5 rounded-full"
        style={{ background: color }}
      />
      {label}
    </span>
  );
}

function StudentProgress() {
  return (
    <section className="min-w-0 h-full rounded-xl border border-slate-100 bg-white p-4 shadow-[0_2px_10px_rgba(37,99,235,0.06)]">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h3 className="text-sm font-bold text-slate-900">Student Progress</h3>

        <div className="flex items-center gap-3">
          <LegendItem
            color="linear-gradient(90deg, #2563eb, #60a5fa)"
            label="Completed"
          />

          <span className="flex items-center gap-1">
            <LegendItem
              color="linear-gradient(90deg, #bfdbfe, #93c5fd)"
              label="In Progress"
            />
            <ChevronDown className="h-3 w-3 text-slate-400" />
          </span>
        </div>
      </div>

      <div className="mt-4 h-64 w-full min-w-0">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={DATA}
            margin={{ top: 4, right: 4, left: -20, bottom: 0 }}
            barGap={3}
            barCategoryGap="22%"
          >
            <defs>
              <linearGradient
                id="completedGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="0%" stopColor="#60a5fa" />
                <stop offset="100%" stopColor="#2563eb" />
              </linearGradient>

              <linearGradient
                id="inProgressGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="0%" stopColor="#dbeafe" />
                <stop offset="100%" stopColor="#93c5fd" />
              </linearGradient>
            </defs>

            <CartesianGrid
              vertical={false}
              stroke="#e8ebf3"
              strokeDasharray="3 3"
            />

            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 10, fill: "#64748b" }}
            />

            <YAxis
              domain={[0, 200]}
              ticks={[0, 50, 100, 150, 200]}
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 10, fill: "#64748b" }}
            />

            <Tooltip
              cursor={{ fill: "rgba(37,99,235,0.06)" }}
              contentStyle={{
                borderRadius: 10,
                border: "1px solid #dbeafe",
                fontSize: 12,
              }}
            />

            <Bar
              name="Completed"
              dataKey="completed"
              fill={COMPLETED}
              radius={[4, 4, 0, 0]}
              maxBarSize={12}
            />

            <Bar
              name="In Progress"
              dataKey="inProgress"
              fill={IN_PROGRESS}
              radius={[4, 4, 0, 0]}
              maxBarSize={12}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}

export default StudentProgress;
