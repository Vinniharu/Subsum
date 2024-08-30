import React from "react";
import LoginSidebar from "../components/Login/LoginSidebar";
import OptionBar from "../components/Login/OptionBar";
import LoginWithGoogle from "../UI/LoginWithGoogle";
import LoginPanel from "../components/Login/LoginPanel";

const Login = () => {
  return (
    <div className="w-screen h-screen flex">
      <LoginSidebar />
      <div className="p-[2rem] flex-[3] h-full flex flex-col items-center gap-6 bg-[#EFF3FB]">
        <OptionBar />
        <div className="flex flex-col items-center justify-start mx-10 w-full md:w-[30rem]">
          <h1 className="text-[#4C689E] text-xl font-semibold mb-4">Login</h1>
          <LoginWithGoogle />
          <div className="flex items-center justify-center my-4 w-full">
            <div className="flex-grow border-t border-[#A9BADA]"></div>
            <span className="mx-4 text-gray-500 text-sm">or continue with</span>
            <div className="flex-grow border-t border-[#A9BADA]"></div>
          </div>
          <LoginPanel/>
        </div>
      </div>
    </div>
  );
};

export default Login;
