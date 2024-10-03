// NotificationSenderPage.js
import React, { useState } from "react";

const NotificationSenderpage = ({ users }) => {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [recipients, setRecipients] = useState([]);

  const handleRecipientChange = (userId) => {
    setRecipients((prev) => {
      if (prev.includes(userId)) {
        return prev.filter((id) => id !== userId);
      } else {
        return [...prev, userId];
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !message || recipients.length === 0) {
      alert("Please fill all fields and select recipients.");
      return;
    }

    // Here, you would send the notification to the selected recipients

    console.log("Title:", title);
    console.log("Message:", message);

    // Clear the form after sending
    setTitle("");
    setMessage("");
    setRecipients([]);
  };

  return (
    <div className="p-6  bg-gray-100 min-h-screen">
      <h1 className="text-3xl  font-bold mb-4">Send Notification</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-lg"
      >
        <div className="mb-4">
          <label className="block text-lg font-semibold mb-2">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-lg font-semibold mb-2">Message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
            rows="4"
            required
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block text-lg font-semibold mb-2">
            Select Recipients
          </label>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-all duration-300"
        >
          Send Notification
        </button>
      </form>
    </div>
  );
};

export default NotificationSenderpage;
