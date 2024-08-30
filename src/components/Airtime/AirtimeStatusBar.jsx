import React, { useState } from "react";
import StatusHeadName from "./StatusHeadName";
import AirtimeToCashForm from "./AirtimeToCashForm";
import ComingSoon from "../../UI/ComingSoon";

const states = [
  { name: "Fill info", state: "fill" },
  { name: "Make Payment", state: "payment" },
  { name: "View Receipt", state: "receipt" }, 
];

const AirtimeStatusBar = () => {
  const [stat, setStat] = useState("fill");

  const renderComponent = () => {
    switch (stat) {
      case "fill":
        return <AirtimeToCashForm setStat={setStat}/>;
      case "payment":
        return <ComingSoon/>;
      case "receipt":
        return <ComingSoon />;
      default:
        return null;
    }
  };

  return (
    <div className="w-[30rem] m-auto">
      <span className="flex items-center gap-1 pb-6 w-full">
        {states.map((state, index) => (
          <StatusHeadName
            key={index}
            name={state.name}
            state={state.state}
            selected={stat}
            onClick={setStat} 
          />
        ))}
      </span>
      {renderComponent()} 
    </div>
  );
};

export default AirtimeStatusBar;
