import { useState } from "react";
import StudentReportTabs, { type StudentTab } from "./StudentReportTabs";
import StudentStats from "./StudentStats";
import QuizAttempts from "./QuizAttempts";
import TopicPerformance from "./TopicPerformance";
import StudentNotes from "./StudentNotes";

function StudentOverviewSection() {
  const [activeTab, setActiveTab] = useState<StudentTab>("Overview");

  return (
    <section className="w-full space-y-3">
      <StudentReportTabs activeTab={activeTab} onTabChange={setActiveTab} />

      {activeTab === "Overview" && (
        <div className="space-y-3">
          <StudentStats />

          <div className="grid grid-cols-1 items-start gap-3 xl:grid-cols-[minmax(0,2.7fr)_minmax(280px,1fr)]">
            <QuizAttempts />

            <div className="space-y-3">
              <TopicPerformance />
              <StudentNotes />
            </div>
          </div>
        </div>
      )}

      {activeTab === "Quiz Attempts" && <QuizAttempts />}

      {activeTab === "Courses" && (
        <div className="rounded-xl border border-slate-200/80 bg-white p-6">
          <h3 className="text-sm font-semibold text-slate-900">Courses</h3>
          <p className="mt-2 text-xs text-slate-500">
            Student course information will appear here.
          </p>
        </div>
      )}

      {activeTab === "Activity" && (
        <div className="rounded-xl border border-slate-200/80 bg-white p-6">
          <h3 className="text-sm font-semibold text-slate-900">
            Recent Activity
          </h3>
          <p className="mt-2 text-xs text-slate-500">
            Student activity will appear here.
          </p>
        </div>
      )}
    </section>
  );
}

export default StudentOverviewSection;
