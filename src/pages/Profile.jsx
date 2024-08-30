import React, { useState } from "react";
import Navbar from "../UI/Navbar";
import ImageUploadButton from "../UI/ImageUploadButton";
import { user } from "../../data";
import ProfileCard from "../components/Profile/ProfileCard";
import ChangeSelector from "../components/Profile/ChangeSelector";
import ChangePassword from "../components/Profile/ChangePassword";
import ComingSoon from "../UI/ComingSoon";

const Profile = () => {
  const [selected, setSelected] = useState("password");

  return (
    <>
      <Navbar title={`Welcome, ${user.firstname} ${user.middlename}`} />
      <span className="flex items-start gap-4 w-[64vw]">
        <span className="flex-[1] flex flex-col gap-4">
          <ImageUploadButton />
          <ProfileCard user={user} />
        </span>
        <span className="flex-[1] flex flex-col gap-4">
          <ChangeSelector selected={selected} setSelected={setSelected} />
          {selected === "password" ? <ChangePassword/> : <ComingSoon/>}
        </span>
      </span>
    </>
  );
};

export default Profile;
