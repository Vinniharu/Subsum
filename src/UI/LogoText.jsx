import React from 'react'

const LogoText = () => {
  return (
    <span className="flex items-center ">
      <img src="/logo.png" alt="Logo" className="w-8" />
      <p className="block text-2xl text-[#000080] font-semibold">
        subsum
      </p>
    </span>
  );
}

export default LogoText