import React from "react";

const LoginSidebar = () => {
  return (
    <div className="hidden lg:block relative w-[20rem] overflow-hidden bg-[linear-gradient(360deg,rgba(65,105,225,0)_60%,#000080_100%)]">
      <div className="block rounded-tl-3xl overflow-hidden h-screen ml-10 mt-10">
        <img src="/background.PNG" alt="Sidescreen" className="w-full" />
      </div>
      <div className="top-0 absolute h-screen w-full flex items-end bg-[linear-gradient(360deg,#000080_6%,rgba(65,105,225,0)_90%)] p-10">
        <p className="text-white text-xl">The BEST place to subscribe / buy</p>
      </div>
    </div>
  );
};

export default LoginSidebar;
