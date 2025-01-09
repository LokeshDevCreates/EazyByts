import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import App from "./home/page"; // Home Page
import Dashboard from "./profile/page"; // Profile Page

const MainRoutes: React.FC = () => {
  return (
    <Router>
      <nav className="p-4 bg-gray-800 text-white flex justify-around">
        <Link to="/" className="hover:text-blue-400">
          Home
        </Link>
        <Link to="/profile" className="hover:text-blue-400">
          Dashboard
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/profile" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default MainRoutes;
