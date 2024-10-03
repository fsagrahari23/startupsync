import React, { useState } from "react";
import {
  FaEdit,
  FaCheck,
  FaBriefcase,
  FaUser,
  FaChartLine,
} from "react-icons/fa";
import ProgressChart from "@/components/startup/ProgressChart";
import { Button } from "@/components/ui/button";

const StartupProfile = () => {
  const [editMode, setEditMode] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "TechStart Inc.",
    founder: "John Doe",
    industry: "Tech Solutions",
    email: "contact@techstart.com",
    phone: "+1 234 567 890",
    description:
      "Providing cutting-edge tech solutions for businesses worldwide.",
  });

  const [progress, setProgress] = useState([
    { month: "January", progress: 50 },
    { month: "February", progress: 60 },
    { month: "March", progress: 70 },
    { month: "April", progress: 80 },
    { month: "May", progress: 90 },
    { month: "June", progress: 100 },
  ]);

  const handleChange = (e) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value,
    });
  };

  const toggleEditMode = () => setEditMode(!editMode);

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105 duration-300">
      {/* Profile Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          {editMode ? (
            <input
              className="w-full px-2 py-1 border-b border-gray-300 outline-none"
              type="text"
              name="name"
              value={profileData.name}
              onChange={handleChange}
            />
          ) : (
            profileData.name
          )}
        </h2>
        <Button
          onClick={toggleEditMode}
          className="bg-blue-500 hover:bg-blue-600 text-white flex items-center"
        >
          {editMode ? (
            <FaCheck className="mr-2" />
          ) : (
            <FaEdit className="mr-2" />
          )}{" "}
          {editMode ? "Save" : "Edit"}
        </Button>
      </div>

      {/* Business Details */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-700 mb-2">
          Business Information
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <FaUser className="text-blue-500 inline-block mr-2" /> Founder:{" "}
            {editMode ? (
              <input
                className="px-2 py-1 border-b border-gray-300 outline-none"
                type="text"
                name="founder"
                value={profileData.founder}
                onChange={handleChange}
              />
            ) : (
              profileData.founder
            )}
          </div>
          <div>
            <FaBriefcase className="text-blue-500 inline-block mr-2" />{" "}
            Industry:{" "}
            {editMode ? (
              <input
                className="px-2 py-1 border-b border-gray-300 outline-none"
                type="text"
                name="industry"
                value={profileData.industry}
                onChange={handleChange}
              />
            ) : (
              profileData.industry
            )}
          </div>
          <div>
            <FaUser className="text-blue-500 inline-block mr-2" /> Email:{" "}
            {editMode ? (
              <input
                className="px-2 py-1 border-b border-gray-300 outline-none"
                type="email"
                name="email"
                value={profileData.email}
                onChange={handleChange}
              />
            ) : (
              profileData.email
            )}
          </div>
          <div>
            <FaUser className="text-blue-500 inline-block mr-2" /> Phone:{" "}
            {editMode ? (
              <input
                className="px-2 py-1 border-b border-gray-300 outline-none"
                type="text"
                name="phone"
                value={profileData.phone}
                onChange={handleChange}
              />
            ) : (
              profileData.phone
            )}
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-700 mb-2">
          About the Company
        </h3>
        {editMode ? (
          <textarea
            name="description"
            className="w-full p-2 border border-gray-300 rounded-md outline-none focus:ring focus:ring-blue-500"
            value={profileData.description}
            onChange={handleChange}
            rows="4"
          />
        ) : (
          <p className="text-gray-600">{profileData.description}</p>
        )}
      </div>

      {/* Progress Section */}
      <div className="mb-6 bg-gray-100 p-4 rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">
          <FaChartLine className="inline-block text-blue-500 mr-2" /> Progress
          Overview
        </h3>
        <ProgressChart data={progress} />
      </div>
    </div>
  );
};

export default StartupProfile;
