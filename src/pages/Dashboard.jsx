import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { toast } from "react-toastify";
import userImage from "../assets/user.jpg";

const Dashboard = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    toast.info("Logging out...");
    auth.signOut();
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-center bg-no-repeat text-gray-800 p-6"
      style={{
        backgroundImage: "url('grapes.jpg')",
        backgroundSize: "contain", // Contain background image
      }}
    >
      {/* Profile Card */}
      <div className="bg-gradient-to-br from-pink-300 to-pink-500 p-8 rounded-xl shadow-2xl text-center max-w-lg border border-pink-600">
        <img
          src={userImage}
          alt="User"
          className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-pink-400 shadow-lg"
        />
        <h2 className="text-3xl font-extrabold mb-3">नमस्ते, {user?.displayName || "User"}!</h2>
        <p className="text-lg font-bold mb-4">📧 {user?.email}</p>
        
        <button
          onClick={handleLogout}
          className="mt-6 px-6 py-3 bg-red-500 hover:bg-red-600 transition-all duration-300 rounded-lg shadow-lg text-white font-bold"
        >
          🚪 लॉगआउट करें
        </button>
      </div>

      {/* Story Section */}
      <div className="mt-12 max-w-2xl bg-gradient-to-br from-pink-300 to-pink-500 p-6 rounded-xl shadow-lg border border-pink-600">
        <h3 className="text-2xl font-bold text-gray-800 mb-3">🌟 प्रेरणादायक कहानी</h3>
        <p className="text-gray-800 text-lg font-semibold">
          एक समय की बात है, एक छोटा बच्चा नदी के किनारे खेल रहा था। अचानक, वह नदी में गिर गया।
          एक राहगीर ने उसे देखा और बिना कुछ सोचे नदी में कूद गया। उसने बच्चे को सुरक्षित बाहर निकाल लिया।
          यह घटना हमें सिखाती है कि बिना सोचे-समझे मदद करना भी इंसानियत का एक खूबसूरत रूप होता है।
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
