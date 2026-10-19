import React from "react";
import {
  Users,
  Sparkles,
  Mail,
  UserRound,
  Send,
  MoreVertical,
} from "lucide-react";

function StudentReportHeader() {
  return (
    <div className="mt-2 w-full rounded-xl border border-slate-200/60 bg-white p-3 shadow-[0_2px_6px_rgba(15,23,42,0.025),0_6px_18px_rgba(15,23,42,0.02)] sm:p-4">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        {/* Student details */}
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-pink-500 text-xl font-semibold text-white shadow-sm sm:h-16 sm:w-16">
            U
          </div>

          <div className="min-w-0">
            <h2 className="truncate text-base font-semibold text-slate-900 sm:text-lg">
              umang
            </h2>

            <div className="mt-2 flex flex-wrap items-center gap-1.5 text-[11px] font-medium text-slate-600">
              <span className="flex items-center gap-1 rounded-full bg-slate-100 px-2 py-1">
                <Users size={12} />
                Class 1
              </span>

              <span className="flex items-center gap-1 rounded-full bg-slate-100 px-2 py-1">
                <Sparkles size={12} />
                35 XP
              </span>

              <span className="rounded-full bg-slate-100 px-2 py-1">
                Joined 30 Sept 2026
              </span>

              <span className="rounded-full bg-slate-100 px-2 py-1">
                Last seen 19 Oct 2026
              </span>
            </div>
          </div>
        </div>

        {/* Contact and actions */}
        <div className="flex flex-col gap-3 border-t border-slate-100 pt-3 sm:flex-row sm:items-center sm:justify-between lg:border-l lg:border-t-0 lg:pl-5 lg:pt-0">
          <div className="min-w-0 space-y-1.5">
            <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-500">
              Contact
            </p>

            <p className="flex items-center gap-2 text-xs text-slate-600">
              <Mail size={13} className="shrink-0" />
              <span className="break-all">umang@gmail.com</span>
            </p>

            <p className="flex items-center gap-2 text-xs text-slate-600">
              <UserRound size={13} className="shrink-0" />
              <span className="break-all">Parent: parent@example.com</span>
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              className="cursor-pointer inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-violet-50 px-3 py-2 text-xs font-medium text-violet-700 transition hover:bg-violet-100 sm:flex-none"
            >
              <Send size={13} />
              Send reminder
            </button>

            <button
              type="button"
              className="cursor-pointer flex-1 rounded-lg bg-violet-600 px-3 py-2 text-xs font-medium text-white transition hover:bg-violet-700 sm:flex-none"
            >
              View as parent
            </button>

            <button
              type="button"
              aria-label="More student actions"
              className="cursor-pointer hidden rounded-lg border border-slate-200 p-2 text-slate-500 transition hover:bg-slate-50 sm:inline-flex"
            >
              <MoreVertical size={15} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentReportHeader;
