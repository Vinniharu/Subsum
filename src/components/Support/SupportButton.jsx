import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const SupportButton = ({ title, icon, action, color }) => {
  const isComingSoon = action === "Coming Soon";

  return (
    <Link to="/" className="block w-full">
      <div className="flex items-center p-2 bg-white rounded-2xl border border-[#D7E1F4]">
        <div
          className={`flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl text-white text-xl`}
          style={{ backgroundColor: color }}
        >
          {icon}
        </div>
        <div className="ml-4 flex-grow flex flex-col gap-1">
          <p className="text-xs font-medium text-[#6882B6]">{title}</p>
          <div className="text-xs text-[#4169E1] font-semibold flex items-center">
            {isComingSoon ? (
              <span className="bg-[#EFF3FB] text-[#4169E1] rounded p-1 text-xs">
                Coming Soon
              </span>
            ) : (
              <>
                {action} <FaArrowRightLong className="ml-1" />
              </>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SupportButton;
