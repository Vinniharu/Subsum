import React from 'react'
import { Link } from 'react-router-dom'
import { FaAngleLeft } from "react-icons/fa6";

const OptionBar = () => {
  return (
    <div className="flex items-center justify-between w-full">
      <Link to={"/dashboard"}>
        <span className="flex items-center gap-1 text-[#4169E1]">
          <FaAngleLeft />
          <p>Home</p>
        </span>
      </Link>
      <Link to="/">
        <button className="py-2 px-8 bg-[#4169E1] text-white rounded-lg">
          Sign In
        </button>
      </Link>
    </div>
  );
}

export default OptionBar