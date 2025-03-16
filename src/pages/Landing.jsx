import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

const LandingPage = () => {
  const containerRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    gsap.from(containerRef.current, { opacity: 0, y: -50, duration: 1, ease: "power3.out" });
    gsap.from(btnRef.current, { opacity: 0, scale: 0.8, duration: 1, delay: 0.5, ease: "elastic.out(1, 0.5)" });
  }, []);

  return (
    <div ref={containerRef} className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
      <h1 className="text-4xl font-bold mb-4">Welcome to Our Platform</h1>
      <p className="text-lg mb-6">Sign up or log in to continue</p>

      <div ref={btnRef} className="flex gap-4">
        <Link to="/login" className="px-6 py-3 bg-blue-500 hover:bg-blue-600 transition-all rounded-lg shadow-md">Login</Link>
        <Link to="/register" className="px-6 py-3 bg-green-500 hover:bg-green-600 transition-all rounded-lg shadow-md">Register</Link>
      </div>
    </div>
  );
};

export default LandingPage;
