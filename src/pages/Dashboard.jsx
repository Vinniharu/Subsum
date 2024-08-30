import React from "react";
import Navbar from "../UI/Navbar";
import {user} from "../../data"
import WalletBalance from "../components/Dashboard/WalletBalance";
import ReferralDetails from "../components/Dashboard/ReferralDetails";
import ReferralMain from "../components/Dashboard/ReferralMain";
import EmptyCards from "../components/Dashboard/EmptyCards";

const Dashboard = () => {
  return (
    <div className="w-full">
      <Navbar title={`Welcome, ${user.firstname} ${user.middlename}`} />
      <div className="flex items-start gap-4">
        <span className="flex-[1] flex flex-col gap-4">
          <WalletBalance balance={user.Walletbal}/>
          <ReferralDetails code={user.referralcode}/>
          <ReferralMain refbal={user.walletbonus} referral={user.referrals}/>
        </span>
        <EmptyCards/>
      </div>
    </div>
  );
};

export default Dashboard;
