"use client";
import React from "react";
import "tailwindcss/tailwind.css";
import Skills from "../skills/page";
import Achievements from "../achievements/page";
import Dashboard from "../dashboard/page";
import Blog from "../blog/page";
import Contact from "../contact/page";

const App: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      {/* Hero Section */}
      <section
      id="home"
      className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 via-teal-500 to-green-500"
    >
      <div className="absolute inset-0 bg-white/10 backdrop-blur-xl"></div>

      {/* Content Overlay */}
      <div className="relative text-center text-white p-8 rounded-lg bg-white/20 backdrop-blur-md shadow-lg border border-white/30">
        <h1 className="text-5xl font-extrabold">Lokesh</h1>
        <p className="mt-4 text-2xl">A MERN Stack Web Developer</p>
      </div>
    </section>

<style jsx>{`
  .wave-pattern {
    background: radial-gradient(circle, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0) 70%);
    animation: wave 6s infinite linear;
  }
  @keyframes wave {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
`}</style>



      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">About Me</h2>
          <p className="text-2xl text-gray-600">
            Welcome to my portfolio! I'm Lokesh, a MERN stack web developer with a passion for creating innovative and impactful work. With 3 years of experience in web developing, I specialize in delivering good quality websites. I thrive on tackling new challenges and collaborating to bring ideas to life. Let's connect and bring your vision to reality!
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-gray-100">
        <Dashboard />
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-gray-100">
        <Skills />
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-16 bg-gray-100">
        <Achievements />
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-16 bg-gray-100">
        <Blog />
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-100">
        <Contact />
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Connect With Me</h2>
          <p className="text-lg text-gray-600 mb-4">
            Feel free to reach out via email or connect with me on LinkedIn and
            GitHub.
          </p>
          <p className="text-lg text-gray-800">
            Email:{" "}
            <a
              href="mailto:lokil3832@gmail.com"
              className="text-blue-500 hover:underline"
            >
              lokil3832@gmail.com
            </a>
          </p>
          <p className="text-lg text-gray-800">
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/lokesh-p-5a892b327/"
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              LOKESH P
            </a>
          </p>
          <p className="text-lg text-gray-800">
            GitHub:{" "}
            <a
              href="https://github.com/LokeshDevCreates"
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              LokeshDevCreates
            </a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>&copy; 2025 Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
