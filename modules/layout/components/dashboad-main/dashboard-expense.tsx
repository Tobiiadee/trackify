import React from "react";
import DashboardCard from "./dashboard-card";
import { Text } from "@/modules/common/components/text";
import { DashboardExpenseChart } from "./dashboard-expense-chart";

export default function DashboardExpense() {
  return (
    <DashboardCard className='w-full h-full flex flex-col space-y-2'>
      <div className='flex items-center justify-between'>
        <Text variant={"p"} className='text-foreground/60'>
          Expense
        </Text>
        <div className='flex items-center justify-center p-1 bg-red-200 rounded'>
          <p className='text-xs text-red-600'>-15.20%</p>
        </div>
      </div>

      <div className='flex items-center justify-between '>
        <Text variant={"h3"} className=''>
          $32,550
        </Text>

        <DashboardExpenseChart />
      </div>

      <div className=''>
        <Text variant={"p"} className='text-foreground/60 text-xs'>
          Your balance bigger <span className='text-blue-600'>$8,450</span> last
          month
        </Text>
      </div>
    </DashboardCard>
  );
}
