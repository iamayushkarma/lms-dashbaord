import { useState } from "react";
import {
  ArrowRight,
  ChevronDown,
  FileText,
  FileCode2,
  FileSpreadsheet,
  MoreVertical,
} from "lucide-react";

type AssignmentStatus = "Submitted" | "Pending" | "Graded";

type Assignment = {
  id: number;
  title: string;
  course: string;
  student: string;
  submittedOn: string;
  dueDate: string;
  status: AssignmentStatus;
  fileType: "document" | "code" | "spreadsheet";
};

const INITIAL_ASSIGNMENTS: Assignment[] = [
  {
    id: 1,
    title: "React Components",
    course: "React.js for Beginners",
    student: "Amit Kumar",
    submittedOn: "14 Oct 2026",
    dueDate: "18 Oct 2026",
    status: "Submitted",
    fileType: "code",
  },
  {
    id: 2,
    title: "Node.js API Project",
    course: "Node.js Advanced",
    student: "Sneha Patel",
    submittedOn: "12 Oct 2026",
    dueDate: "20 Oct 2026",
    status: "Submitted",
    fileType: "document",
  },
  {
    id: 3,
    title: "Full Stack Project",
    course: "Full Stack Development",
    student: "Rohit Sharma",
    submittedOn: "10 Oct 2026",
    dueDate: "25 Oct 2026",
    status: "Pending",
    fileType: "code",
  },
  {
    id: 4,
    title: "Database Design",
    course: "Full Stack Development",
    student: "Pooja Singh",
    submittedOn: "08 Oct 2026",
    dueDate: "26 Oct 2026",
    status: "Graded",
    fileType: "spreadsheet",
  },
];

type RecentAssignmentsProps = {
  assignments?: Assignment[];
  onViewAll?: () => void;
  onOpenAssignment?: (assignment: Assignment) => void;
};

function StatusBadge({ status }: { status: AssignmentStatus }) {
  const styles: Record<AssignmentStatus, string> = {
    Submitted: "bg-emerald-50 text-emerald-700",
    Pending: "bg-amber-100 text-amber-700",
    Graded: "bg-blue-100 text-blue-700",
  };

  return (
    <span
      className={`inline-flex whitespace-nowrap rounded-full px-2 py-0.5 text-[11px] font-medium ${styles[status]}`}
    >
      {status}
    </span>
  );
}

function AssignmentFileIcon({
  fileType,
}: {
  fileType: Assignment["fileType"];
}) {
  const common = "h-4 w-4 shrink-0";

  if (fileType === "code") {
    return <FileCode2 className={`${common} text-blue-500`} />;
  }

  if (fileType === "spreadsheet") {
    return <FileSpreadsheet className={`${common} text-rose-500`} />;
  }

  return <FileText className={`${common} text-indigo-500`} />;
}

