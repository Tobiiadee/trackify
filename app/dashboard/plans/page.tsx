import { Text } from "@/modules/common/components/text";
import PlansSide from "@/modules/common/components/plans-side";
import { Button } from "@/modules/common/ui/button";
import { Plus } from "lucide-react";
import React from "react";
import PlansOverview from "@/modules/common/components/plans-overview";

export default function Index() {
  return (
    <div className="flex flex-col space-y-6">
      <div className='w-full flex justify-between items-center'>
        <div className='w-3/6'>
          <Text variant={"p"} className='text-foreground/60 italic'>
            Set your savings goals and track your progress. With personalized
            plans, Trackify helps you stay on target and manage your savings
            effortlessly.
          </Text>
        </div>

        <Button className='flex space-x-2 bg-blue-600 hover:bg-blue-700 text-background shadow rounded-md w-max'>
          <Plus size={20} strokeWidth={1.5} />
          <Text variant={"p"} className='text-background'>
            Add Plan
          </Text>
        </Button>
      </div>

      <div className="grid grid-cols-3 gap-4 w-full relative">
        <PlansSide/>
        <PlansOverview/>
      </div>
    </div>
  );
}
