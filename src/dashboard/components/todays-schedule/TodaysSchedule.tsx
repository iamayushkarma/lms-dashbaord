import ScheduleItem from "./ScheduleItem";
import { demoSchedule } from "./data";
import { ArrowRightIcon } from "./icons";
import type { ScheduleEvent } from "./types";

type TodaysScheduleProps = {
  events?: ScheduleEvent[];
  onAction?: (event: ScheduleEvent) => void;
  onSeeAll?: () => void;
};

function TodaysSchedule({
  events = demoSchedule,
  onAction,
  onSeeAll,
}: TodaysScheduleProps) {
  return (
    <section className="w-full rounded-2xl bg-white p-5 shadow-sm sm:p-6">
      <div className="mb-2 flex items-center justify-between">
        <h2 className="text-lg font-bold text-slate-900">Today&apos;s Schedule</h2>

        <button
          type="button"
          onClick={onSeeAll}
          className="inline-flex items-center gap-1 rounded-md text-sm font-semibold text-violet-600 hover:text-violet-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-500"
        >
          See All
          <ArrowRightIcon />
        </button>
      </div>

      {events.length > 0 ? (
        <ul>
          {events.map((event) => (
            <ScheduleItem key={event.id} event={event} onAction={onAction} />
          ))}
        </ul>
      ) : (
        <p className="rounded-xl border border-dashed border-slate-300 py-10 text-center text-sm text-slate-500">
          Nothing scheduled for today.
        </p>
      )}
    </section>
  );
}

export default TodaysSchedule;
