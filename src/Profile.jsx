import  React from "react";
import { useNavigate } from 'react-router-dom'

const Profile = () => {
  const navigate=useNavigate()
  
            const NextPage = () => {
      navigate("/myData");

    };
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

          <div className="p-4 border-b hover:bg-gray-100 cursor-pointer"  onClick={NextPage}>
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
