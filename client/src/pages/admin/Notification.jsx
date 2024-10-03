// Admin.js or another parent component
import NotificationSenderpage from "@/components/admin/NotificationSenderpage";
import React from "react";

const NotificationPage = () => {
  const users = [
    { id: 1, name: "User One" },
    { id: 2, name: "User Two" },
    { id: 3, name: "User Three" },
    // Add more users as needed
  ];

  return (
    <div className="mx-auto container">
      {/* Other components like dashboard, analytics, etc. */}
      <NotificationSenderpage users={users} />
    </div>
  );
};

export default NotificationPage;
