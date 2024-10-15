import React from "react";

import DashboardIncome from "../../dashboard-income";
import DashboardExpense from "../../dashboard-expense";
import DashboardStatistics from "../../dashboard-statistics";
import DashboardTotalBalance from "@/modules/common/components/dashboard-total-balance";
import DashboardTransactions from "../../dashboard-transactions";
import DashboardSavingPlan from "../../dashboard-saving-plan";
import DashboardIntro from "../../dashboard-intro";

export default function DashboardDesktopMain() {
  return (
    <>
      <div className='hidden lg:flex flex-col space-y-6'>
        <DashboardIntro />

        <div className='grid grid-cols-[1.5fr_2fr_1.5fr] gap-4 w-full'>
          <div className='w-full flex flex-col space-y-4'>
            <DashboardIncome />
            <DashboardExpense />
          </div>
          <DashboardStatistics />
          <DashboardTotalBalance />
        </div>

        <div className='grid grid-cols-[1.5fr_2fr_1.5fr] gap-4'>
          <DashboardTransactions />
          <DashboardSavingPlan />
        </div>
      </div>
    </>
  );
}
