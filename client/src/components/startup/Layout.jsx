import { Outlet } from "react-router-dom";

import Dashboard from "@/pages/startup/Dashboard";

const StartupLayout = () => {
  return (
    <div className="flex flex-col bg-white overflow-hidden">
      {/* common header*/}
      <Dashboard />
      <main className="flex flex-col w-full">
        <Outlet />
      </main>
    </div>
  );
};

export default StartupLayout;
