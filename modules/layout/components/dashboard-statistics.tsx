import { Text } from "@/modules/common/components/text";
import React from "react";
import DashboardCard from "./dashboard-card";
import DashboardbarTransaction from "./dashboard-bar-transaction";

export default function DashboardStatistics() {
  return (
    <DashboardCard className='w-full flex flex-col space-y-8'>
      <div className='flex justify-between items-center'>
        <Text variant={"p"} className=''>
          Statistics Transaction
        </Text>
        <div className='flex space-x-4 items-center'>
          <div className='flex items-center space-x-2'>
            <div className='w-2 aspect-square rounded-full bg-blue-200' />
            <Text variant={"p"} className='text-foreground/60 text-xs'>
              Spending
            </Text>
          </div>
          <div className='flex items-center space-x-2'>
            <div className='w-2 aspect-square rounded-full bg-blue-600' />
            <Text variant={"p"} className='text-foreground/60 text-xs'>
              Income
            </Text>
          </div>
        </div>
      </div>

      <DashboardbarTransaction />
    </DashboardCard>
  );
}
