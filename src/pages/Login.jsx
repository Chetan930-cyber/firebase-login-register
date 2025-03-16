import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/authSlice";
import { auth } from "../firebase";
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const googleLogo = "/g.png"; // Ensure Google logo is in public folder

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      dispatch(login(userCredential.user));
      toast.success("🎉 You are now logged in!");
      navigate("/dashboard");
    } catch (error) {
      toast.error("🚫 Invalid credentials! Please try again.");
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      toast.success("🎉 Google Login Successful!");
      navigate("/dashboard");
    } catch (error) {
      toast.error("🚫 Google Login Failed!");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden text-gray-100">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 right-0 w-full h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-md opacity-75 transform -translate-y-1/2 animate-pulse"></div>
      </div>

      <div className="relative shadow-lg rounded-lg bg-teal-600 p-8 w-full sm:w-96">
        <h2 className="text-3xl font-bold mb-6 text-center text-white">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded-lg border border-gray-700 focus:ring-2 focus:ring-yellow-500 focus:outline-none bg-gray-900 text-gray-100"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-bold mb-2">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full p-3 rounded-lg border border-gray-700 focus:ring-2 focus:ring-yellow-500 focus:outline-none bg-gray-900 text-gray-100"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-pink-700 hover:bg-teal-800 text-white font-bold py-3 rounded-lg transition duration-300"
          >
            Login
          </button>
        </form>

        <button
          type="button"
          onClick={handleGoogleLogin}
          className="mt-4 w-full py-3 bg-white border-2 border-gray-300 text-gray-800 text-xl font-extrabold rounded-lg flex justify-center items-center gap-3 transition-all duration-300 shadow-md"
        >
          <img src={googleLogo} alt="Google" className="w-6 h-6" /> Sign in with Google
        </button>

        <p className="mt-4 text-center text-gray-300">
          Don’t have an account? {" "}
          <span
            className="text-yellow-400 font-bold cursor-pointer hover:underline"
            onClick={() => navigate("/register")}
          >
            Sign Up
          </span>
        </p>
      </div>
      <p className="mt-6 text-sm text-gray-400">© 2025 Narmada. All rights reserved.</p>
    </div>
  );
};

export default Login;
