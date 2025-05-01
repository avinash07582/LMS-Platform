import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-black text-white px-4">
      {/* Logo or Branding */}
      <img
        src="\images\error 404.gif" // Your logo here
        alt="Logo"
        className="w-70 mb-6 animate-pulse"
      />

      {/* Error Illustration / GIF */}
      <img
        src="/images/error.gif" // Add a cool animated gif here
        alt="404 Error"
        className="w-80 h-auto mb-8"
      />

      <h1 className="text-5xl font-bold mb-4">Oops! Page not found</h1>
      <p className="text-lg text-gray-400 mb-6 text-center max-w-md">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>

      {/* Button */}
      <div className="flex gap-4">

      <Link
        to="/"
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition text-white font-semibold"
      >
        Go to Homepage
      </Link>
      <Link
        to="/contact"
        className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg transition text-white font-semibold"
      >
        Report Problem
      </Link>
      </div>
     
    </section>
  );
};

export default Error;
