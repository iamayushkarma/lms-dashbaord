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
    <section className="@container w-full min-w-0 overflow-hidden rounded-2xl bg-white p-5 shadow-sm sm:p-6">
      <div className="mb-2 flex items-center justify-between gap-2">
        <h2 className="min-w-0 text-lg font-bold text-slate-900">
          Today&apos;s Schedule
        </h2>

        {/* Header link: wide card only */}
        <button
          type="button"
          onClick={onSeeAll}
          className="hidden shrink-0 cursor-pointer items-center gap-1 whitespace-nowrap rounded-md text-sm font-semibold text-violet-600 hover:text-violet-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-500 @[30rem]:inline-flex"
        >
          See All
          <ArrowRightIcon />
        </button>
      </div>

      {events.length > 0 ? (
        <>
          <ul>
            {events.map((event, i) => (
              <ScheduleItem
                key={event.id}
                event={event}
                nextDotColor={events[i + 1]?.dotColor}
                onAction={onAction}
              />
            ))}
          </ul>

          {/* View All button: narrow card only */}
          <button
            type="button"
            onClick={onSeeAll}
            className="mt-3 cursor-pointer inline-flex h-10 w-full items-center justify-center gap-1.5 rounded-lg bg-violet-50 text-sm font-semibold text-violet-600 transition-colors hover:bg-violet-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-500 @[30rem]:hidden"
          >
            View All
            <ArrowRightIcon />
          </button>
        </>
      ) : (
        <p className="rounded-xl border border-dashed border-slate-300 py-10 text-center text-sm text-slate-500">
          Nothing scheduled for today.
        </p>
      )}
    </section>
  );
}

export default TodaysSchedule;
