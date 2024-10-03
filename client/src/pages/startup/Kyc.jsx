import KycForm from "@/components/startup/KycForm";

import React from "react";

const KYC = () => {
  const handleKycSubmit = (data) => {
    // Handle KYC form submission
    console.log("KYC Form Data:", data);
  };

  return (
    <div className="flex min-h-screen mx-auto w-full">
      <div className="flex-grow p-6 bg-gray-100">
        <h1 className="text-3xl text-center font-bold mb-3">KYC Submission</h1>
        <KycForm onSubmit={handleKycSubmit} />
      </div>
    </div>
  );
};

export default KYC;
