import React from "react";


import DashboardTotalBalance from "@/modules/layout/components/dashboad-main/dashboard-total-balance";
import DashboardIncome from "../../dashboad-main/dashboard-income";
import DashboardExpense from "../../dashboad-main/dashboard-expense";
import DashboardIntro from "../../dashboad-main/dashboard-intro";
import DashboardTransactions from "../../dashboad-main/dashboard-transactions";
import DashboardSavingPlan from "../../dashboad-main/dashboard-saving-plan";
import DashboardStatistics from "../../dashboad-main/dashboard-statistics";


export default function DashboardMain() {
  return (
    <>
      <div className='flex flex-col space-y-6'>
        <DashboardIntro />

        <div className='grid grid-cols-1 lg:grid-cols-[1.5fr_2fr_1.5fr] gap-4 w-full'>
          <div className='w-full flex flex-col sm:flex-row sm:space-x-4 lg:flex-col space-y-4 sm:space-y-0 lg:space-x-0'>
            <DashboardIncome />
            <DashboardExpense />
          </div>
          <DashboardStatistics />
          <DashboardTotalBalance />
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-[1.5fr_2fr_1.5fr] lg:gap-4'>
          <DashboardTransactions />
          <DashboardSavingPlan />
        </div>
      </div>
    </>
  );
}
