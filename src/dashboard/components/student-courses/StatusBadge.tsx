import type { CourseStatus } from "./types";

const badges: Record<CourseStatus, { label: string; className: string }> = {
  "in-progress": { label: "In Progress", className: "bg-violet-500 text-white" },
  completed: { label: "Completed", className: "bg-emerald-500 text-white" },
  "not-started": { label: "Not Started", className: "bg-white text-slate-800" },
};

export default function StatusBadge({ status }: { status: CourseStatus }) {
  const { label, className } = badges[status];

  return (
    <span
      className={`absolute left-2.5 top-2.5 rounded-lg px-2.5 py-1 text-xs font-semibold shadow-sm ${className}`}
    >
      {label}
    </span>
  );
}
