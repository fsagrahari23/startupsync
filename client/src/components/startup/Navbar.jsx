import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white h-screen w-64 flex flex-col p-4">
      <h2 className="text-2xl font-bold mb-8">Startup Portal</h2>
      <nav className="space-y-4">
        <Link to="/dashboard" className="block text-lg hover:underline">
          Dashboard
        </Link>
        <Link to="/kyc" className="block text-lg hover:underline">
          KYC
        </Link>
        <Link to="/progress" className="block text-lg hover:underline">
          Progress
        </Link>
        <Link to="/reports" className="block text-lg hover:underline">
          Reports
        </Link>
        <Link to="/notifications" className="block text-lg hover:underline">
          Notifications
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
