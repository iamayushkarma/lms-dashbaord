import React, { useEffect, useRef, useState } from "react";
import {
  Menu,
  Search,
  Plus,
  ChevronDown,
  Bell,
  Sun,
  Moon,
  BookOpen,
  FileText,
  Video,
  ListChecks,
} from "lucide-react";

type DashboardHeaderProps = {
  onMenuClick: () => void;
};

const CREATE_OPTIONS = [
  { label: "New Course", icon: BookOpen },
  { label: "New Assignment", icon: FileText },
  { label: "New Quiz", icon: ListChecks },
  { label: "Schedule Live Class", icon: Video },
];

function DashboardHeader({ onMenuClick }: DashboardHeaderProps) {
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [createOpen, setCreateOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const createRef = useRef<HTMLDivElement>(null);

  // Close the Create menu on outside click / Escape
  useEffect(() => {
    if (!createOpen) return;
    const onClick = (e: MouseEvent) => {
      if (!createRef.current?.contains(e.target as Node)) setCreateOpen(false);
    };
    const onKey = (e: KeyboardEvent) =>
      e.key === "Escape" && setCreateOpen(false);
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [createOpen]);

  // Toggles the `dark` class on <html>; add `dark:` variants as you build out the UI
  const toggleTheme = () => {
    setDark((prev) => {
      document.documentElement.classList.toggle("dark", !prev);
      return !prev;
    });
  };

  const iconBtn =
    "relative flex h-10 w-10 items-center justify-center rounded-xl text-slate-500 transition hover:bg-slate-100 hover:text-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 cursor-pointer";

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="flex h-16 items-center gap-2 px-4 sm:gap-3 sm:px-6">
        {/* Hamburger (mobile / tablet) */}
        <button
          type="button"
          onClick={onMenuClick}
          aria-label="Toggle sidebar"
          aria-controls="dashboard-sidebar"
          className={iconBtn}
        >
          <Menu className="h-5 w-5" />
        </button>

        {/* Search (md and up) */}
        <div className="relative hidden max-w-xl flex-1 md:block">
          <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            type="search"
            placeholder="Search courses, students, assignments..."
            className="h-10 w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-14 text-sm text-slate-800 placeholder:text-slate-400 focus:border-indigo-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-100"
          />
          <kbd className="pointer-events-none absolute right-3 top-1/2 hidden -translate-y-1/2 rounded-md border border-slate-200 bg-white px-1.5 py-0.5 text-[11px] font-medium text-slate-400 lg:block">
            Ctrl K
          </kbd>
        </div>

        {/* Right actions */}
        <div className="ml-auto flex items-center gap-1 sm:gap-2">
          {/* Search toggle (below md) */}
          <button
            type="button"
            onClick={() => setMobileSearchOpen((v) => !v)}
            aria-label="Toggle search"
            aria-expanded={mobileSearchOpen}
            className={`${iconBtn} md:hidden cursor-pointer`}
          >
            <Search className="h-5 w-5" />
          </button>

          {/* Create dropdown */}
          <div ref={createRef} className="relative">
            <button
              type="button"
              onClick={() => setCreateOpen((v) => !v)}
              aria-haspopup="menu"
              aria-expanded={createOpen}
              className="flex h-10 items-center gap-1.5 rounded-xl bg-indigo-600 px-3 text-sm font-semibold text-white shadow-sm shadow-indigo-200 transition hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 sm:px-4 cursor-pointer"
            >
              <Plus className="h-4 w-4" />
              <span className="hidden sm:inline">Create</span>
              <ChevronDown
                className={`hidden h-4 w-4 transition-transform sm:block ${
                  createOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {createOpen && (
              <div
                role="menu"
                className="absolute right-0 mt-2 w-56 overflow-hidden rounded-xl border border-slate-200 bg-white p-1.5 shadow-lg"
              >
                {CREATE_OPTIONS.map(({ label, icon: Icon }) => (
                  <button
                    key={label}
                    role="menuitem"
                    type="button"
                    onClick={() => setCreateOpen(false)}
                    className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-indigo-50 hover:text-indigo-700 cursor-pointer"
                  >
                    <Icon className="h-4 w-4" />
                    {label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Notifications */}
          <button type="button" aria-label="Notifications" className={iconBtn}>
            <Bell className="h-5 w-5" />
            <span className="absolute right-1.5 top-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-rose-500 px-1 text-[10px] font-semibold text-white">
              3
            </span>
          </button>

          {/* Theme toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className={`${iconBtn} hidden sm:flex cursor-pointer`}
          >
            {dark ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </button>

          {/* Profile */}
          <button
            type="button"
            className="flex cursor-pointer items-center gap-2.5 rounded-xl p-1 pr-1 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 sm:pr-2"
          >
            <img
              src="https://i.pravatar.cc/80?img=12"
              alt="Profile"
              className="h-9 w-9 rounded-full object-cover"
            />
            <span className="hidden text-left leading-tight md:block">
              <span className="block text-sm font-semibold text-slate-800">
                Hritik Pandey
              </span>
              <span className="block text-xs text-slate-500">Teacher</span>
            </span>
            <ChevronDown className="hidden h-4 w-4 text-slate-400 md:block" />
          </button>
        </div>
      </div>

      {/* Mobile search bar */}
      {mobileSearchOpen && (
        <div className="border-t border-slate-100 px-4 py-3 md:hidden">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              autoFocus
              type="search"
              placeholder="Search..."
              className="h-10 w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-3 text-sm placeholder:text-slate-400 focus:border-indigo-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-100"
            />
          </div>
        </div>
      )}
    </header>
  );
}

export default DashboardHeader;
