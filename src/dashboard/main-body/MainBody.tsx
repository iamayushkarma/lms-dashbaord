import React from "react";
import HeaderImage from "../components/HeaderImage";
import Calendar from "../components/Calander";
import StatsCards from "../components/StatsCards";
import StudentCourses from "../components/student-courses/StudentCourses";

function MainBody() {
  return (
    <div className="flex min-h-svh w-full flex-col gap-4 bg-[#f6f9fd] lg:flex-row">
      <div className="flex min-w-0 flex-1 flex-col gap-4">
        <div className="shrink-0 overflow-hidden rounded-md">
          <HeaderImage />
        </div>
        <StatsCards />
        <StudentCourses />
      </div>
      <div className="flex w-full shrink-0 flex-col gap-4 lg:w-[25%] 2xl:w-[20%]">
        <Calendar />
      </div>
    </div>
  );
}

export default MainBody;
