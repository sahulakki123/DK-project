import React from "react";

const Profile = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-cyan-300">
      <div className="w-80 bg-white rounded-lg shadow-md">

        <div className="text-center p-4 border-b">

          <h2 className="mt-2 font-semibold text-lg">Lakki</h2>
          <p className="text-sm text-gray-500">View Profile</p>
        </div>

        <div className="flex flex-col">

          <div className="p-4 border-b hover:bg-gray-100 cursor-pointer">
            My Account
          </div>

          <div className="p-4 border-b hover:bg-gray-100 cursor-pointer">
            My Orders
          </div>

          <div className="p-4 hover:bg-gray-100 cursor-pointer">
            Help
          </div>

        </div>
      </div>
    </div>
  );
};

export default Profile;
