import React from "react";
import { useNavigate } from 'react-router-dom'

const Profile = () => {
  const navigate = useNavigate()

  let username = localStorage.getItem("username");



  const handleLogout = () => {
    localStorage.removeItem("isLoggedin");
    localStorage.removeItem("username");
    localStorage.removeItem("useremail");

    alert("Logged out successfully");
    navigate("/login");
  };
  const NextPage = () => {
    navigate("/myData");

  };
  return (
    <>
      <div className="min-h-screen flex justify-center items-center bg-cyan-300">
        <div className="w-80 bg-white rounded-lg shadow-md">

          <div className="text-center p-4 border-b">

            <h2 className="mt-1 font-semibold text-lg">
              <span className="text-blue-500 text-lg">👤</span>
              <p className="text-sm text-gray-500">My Account</p>
              {username ? username : "Guest"}</h2>
          </div>

          <div className="flex flex-col p-4">

            <div className="p-4 border-b hover:bg-gray-100 cursor-pointer" onClick={NextPage}>
              <span className="text-green-500 text-lg">📦</span>
              <span className="font-medium">My Orders</span>
            </div>
            <div className="p-4 hover:bg-gray-100 cursor-pointer  border-b">
              <span className="text-purple-500 text-lg">🔄</span>
              <span className="font-medium"> Return / Refund status</span>
            </div>

            <div className="p-4 hover:bg-gray-100 cursor-pointer  border-b">
              <span className="text-purple-500 text-lg">❓</span>
              <span className="font-medium">Help & Support</span>
            </div>
            <div className="p-4 hover:bg-gray-100 cursor-pointer border-b">
              <span className="text-purple-500 text-lg">🔐</span>
              <span className="font-medium"> Security settings</span>
            </div>
            <div className="p-4 hover:bg-gray-100 cursor-pointer border-b" onClick={handleLogout}>
              <span className="text-purple-500 text-lg">🚪</span>
              <span className="font-medium" >Logout</span>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
