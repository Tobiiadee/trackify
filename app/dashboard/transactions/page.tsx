import TransactionStats from "@/modules/common/components/transaction-stats";
import { TransactionAllChartStats } from "@/modules/layout/components/transactions-main/transaction-all-chart-stats";
import TransactionMain from "@/modules/layout/components/transactions-main/transaction-main";
import React from "react";

export default function Index() {
  return (
    <div className='flex flex-col space-y-4'>
      <div className='grid grid-cols-1 lg:grid-cols-[1.5fr_2fr_1.5fr]  gap-4 w-full'>
        <TransactionMain />
        <TransactionStats />
      </div>
      <TransactionAllChartStats />
    </div>
  );
}
