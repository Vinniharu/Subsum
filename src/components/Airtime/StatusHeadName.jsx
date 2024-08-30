import React from "react";

const StatusHeadName = ({ onClick, state, selected, name }) => {
  const isSelected = selected === state;

  return (
    <button
      className="flex items-center flex-col gap-1 flex-[1] relative overflow-hidden"
      onClick={() => onClick(state)}
      aria-pressed={isSelected}
    >
      <p
        className={`text-sm ${
          isSelected ? "text-[#4169E1]" : "text-[#D7E1F4] mix-blend-difference"
        }`}
      >
        {name}
      </p>
      <span
        className={`w-full border p-[2px] rounded ${
          isSelected
            ? "border-[#4169E1] bg-[#4169E1]"
            : "border-transparent bg-[#D7E1F4] mix-blend-difference"
        }`}
      ></span>
    </button>
  );
};

export default StatusHeadName;
