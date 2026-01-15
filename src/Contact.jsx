import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cyan-400 from-blue-50 to-blue-100">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">

        {/* Heading */}
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Contact Us
        </h2>
        <p className="text-sm text-center text-gray-500 mb-6">
          Wed love to hear from you
        </p>

        {/* Form */}
        <form className="space-y-4">

          <div>
            <label className="text-sm font-medium text-gray-600">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-600">
              Message
            </label>
            <textarea
              rows="4"
              placeholder="Write your message..."
              className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
          </div>

          <button className="w-full bg-blue-500 text-white py-2 rounded-lg font-medium hover:bg-blue-600 transition">
            Send Message
          </button>

        </form>

      </div>
    </div>
  );
};

export default Contact;
