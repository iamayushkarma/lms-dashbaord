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

        {/* Charts: stacked on mobile, two columns on medium screens */}
        <div className="grid min-w-0 grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-[1.4fr_1.2fr_1fr]">
          <div className="min-w-0 md:col-span-2 xl:col-span-1">
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
      </div>

      {/* Right dashboard column */}
      <div className="flex w-full min-w-0 shrink-0 flex-col gap-4 lg:w-[25%] 2xl:w-[20%]">
        <Calendar />
        <TodaysSchedule />
        {/* <LearningJourney />
        <CreateAmazingLearningExperiences /> */}
        <div className="grid grid-cols-2 gap-3 min-[1000px]:grid-cols-1">
          <LearningJourney />
          <CreateAmazingLearningExperiences />
        </div>
        <YourBadges />
      </div>
    </div>
  );
}

export default MainBody;
