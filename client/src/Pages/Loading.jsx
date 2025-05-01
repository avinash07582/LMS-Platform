// src/Components/Loading.jsx
import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-white">
      {/* Spinner */}
      <div className="relative w-24 h-24 mb-6">
        <div className="absolute inset-0 rounded-full border-4 border-purple-500 border-t-transparent animate-spin"></div>
        <div className="absolute inset-2 rounded-full border-4 border-[#1f1f1f]"></div>
      </div>

      {/* Glowing Text */}
      <h1 className="text-3xl font-bold text-purple-400 animate-pulse drop-shadow-lg">
        Please wait, loading...
      </h1>
    </div>
  );
};

export default Loading;
