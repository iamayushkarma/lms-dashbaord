import React from "react";
import HeaderImage from "../components/HeaderImage";
<<<<<<< HEAD
import Calendar from "../components/Calander";
import StudentCourses from "../components/StudentCourses";
=======
>>>>>>> 8e4a4fab9def22c012fb8367c4db70489a22ec63

function MainBody() {
  return (
    <div className="flex w-full bg-blue-500 h-svh">
      <div className="lg:w-[75%] 2xl:w-[80%] bg-black">
        <HeaderImage />
        <StudentCourses />
      </div>
<<<<<<< HEAD
      <div className="lg:w-[25%] 2xl:w-[20%]">
        <Calendar />
      </div>
=======
      <div className="lg:w-[25%] 2xl:w-[20%] bg-yellow-400"></div>
      <div></div>
>>>>>>> 8e4a4fab9def22c012fb8367c4db70489a22ec63
    </div>
  );
}

export default MainBody;