export default function RecentAssignments({
  assignments = INITIAL_ASSIGNMENTS,
  onViewAll,
  onOpenAssignment,
}: RecentAssignmentsProps) {
  const [showAll, setShowAll] = useState(false);
  const [openMenuId, setOpenMenuId] = useState<number | null>(null);

  const visibleAssignments = showAll ? assignments : assignments.slice(0, 4);

  function handleViewAll() {
    setShowAll((previous) => !previous);
    onViewAll?.();
  }

  return (
    <section className="w-full min-w-0 overflow-hidden rounded-2xl border border-slate-100 bg-white p-3 shadow-sm sm:p-5">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between gap-3">
        <h2 className="text-base font-bold text-slate-900 sm:text-lg">
          Recent Assignments
        </h2>

        <button
          type="button"
          onClick={handleViewAll}
          aria-expanded={showAll}
          className="inline-flex cursor-pointer shrink-0 items-center gap-1 text-xs font-semibold text-[#2563eb] transition  sm:text-sm"
        >
          {showAll ? "Show Less" : "View All"}
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>

      {/* Mobile cards */}
      <div className="space-y-3 md:hidden">
        {visibleAssignments.map((assignment) => (
          <article
            key={assignment.id}
            className="rounded-xl border border-slate-100 p-3"
          >
            <button
              type="button"
              onClick={() => onOpenAssignment?.(assignment)}
              className="flex w-full items-start gap-2 text-left"
            >
              <AssignmentFileIcon fileType={assignment.fileType} />

              <span className="min-w-0 flex-1">
                <span className="block break-words text-sm font-semibold text-slate-800">
                  {assignment.title}
                </span>
                <span className="mt-0.5 block text-xs text-slate-500">
                  {assignment.course}
                </span>
              </span>

              <MoreVertical className="h-4 w-4 shrink-0 text-slate-400 cursor-pointer" />
            </button>

            <div className="mt-3 grid grid-cols-2 gap-3 text-xs">
              <div>
                <p className="text-slate-400">Student</p>
                <p className="mt-1 font-medium text-slate-700">
                  {assignment.student}
                </p>
              </div>

              <div>
                <p className="text-slate-400">Due date</p>
                <p className="mt-1 font-medium text-slate-700">
                  {assignment.dueDate}
                </p>
              </div>

              <div>
                <p className="text-slate-400">Submitted</p>
                <p className="mt-1 text-slate-600">{assignment.submittedOn}</p>
              </div>

              <div>
                <p className="mb-1 text-slate-400">Status</p>
                <StatusBadge status={assignment.status} />
              </div>
            </div>
          </article>
        ))}

        {visibleAssignments.length === 0 && (
          <p className="py-8 text-center text-sm text-slate-500">
            No assignments available.
          </p>
        )}
      </div>

      {/* Tablet and desktop table */}
      <div className="hidden overflow-x-auto md:block">
        <table className="w-full min-w-[760px] table-auto text-left text-xs">
          <thead>
            <tr className="border-b border-slate-100 text-[11px] font-semibold text-slate-500">
              <th className="px-2 py-2.5">Title</th>
              <th className="px-2 py-2.5">Course</th>
              <th className="px-2 py-2.5">Student</th>
              <th className="px-2 py-2.5">Submitted On</th>
              <th className="px-2 py-2.5">Due Date</th>
              <th className="px-2 py-2.5">Status</th>
              <th className="px-2 py-2.5 text-center">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-50">
            {visibleAssignments.map((assignment) => (
              <tr
                key={assignment.id}
                className="transition-colors hover:bg-slate-50/70"
              >
                <td className="max-w-44 px-2 py-3">
                  <button
                    type="button"
                    onClick={() => onOpenAssignment?.(assignment)}
                    className="flex items-center gap-2 text-left font-medium text-slate-700 hover:text-violet-600"
                  >
                    <AssignmentFileIcon fileType={assignment.fileType} />
                    <span className="truncate">{assignment.title}</span>
                  </button>
                </td>

                <td className="max-w-44 truncate px-2 py-3 text-slate-600">
                  {assignment.course}
                </td>

                <td className="whitespace-nowrap px-2 py-3 text-slate-600">
                  {assignment.student}
                </td>

                <td className="whitespace-nowrap px-2 py-3 text-slate-500">
                  {assignment.submittedOn}
                </td>

                <td className="whitespace-nowrap px-2 py-3 text-slate-500">
                  {assignment.dueDate}
                </td>

                <td className="px-2 py-3">
                  <StatusBadge status={assignment.status} />
                </td>

                <td className="relative px-2 py-3 text-center">
                  <button
                    type="button"
                    aria-label={`Actions for ${assignment.title}`}
                    aria-expanded={openMenuId === assignment.id}
                    onClick={() =>
                      setOpenMenuId((current) =>
                        current === assignment.id ? null : assignment.id,
                      )
                    }
                    className="rounded-md p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-700 cursor-pointer"
                  >
                    <MoreVertical className="h-4 w-4" />
                  </button>

                  {openMenuId === assignment.id && (
                    <div className="absolute right-6 top-8 z-20 w-36 rounded-lg border border-slate-200 bg-white p-1 text-left shadow-lg">
                      <button
                        type="button"
                        onClick={() => {
                          onOpenAssignment?.(assignment);
                          setOpenMenuId(null);
                        }}
                        className="w-full cursor-pointer rounded-md px-3 py-2 text-xs text-slate-700 hover:bg-slate-50"
                      >
                        View assignment
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}

            {visibleAssignments.length === 0 && (
              <tr>
                <td
                  colSpan={7}
                  className="px-3 py-10 text-center text-slate-500"
                >
                  No assignments available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Small footer */}
      <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-3 text-xs text-slate-400">
        <span>{assignments.length} assignments</span>

        <button
          type="button"
          onClick={() =>
            setOpenMenuId((current) => (current === null ? -1 : null))
          }
          className="hidden cursor-pointer items-center gap-1 hover:text-slate-600 md:inline-flex"
        >
          Options
          <ChevronDown className="h-3.5 w-3.5" />
        </button>
      </div>
    </section>
  );
}
