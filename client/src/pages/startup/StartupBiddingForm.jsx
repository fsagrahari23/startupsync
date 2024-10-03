import React, { useState } from "react";

const StartupBiddingForm = () => {
  const [formData, setFormData] = useState({
    company: "",
    valuation: "",
    equity: "",
    reach: "",
    plans: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add logic to send data to backend for registration
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Startup Bidding Registration</h2>

      <form onSubmit={handleSubmit}>
        {/* Company Name */}
        <div className="mb-4">
          <label
            htmlFor="company"
            className="block text-sm font-medium text-gray-700"
          >
            Company Name
          </label>
          <input
            type="text"
            id="company"
            value={formData.company}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            placeholder="Enter your company name"
          />
        </div>

        {/* Valuation */}
        <div className="mb-4">
          <label
            htmlFor="valuation"
            className="block text-sm font-medium text-gray-700"
          >
            Company Valuation
          </label>
          <input
            type="text"
            id="valuation"
            value={formData.valuation}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            placeholder="Enter your company's valuation"
          />
        </div>

        {/* Equity */}
        <div className="mb-4">
          <label
            htmlFor="equity"
            className="block text-sm font-medium text-gray-700"
          >
            Equity Offered (%)
          </label>
          <input
            type="number"
            id="equity"
            value={formData.equity}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            placeholder="Enter percentage of equity offered"
          />
        </div>

        {/* Reach */}
        <div className="mb-4">
          <label
            htmlFor="reach"
            className="block text-sm font-medium text-gray-700"
          >
            Market Reach
          </label>
          <input
            type="text"
            id="reach"
            value={formData.reach}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            placeholder="Describe your market reach"
          />
        </div>

        {/* Future Plans */}
        <div className="mb-4">
          <label
            htmlFor="plans"
            className="block text-sm font-medium text-gray-700"
          >
            Future Plans
          </label>
          <textarea
            id="plans"
            rows="4"
            value={formData.plans}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            placeholder="Describe your future plans"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
        >
          Register for Bidding
        </button>
      </form>
    </div>
  );
};

export default StartupBiddingForm;
