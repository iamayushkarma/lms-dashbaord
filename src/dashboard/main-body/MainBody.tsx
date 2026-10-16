import React from "react";
import HeaderImage from "../components/HeaderImage";
import Calendar from "../components/Calander";
import StudentCourses from "../components/StudentCourses";

function MainBody() {
  return (
    <div className="flex w-full bg-blue-500 h-svh">
      <div className="lg:w-[75%] 2xl:w-[80%] bg-black">
        <HeaderImage />
        <StudentCourses />
      </div>
      <div className="lg:w-[25%] 2xl:w-[20%]">
        <Calendar />
      </div>
      <div className="lg:w-[25%] 2xl:w-[20%] bg-yellow-400"></div>
      <div></div>
    </div>
  );
}

export default MainBody;
