import React from 'react'
import { BsWallet2 } from "react-icons/bs";


const ReferralMain = (props) => {
  return (
    <div className="p-6 rounded-xl border-2 w-full flex flex-col items-start gap-2 justify-between">
      <span className='flex items-start justify-between w-full'>
        <span>
          <p className='text-[#3C517C] text-sm'>Total referrals made</p>
          <p className='text-lg font-bold text-[#3C517C]'>{props.referral}</p>
        </span>
        <span>
          <p className='text-[#3C517C] text-sm'>Current wallet Bonus</p>
          <p className='text-lg font-bold text-[#3C517C]'>{`₦${props.refbal.toFixed(2)}`}</p>
        </span>
      </span>
      <button className="text-[#4169E1] gap-1 flex items-center text-sm">
        <BsWallet2 />
        Cashout
      </button>
    </div>
  );
}

export default ReferralMain