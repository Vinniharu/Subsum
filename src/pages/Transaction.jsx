import React from "react";
import Navbar from "../UI/Navbar";
import { IoFilter } from "react-icons/io5";
import TransactionTable from "../components/Transaction/TransactionTable";

const Transaction = () => {
  return (
    <div>
      <Navbar title="Transaction History" />
      <button className="p-2 bg-[#F7F9FD] border border-[#D7E1F4] rounded-xl flex items-center gap-2 w-[9rem] text-sm text-[#6882B6] mb-6">
        <IoFilter />
        Filter
      </button>
      <TransactionTable/>
    </div>
  );
};

export default Transaction;
