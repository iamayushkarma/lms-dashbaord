import { useState } from "react";
import DashboardSidebar from "./sidebar/DashboardSidebar";
import DashboardHeader from "./header/DashboardHeader";
import MainBody from "./main-body/MainBody";

function Dashboard() {
  const [sidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <DashboardSidebar isVisible={sidebarVisible} />

      <div
        className={`flex min-h-screen flex-col transition-[margin] duration-300 ${
          sidebarVisible ? "ml-16" : "ml-0"
        }`}
      >
        <DashboardHeader onMenuClick={toggleSidebar} />

        <main className="min-w-0 flex-1 p-4 sm:p-6">
          <MainBody />
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
