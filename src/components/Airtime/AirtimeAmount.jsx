import React, { useState } from "react";

const AirtimeAmount = ({amount, setAmount}) => {

  const handleChange = (e) => {
    const value = e.target.value;
    const numericValue = value.replace(/[^0-9₦,]/g, "");
    setAmount(numericValue);
  };

  return (
    <div className="flex flex-col">
      <label className="mb-1 text-sm text-[#6882B6]">Amount</label>
      <input
        type="text"
        className="border rounded-md p-2 text-sm text-[#6882B6] placeholder:text-[#6882B6]"
        placeholder="₦5,000"
        value={amount}
        onChange={handleChange}
      />
    </div>
  );
};

export default AirtimeAmount;
