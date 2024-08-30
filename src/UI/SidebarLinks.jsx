import React from "react";
import SidebarLink from "./SidebarLink";
import {links} from "../../data"

const SidebarLinks = () => {
  return (
    <div className="flex flex-col w-full items-start gap-1">
      {links.map((item, id) => (
        <SidebarLink
          key={id}
          link={item.link}
          name={item.name}
          icon={item.icon}
          sublinks={item.sublinks}
        />
      ))}
    </div>
  );
};

export default SidebarLinks;
