import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; 

const SidebarLink = ({ link, icon, name, sublinks }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const LinkComponent = sublinks && sublinks.length > 0 ? "div" : NavLink;

  return (
    <div className="w-full text-sm">
      <LinkComponent
        to={`${link}`}
        className="flex w-full items-center gap-4 rounded-xl p-3 cursor-pointer text-[#4C689E]"
        onClick={sublinks && sublinks.length > 0 ? toggleDropdown : undefined}
      >
        {icon}
        <p className="flex-grow">{name}</p>
        {sublinks && sublinks.length > 0 && (
          <div
            className={`transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          >
            {isOpen ? <FaChevronUp /> : <FaChevronDown />}
          </div>
        )}
      </LinkComponent>

      {sublinks && sublinks.length > 0 && isOpen && (
        <div className="ml-6 flex flex-col">
          {sublinks.map((sublink, index) => (
            <NavLink
              key={index}
              to={`${sublink.link}`}
              className="flex w-full items-center gap-4 rounded-xl p-2 pl-6 text-[#4C689E]"
            >
              {sublink.icon}
              <p>{sublink.name}</p>
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};

export default SidebarLink;
