import React from "react";
import HeaderImage from "../components/HeaderImage";
import Calendar from "../components/Calander";

function MainBody() {
  return (
    <div className="flex w-full h-svh bg-[#f8fafe]">
      <div className="lg:w-[75%] 2xl:w-[80%] bg-black">
        <HeaderImage />
      </div>
      <div className="lg:w-[25%] 2xl:w-[20%]">
        <Calendar />
      </div>
      <div></div>
    </div>
  );
}

export default MainBody;
