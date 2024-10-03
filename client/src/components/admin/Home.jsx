import React, { useState, useEffect } from "react";
import Pagination from "./Pagination";
import Modal from "./Modal";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

// Register the chart components
Chart.register(ArcElement, Tooltip, Legend);

const AdminDashboard = () => {
  const [startups, setStartups] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [startupsPerPage] = useState(5);
  const [totalPages, setTotalPages] = useState(0);
  const [selectedStartup, setSelectedStartup] = useState(null); // For viewing details
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchStartups();
  }, [currentPage]);

  const fetchStartups = () => {
    // Simulating fetched data
    const fetchedStartups = [
      {
        id: 1,
        name: "TechUp",
        progress: 70,
        grant: "Pending",
        description: "Tech-based startup",
        address: "123 Street, City",
      },
      {
        id: 2,
        name: "EduPlus",
        progress: 85,
        grant: "Approved",
        description: "Education solutions",
        address: "456 Avenue, City",
      },
      {
        id: 3,
        name: "EcoSolutions",
        progress: 45,
        grant: "Pending",
        description: "Eco-friendly solutions",
        address: "789 Road, City",
      },
      {
        id: 4,
        name: "MedicoHub",
        progress: 95,
        grant: "Approved",
        description: "Medical innovations",
        address: "101 Street, City",
      },
      {
        id: 5,
        name: "GreenTech",
        progress: 60,
        grant: "Pending",
        description: "Green technology",
        address: "202 Boulevard, City",
      },
      // More startups...
    ];

    const totalFetched = fetchedStartups.length;
    setTotalPages(Math.ceil(totalFetched / startupsPerPage));

    const startIndex = (currentPage - 1) * startupsPerPage;
    const endIndex = startIndex + startupsPerPage;
    setStartups(fetchedStartups.slice(startIndex, endIndex));
  };

  const handleEdit = (id) => {
    console.log(`Editing startup ${id}`);
  };

  const handleDelete = (id) => {
    console.log(`Deleting startup ${id}`);
  };

  const handleView = (startup) => {
    setSelectedStartup(startup);
    setIsModalOpen(true);
  };

  const getProgressChartData = (progress) => {
    return {
      labels: ["Completed", "Remaining"],
      datasets: [
        {
          data: [progress, 100 - progress],
          backgroundColor: ["#4CAF50", "#ddd"],
          hoverBackgroundColor: ["#388E3C", "#bbb"],
        },
      ],
    };
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard - Startups</h1>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Startups</h2>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2">Name</th>
              <th className="py-2">Progress</th>
              <th className="py-2">Grant Status</th>
              <th className="py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {startups.map((startup) => (
              <tr
                key={startup.id}
                className="hover:bg-gray-100 transition duration-200"
              >
                <td className="py-2">{startup.name}</td>
                <td className="py-2">
                  <div className="w-full bg-gray-200 rounded-full">
                    <div
                      className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                      style={{ width: `${startup.progress}%` }}
                    >
                      {startup.progress}%
                    </div>
                  </div>
                </td>
                <td className="py-2">
                  <select
                    value={startup.grant}
                    onChange={(e) => console.log(e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
                  >
                    <option value="Pending">Pending</option>
                    <option value="Approved">Approved</option>
                    <option value="Rejected">Rejected</option>
                  </select>
                </td>
                <td className="py-2 flex justify-evenly">
                  <button
                    onClick={() => handleView(startup)}
                    className="bg-blue-400 text-white px-4 py-2 rounded-md hover:bg-blue-500 transition-all duration-300 flex items-center"
                  >
                    <FaEye className="mr-2" /> View
                  </button>

                  <button
                    onClick={() => handleDelete(startup.id)}
                    className="bg-red-400 text-white px-4 py-2 rounded-md hover:bg-red-500 transition-all duration-300 flex items-center"
                  >
                    <FaTrash className="mr-2" /> Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />

      {isModalOpen && selectedStartup && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <div className="p-6">
            <h2 className="text-xl font-bold mb-4">{selectedStartup.name}</h2>
            <p className="mb-2">
              <strong>Description:</strong> {selectedStartup.description}
            </p>
            <p className="mb-2">
              <strong>Address:</strong> {selectedStartup.address}
            </p>
            <p className="mb-2">
              <strong>Grant Status:</strong> {selectedStartup.grant}
            </p>

            {/* Progress Chart */}
            <div className="mb-4">
              <strong>Progress:</strong>
              <div className="w-64 h-64 mx-auto my-4">
                <Doughnut
                  data={getProgressChartData(selectedStartup.progress)}
                />
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default AdminDashboard;
