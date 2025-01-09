"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  "/images/project1.jpg",
  "/images/project2.jpg",
  "/images/project3.jpg",
  "/images/project4.jpg",
  "/images/project5.jpg",
  "/images/project6.jpg",
];

const images2 = [
  "/images/project7.jpg",
  "/images/project8.jpg",
  "/images/project9.jpg",
];

const ProjectCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="w-full min-h-screen px-4 py-8">
      {/* First Carousel Section */}
      <div className="pt-20 flex flex-col md:flex-row items-center md:items-start mb-12">
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl font-bold text-center md:text-left mb-6">
            My Portfolio Project
          </h2>
          <div className="max-w-xl mx-auto">
            <Slider {...settings}>
              {images.map((image, index) => (
                <div key={index} className="flex justify-center items-center">
                  <img
                    src={image}
                    alt={`Project ${index + 1}`}
                    className="w-full h-64 md:h-[400px] lg:h-[500px] object-cover rounded-lg shadow-lg"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>

        {/* Description Section for First Carousel */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-8">
          <h2 className="text-4xl font-bold text-center md:text-left mb-6">
            About
          </h2>
          <p className="text-gray-700 text-justify text-3xl pt-4">
            A portfolio website built using HTML, CSS, and JavaScript, highlighting
            my front-end development skills. It features projects that demonstrate
            my expertise in React.js and Redux. The design is clean, responsive, and
            user-friendly. It reflects my ability to create visually appealing and
            functional web applications.
          </p>
          <div className="p-10 mt-6 flex justify-center">
            <a
              href="https://lokeshportfolioproject.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-20 py-6 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all text-3xl">
                Visit My Project
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Second Carousel Section */}
      <div className="pt-20 flex flex-col md:flex-row items-center md:items-start mb-12">
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl font-bold text-center md:text-left mb-6">
            My React Projects
          </h2>
          <div className="max-w-xl mx-auto">
            <Slider {...settings}>
              {images2.map((image, index) => (
                <div key={index} className="flex justify-center items-center">
                  <img
                    src={image}
                    alt={`Project ${index + 1}`}
                    className="w-full h-64 md:h-[400px] lg:h-[500px] object-cover rounded-lg shadow-lg"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>

        {/* Description Section for Second Carousel */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-8">
          <h2 className="text-4xl font-bold text-center md:text-left mb-6">
            About
          </h2>
          <p className="text-gray-700 text-justify text-3xl pt-4">
          My React projects showcase a variety of web applications that demonstrate my ability to build interactive, dynamic, and user-friendly interfaces. These projects utilize React.js to create seamless and responsive experiences, incorporating features like state management, hooks, and routing. Each project reflects my understanding of React's core concepts while ensuring a clean, scalable, and maintainable codebase.
          </p>
          <div className="p-10 mt-6 flex justify-center">
            <a
              href="https://github.com/LokeshDevCreates/ReactProjects"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-20 py-6 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all text-3xl">
                Visit My Project
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCarousel;
