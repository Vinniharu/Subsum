import React from 'react'

const EmptyCards = () => {
  return (
    <div className="p-14 rounded-xl bg-[#EFF3FB] flex-[1] flex-col items-start gap-2 justify-between relative overflow-hidden h-[284px]">
      <img
        src="/card.png"
        alt="card"
        className="absolute w-[30rem] -top-[12rem] -right-[12rem]"
      />
      <span className="flex flex-col gap-8">
        <p className="text-[#3C517C] text-lg">Cards</p>
        <p className="text-[#6882B6] font-bold text-2xl">
          You Have No
          <br />
          Saved Cards{" "}
        </p>
      </span>
    </div>
  );
}

export default EmptyCards