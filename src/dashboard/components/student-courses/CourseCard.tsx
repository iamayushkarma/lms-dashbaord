import AvatarStack from "./AvatarStack";
import ProgressBar from "./ProgressBar";
import StatusBadge from "./StatusBadge";
import { ArrowRightIcon, BookmarkIcon, ClockIcon } from "./icons";
import type { Course, CourseStatus } from "./types";

const actionLabels: Record<CourseStatus, string> = {
  "in-progress": "Continue",
  completed: "Review",
  "not-started": "Start Now",
};

type CourseCardProps = {
  course: Course;
  bookmarked: boolean;
  onToggleBookmark: (id: string) => void;
  onOpen?: (course: Course) => void;
};

export default function CourseCard({
  course,
  bookmarked,
  onToggleBookmark,
  onOpen,
}: CourseCardProps) {
  const isCompleted = course.status === "completed";

  return (
    <article className="flex flex-col rounded-2xl border border-slate-200 bg-white p-2.5 shadow-sm transition-shadow hover:shadow-md">
      {/* Thumbnail */}
      <div
        className={`relative h-32 overflow-hidden rounded-xl bg-gradient-to-br sm:h-36 ${course.gradient}`}
      >
        {course.image ? (
          <img
            src={course.image}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover"
          />
        ) : (
          <>
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
            <div className="absolute -bottom-10 left-6 h-28 w-28 rounded-full bg-white/10 blur-2xl" />
          </>
        )}

        <StatusBadge status={course.status} />

        <button
          type="button"
          onClick={() => onToggleBookmark(course.id)}
          aria-pressed={bookmarked}
          aria-label={bookmarked ? "Remove bookmark" : "Bookmark course"}
          className={`absolute right-2.5 top-2.5 grid h-7 w-7 place-items-center rounded-lg bg-white/90 shadow-sm transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-violet-500 ${
            bookmarked ? "text-violet-600" : "text-slate-600"
          }`}
        >
          <BookmarkIcon filled={bookmarked} />
        </button>

        <span className="absolute bottom-2.5 right-2.5 inline-flex items-center gap-1 rounded-full bg-slate-900/70 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur-sm">
          <ClockIcon />
          {course.duration}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col px-1.5 pb-1 pt-3">
        <h3 className="truncate text-[15px] font-semibold text-slate-900">
          {course.title}
        </h3>
        <p className="mt-1 flex items-center gap-1.5 text-xs text-slate-500">
          <span>{course.students} Students</span>
          <span className="h-1 w-1 rounded-full bg-slate-300" />
          <span>{course.lessons} Lessons</span>
        </p>

        <div className="mt-4">
          <ProgressBar
            value={course.progress}
            barClassName={isCompleted ? "bg-emerald-500" : "bg-violet-500"}
          />
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
          <AvatarStack avatars={course.avatars} more={course.moreStudents} />

          <button
            type="button"
            onClick={() => onOpen?.(course)}
            className="inline-flex items-center gap-1.5 rounded-lg bg-violet-50 px-3.5 py-1.5 text-xs font-semibold text-violet-600 transition-colors hover:bg-violet-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-violet-500"
          >
            {actionLabels[course.status]}
            <ArrowRightIcon />
          </button>
        </div>
      </div>
    </article>
  );
}
