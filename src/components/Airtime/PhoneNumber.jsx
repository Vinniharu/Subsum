import React from 'react'

const PhoneNumber = ({ setPhoneNumber, phoneNumber }) => {
  return (
    <div className="flex flex-col w-1/2 text-[#6882B6]">
      <label className="mb-1 text-sm">Phone Number</label>
      <input
        type="text"
        className="border rounded-md p-2 text-sm text-[#6882B6] placeholder:text-[#6882B6] bg-white"
        placeholder="08094562627"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
    </div>
  );
};

export default PhoneNumber