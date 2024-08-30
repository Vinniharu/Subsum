import React from "react";

const ChangeSelector = ({selected, setSelected}) => {

  return (
    <div className="flex items-center rounded-full p-1 gap-1 border-[#D7E1F4] border">
      <span
        className={`flex-[1] text-center rounded-full p-2 text-sm ${
          selected == "password"
            ? "bg-[#EFF5FB] text-[#3C517C]"
            : "bg-white text-[#A9BADA] border"
        }`}
        onClick={() => setSelected("password")}
      >
        Change Password
      </span>
      <span
        className={`flex-[1] text-center rounded-full p-2 text-sm ${
          selected == "pin"
            ? "bg-[#EFF5FB] text-[#3C517C]"
            : "bg-white text-[#A9BADA] border"
        }`}
        onClick={() => setSelected("pin")}
      >
        Change Pin
      </span>
    </div>
  );
};

export default ChangeSelector;
