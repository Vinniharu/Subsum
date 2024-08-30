import React from 'react'

const WalletBalance = (props) => {
  return (
    <div className="p-6 rounded-xl border-2 w-full flex items-center justify-between">
      <span className="flex flex-col items-start gap-1">
        <p className="text-[#3C517C] text-sm">Wallet Balance</p>
        <p className="text-3xl font-semibold text-[#3C517C]">{`₦${props.balance}`}</p>
      </span>
      <button className="w-[10rem] p-2 rounded-md bg-[#4169E1] text-white text-sm">
        Fund Wallet
      </button>
    </div>
  );
}

export default WalletBalance