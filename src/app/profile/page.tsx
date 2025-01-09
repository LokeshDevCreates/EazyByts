"use client";

import React, { useState, useEffect, useRef } from "react";
import { Line } from "react-chartjs-2";
import { useRouter } from "next/navigation"; // Correct navigation hook
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface Project {
  name: string;
  description: string;
  completionDate: string;
  status: "Completed" | "Ongoing";
}

interface DashboardData {
  metrics: { [key: string]: number };
  recentProjects: Project[];
  performanceOverTime: { date: string; value: number }[];
}

const Profile: React.FC = () => {
  const router = useRouter(); // Next.js router for navigation
  const [data, setData] = useState<DashboardData | null>(null);
  const [filter, setFilter] = useState<"All" | "Completed" | "Ongoing">("All");
  const recentProjectsRef = useRef<HTMLDivElement | null>(null);

  const handleGoToHome = () => {
    router.push("/"); // Navigate back to the home page
  };

  useEffect(() => {
    const fetchedData: DashboardData = {
      metrics: {
        totalProjects: 20,
        completedProjects: 15,
        ongoingProjects: 5,
      },
      recentProjects: [
        {
          name: "Portfolio Integrated with CMS",
          description: "Dynamic and organized portfolio powered by a robust CMS for easy updates and maintenance.",
          completionDate: "soon",
          status: "Ongoing",
        },
        {
          name: "My Personal Portfolio",
          description: "A digital showcase of my work, combining functionality and simplicity to highlight accomplishments.",
          completionDate: "2024-08-15",
          status: "Completed",
        },
        {
          name: "React Projects",
          description: "Dynamic and responsive web applications built with modern tools and best practices.",
          completionDate: "2024-09-09",
          status: "Completed",
        },
        {
          name: "Personal Finance Tracker",
          description: "A web app for managing finances with insights into spending patterns and budgeting tools.",
          completionDate: "soon",
          status: "Ongoing",
        },
        {
          name: "E-commerce App",
          description: "Full-stack e-commerce application with product listings, authentication, and secure payments.",
          completionDate: "soon",
          status: "Ongoing",
        },
      ],
      performanceOverTime: [
        { date: "2023-05-22", value: 50 },
        { date: "2024-02-15", value: 60 },
        { date: "2024-12-01", value: 80 },
      ],
    };

    setData(fetchedData);
  }, []);

  if (!data) return <div className="text-center text-xl font-semibold text-gray-700">Loading...</div>;

  const filteredProjects =
    filter === "All"
      ? data.recentProjects
      : data.recentProjects.filter((project) => project.status === filter);

  const chartData = {
    labels: data.performanceOverTime.map((entry) => entry.date),
    datasets: [
      {
        label: "Performance Over Time",
        data: data.performanceOverTime.map((entry) => entry.value),
        fill: true,
        backgroundColor: "rgba(79, 70, 229, 0.2)",
        borderColor: "#4F46E5",
        pointBackgroundColor: "#4F46E5",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "#4F46E5",
        tension: 0.4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
        labels: {
          color: "#4F46E5",
          font: {
            size: 14,
            weight: "bold" as const,
          },
        },
      },
      title: {
        display: true,
        text: "Performance Over Time",
        color: "#4F46E5",
        font: {
          size: 20,
          weight: "bold" as const,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#4F46E5",
          font: {
            size: 12,
          },
        },
        grid: {
          color: "rgba(79, 70, 229, 0.1)",
        },
      },
      y: {
        ticks: {
          color: "#4F46E5",
          font: {
            size: 12,
          },
        },
        grid: {
          color: "rgba(79, 70, 229, 0.1)",
        },
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-xl max-w-4xl w-full p-6">
        {/* Welcome Section */}
        <div className="bg-blue-100 text-blue-900 p-4 rounded-lg shadow-md mb-8 flex justify-between items-center">
          <div>
            <h2 className="text-xl font-semibold">Welcome to My Dashboard</h2>
            <p className="text-sm text-gray-700 mt-2">
              Explore my projects and performance. Feel free to download my resume below.
            </p>
          </div>
          <button
            onClick={handleGoToHome}
            className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            Go to Home
          </button>
        </div>

        {/* Metrics Section */}
        <div className="metrics mb-10">
          <h2 className="text-2xl font-medium text-gray-700 mb-4">Metrics</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-indigo-100 text-indigo-900 p-4 rounded-md shadow-sm hover:bg-indigo-200">
              Total Projects: {data.metrics.totalProjects}
            </div>
            <div className="bg-green-100 text-green-900 p-4 rounded-md shadow-sm hover:bg-green-200">
              Completed Projects: {data.metrics.completedProjects}
            </div>
            <div className="bg-yellow-100 text-yellow-900 p-4 rounded-md shadow-sm hover:bg-yellow-200">
              Ongoing Projects: {data.metrics.ongoingProjects}
            </div>
          </div>
        </div>

        {/* Recent Projects Section */}
        <div className="recent-projects mb-10" ref={recentProjectsRef}>
          <h2 className="text-2xl font-medium text-gray-700 mb-4">Recent Projects</h2>
          <div className="mb-4 flex space-x-4">
            {["All", "Completed", "Ongoing"].map((status) => (
              <button
                key={status}
                onClick={() => setFilter(status as "All" | "Completed" | "Ongoing")}
                className={`px-4 py-2 rounded-md shadow-sm font-semibold ${
                  filter === status ? `bg-blue-600 text-white` : "bg-gray-200 text-gray-700"
                }`}
              >
                {status}
              </button>
            ))}
          </div>
          <ul className="space-y-6">
            {filteredProjects.map((project, index) => (
              <li
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-800">{project.name}</h3>
                <p className="text-gray-600">{project.description}</p>
                <p className="text-gray-500 text-sm mt-2">
                  Completed on: {project.completionDate}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Performance Chart */}
        <div className="performance-over-time mb-10">
          <h2 className="text-2xl font-medium text-gray-700 mb-4">Performance Over Time</h2>
          <div className="w-full h-80 bg-gray-200 rounded-lg p-4">
            <Line data={chartData} options={chartOptions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
