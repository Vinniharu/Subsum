import React, { useState } from "react";

const ToggleButton = ({ label, onChange, ...props }) => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
    if (onChange) onChange(!isOn);
  };

  return (
    <div className="flex items-center space-x-4">
      <button
        onClick={handleToggle}
        className={`relative inline-flex items-center h-4 rounded-full w-9 transition-colors duration-200 ease-in-out ${
          isOn ? "bg-blue-500" : "bg-gray-300"
        }`}
        type="button"
      >
        <span
          className={`inline-block w-3 h-3 transform rounded-full bg-white transition-transform duration-200 ease-in-out ${
            isOn ? "translate-x-5" : "translate-x-1"
          }`}
        />
      </button>
    </div>
  );
};

export default ToggleButton;
