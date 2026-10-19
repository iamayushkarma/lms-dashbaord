import { Radio } from "lucide-react";
import TeacherSessions from "./TeacherSessions";
import StudentSessions from "./StudentSessions";
import type { Session } from "./types";

// Demo teacher sessions — replace with API data.
const teacherSessions: Session[] = [
  {
    id: "teacher-1",
    name: "Full Stack Development",
    instructor: "Rahul Sharma",
    participants: 24,
    duration: "42 min",
    status: "live",
  },
  {
    id: "teacher-2",
    name: "React.js Fundamentals",
    instructor: "Priya Verma",
    participants: 18,
    duration: "28 min",
    status: "live",
  },
  {
    id: "teacher-3",
    name: "Node.js Advanced",
    instructor: "Amit Kumar",
    participants: 32,
    duration: "35 min",
    status: "upcoming",
  },
  {
    id: "teacher-4",
    name: "Database Management",
    instructor: "Sneha Patel",
    participants: 21,
    duration: "30 min",
    status: "live",
  },
  {
    id: "teacher-5",
    name: "Java Programming",
    instructor: "Rohit Sharma",
    participants: 26,
    duration: "40 min",
    status: "upcoming",
  },
  {
    id: "teacher-6",
    name: "Data Structures",
    instructor: "Pooja Singh",
    participants: 19,
    duration: "25 min",
    status: "live",
  },
  {
    id: "teacher-7",
    name: "Operating Systems",
    instructor: "Neha Verma",
    participants: 16,
    duration: "32 min",
    status: "upcoming",
  },
  {
    id: "teacher-8",
    name: "Computer Networks",
    instructor: "Vikas Gupta",
    participants: 28,
    duration: "45 min",
    status: "live",
  },
  {
    id: "teacher-9",
    name: "System Design",
    instructor: "Anjali Mehta",
    participants: 22,
    duration: "38 min",
    status: "upcoming",
  },
  {
    id: "teacher-10",
    name: "Cloud Computing",
    instructor: "Karan Joshi",
    participants: 30,
    duration: "35 min",
    status: "live",
  },
  {
    id: "teacher-10",
    name: "Cloud Computing",
    instructor: "Karan Joshi",
    participants: 30,
    duration: "35 min",
    status: "live",
  },
  {
    id: "teacher-10",
    name: "Cloud Computing",
    instructor: "Karan Joshi",
    participants: 30,
    duration: "35 min",
    status: "live",
  },
  {
    id: "teacher-10",
    name: "Cloud Computing",
    instructor: "Karan Joshi",
    participants: 30,
    duration: "35 min",
    status: "live",
  },
];

// Demo student sessions — replace with API data.
const studentSessions: Session[] = [
  {
    id: "student-1",
    name: "JavaScript Practice",
    instructor: "Amit Kumar",
    participants: 32,
    duration: "25 min",
    status: "live",
  },
  {
    id: "student-2",
    name: "Database Management",
    instructor: "Sneha Patel",
    participants: 21,
    duration: "15 min",
    status: "upcoming",
  },
  {
    id: "student-3",
    name: "React Components",
    instructor: "Rahul Sharma",
    participants: 27,
    duration: "30 min",
    status: "live",
  },
  {
    id: "student-4",
    name: "Python Fundamentals",
    instructor: "Priya Verma",
    participants: 18,
    duration: "20 min",
    status: "upcoming",
  },
  {
    id: "student-5",
    name: "SQL Query Practice",
    instructor: "Vikas Gupta",
    participants: 24,
    duration: "35 min",
    status: "live",
  },
  {
    id: "student-6",
    name: "Algorithms Workshop",
    instructor: "Pooja Singh",
    participants: 16,
    duration: "40 min",
    status: "upcoming",
  },
  {
    id: "student-7",
    name: "Git and GitHub",
    instructor: "Neha Verma",
    participants: 29,
    duration: "25 min",
    status: "live",
  },
  {
    id: "student-8",
    name: "API Development",
    instructor: "Karan Joshi",
    participants: 20,
    duration: "30 min",
    status: "upcoming",
  },
  {
    id: "student-9",
    name: "Cloud Lab",
    instructor: "Anjali Mehta",
    participants: 23,
    duration: "45 min",
    status: "live",
  },
  {
    id: "student-10",
    name: "System Design Practice",
    instructor: "Rohit Sharma",
    participants: 17,
    duration: "35 min",
    status: "upcoming",
  },
  {
    id: "student-10",
    name: "System Design Practice",
    instructor: "Rohit Sharma",
    participants: 17,
    duration: "35 min",
    status: "upcoming",
  },
  {
    id: "student-10",
    name: "System Design Practice",
    instructor: "Rohit Sharma",
    participants: 17,
    duration: "35 min",
    status: "upcoming",
  },
];

export default function ActiveSessions() {
  const allSessions = [...teacherSessions, ...studentSessions];

  const liveCount = allSessions.filter(
    (session) => session.status === "live",
  ).length;

  return (
    <section className="w-full rounded-2xl bg-slate-50 p-4 sm:p-5">
      <header className="mb-4 flex items-center justify-between gap-3">
        <div className="min-w-0">
          <h2 className="text-lg font-bold tracking-tight text-slate-900">
            Active Sessions
          </h2>

          <p className="mt-1 text-xs text-slate-500 sm:text-sm">
            Overview of teaching and learning activity
          </p>
        </div>

        <div className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-emerald-100 bg-white px-3 py-2 text-xs font-semibold text-emerald-700">
          <Radio size={15} className="text-emerald-500" />
          {liveCount} live
        </div>
      </header>

      <div className="grid grid-cols-1 items-stretch gap-4 lg:grid-cols-2">
        <TeacherSessions sessions={teacherSessions} />
        <StudentSessions sessions={studentSessions} />
      </div>
    </section>
  );
}
