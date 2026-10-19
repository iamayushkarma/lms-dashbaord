import { useMemo, useState } from "react";
import CourseCard from "./CourseCard";
import CourseTabs from "./CourseTabs";
import { demoCourses } from "./data";
import { ChevronDownIcon } from "./icons";
import { ArrowRight } from "lucide-react";
import type { Course, SortKey, TabItem, TabKey } from "./types";

const PANEL_ID = "student-courses-panel";

const sortOptions: { value: SortKey; label: string }[] = [
  { value: "recent", label: "Recent" },
  { value: "progress", label: "Progress" },
  { value: "title", label: "Title" },
];

function sortCourses(courses: Course[], sortBy: SortKey) {
  const list = [...courses];

  if (sortBy === "progress")
    return list.sort((a, b) => b.progress - a.progress);
  if (sortBy === "title")
    return list.sort((a, b) => a.title.localeCompare(b.title));
  return list.sort((a, b) => b.lastAccessed.localeCompare(a.lastAccessed));
}

type StudentCoursesProps = {
  courses?: Course[];
  onOpenCourse?: (course: Course) => void;
  onViewAll?: () => void;
};

function StudentCourses({
  courses = demoCourses,
  onOpenCourse,
  onViewAll,
}: StudentCoursesProps) {
  const [activeTab, setActiveTab] = useState<TabKey>("all");
  const [sortBy, setSortBy] = useState<SortKey>("recent");
  const [bookmarks, setBookmarks] = useState<Set<string>>(new Set());
  const [showAllCourses, setShowAllCourses] = useState(false);

  const tabs: TabItem[] = useMemo(
    () => [
      { key: "all", label: "All Courses", count: courses.length },
      {
        key: "in-progress",
        label: "In Progress",
        count: courses.filter((c) => c.status === "in-progress").length,
      },
      {
        key: "completed",
        label: "Completed",
        count: courses.filter((c) => c.status === "completed").length,
      },
      {
        key: "not-started",
        label: "Not Started",
        count: courses.filter((c) => c.status === "not-started").length,
      },
    ],
    [courses],
  );

  const visible = useMemo(() => {
    const byTab =
      activeTab === "all"
        ? courses
        : courses.filter((c) => c.status === activeTab);
    return sortCourses(byTab, sortBy);
  }, [courses, activeTab, sortBy]);

  const displayedCourses = showAllCourses ? visible : visible.slice(0, 6);

  function toggleBookmark(id: string) {
    setBookmarks((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  return (
    <section className="w-full rounded-2xl bg-[#f6f7fb] px-3 sm:px-4 sm:py-2">
      {/* Header */}
      <div className="mb-3 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex min-w-0 flex-col gap-3 md:flex-row md:items-center md:gap-8">
          <h2 className="text-lg xl:text-xl w-32 font-bold text-slate-900">
            My Courses
          </h2>
          <CourseTabs
            tabs={tabs}
            active={activeTab}
            onChange={setActiveTab}
            panelId={PANEL_ID}
          />
        </div>

        <div className="flex items-center gap-3">
          <div className="relative">
            <select
              aria-label="Sort courses"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortKey)}
              className="h-10 w-32 cursor-pointer appearance-none rounded-lg border border-slate-200 bg-white pl-3.5 pr-9 text-sm font-medium text-slate-800 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <ChevronDownIcon className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
          </div>

          <button
            type="button"
            onClick={() => {
              setShowAllCourses((previous) => !previous);
              onViewAll?.();
            }}
            className="
             h-10 cursor-pointer rounded-lg border border-violet-200 bg-violet-50 px-4 text-sm transition-colors hover:bg-violet-100 focus-visible:outline-violet-500
            flex shrink-0 items-center gap-1 whitespace-nowrap text-[11px] font-bold text-[#5b3ff8] hover:text-[#4a2fe0]"
          >
            {showAllCourses ? "Show Less" : "View All"}
            <ArrowRight className="h-3 w-3" />
          </button>
        </div>
      </div>

      {/* 2 columns + inner scroll on smaller screens, one row of 4 on 1400px+ */}
      <div
        id={PANEL_ID}
        role="tabpanel"
        className="max-h-[460px] overflow-y-auto p-1 pr-2 min-[1400px]:max-h-none min-[1400px]:overflow-visible"
      >
        {visible.length > 0 ? (
          <div
            className={`grid grid-cols-2 gap-4 min-[1400px]:grid-cols-4 ${
              !showAllCourses ? "min-[1400px]:[&>*:nth-child(n+5)]:hidden" : ""
            }`}
          >
            {displayedCourses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                bookmarked={bookmarks.has(course.id)}
                onToggleBookmark={toggleBookmark}
                onOpen={onOpenCourse}
              />
            ))}
          </div>
        ) : (
          <p className="rounded-xl border border-dashed border-slate-300 py-12 text-center text-sm text-slate-500">
            No courses in this tab yet.
          </p>
        )}
      </div>
    </section>
  );
}

export default StudentCourses;
