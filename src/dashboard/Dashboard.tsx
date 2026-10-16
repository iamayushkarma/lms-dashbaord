import React from "react";
import DashboardSidebar from "./sidebar/DashboardSidebar";
import DashboardHeader from "./header/DashboardHeader";
import MainBody from "./main-body/MainBody";

function Dashboard() {
  return (
    <div>
      <div>
        <DashboardSidebar />
      </div>
      <div>
        <div>
          <DashboardHeader />
        </div>
        <div>
          <MainBody />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
