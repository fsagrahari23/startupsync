// ReportsPage.js
import React, { useState, useEffect } from "react";

const ReportsPage = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    fetchReports();
  }, []);

  const fetchReports = () => {
    // Simulated data fetching
    const fetchedReports = [
      {
        id: 1,
        title: "Quarterly Progress Report",
        submittedBy: "TechUp",
        date: "2024-09-29",
        fileUrl: "https://example.com/report1.pdf",
      },
      {
        id: 2,
        title: "Funding Utilization Report",
        submittedBy: "EcoSolutions",
        date: "2024-09-30",
        fileUrl: "https://example.com/report2.pdf",
      },
      {
        id: 3,
        title: "Annual Review Report",
        submittedBy: "Innovatech",
        date: "2024-09-28",
        fileUrl: "https://example.com/report3.pdf",
      },
      // Add more reports as needed
    ];

    setReports(fetchedReports);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Submitted Reports</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2">Title</th>
              <th className="py-2">Submitted By</th>
              <th className="py-2">Submission Date</th>
              <th className="py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report) => (
              <tr
                key={report.id}
                className="hover:bg-gray-100 transition duration-200"
              >
                <td className="py-2">{report.title}</td>
                <td className="py-2">{report.submittedBy}</td>
                <td className="py-2">{report.date}</td>
                <td className="py-2 flex justify-evenly">
                  <a
                    href={report.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-all duration-300"
                  >
                    View
                  </a>
                  <button
                    onClick={() => handleDownload(report.fileUrl)}
                    className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-all duration-300"
                  >
                    Download
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  function handleDownload(fileUrl) {
    // You can add more complex logic here if needed
    window.open(fileUrl, "_blank");
  }
};

export default ReportsPage;
