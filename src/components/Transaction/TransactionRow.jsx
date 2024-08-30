import React, { useState, useEffect } from "react";
import { CiSquareInfo, CiSquareCheck, CiSquareAlert } from "react-icons/ci";

const TransactionRow = ({ transaction }) => {
  const [result, setResult] = useState({ color: "#000000", icon: null, bg: "#000000" });

  const check = (status) => {
    switch (status) {
      case "Successful":
        return {
          color: "#2DAE32",
          icon: <CiSquareCheck />,
          bg: "#47CA4C1A",
        };
      case "Initiated":
        return {
          color: "#FFB547",
          icon: <CiSquareInfo />,
          bg: "#FFB5471A",
        };
      case "Failed":
        return {
          color: "#EE5D50",
          icon: <CiSquareAlert />,
          bg: "#EE5D501A",
        };
      default:
        return {
          color: "#000000",
          icon: null,
        };
    }
  };

  useEffect(() => {
    setResult(check(transaction.status));
  }, [transaction]);

  return (
    <tr className="border-b ">
      <td className="text-sm text-[#4C689E] pt-4 flex items-center">
        <span
          className="p-1 rounded font-bold text-xl "
          style={{ backgroundColor: result.bg, color: result.color }}
        >
          {result.icon}
        </span>
        <div className="ml-2">
          <p className="font-semibold text-xs">{transaction.service}</p>
          <p className="text-xs text-[#4C689E]">{transaction.phone}</p>
        </div>
      </td>
      <td className="text-sm text-[#4C689E] pt-4 pb-2 align-top">
        {`₦${transaction.amount}`}
      </td>
      <td className="text-sm text-[#4C689E] pt-4 pb-2 align-top">
        {`₦${transaction.fee}`}
      </td>
      <td
        className="text-sm pb-2 align-top pt-4"
        style={{ color: result.color }}
      >
        {transaction.status}
      </td>
      <td className="text-sm text-[#4C689E] pt-4 pb-2 align-top">
        {transaction.paymentMethod}
      </td>
      <td className="text-sm text-[#4C689E] pt-4 pb-2 align-top">
        <p>{transaction.transactionId}</p>
        <p className="text-xs text-[#4C689E]">{transaction.date}</p>
      </td>
      <td className="text-sm align-top py-4">
        <button className="text-[#4169E1]  px-1 py-[1px] bg-[#EFF3FB] rounded font-bold ">
          Open
        </button>
      </td>
    </tr>
  );
};

export default TransactionRow;
