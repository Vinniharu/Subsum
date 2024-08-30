import React from 'react'
import LogoText from './LogoText';
import SidebarLinks from './SidebarLinks';
import SidebarLink from './SidebarLink';
import { CiLogout } from "react-icons/ci";

const Sidebar = () => {
  return (
    <div className="h-screen sticky top-0 overflow-y-auto bg-[#EFF3FB] flex-[1] p-6 flex flex-col items-start justify-between">
      <span className="flex flex-col gap-[3rem] w-full">
        <LogoText />
        <SidebarLinks />
      </span>
      <SidebarLink name={"Log Out"} link={"/login"} icon={<CiLogout />} />
    </div>
  );  
}

export default Sidebar