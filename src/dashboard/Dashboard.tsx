import React, { useState } from "react";
import DashboardSidebar from "./sidebar/DashboardSidebar";
import DashboardHeader from "./header/DashboardHeader";
import MainBody from "./main-body/MainBody";

function Dashboard() {
  // Controls the sidebar drawer on screens smaller than `lg`
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <DashboardSidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Offset content by sidebar width on desktop */}
      <div className="flex min-h-screen flex-col lg:pl-64">
        <DashboardHeader onMenuClick={() => setSidebarOpen(true)} />

        <main className="flex-1 p-4 sm:p-6">
          <MainBody />
        </main>
      </div>
    </div>
  );
}

export default Dashboard;