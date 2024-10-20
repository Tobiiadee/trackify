import React from "react";
import DashboardCard from "./dashboard-card";
import { Text } from "@/modules/common/components/text";
import { Button } from "@/modules/common/ui/button";
import { House } from "lucide-react";
import { Progress } from "@/modules/common/ui/progress";

export default function DashboardSavingPlan() {
  return (
    <DashboardCard className='w-full flex flex-col space-y-2'>
      <div className='flex items-center justify-between'>
        <Text variant={"h5"} className='font-medium'>
          Saving Plans
        </Text>

        <Button variant={"link"} className='text-blue-600'>
          <Text variant={"p"} className='text-xs'>
            View All
          </Text>
        </Button>
      </div>

      <div className='flex flex-col space-y-6 divide-y'>
        {Array.from({ length: 3 }).map((_, i) => (
          <SavedItem key={i} />
        ))}
      </div>
    </DashboardCard>
  );
}

function SavedItem() {
  return (
    <div className='flex flex-col space-y-2 pt-4 cursor-pointer hover:scale-105 active:scale-100 transition'>
      <div className='flex space-x-4 items-center'>
        <div className='w-10 h-10 bg-foreground/5 rounded-md flex items-center justify-center'>
          <House size={26} strokeWidth={1.5} />
        </div>

        <div className='flex flex-col space-y-0.5'>
          <Text variant={"p"} className='capitalize font-semibold'>
            New Home
          </Text>
          <div className='flex items-center space-x-1'>
            <Text variant={"p"} className='text-foreground/60 text-xs'>
              End Date:
            </Text>
            <Text variant={"p"} className='font-semibold text-xs'>
              2023-05-01
            </Text>
          </div>
        </div>
      </div>

      <div className='flex items-center justify-between'>
        <Text variant={"p"} className='text-blue-600 text-xs'>
          $378.00
        </Text>
        <Text variant={"p"} className='text-foreground/60 text-xs'>
          $300.00
        </Text>
      </div>

      <Progress value={30} max={100} />
    </div>
  );
}
