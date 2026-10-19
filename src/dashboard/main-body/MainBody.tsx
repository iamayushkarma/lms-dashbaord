import HeaderImage from "../components/HeaderImage";
import Calendar from "../components/Calander";
import StatsCards from "../components/StatsCards";
import StudentCourses from "../components/student-courses/StudentCourses";
import StudentProgress from "../components/student-stats/StudentProgress";
import PerformanceOverview from "../components/student-stats/PerformanceOverview";
import TopPerformingStudents from "../components/student-stats/TopPerformingStudents";
import TodaysSchedule from "../components/todays-schedule/TodaysSchedule";
import LearningJourney from "../components/LearningJourney";
import CreateAmazingLearningExperiences from "../components/CreateAmazingLearningExperiences";
import RecentAssignments from "../components/RecentAssignments";
import YourBadges from "../components/YourBadges";
import HolidayAndLabSection from "../components/HolidayAndLabSection";
import ActiveSessions from "../components/Sessions/ActiveSessions";
import IndiaLearningMap from "../components/IndiaLearningMap";

function MainBody() {
  return (
    <div className="flex min-h-svh w-full min-w-0 flex-col gap-4 bg-[#f6f9fd] lg:flex-row">
      {/* Main dashboard content */}
      <div className="flex min-w-0 flex-1 flex-col gap-4">
        <div className="shrink-0 overflow-hidden rounded-md">
          <HeaderImage />
        </div>
        <StatsCards />
        <StudentCourses />

        {/* Charts: responsive equal-width cards */}
        <div className="grid w-full min-w-0 grid-cols-1 items-stretch gap-4 md:grid-cols-2 xl:grid-cols-3">
          <div className="min-w-0">
            <StudentProgress />
          </div>

          <div className="min-w-0">
            <PerformanceOverview />
          </div>

          <div className="min-w-0">
            <TopPerformingStudents />
          </div>
        </div>

        <RecentAssignments />
        <ActiveSessions />
        <HolidayAndLabSection />
      </div>

      {/* Right dashboard column */}
      <div className="flex w-full min-w-0 shrink-0 flex-col gap-4 lg:w-[25%] 2xl:w-[20%]">
        <Calendar />
        <TodaysSchedule />
        <div className="grid grid-cols-2 gap-3 min-[1000px]:grid-cols-1">
          <LearningJourney />
          <CreateAmazingLearningExperiences />
        </div>
        <YourBadges />
        <IndiaLearningMap />
      </div>
    </div>
  );
}

export default MainBody;
