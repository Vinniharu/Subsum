import React, { useState, useRef } from "react";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";

const NetworkDropdown = ({ setNetwork, network }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const networks = [
    { value: "etisalat", label: "Etisalat", image: "public/9mobile.png" },
    { value: "mtn", label: "MTN", image: "public/mtn.png" },
    { value: "glo", label: "Glo", image: "public/glo.png" },
    { value: "airtel", label: "Airtel", image: "public/airtel.png" },
  ];

  const handleSelect = (value) => {
    setNetwork(value);
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col w-1/2 relative" ref={dropdownRef}>
      <label className="mb-1 text-sm text-[#6882B6]">Select Network</label>
      <div
        className="flex items-center border rounded-md text-sm bg-white text-[#6882B6] p-2 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {network ? (
          <>
            <img
              src={networks.find((n) => n.value === network)?.image}
              alt="Network Logo"
              className="w-5 h-5 mr-2"
            />
            <span>{networks.find((n) => n.value === network)?.label}</span>
          </>
        ) : (
          <span>Select Network</span>
        )}
        <span className="ml-auto">{isOpen ? <FaAngleUp /> : <FaAngleDown />}</span>
      </div>
      {isOpen && (
        <div className="absolute top-full left-0 w-full border text-[#6882B6] rounded-md bg-white mt-1 shadow-lg z-10">
          {networks.map((network) => (
            <div
              key={network.value}
              className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSelect(network.value)}
            >
              <img
                src={network.image}
                alt={network.label}
                className="w-6 h-6 mr-2"
              />
              <span>{network.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NetworkDropdown;
