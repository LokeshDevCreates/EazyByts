"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const handleGoToHome = () => {
    router.push("/"); // Navigate back to the home page
  };
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (username === "admin" && password === "12345678") {
      alert("You can visit the dashboard");
      localStorage.setItem("isLoggedIn", "true");
      router.push("/profile");
    } else {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="max-w-md w-full p-8 bg-white dark:bg-gray-800 rounded-xl shadow-xl">
         <button
            onClick={handleGoToHome}
            className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            Go to Home
          </button>
        <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 text-center mb-8">
          Login
        </h2>

        {error && (
          <div className="text-red-500 text-center mb-4 font-medium">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="flex flex-col">
          <div className="mb-4">
            <label
              className="text-lg block text-gray-700 dark:text-gray-300 font-semibold mb-2"
            >
              Username
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="text-lg block text-gray-700 dark:text-gray-300 font-semibold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 mt-4 bg-blue-600 dark:bg-blue-500 text-white font-semibold rounded-md transition-colors duration-300 hover:bg-blue-700 dark:hover:bg-blue-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
