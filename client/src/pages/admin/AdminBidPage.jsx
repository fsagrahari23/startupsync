// src/components/AdminBiddingPage.js
import React, { useState } from 'react';
import AdminBiddingRegistration from './AdminBidRegistrationPage'

const AdminBiddingPage = () => {
  const [newEvent, setNewEvent] = useState({ title: '', date: '' });
  
  // Sample existing bidding events (static data)
  const events = [
    { id: '1', title: 'Tech Startup Bidding', date: '2024-10-15T14:00' },
    { id: '2', title: 'Health Startup Bidding', date: '2024-10-20T10:00' },
    { id: '3', title: 'Green Energy Startup Bidding', date: '2024-10-25T16:00' },
  ];

  const handleEventSubmit = (e) => {
    e.preventDefault();
    alert('Bidding event created successfully!');
    setNewEvent({ title: '', date: '' });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Bidding Management</h1>
      
      <form onSubmit={handleEventSubmit} className="mb-4">
        <input
          type="text"
          placeholder="Event Title"
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
          className="border border-gray-300 p-2 rounded mr-2"
          required
        />
        <input
          type="datetime-local"
          value={newEvent.date}
          onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
          className="border border-gray-300 p-2 rounded mr-2"
          required
        />
        <button type="submit" className="bg-green-500 text-white p-2 rounded">
          Create Bidding Event
        </button>
      </form>

      <h2 className="text-xl font-semibold mb-2">Existing Bidding Events</h2>
      <div className="space-y-4">
        {events.map((event) => (
          <div key={event.id} className="border p-4 rounded shadow-md">
            <h3 className="text-lg font-semibold">{event.title}</h3>
            <p>Date: {new Date(event.date).toLocaleString()}</p>
            <button className="bg-red-500 text-white p-2 rounded mt-2">Delete Event</button>
          </div>
        ))}
      </div>

      <h2 className="text-xl font-semibold mt-6 mb-2">Register for Bidding</h2>
      <AdminBiddingRegistration />
    </div>
  );
};

export default AdminBiddingPage;
