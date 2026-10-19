import BackToStudents from "./Components/BackToStudents";
import StudentReportHeader from "./Components/StudentReportHeader";
import StudentOverviewSection from "./Components/StudentOverviewSection";
function StudentReport() {
  return (
    <main className="min-h-screen space-y-3 bg-slate-50/70 p-3 sm:p-4">
      <BackToStudents />
      <StudentReportHeader />
      <StudentOverviewSection />
    </main>
  );
}

export default StudentReport;
