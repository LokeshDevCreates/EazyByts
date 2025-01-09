import React from "react";
import ProjectCarousel from "@/app/dashboard/ProjectCarousel";
const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">Projects</h1>
      <p className="text-gray-700 text-justify text-3xl pb-7">
          Welcome to my project showcase! Here, you'll find some of the most
          exciting projects I've worked on, ranging from web applications to
          full-stack solutions. Each project reflects my skills, creativity,
          and commitment to delivering high-quality solutions.
        </p>
      <ProjectCarousel />
    </div>
  );
};
export default Dashboard