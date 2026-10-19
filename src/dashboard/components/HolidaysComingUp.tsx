import { PartyPopper } from "lucide-react";

type Holiday = {
  name: string;
  date: string;
  status?: "today" | "upcoming";
};

type HolidaysComingUpProps = {
  holidays?: Holiday[];
};

export default function HolidaysComingUp({
  holidays = [
    {
      name: "Diwali",
      date: "Monday 19 October",
      status: "today",
    },
  ],
}: HolidaysComingUpProps) {
  const holiday = holidays[0];

  if (!holiday) return null;

  return (
    <section className="flex h-full min-h-[280px] w-full flex-col rounded-2xl bg-gradient-to-br from-sky-50 via-white to-indigo-50 p-2 sm:p-3">
      {/* Header */}
      <header className="mb-4 flex items-center justify-between gap-2">
        <div className="flex min-w-0 items-center gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-rose-600 text-white shadow-sm">
            <PartyPopper size={20} />
          </span>

          <h2 className="text-base font-bold tracking-tight text-slate-900 sm:text-lg">
            Holidays coming up
          </h2>
        </div>

        <span className="shrink-0 text-xs font-medium text-slate-400 sm:text-sm">
          {holidays.length} ahead
        </span>
      </header>

      {/* Holiday card */}
      <article className="relative flex min-h-[210px] flex-1 flex-col justify-between overflow-hidden rounded-[22px] bg-gradient-to-br from-amber-500 via-orange-600 to-rose-950 p-5 sm:p-6">
        <PartyPopper
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-6 -right-6 h-36 w-36 rotate-[-18deg] text-white/[0.16]"
          strokeWidth={2.5}
        />

        <div className="relative z-10">
          <span className="inline-flex rounded-full bg-orange-50 px-4 py-2 text-xs font-extrabold text-rose-700 shadow-sm sm:text-sm">
            {holiday.status === "today" ? "TODAY" : "UPCOMING"}
          </span>
        </div>

        <div className="relative z-10">
          <h3 className="text-xl font-extrabold tracking-tight text-white sm:text-2xl">
            {holiday.name}
          </h3>

          <p className="mt-1 text-sm font-semibold text-white/90 sm:text-base">
            {holiday.date}
          </p>
        </div>
      </article>
    </section>
  );
}
