import { useState } from "react";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import CourseProgress from "../Components/CourseProgress";
import ProjectUpdates from "../Components/ProjectUpdates";
import TimeSpentTable from "../Components/TimeSpentTable";
import RightStats from "../Components/RightStats";

export default function Dashboard() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex flex-col h-screen bg-[#f5f7f6]">
      <Header />

      <div
        className={`grid flex-1 overflow-hidden transition-all duration-300 ${collapsed
          ? "grid-cols-[40px_1fr_200px]"
          : "grid-cols-[240px_1fr_200px]"
          }`}
      >
        <Sidebar collapsed={collapsed} onToggle={() => setCollapsed(!collapsed)} />

        <main className="p-[20px] overflow-y-auto">
          <CourseProgress />
          <ProjectUpdates />
          <TimeSpentTable />
        </main>

        <RightStats />
      </div>
    </div>
  );
}
