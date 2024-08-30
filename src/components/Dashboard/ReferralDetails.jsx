import React from 'react'
import { LuCopy } from "react-icons/lu";
import { FiEdit3 } from "react-icons/fi";
import { RiShareForwardLine } from "react-icons/ri";

const ReferralDetails = (props) => {
   const copy = () => {
      navigator.clipboard.writeText(props.code)
      alert("Copied")
   }
  return (
    <div className="p-6 rounded-xl border-2 w-full flex flex-col items-start gap-2 justify-between">
      <p className="text-sm text-[#3C517C]">Referral</p>
      <p className="text-sm text-[#3C517C]">
        Referral Code: <span className="font-bold">{props.code}</span>
      </p>
      <span className="flex items-center justify-start gap-2">
        <button
          className="text-[#4169E1] flex items-center text-sm font-semibold"
          onClick={copy}
        >
          <LuCopy />
          Copy
        </button>
        <button className="text-[#4169E1] flex items-center text-sm font-semibold">
          <FiEdit3 />
          Edit
        </button>
        <button className="text-[#4169E1] flex items-center text-sm font-semibold">
          <RiShareForwardLine />
          Share
        </button>
      </span>
    </div>
  );
}

export default ReferralDetails