import React from "react";
import HeaderImage from "../components/HeaderImage";

function MainBody() {
  return (
    <div className="flex w-full bg-blue-500 h-svh">
      <div className="lg:w-[75%] 2xl:w-[80%] bg-black">
        <HeaderImage />
      </div>
      <div className="lg:w-[25%] 2xl:w-[20%] bg-yellow-400"></div>
      <div></div>
    </div>
  );
}

export default MainBody;
