import React from 'react'
import TransactionRow from './TransactionRow';
import { transactionData } from '../../../data';

const TransactionTable = () => {
  return (
    <div className="overflow-x-auto w-full">
      <table className="w-full bg-white ">
        <thead>
          <tr className="w-full ">
            <th className="py-2 pr-10 text-left text-sm text-[#6882B6]">
              Service
            </th>
            <th className="py-2 pr-8 text-left text-sm text-[#6882B6]">
              Amount
            </th>
            <th className="py-2 pr-2 text-left text-sm text-[#6882B6]">
              Total Amount
            </th>
            <th className="py-2 pr-12 text-left text-sm text-[#6882B6]">
              Status
            </th>
            <th className="py-2 pr-4 text-left text-sm text-[#6882B6]">
              Payment Method
            </th>
            <th className="py-2 pr-8 text-left text-sm text-[#6882B6]">
              Transaction No
            </th>
            <th className="py-2 pr-2 text-left text-sm text-[#6882B6]">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {transactionData.map((transaction, index) => (
            <TransactionRow key={index} transaction={transaction} />
          ))}
        </tbody>  
      </table>
    </div>
  );
}

export default TransactionTable