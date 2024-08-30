import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import { IoPersonOutline } from "react-icons/io5";
import { LuBell } from "react-icons/lu";

const Navbar = (props) => {
  return (
    <div className="flex items-center justify-between mb-[2rem] w-full pr-[4rem]">
      <p className="text-[#2B3B5A]">{props.title}</p>
      <span className="flex items-center w-fit gap-2">
        <Link to="/upgrade" className="text-[#4169E1] text-sm font-semibold">
          Upgrade to Merchant
        </Link>
        <NavLink
          to="/notify"
          className="bg-[#EFF3FB] border-[#D7E1F4] text-[#4169E1] border-2 rounded-full flex items-center justify-center w-[1.6rem] h-[1.6rem]"
        >
          <LuBell />
        </NavLink>
        <NavLink
          to="/profile"
          className="bg-[#EFF3FB] border-[#D7E1F4] text-[#4169E1] border-2 rounded-full flex items-center justify-center w-[1.6rem] h-[1.6rem]"
        >
          <IoPersonOutline />
        </NavLink>
      </span>
    </div>
  );
}

export default Navbar