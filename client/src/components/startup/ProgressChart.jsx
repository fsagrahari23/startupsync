import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
  Filler, // Import the Filler plugin
} from "chart.js";

// Register the necessary components, including the Filler plugin
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
  Filler // Register the Filler plugin
);

const ProgressChart = () => {
  const progressData = [
    { month: "January", progress: 20 },
    { month: "February", progress: 35 },
    { month: "March", progress: 45 },
    { month: "April", progress: 60 },
    { month: "May", progress: 70 },
    { month: "June", progress: 80 },
    { month: "July", progress: 90 },
    { month: "August", progress: 95 },
    { month: "September", progress: 100 },
  ];

  const chartData = {
    labels: progressData.map((item) => item.month),
    datasets: [
      {
        label: "Startup Progress (%)",
        data: progressData.map((item) => item.progress),
        borderColor: "rgba(75,192,192,1)",
        backgroundColor: "rgba(75,192,192,0.2)", // This will apply the fill
        fill: true, // Enable the fill option
        tension: 0.3, // Optional: Smoothness in the line
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
      },
    },
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
    },
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <Line data={chartData} options={options} />
    </div>
  );
};

export default ProgressChart;
