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
  isVisible: boolean;
  onNavigate?: (label: string) => void;
};

export default function DashboardSidebar({
  isVisible,
  onNavigate,
}: DashboardSidebarProps) {
  return (
    <aside
      id="dashboard-sidebar"
      aria-label="Main navigation"
      aria-hidden={!isVisible}
      className={`fixed inset-y-0 left-0 z-40 flex w-16
    flex-col overflow-hidden border-r border-slate-200 bg-white
    transition-transform duration-300 ease-in-out
    ${isVisible ? "translate-x-0" : "-translate-x-full"}`}
    >
      <nav className="sidebar-scrollbar flex min-h-0 flex-1 flex-col items-center gap-2 overflow-x-hidden overflow-y-auto px-2 py-4">
        {NAV_ITEMS.map(({ label, icon: Icon, badge }) => (
          <button
            key={label}
            type="button"
            title={label}
            aria-label={label}
            disabled={!isVisible}
            onClick={() => onNavigate?.(label)}
            className="group relative cursor-pointer flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-slate-500 transition-colors hover:bg-indigo-50 hover:text-indigo-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 disabled:pointer-events-none"
          >
            <Icon className="h-5 w-5" />

            {badge !== undefined && (
              <span className="absolute right-0.5 top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-rose-500 px-1 text-[10px] font-semibold text-white">
                {badge}
              </span>
            )}
          </button>
        ))}
      </nav>
    </aside>
  );
}
