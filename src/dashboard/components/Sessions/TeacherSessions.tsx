import { ArrowUpRight, GraduationCap, Users } from "lucide-react";
import { useState } from "react";
import type { SessionPanelProps } from "./types";

export default function TeacherSessions({ sessions }: SessionPanelProps) {
  const [showAll, setShowAll] = useState(false);

  const VISIBLE_SESSIONS = 10;

  const displayedSessions = showAll
    ? sessions
    : sessions.slice(0, VISIBLE_SESSIONS);

  return (
    <section className="flex h-[360px] min-w-0 flex-col overflow-hidden rounded-2xl border border-violet-100 bg-white p-4 shadow-sm sm:p-5">
      <header className="mb-4 flex shrink-0 items-center justify-between gap-2">
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
            <GraduationCap size={21} />
          </div>

          <div className="min-w-0">
            <h3 className="text-sm font-bold text-slate-900 sm:text-base">
              Teacher Sessions
            </h3>

            <p className="mt-0.5 text-xs text-slate-500">
              {sessions.length} sessions
            </p>
          </div>
        </div>

        <span className="shrink-0 rounded-lg bg-violet-50 px-2.5 py-1 text-sm font-bold text-violet-700">
          {sessions.length}
        </span>
      </header>

      {/* Only this area scrolls */}
      <div className="min-h-0 flex-1 space-y-2.5 overflow-y-auto overscroll-contain pr-1">
        {displayedSessions.length > 0 ? (
          displayedSessions.map((session) => (
            <article
              key={session.id}
              className="rounded-xl border border-slate-100 bg-slate-50/70 p-3 transition-colors hover:border-violet-200 hover:bg-violet-50/40"
            >
              <div className="flex items-start justify-between gap-2">
                <h4 className="min-w-0 text-sm font-semibold leading-5 text-slate-800">
                  {session.name}
                </h4>

                <span
                  className={`inline-flex shrink-0 items-center gap-1.5 rounded-full px-2 py-1 text-[10px] font-semibold ${
                    session.status === "live"
                      ? "bg-emerald-50 text-emerald-700"
                      : "bg-amber-50 text-amber-700"
                  }`}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      session.status === "live"
                        ? "bg-emerald-500"
                        : "bg-amber-500"
                    }`}
                  />
                  {session.status === "live" ? "Live" : "Upcoming"}
                </span>
              </div>

              <p className="mt-1 text-xs text-slate-500">
                {session.instructor}
              </p>

              <div className="mt-3 flex items-center justify-between gap-2 border-t border-slate-200/70 pt-2.5">
                <span className="inline-flex min-w-0 items-center gap-1.5 text-xs text-slate-500">
                  <Users size={14} className="shrink-0" />
                  <span>{session.participants} students</span>
                </span>

                <span className="shrink-0 text-xs font-medium text-slate-500">
                  {session.duration}
                </span>
              </div>
            </article>
          ))
        ) : (
          <p className="rounded-xl border border-dashed border-slate-200 px-3 py-8 text-center text-xs text-slate-500">
            No teacher sessions available
          </p>
        )}
      </div>

      {sessions.length > VISIBLE_SESSIONS && (
        <button
          type="button"
          aria-expanded={showAll}
          onClick={() => setShowAll((previous) => !previous)}
          className="mt-3 cursor-pointer flex w-full shrink-0 items-center justify-center gap-1.5 rounded-lg border border-violet-100 py-2.5 text-xs font-semibold text-[#2563eb] transition-colors hover:bg-violet-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
        >
          {showAll ? "Show Less" : "View All"}
          <ArrowUpRight size={14} className={showAll ? "rotate-180" : ""} />
        </button>
      )}
    </section>
  );
}
