import React, { useState } from "react";
import { Button } from "../ui/button";

const ProgressForm = ({ onSubmit }) => {
  const [progressData, setProgressData] = useState({
    milestone: "",
    status: "",
    pdfFile: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProgressData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setProgressData((prev) => ({
      ...prev,
      pdfFile: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create FormData to send the file along with other data
    const formData = new FormData();
    formData.append("milestone", progressData.milestone);
    formData.append("status", progressData.status);
    formData.append("pdfFile", progressData.pdfFile);

    onSubmit(formData); // Pass the FormData to the parent component
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-50 flex-col">
      <h2 className="text-2xl font-bold text-center mb-14">Progress Report</h2>
      <form
        onSubmit={handleSubmit}
        className="p-4 w-full max-w-lg  bg-white shadow-lg rounded-lg"
      >
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Milestone
          </label>
          <input
            name="milestone"
            value={progressData.milestone}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Status
          </label>
          <input
            name="status"
            value={progressData.status}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Upload PDF Report
          </label>
          <input
            type="file"
            accept=".pdf"
            onChange={handleFileChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
            required
          />
        </div>

        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default ProgressForm;
