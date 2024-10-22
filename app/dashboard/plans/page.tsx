import { Text } from "@/modules/common/components/text";
import PlansSide from "@/modules/layout/components/plans-main/plans-side";
import React from "react";
import PlansOverview from "@/modules/layout/components/plans-main/plans-overview";
import PlansAdd from "@/modules/layout/components/plans-main/plans-add";
import PlansSideMobile from "@/modules/layout/components/plans-main/plans-side-mobile";

export default function Index() {
  return (
    <div className='flex flex-col space-y-6'>
      <div className='w-full flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:justify-between sm:items-start lg:items-center'>
        <div className='sm:w-3/6'>
          <Text variant={"p"} className='text-foreground/60 italic'>
            Set your savings goals and track your progress. With personalized
            plans, Trackify helps you stay on target and manage your savings
            effortlessly.
          </Text>
        </div>

        <div className='flex sm:space-x-4 justify-between items-center'>
          <PlansSideMobile />
          <PlansAdd />
        </div>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 w-full relative'>
        <PlansSide />
        <PlansOverview />
      </div>
    </div>
  );
}
