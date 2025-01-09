"use client";
import React from 'react';
const img1="/images/project10.jpg";
const img2="/images/project11.jpg";
const img3="/images/project12.jpg";
const Achievements = () => {
  return (
    <div className="p-6">
      <h1 className="flex justify-center items-center text-4xl mb-10 font-bold">Achievements</h1>

      <div className="flex flex-wrap justify-center gap-8">
        {/* NPTEL */}
        <div className="w-full sm:w-96 md:w-1/3 lg:w-1/3 xl:w-1/4 bg-slate-400 border-4 border-white p-6 rounded-lg flex flex-col justify-between h-96">
          <div className="text-center mb-4">
            <h1 className="text-2xl font-semibold">NPTEL</h1>
          </div>
          <div className="flex justify-center items-center">
            <img src={img1} alt="NPTEL Logo" className="max-w-full max-h-40 object-contain" />
          </div>
          <div className="pt-4">
            <p className="text-white text-center text-lg">
              Certified in Programming in Java from NPTEL (National Programme on Technology Enhanced Learning).
            </p>
          </div>
        </div>

        {/* Hackerrank */}
        <div className="w-full sm:w-96 md:w-1/3 lg:w-1/3 xl:w-1/4 bg-slate-400 border-4 border-white p-6 rounded-lg flex flex-col justify-between h-96">
          <div className="text-center mb-4">
            <h1 className="text-2xl font-semibold">HackerRank</h1>
          </div>
          <div className="flex justify-center items-center">
            <img src={img2} alt="Hackerrank Logo" className="max-w-full max-h-40 object-contain" />
          </div>
          <p className="text-white text-center text-lg">
            Earned certifications in SQL and CSS from HackerRank, along with badges in Java and C, showcasing proficiency in these  programming languages.
          </p>
        </div>

        {/* Certifications in languages*/}
        <div className="w-full sm:w-96 md:w-1/3 lg:w-1/3 xl:w-1/4 bg-slate-400 border-4 border-white p-6 rounded-lg flex flex-col justify-between h-96">
          <div className="text-center ml-1 mb-2">
            <h1 className="text-2xl font-semibold">Programming Languages</h1>
          </div>
          <div className="flex justify-center items-center">
            <img src={img3} alt="Languages Logo" className="max-w-full max-h-40 object-contain" />
          </div>
          <p className="text-white text-center text-lg">
            Achieved certifications in programming languages including C, C++, Java, and Python, demonstrating strong foundational and advanced coding skills.
          </p>
        </div>

        {/* UI/UX */}
        <div className="w-full sm:w-96 md:w-1/3 lg:w-1/3 xl:w-1/4 bg-slate-400 border-4 border-white p-6 rounded-lg flex flex-col justify-between h-96">
          <div className="text-center mb-4">
            <h1 className="text-2xl font-semibold">UI/UX Design</h1>
          </div>
          <div className="flex justify-center items-center">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdoIaWlxCor8mAXOEPNPOL0cWetQvhMVwuKQ&s" alt="UI/UX Logo" className="max-w-full max-h-40 object-contain" />
          </div>
          <div className="pt-4">
            <p className="text-white text-center text-lg">
            Successfully completed a course on UI/UX design from NSIC, gaining insights into user interface and design principles.
            </p>
          </div>
        </div>

        {/* Infosys SpringBoard */}
        <div className="w-full sm:w-96 md:w-1/3 lg:w-1/3 xl:w-1/4 bg-slate-400 border-4 border-white p-6 rounded-lg flex flex-col justify-between h-96">
          <div className="text-center mb-4">
            <h1 className="text-2xl font-semibold">Infosys SpringBoard</h1>
          </div>
          <div className="flex justify-center items-center">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS95Z4YVYbM6SAVHtlkuUqaFnyVFoQG54p-7A&s" alt="Infosys logo" className="max-w-full max-h-40 object-contain" />
          </div>
          <p className="text-white text-center text-lg">
          Certified in Java, DSA with Python, and various courses from Infosys Springboard, highlighting programming expertise.
          </p>
        </div>

        {/* Leetcode */}
        <div className="w-full sm:w-96 md:w-1/3 lg:w-1/3 xl:w-1/4 bg-slate-400 border-4 border-white p-6 rounded-lg flex flex-col justify-between h-96">
          <div className="text-center ml-1 mb-2">
            <h1 className="text-2xl font-semibold">Leetcode</h1>
          </div>
          <div className="flex justify-center items-center">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvhFQX5MMDl81fsQPbYdEnsO0g8d6QWdjQ5g&s" alt="Leetcode Logo" className="max-w-full max-h-40 object-contain" />
          </div>
          <p className="text-white text-center text-lg">
          Solved numerous problems on LeetCode, including successfully completing the 30 Days of JavaScript Challenge, enhancing problem-solving and coding skills.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
