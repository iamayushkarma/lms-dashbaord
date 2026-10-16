import React from "react";
import HeaderImage from "../components/HeaderImage";
import Calendar from "../components/Calander";
import StatsCards from "../components/StatsCards";
import StudentCourses from "../components/student-courses/StudentCourses";
import StudentProgress from "../components/student-stats/StudentProgress";
import PerformanceOverview from "../components/student-stats/PerformanceOverview";
import TopPerformingStudents from "../components/student-stats/TopPerformingStudents";
import TodaysSchedule from "../components/todays-schedule/TodaysSchedule";

function MainBody() {
  return (
    <div className="flex min-h-svh w-full flex-col gap-4 bg-[#f6f9fd] lg:flex-row">
      <div className="flex min-w-0 flex-1 flex-col gap-4">
        <div className="shrink-0 overflow-hidden rounded-md">
          <HeaderImage />
        </div>
        <StatsCards />
        <StudentCourses />

        {/* Charts row: stacked on mobile, 2 cols on md, 3 cols from xl */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-[1.4fr_1.2fr_1fr]">
          <div className="md:col-span-2 xl:col-span-1">
            <StudentProgress />
          </div>
          <PerformanceOverview />
          <TopPerformingStudents />
        </div>
      </div>
      <div className="flex w-full shrink-0 flex-col gap-4 lg:w-[25%] 2xl:w-[20%]">
        <Calendar />
        <TodaysSchedule />
      </div>
    </div>
  );
}

export default MainBody;
