import React from "react";
import { Text } from "./text";
import { TransactionStatsPieChart } from "./transaction-stats-pie-chart";

export default function TransactionStats() {
  return (
    <div className='flex flex-col space-y-6 lg:space-y-9 w-full h-full'>
      <div className='flex lg:justify-end'>
        <Text variant={"h4"} className='font-semibold'>
          Statistics
        </Text>
      </div>

      <TransactionStatsPieChart />
    </div>
  );
}
