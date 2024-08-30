import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <img
        src="/logo.png"
        alt="Loading..."
        className="w-32 h-32 animate-pulse"
      />
    </div>
  );
};

export default Loading;
