import React, { useState } from "react";

const NotificationPage = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "success",
      message: "Your profile has been updated successfully!",
    },
    {
      id: 2,
      type: "error",
      message: "Failed to fetch data. Please try again later.",
    },
    {
      id: 3,
      type: "info",
      message: "New features have been added to your dashboard.",
    },
  ]);

  // Function to remove notification
  const removeNotification = (id) => {
    setNotifications((prev) =>
      prev.filter((notification) => notification.id !== id)
    );
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <div className="w-full max-w-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">Notifications</h1>
        <div className="space-y-4">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={`flex items-center p-4 rounded-lg shadow-md transition-transform duration-300 ease-in-out ${
                notification.type === "success"
                  ? "bg-green-100 border-l-4 border-green-500"
                  : notification.type === "error"
                  ? "bg-red-100 border-l-4 border-red-500"
                  : "bg-blue-100 border-l-4 border-blue-500"
              } transform hover:scale-105`}
            >
              <div className="flex-grow">
                <p className="text-lg">{notification.message}</p>
              </div>
              <button
                onClick={() => removeNotification(notification.id)}
                className="ml-4 text-gray-500 hover:text-gray-800 transition-colors"
              >
                &#10006; {/* Close icon */}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotificationPage;
