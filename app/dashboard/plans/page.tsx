import { Text } from "@/modules/common/components/text";
import PlansSide from "@/modules/common/components/plans-side";
import React from "react";
import PlansOverview from "@/modules/common/components/plans-overview";
import PlansAdd from "@/modules/common/components/plans-add";

export default function Index() {
  return (
    <div className='flex flex-col space-y-6'>
      <div className='w-full flex justify-between items-center'>
        <div className='w-3/6'>
          <Text variant={"p"} className='text-foreground/60 italic'>
            Set your savings goals and track your progress. With personalized
            plans, Trackify helps you stay on target and manage your savings
            effortlessly.
          </Text>
        </div>

        <PlansAdd />
      </div>

      <div className='grid grid-cols-3 gap-4 w-full relative'>
        <PlansSide />
        <PlansOverview />
      </div>
    </div>
  );
}
