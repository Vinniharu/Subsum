import React, { useState } from "react";
import NetworkDropdown from "./NetworkDropdown";
import PhoneNumber from "./PhoneNumber";
import AirtimeAmount from "./AirtimeAmount";
import SharePin from "./SharePin";

const AirtimeToCashForm = ({setStat}) => {
  const [network, setNetwork] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [pin, setPin] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with:", {
      network,
      phoneNumber,
      amount,
      pin,
    });
    setStat("payment")
  };

  return (
    <div className="bg-[#F7F9FD] border border-[#D7E1F4] rounded-lg p-6 w-[30rem] m-auto">
      <h2 className="text-center text-lg font-semibold mb-4 text-[#6882B6]">
        Airtime to Cash
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex gap-4">
          <NetworkDropdown setNetwork={setNetwork} network={network} />
          <PhoneNumber setPhoneNumber={setPhoneNumber} phoneNumber={phoneNumber}/>
        </div>
        <AirtimeAmount amount={amount} setAmount={setAmount}/>
        <SharePin pin={pin} setPin={setPin}/>
        <button
          type="submit"
          className="bg-[#4169E1] text-white py-2 rounded-md text-sm w-full mt-4"
        >
          Proceed
        </button>
      </form>
    </div>
  );
};

export default AirtimeToCashForm;
