import { useState } from "react";
import { BookOpen, ChevronDown, MoreVertical, Play, Eye } from "lucide-react";
import { quizAttempts, type QuizAttempt } from "../studentReportData";
import ScoreRing from "./ScoreRing";

function QuizStatusBadge({ status }: { status: QuizAttempt["status"] }) {
  const styles = {
    Submitted: "bg-emerald-50 text-emerald-700",
    "Not submitted": "bg-amber-50 text-amber-700",
    "Not started": "bg-slate-100 text-slate-600",
  };

  const dots = {
    Submitted: "bg-emerald-500",
    "Not submitted": "bg-amber-500",
    "Not started": "bg-slate-400",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-2 py-1 text-[11px] font-medium ${styles[status]}`}
    >
      <span className={`h-2 w-2 rounded-full ${dots[status]}`} />
      {status}
    </span>
  );
}

function QuizAttempts() {
  const [filter, setFilter] = useState("All Quizzes");

  const filteredAttempts = quizAttempts.filter((quiz) => {
    if (filter === "Submitted") return quiz.status === "Submitted";
    if (filter === "Not submitted") return quiz.status === "Not submitted";
    if (filter === "Not started") return quiz.status === "Not started";
    return true;
  });

  return (
    <section className="min-w-0 rounded-xl border border-slate-200/80 bg-white p-4">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-slate-700">
            <BookOpen size={18} />
          </div>

          <h3 className="text-sm font-semibold text-slate-900">
            Quiz Attempts
          </h3>
        </div>

        <div className="relative">
          <select
            value={filter}
            onChange={(event) => setFilter(event.target.value)}
            aria-label="Filter quiz attempts"
            className="cursor-pointer appearance-none rounded-lg border border-slate-200 bg-white py-2 pl-3 pr-8 text-xs text-slate-700 outline-none focus:border-violet-400"
          >
            <option>All Quizzes</option>
            <option>Submitted</option>
            <option>Not submitted</option>
            <option>Not started</option>
          </select>

          <ChevronDown
            size={14}
            className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-500"
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[720px] border-collapse text-left">
          <thead>
            <tr className="border-b border-slate-200 text-[11px] font-medium text-slate-500">
              <th className="w-10 px-2 py-2.5">#</th>
              <th className="px-2 py-2.5">Quiz</th>
              <th className="px-2 py-2.5">Score</th>
              <th className="px-2 py-2.5">Time Taken</th>
              <th className="px-2 py-2.5">Submitted At</th>
              <th className="px-2 py-2.5">Status</th>
              <th className="px-2 py-2.5">Action</th>
              <th className="w-8 px-1 py-2.5" />
            </tr>
          </thead>

          <tbody>
            {filteredAttempts.map((quiz, index) => (
              <tr
                key={quiz.id}
                className="border-b border-slate-100 last:border-0 hover:bg-slate-50/70"
              >
                <td className="px-2 py-3 text-xs text-slate-500">
                  {index + 1}
                </td>

                <td className="max-w-[220px] px-2 py-3">
                  <span className="block truncate text-xs font-medium text-slate-800">
                    {quiz.title}
                  </span>
                </td>

                <td className="px-4 py-3">
                  {quiz.score !== null ? (
                    <ScoreRing score={quiz.score} size={30} />
                  ) : (
                    <span className="text-xs text-slate-400">—</span>
                  )}
                </td>

                <td className="whitespace-nowrap px-2 py-3 text-xs text-slate-500">
                  {quiz.timeTaken}
                </td>

                <td className="whitespace-nowrap px-2 py-3 text-xs text-slate-500">
                  {quiz.submittedAt}
                </td>

                <td className="px-2 py-3">
                  <QuizStatusBadge status={quiz.status} />
                </td>

                <td className="px-2 py-3">
                  <button
                    type="button"
                    onClick={() => {
                      // Connect this to the quiz result or quiz launch route.
                    }}
                    className="inline-flex cursor-pointer items-center gap-1.5 rounded-lg bg-violet-50 px-3 py-1.5 text-xs font-medium text-violet-700 transition hover:bg-violet-100"
                  >
                    {quiz.status === "Submitted" ? (
                      <>
                        <Eye size={13} />
                        View
                      </>
                    ) : (
                      <>
                        <Play size={12} />
                        Start
                      </>
                    )}
                  </button>
                </td>

                <td className="px-1 py-3">
                  <button
                    type="button"
                    aria-label={`More actions for ${quiz.title}`}
                    className="cursor-pointer rounded-md p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
                  >
                    <MoreVertical size={15} />
                  </button>
                </td>
              </tr>
            ))}

            {filteredAttempts.length === 0 && (
              <tr>
                <td
                  colSpan={8}
                  className="px-4 py-10 text-center text-xs text-slate-500"
                >
                  No quizzes found for this status.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default QuizAttempts;
