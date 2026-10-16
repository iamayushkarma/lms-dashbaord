import React from "react";
import HeaderImage from "../components/HeaderImage";
import StatsCards from "../components/StatsCards"

function MainBody() {
  return (
    <div className="flex w-full min-h-svh gap-4">
      {/* Left column: banner + stats (and later: courses, charts, etc.) */}
      <div className="flex w-full min-w-0 flex-col gap-4 lg:w-[75%] 2xl:w-[80%]">
        {/* shrink-0 stops the flex column from squeezing the banner */}
        <div className="shrink-0 overflow-hidden rounded-md">
          <HeaderImage />
        </div>
        <StatsCards />
      </div>

      {/* Right column placeholder (calendar, schedule...) - hidden below lg */}
      <div className="hidden lg:block lg:w-[25%] 2xl:w-[20%]"></div>
    </div>
  );
}

export default MainBody;