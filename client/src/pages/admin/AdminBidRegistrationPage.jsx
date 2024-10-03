// src/components/AdminBiddingRegistration.js
import React, { useState } from "react";

const AdminBiddingRegistration = () => {
  const [registrationData, setRegistrationData] = useState({
    startupName: "",
    adminName: "",
    email: "",
    eventId: "",
    bidAmount: "",
    valuation: "",
    reach: "",
    futurePlans: "",
  });

  const handleRegistrationSubmit = (e) => {
    e.preventDefault();
    alert(`Registration submitted for ${registrationData.startupName} to bid!`);
    setRegistrationData({
      startupName: "",
      adminName: "",
      email: "",
      eventId: "",
      bidAmount: "",
      valuation: "",
      reach: "",
      futurePlans: "",
    });
  };

  // Sample events (static data)
  const events = [
    { id: "1", title: "Tech Startup Bidding", date: "2024-10-15T14:00" },
    { id: "2", title: "Health Startup Bidding", date: "2024-10-20T10:00" },
    {
      id: "3",
      title: "Green Energy Startup Bidding",
      date: "2024-10-25T16:00",
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Bidding Registration</h1>
      <form onSubmit={handleRegistrationSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Startup Name"
          value={registrationData.startupName}
          onChange={(e) =>
            setRegistrationData({
              ...registrationData,
              startupName: e.target.value,
            })
          }
          className="border border-gray-300 p-2 rounded w-full"
          required
        />
        <input
          type="text"
          placeholder="Admin Name"
          value={registrationData.adminName}
          onChange={(e) =>
            setRegistrationData({
              ...registrationData,
              adminName: e.target.value,
            })
          }
          className="border border-gray-300 p-2 rounded w-full"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={registrationData.email}
          onChange={(e) =>
            setRegistrationData({ ...registrationData, email: e.target.value })
          }
          className="border border-gray-300 p-2 rounded w-full"
          required
        />
        <select
          value={registrationData.eventId}
          onChange={(e) =>
            setRegistrationData({
              ...registrationData,
              eventId: e.target.value,
            })
          }
          className="border border-gray-300 p-2 rounded w-full"
          required
        >
          <option value="" disabled>
            Select Bidding Event
          </option>
          {events.map((event) => (
            <option key={event.id} value={event.id}>
              {event.title} - {new Date(event.date).toLocaleString()}
            </option>
          ))}
        </select>
        <input
          type="number"
          placeholder="Bid Amount"
          value={registrationData.bidAmount}
          onChange={(e) =>
            setRegistrationData({
              ...registrationData,
              bidAmount: e.target.value,
            })
          }
          className="border border-gray-300 p-2 rounded w-full"
          required
        />
        <input
          type="number"
          placeholder="Company Valuation"
          value={registrationData.valuation}
          onChange={(e) =>
            setRegistrationData({
              ...registrationData,
              valuation: e.target.value,
            })
          }
          className="border border-gray-300 p-2 rounded w-full"
          required
        />
        <input
          type="text"
          placeholder="Reach (Audience Size)"
          value={registrationData.reach}
          onChange={(e) =>
            setRegistrationData({ ...registrationData, reach: e.target.value })
          }
          className="border border-gray-300 p-2 rounded w-full"
          required
        />
        <textarea
          placeholder="Future Plans"
          value={registrationData.futurePlans}
          onChange={(e) =>
            setRegistrationData({
              ...registrationData,
              futurePlans: e.target.value,
            })
          }
          className="border border-gray-300 p-2 rounded w-full"
          rows="4"
          required
        ></textarea>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Register for Bidding
        </button>
      </form>
    </div>
  );
};

export default AdminBiddingRegistration;
