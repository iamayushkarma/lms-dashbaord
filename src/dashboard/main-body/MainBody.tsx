import React from "react";
import HeaderImage from "../components/HeaderImage";

function MainBody() {
  return (
    <div className="flex w-full bg-blue-500 h-svh">
      <div className="w-[70%] bg-black">
        <HeaderImage />
      </div>
      <div className="w-[30%] bg-yellow-400"></div>
      <div></div>
    </div>
  );
}

export default MainBody;
