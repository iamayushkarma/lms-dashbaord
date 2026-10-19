import { LayoutGrid, BookOpen } from "lucide-react";
import { topicPerformance } from "../studentReportData";

function TopicPerformance() {
  return (
    <section className="rounded-xl border border-slate-200/80 bg-white p-4">
      <div className="mb-4 flex items-center gap-2.5">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-50 text-violet-600">
          <LayoutGrid size={17} />
        </div>

        <h3 className="text-sm font-semibold text-slate-900">
          Performance by Topic
        </h3>
      </div>

      <div className="space-y-4">
        {topicPerformance.map((topic) => (
          <div
            key={topic.id}
            className="grid grid-cols-[minmax(0,1fr)_88px_30px] items-center gap-2 sm:grid-cols-[minmax(0,1fr)_100px_30px]"
          >
            <div className="flex min-w-0 items-center gap-2">
              <BookOpen size={15} className="shrink-0 text-slate-500" />

              <span
                className="truncate text-[11px] font-medium text-slate-700"
                title={topic.name}
              >
                {topic.name}
              </span>
            </div>

            <div
              className="h-1.5 overflow-hidden rounded-full bg-slate-100"
              role="progressbar"
              aria-label={`${topic.name} accuracy`}
              aria-valuenow={topic.accuracy}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div
                className="h-full rounded-full bg-gradient-to-r from-violet-300 to-violet-600 transition-all duration-300"
                style={{ width: `${topic.accuracy}%` }}
              />
            </div>

            <span className="text-right text-[11px] font-medium text-slate-700">
              {topic.accuracy}%
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TopicPerformance;
