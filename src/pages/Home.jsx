import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      <h1 className="text-4xl font-bold mb-6">Welcome to Our App</h1>
      <div className="flex gap-4">
        <Link to="/login" className="px-6 py-3 bg-blue-700 hover:bg-blue-800 rounded-lg">Login</Link>
        <Link to="/register" className="px-6 py-3 bg-green-700 hover:bg-green-800 rounded-lg">Register</Link>
      </div>
    </div>
  );
};

export default Home;
