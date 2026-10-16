import React, { useEffect, useState } from "react";
import {
  LayoutDashboard,
  BookOpen,
  Users,
  Video,
  FileText,
  ListChecks,
  CalendarCheck,
  MessageSquare,
  CalendarDays,
  BarChart3,
  Award,
  UsersRound,
  Settings,
  GraduationCap,
  Crown,
  ArrowRight,
  X,
  type LucideIcon,
} from "lucide-react";

type NavItem = {
  label: string;
  icon: LucideIcon;
  badge?: number;
};

const NAV_ITEMS: NavItem[] = [
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "My Courses", icon: BookOpen },
  { label: "Students", icon: Users },
  { label: "Live Classes", icon: Video },
  { label: "Assignments", icon: FileText },
  { label: "Quizzes", icon: ListChecks },
  { label: "Attendance", icon: CalendarCheck },
  { label: "Messages", icon: MessageSquare, badge: 3 },
  { label: "Calendar", icon: CalendarDays },
  { label: "Reports", icon: BarChart3 },
  { label: "Certificates", icon: Award },
  { label: "Community", icon: UsersRound },
  { label: "Settings", icon: Settings },
];

type DashboardSidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

function DashboardSidebar({ isOpen, onClose }: DashboardSidebarProps) {
  // Replace with router state (e.g. NavLink / useLocation) once routes exist
  const [active, setActive] = useState("Dashboard");

  // Close drawer with Escape key
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose]);

  const handleSelect = (label: string) => {
    setActive(label);
    onClose(); // closes the drawer on mobile; no visual effect on desktop
  };

  return (
    <>
      {/* Mobile backdrop */}
      <div
        onClick={onClose}
        aria-hidden="true"
        className={`fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <aside
        aria-label="Sidebar"
        className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r border-slate-200 bg-white transition-transform duration-300 ease-out lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo */}
        <div className="flex h-16 shrink-0 items-center justify-between px-5">
          <a href="/" className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-sm shadow-indigo-200">
              <GraduationCap className="h-5 w-5" />
            </span>
            <span className="leading-tight">
              <span className="block text-lg font-bold text-slate-900">
                EduVerse
              </span>
              <span className="block text-[11px] text-slate-500">
                Learning Management
              </span>
            </span>
          </a>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close sidebar"
            className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 lg:hidden"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Navigation (scrolls on short screens) */}
        <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-2">
          {NAV_ITEMS.map(({ label, icon: Icon, badge }) => {
            const isActive = active === label;
            return (
              <button
                key={label}
                type="button"
                onClick={() => handleSelect(label)}
                aria-current={isActive ? "page" : undefined}
                className={`group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
                  isActive
                    ? "bg-indigo-50 text-indigo-700"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                <Icon
                  className={`h-5 w-5 shrink-0 ${
                    isActive
                      ? "text-indigo-600"
                      : "text-slate-400 group-hover:text-slate-600"
                  }`}
                />
                <span className="flex-1 truncate text-left">{label}</span>
                {badge ? (
                  <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-rose-500 px-1.5 text-[11px] font-semibold text-white">
                    {badge}
                  </span>
                ) : null}
              </button>
            );
          })}
        </nav>

        {/* Upgrade card */}
        <div className="shrink-0 p-3">
          <div className="rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-500 p-4 text-white">
            <div className="flex items-center gap-2 font-semibold">
              <Crown className="h-5 w-5 text-amber-300" />
              Upgrade to Pro
            </div>
            <p className="mt-1.5 text-xs leading-relaxed text-indigo-100">
              Get advanced analytics, unlimited storage, and more.
            </p>
            <button
              type="button"
              className="mt-3 flex w-full items-center justify-center gap-1.5 rounded-lg bg-white py-2 text-sm font-semibold text-indigo-700 transition hover:bg-indigo-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            >
              Upgrade Now
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}

export default DashboardSidebar;