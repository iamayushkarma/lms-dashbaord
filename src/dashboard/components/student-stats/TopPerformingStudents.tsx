import React from "react";
import { ArrowRight } from "lucide-react";

type Student = { name: string; score: number; avatar: string };

// Replace with API data later
const STUDENTS: Student[] = [
  { name: "Amit Kumar", score: 92, avatar: "https://i.pravatar.cc/80?img=12" },
  { name: "Sneha Patel", score: 88, avatar: "https://i.pravatar.cc/80?img=47" },
  { name: "Rohit Sharma", score: 85, avatar: "https://i.pravatar.cc/80?img=33" },
  { name: "Pooja Singh", score: 83, avatar: "https://i.pravatar.cc/80?img=45" },
  { name: "Neha Verma", score: 80, avatar: "https://i.pravatar.cc/80?img=32" },
];

function TopPerformingStudents() {
  return (
    <section className="flex h-full min-w-0 flex-col rounded-2xl border border-slate-100 bg-white p-4 shadow-[0_2px_10px_rgba(99,102,241,0.06)]">
      <div className="flex items-center justify-between gap-2">
        <h3 className="whitespace-nowrap text-sm font-extrabold text-[#0f1240]">
          Top Performing Students
        </h3>
        <a
          href="#"
          className="flex shrink-0 items-center gap-1 text-[11px] font-bold text-[#5b3ff8] hover:text-[#4a2fe0]"
        >
          View All
          <ArrowRight className="h-3 w-3" />
        </a>
      </div>

      <ul className="mt-3 flex flex-1 flex-col justify-between gap-1.5">
        {STUDENTS.map(({ name, score, avatar }) => (
          <li key={name} className="flex items-center gap-2.5">
            <img
              src={avatar}
              alt={name}
              className="h-[22px] w-[22px] shrink-0 rounded-full bg-slate-200 object-cover ring-1 ring-slate-100"
            />
            <span className="w-[76px] shrink-0 truncate text-[11px] font-medium text-[#0f1240] min-[1400px]:w-[84px]">
              {name}
            </span>
            <div className="h-1.5 min-w-0 flex-1 overflow-hidden rounded-full bg-slate-100">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#6754fc] to-[#7d64fc]"
                style={{ width: `${score}%` }}
              />
            </div>
            <span className="w-8 shrink-0 text-right text-[11px] font-bold text-[#0f1240]">
              {score}%
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default TopPerformingStudents;