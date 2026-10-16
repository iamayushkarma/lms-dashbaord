export type CourseStatus = "in-progress" | "completed" | "not-started";

export type TabKey = "all" | CourseStatus;

export type SortKey = "recent" | "progress" | "title";

export type TabItem = {
  key: TabKey;
  label: string;
  count: number;
};

export type Course = {
  id: string;
  title: string;
  status: CourseStatus;
  students: number;
  lessons: number;
  duration: string; // e.g. "12h 30m"
  progress: number; // 0 - 100
  gradient: string; // tailwind gradient classes, used when there is no image
  image?: string; // optional thumbnail url
  avatars: string[]; // initials of the students shown in the stack
  moreStudents: number; // the "+24" next to the avatars
  lastAccessed: string; // ISO date, used by the "Recent" sort
};
