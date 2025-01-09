import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAws, faChrome, faCss, faFigma, faGit, faGithub, faHtml5, faJava, faJs, faNode, faNodeJs, faPython, faReact } from "@fortawesome/free-brands-svg-icons";
import { faBrain, faChartDiagram, faClock, faDatabase, faGear } from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
  return (
    <div className="p-10">
      <h1 className="flex justify-center items-center text-4xl mb-12 font-bold">Skills</h1>

      <div className="flex flex-wrap justify-center gap-12">
        {/* Programming Languages */}
        <div className="w-full sm:w-[30rem] md:w-[35rem] lg:w-[40rem] bg-slate-400 border-4 border-white p-8 rounded-lg">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-semibold">Programming Languages</h1>
          </div>
          <div className="flex justify-around mb-8">
            <FontAwesomeIcon icon={faJava} size="3x" />
            <FontAwesomeIcon icon={faPython} size="3x" />
            <FontAwesomeIcon icon={faJs} size="3x" />
          </div>
          <p className="text-white text-center text-2xl">
            Java for backend, Python for data analysis, JavaScript for web development, and C for Data Structures and Algorithms.
          </p>
        </div>

        {/* Frontend Development */}
        <div className="w-full sm:w-[30rem] md:w-[35rem] lg:w-[40rem] bg-slate-400 border-4 border-white p-8 rounded-lg">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-semibold">Frontend Development</h1>
          </div>
          <div className="flex justify-around mb-8">
            <FontAwesomeIcon icon={faReact} size="3x" />
            <FontAwesomeIcon icon={faCss} size="3x" />
            <FontAwesomeIcon icon={faHtml5} size="3x" />
          </div>
          <p className="text-white text-center text-2xl">
            Building modern web applications with React.js, HTML5, CSS3, TypeScript, and Tailwind CSS.
          </p>
        </div>

        {/* Backend Development */}
        <div className="w-full sm:w-[30rem] md:w-[35rem] lg:w-[40rem] bg-slate-400 border-4 border-white p-8 rounded-lg">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-semibold">Backend Development</h1>
          </div>
          <div className="flex justify-around mb-8">
            <FontAwesomeIcon icon={faNode} size="3x" />
            <FontAwesomeIcon icon={faNodeJs} size="3x" />
            <FontAwesomeIcon icon={faAws} size="3x" />
          </div>
          <p className="text-white text-center text-2xl">
            Robust server-side development with Node.js, Express.js, and AWS services for scalability.
          </p>
        </div>

        {/* Database and Tools */}
        <div className="w-full sm:w-[30rem] md:w-[35rem] lg:w-[40rem] bg-slate-400 border-4 border-white p-8 rounded-lg">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-semibold">Database and Tools</h1>
          </div>
          <div className="flex justify-around mb-8">
            <FontAwesomeIcon icon={faDatabase} size="3x" />
            <FontAwesomeIcon icon={faGit} size="3x" />
            <FontAwesomeIcon icon={faGithub} size="3x" />
          </div>
          <p className="text-white text-center text-2xl">
            Expertise in Git, GitHub, MongoDB, MySQL, and Firebase for version control and database management.
          </p>
        </div>

        {/* Soft Skills */}
        <div className="w-full sm:w-[30rem] md:w-[35rem] lg:w-[40rem] bg-slate-400 border-4 border-white p-8 rounded-lg">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-semibold">Soft Skills</h1>
          </div>
          <div className="flex justify-around mb-8">
            <FontAwesomeIcon icon={faBrain} size="3x" />
            <FontAwesomeIcon icon={faGear} size="3x" />
            <FontAwesomeIcon icon={faClock} size="3x" />
          </div>
          <p className="text-white text-center text-2xl">
            Collaboration, problem-solving, adaptability, and time management for successful project execution.
          </p>
        </div>

        {/* Other Skills */}
        <div className="w-full sm:w-[30rem] md:w-[35rem] lg:w-[40rem] bg-slate-400 border-4 border-white p-8 rounded-lg">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-semibold">Other Skills</h1>
          </div>
          <div className="flex justify-around mb-8">
            <FontAwesomeIcon icon={faFigma} size="3x" />
            <FontAwesomeIcon icon={faChartDiagram} size="3x" />
            <FontAwesomeIcon icon={faChrome} size="3x" />
          </div>
          <p className="text-white text-center text-2xl">
            Proficient in design, analysis, and optimization for enhanced project execution and performance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
