import { LayoutGrid, FileText, BookOpen, CalendarDays } from "lucide-react";

export type StudentTab = "Overview" | "Quiz Attempts" | "Courses" | "Activity";

interface StudentReportTabsProps {
  activeTab: StudentTab;
  onTabChange: (tab: StudentTab) => void;
}

const tabs = [
  { label: "Overview", icon: LayoutGrid },
  { label: "Quiz Attempts", icon: FileText },
  { label: "Courses", icon: BookOpen },
  { label: "Activity", icon: CalendarDays },
] as const;

function StudentReportTabs({ activeTab, onTabChange }: StudentReportTabsProps) {
  return (
    <div className="flex w-full items-center gap-1 overflow-x-auto border-b border-slate-200">
      {tabs.map(({ label, icon: Icon }) => {
        const active = activeTab === label;

        return (
          <button
            key={label}
            type="button"
            onClick={() => onTabChange(label)}
            className={`cursor-pointer inline-flex shrink-0 items-center gap-2 border-b-2 px-4 py-3 text-xs font-medium transition-colors ${
              active
                ? "border-violet-600 text-violet-700"
                : "border-transparent text-slate-600 hover:text-violet-700"
            }`}
          >
            <Icon size={15} strokeWidth={1.8} />
            {label}
          </button>
        );
      })}
    </div>
  );
}

export default StudentReportTabs;
