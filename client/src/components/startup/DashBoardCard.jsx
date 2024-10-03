import React from "react";

const DashboardCard = ({ title, value, icon }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 flex items-center">
      <div className="p-4 bg-blue-500 text-white rounded-lg mr-4">{icon}</div>
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-2xl font-bold">{value}</p>
      </div>
    </div>
  );
};

export default DashboardCard;
