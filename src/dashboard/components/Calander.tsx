import { useState } from "react";
import { DayPicker } from "react-day-picker";

type CalendarProps = {
  value?: Date;
  onChange?: (date: Date) => void;
};

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3b2ee8]";

export default function Calendar({ value, onChange }: CalendarProps) {
  const [internalDate, setInternalDate] = useState(new Date());
  const selected = value ?? internalDate;
  const [month, setMonth] = useState(selected);

  const title = month.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  function handleSelect(date: Date) {
    setInternalDate(date);
    setMonth(date);
    onChange?.(date);
  }

  function goToToday() {
    handleSelect(new Date());
  }

  function changeMonth(step: number) {
    setMonth(new Date(month.getFullYear(), month.getMonth() + step, 1));
  }

  return (
    <div className="w-full rounded-2xl bg-white px-4 pb-4 pt-5 text-slate-800 shadow-sm">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-base font-semibold">{title}</h2>

        <div className="flex items-center gap-2.5">
          <button
            type="button"
            aria-label="Previous month"
            onClick={() => changeMonth(-1)}
            className={`grid h-6 w-6 cursor-pointer place-items-center rounded-md hover:bg-slate-100 ${focusRing}`}
          >
            <Chevron direction="left" />
          </button>

          <button
            type="button"
            onClick={goToToday}
            className={`rounded-lg border border-slate-200 bg-white px-3.5 py-1 text-xs font-semibold shadow-sm hover:bg-slate-50 ${focusRing}`}
          >
            Today
          </button>

          <button
            type="button"
            aria-label="Next month"
            onClick={() => changeMonth(1)}
            className={`grid h-6 w-6 cursor-pointer place-items-center rounded-md hover:bg-slate-100 ${focusRing}`}
          >
            <Chevron direction="right" />
          </button>
        </div>
      </div>

      <DayPicker
        mode="single"
        required
        selected={selected}
        onSelect={handleSelect}
        month={month}
        onMonthChange={setMonth}
        showOutsideDays
        hideNavigation
        formatters={{
          formatWeekdayName: (date) =>
            date.toLocaleDateString("en-US", { weekday: "short" }),
        }}
        classNames={{
          root: "w-full",
          months: "block",
          month: "block",
          month_caption: "hidden", // we render our own header above
          month_grid: "w-full table-fixed border-collapse",
          weekday: "pb-2 pt-1 text-center text-xs font-normal text-slate-500",
          day: "group p-0.5 text-center",
          day_button: `mx-auto grid h-9 w-9 place-items-center rounded-full text-xs font-semibold transition-colors
            group-[:not(.is-selected)]:hover:bg-slate-100
            group-[.is-outside:not(.is-selected)]:font-medium
            group-[.is-outside:not(.is-selected)]:text-slate-300
            group-[.is-selected]:bg-[#3b2ee8]
            group-[.is-selected]:text-white
            ${focusRing}`,
          selected: "is-selected",
          outside: "is-outside",
        }}
      />
    </div>
  );
}

function Chevron({ direction }: { direction: "left" | "right" }) {
  const path =
    direction === "left" ? "M10 3.5 5.5 8l4.5 4.5" : "M6 3.5 10.5 8 6 12.5";

  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d={path}
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
