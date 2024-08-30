import React from "react";
import Navbar from "../UI/Navbar";
import { supportOptions } from "../../data";
import SupportButton from "../components/Support/SupportButton";

const Support = () => {
  return (
    <div>
      <Navbar title="Help & Support" />
      <div className="grid grid-cols-2 gap-4 p-4 w-[48vw]">
        {supportOptions.map((item, index) => (
          <SupportButton
            key={index}
            title={item.title}
            icon={item.icon}
            action={item.action}
            color={item.color}
          />
        ))}
      </div>
    </div>
  );
};

export default Support;
