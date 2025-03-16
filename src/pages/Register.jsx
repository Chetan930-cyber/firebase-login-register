import React, { useState } from "react";
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const googleLogo = "/g.png"; // Place the Google logo image in the `public` folder

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast.dismiss(); // Clear existing toasts
      toast.success("🎉 Registration Successful! Welcome aboard!", { toastId: "registerSuccess" });
      navigate("/dashboard");
    } catch (error) {
      toast.dismiss();
      toast.error("🚫 Registration failed! Please try again.", { toastId: "registerError" });
    }
  };

  const handleGoogleRegister = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      toast.dismiss();
      toast.success("🎉 Google Sign-Up Successful!", { toastId: "googleSuccess" });
      navigate("/dashboard");
    } catch (error) {
      toast.dismiss();
      toast.error("🚫 Google Sign-Up Failed!", { toastId: "googleError" });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-yellow-300 via-orange-200 to-pink-300 p-6">
      <div className="bg-white p-10 rounded-2xl shadow-xl max-w-md w-full border-4 border-yellow-400">
        <h2 className="text-4xl font-extrabold text-center text-orange-500 mb-4">
          Register Now 🚀
        </h2>
        <form onSubmit={handleRegister}>
          <div className="mb-5">
            <label className="block text-base font-bold text-gray-700 mb-2">✉️ Email</label>
            <input
              type="email"
              placeholder="Enter email"
              className="w-full px-4 py-3 rounded-lg border-2 border-orange-300 focus:ring-2 focus:ring-orange-400 bg-yellow-50 text-gray-800 font-bold"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-base font-bold text-gray-700 mb-2">🔒 Password</label>
            <input
              type="password"
              placeholder="Create a secure password"
              className="w-full px-4 py-3 rounded-lg border-2 border-orange-300 focus:ring-2 focus:ring-orange-400 bg-yellow-50 text-gray-800 font-bold"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-orange-500 hover:bg-orange-600 text-white text-xl font-extrabold rounded-lg shadow-lg transition-all duration-300"
          >
            Register 🚀
          </button>
          <button
            type="button"
            onClick={handleGoogleRegister}
            className="mt-4 w-full py-3 bg-white border-2 border-gray-300 text-gray-800 text-xl font-extrabold rounded-lg flex justify-center items-center gap-3 transition-all duration-300 shadow-md"
          >
            <img src={googleLogo} alt="Google" className="w-6 h-6" /> Sign up with Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
