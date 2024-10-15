import React from "react";
import DashboardCard from "./dashboard-card";
import { Text } from "@/modules/common/components/text";
import { DashboardIncomeChart } from "./dashboard-income-chart";

export default function DashboardIncome() {
  return (
    <DashboardCard className='w-full h-full flex flex-col space-y-2'>
      <div className='flex items-center justify-between'>
        <Text variant={"p"} className='text-foreground/60'>
          Income
        </Text>
        <div className='flex items-center justify-center p-1 bg-green-200 rounded'>
          <p className='text-xs text-green-600'>+12.20%</p>
        </div>
      </div>

      <div className='flex items-center justify-between'>
        <Text variant={"h3"} className=''>
          $52,500
        </Text>

        <DashboardIncomeChart/>
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

