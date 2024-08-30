import React from "react";
import { FiCopy } from "react-icons/fi";

const ProfileCard = ({ user }) => {
  return (
    <div className="flex flex-col items-start justify-center flex-[1] border border-[#D7E1F4] rounded-3xl bg-white p-5">
      <ul className="w-full flex flex-col items-start gap-2">
        <li className="flex items-center justify-between w-full">
          <p className="text-[#4C689E] text-sm">Name</p>
          <p className="text-sm text-[#4C689E] font-bold">{`${user.firstname} ${user.middlename} ${user.lastname}`}</p>
        </li>
        <li className="flex items-center justify-between w-full">
          <p className="text-[#4C689E] text-sm">Email</p>
          <p className="text-sm text-[#4C689E] font-bold">{`${user.email}`}</p>
        </li>
        <li className="flex items-center justify-between w-full">
          <p className="text-[#4C689E] text-sm">Phone Number</p>
          <p className="text-sm text-[#4C689E] font-bold">{`${user.phone}`}</p>
        </li>
        <li className="flex items-center justify-between w-full">
          <p className="text-[#4C689E] text-sm">Account Status</p>
          <p
            className="text-sm font-bold"
            style={{ color: user.status ? "#2DAE32" : "#EE5D50" }}
          >
            {user.status ? "Active" : "Inactive"}
          </p>
        </li>
        <li className="flex flex-col items-end w-full gap-2">
          <span className="flex items-center w-full justify-between">
            <p className="text-[#4C689E] text-sm">Referral Link</p>
            <p className="text-sm text-[#4C689E] font-bold">
              {user.reflink.length > 21
                ? `${user.reflink.substring(0, 21)}...`
                : user.reflink}
            </p>
          </span>
          <button
            onClick={() => {
              navigator.clipboard.writeText(user.reflink);
              alert("Copied");
            }}
            className="flex gap-[1px] items-center text-sm text-[#4169E1] font-semibold"
          >
            <FiCopy />
            Copy
          </button>
        </li>
        <button className="text-sm text-[#4169E1] font-semibold">Edit Details</button>
      </ul>
    </div>
  );
};

export default ProfileCard;
