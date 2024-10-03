import React, { useEffect, useState } from "react";
import ProgressChart from "@/components/startup/ProgressChart";
import DashboardCard from "@/components/startup/DashBoardCard";
import { FaUsers, FaFileAlt, FaChartLine } from "react-icons/fa";

const Home = () => {
  const [kycStatus, setKycStatus] = useState("Pending");
  const [reports, setReports] = useState(5);
  const [progress, setProgress] = useState([]);

  useEffect(() => {
    // Simulate fetching dynamic data
    setKycStatus("Completed");
    setReports(7);
    setProgress([
      { month: "January", progress: 50 },
      { month: "February", progress: 60 },
      { month: "March", progress: 70 },
      { month: "April", progress: 80 },
      { month: "May", progress: 90 },
      { month: "June", progress: 100 },
    ]);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 p-4">
      {/* Main Header */}
      <h1 className="text-3xl font-bold text-center mb-8">Startup Dashboard</h1>

      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <DashboardCard
          title="KYC Status"
          value={kycStatus}
          icon={<FaFileAlt size={24} />}
          className="shadow-lg hover:shadow-xl transition-shadow p-4 rounded-lg bg-white flex items-center"
        />
        <DashboardCard
          title="Reports Submitted"
          value={reports}
          icon={<FaUsers size={24} />}
          className="shadow-lg hover:shadow-xl transition-shadow p-4 rounded-lg bg-white flex items-center"
        />
        <DashboardCard
          title="Progress"
          value="70%"
          icon={<FaChartLine size={24} />}
          className="shadow-lg hover:shadow-xl transition-shadow p-4 rounded-lg bg-white flex items-center"
        />
      </div>

      {/* Progress Overview Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-full overflow-hidden">
        <h2 className="text-2xl font-semibold mb-4">Progress Overview</h2>
        <ProgressChart data={progress} />
      </div>
    </div>
  );
};

export default Home;
