import { Button } from "@/components/ui/button";
import React, { useState } from "react";

const EIRGrantPage = () => {
  const [grantData, setGrantData] = useState({
    schemeName: "",
    selectionStatus: "",
    fundDisbursal: "",
  });

  const handleChange = (e) => {
    setGrantData({
      ...grantData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle grant scheme form submission
    console.log("Grant Data:", grantData);
    // Optionally, show a success message or reset the form
    alert("Grant Data Submitted Successfully!");
    setGrantData({
      schemeName: "",
      selectionStatus: "",
      fundDisbursal: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 max-w-lg w-full mx-auto bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105 duration-300"
    >
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
        EIR & Grant Schemes
      </h2>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Scheme Name
        </label>
        <input
          name="schemeName"
          value={grantData.schemeName}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500 transition duration-200 ease-in-out"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Selection Status
        </label>
        <select
          name="selectionStatus"
          value={grantData.selectionStatus}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500 transition duration-200 ease-in-out"
          required
        >
          <option value="" disabled>
            Select Status
          </option>
          <option value="Selected">Selected</option>
          <option value="Not Selected">Not Selected</option>
          <option value="Pending">Pending</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Fund Disbursal
        </label>
        <input
          name="fundDisbursal"
          value={grantData.fundDisbursal}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500 transition duration-200 ease-in-out"
          required
        />
      </div>
      <Button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition duration-200 ease-in-out"
      >
        Submit
      </Button>
      <p className="mt-4 text-center text-sm text-gray-600">
        By submitting, you agree to our terms and conditions.
      </p>
    </form>
  );
};

export default EIRGrantPage;
