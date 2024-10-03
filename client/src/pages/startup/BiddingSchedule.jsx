import React, { useState } from "react";

const BiddingSchedule = () => {
  // Dummy schedule data
  const scheduleData = [
    {
      id: 1,
      companyName: "Tech Innovators",
      valuation: "1M USD",
      equity: "10%",
      reach: "Global",
      date: "2024-10-10",
      time: "12:00 PM",
    },
    {
      id: 2,
      companyName: "Eco Ventures",
      valuation: "500K USD",
      equity: "15%",
      reach: "National",
      date: "2024-10-12",
      time: "02:00 PM",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Bidding Schedule</h2>

      <table className="min-w-full table-auto">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">Company Name</th>
            <th className="px-4 py-2">Valuation</th>
            <th className="px-4 py-2">Equity</th>
            <th className="px-4 py-2">Market Reach</th>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Time</th>
          </tr>
        </thead>
        <tbody>
          {scheduleData.map((schedule) => (
            <tr key={schedule.id} className="text-center">
              <td className="border px-4 py-2">{schedule.companyName}</td>
              <td className="border px-4 py-2">{schedule.valuation}</td>
              <td className="border px-4 py-2">{schedule.equity}</td>
              <td className="border px-4 py-2">{schedule.reach}</td>
              <td className="border px-4 py-2">{schedule.date}</td>
              <td className="border px-4 py-2">{schedule.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BiddingSchedule;
