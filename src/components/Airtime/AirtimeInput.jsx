import React from "react";
import AirtimeInputComponent from "../../UI/AirtimeInputComponent";

const AirtimeInput = () => {
  return (
    <div className="rounded-lg bg-[#D7E1F4] p-6">
      <h1 className="text-[#6882B6] text-center">Airtime to Cash</h1>
      <span className="flex items-center gap-4">
        <AirtimeInputComponent />
        <AirtimeInputComponent />
      </span>
    </div>
  );
};

export default AirtimeInput;
