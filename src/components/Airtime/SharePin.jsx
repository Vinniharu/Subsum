import React from "react";

const SharePin = ({ pin, setPin }) => {
  const handleChange = (e) => {
    const value = e.target.value;
    // Remove non-numeric characters
    const numericValue = value.replace(/[^0-9]/g, "");
    setPin(numericValue);
  };

  return (
    <div className="flex flex-col">
      <label className="mb-1 text-sm text-[#6882B6]">Airtime Share Pin</label>
      <input
        type="text"
        className="border rounded-md p-2 text-sm text-[#6882B6] outline-none placeholder:text-[#6882B6]"
        placeholder="3546576433"
        value={pin}
        onChange={handleChange}
      />
    </div>
  );
};

export default SharePin;
