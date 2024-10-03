// src/components/UserBiddingPage.js
import React, { useState } from "react";
import StartupBiddingForm from "./StartupBiddingForm";
import BiddingSchedule from "./BiddingSchedule";

const UserBiddingPage = () => {
  const [bidData, setBidData] = useState({ eventId: "", amount: "" });

  // Sample bidding events (static data)
  const events = [
    { id: "1", title: "Tech Startup Bidding", date: "2024-10-15T14:00" },
    { id: "2", title: "Health Startup Bidding", date: "2024-10-20T10:00" },
    {
      id: "3",
      title: "Green Energy Startup Bidding",
      date: "2024-10-25T16:00",
    },
  ];

  const handleBidSubmit = (e) => {
    e.preventDefault();
    alert(`Bid of ${bidData.amount} placed for event ID ${bidData.eventId}!`);
    setBidData({ eventId: "", amount: "" });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Bidding Page for Startups
      </h1>
      <div className="space-y-4">
        <StartupBiddingForm />
        <BiddingSchedule />
      </div>
    </div>
  );
};

export default UserBiddingPage;
