import { Text } from "@/modules/common/components/text";
import React from "react";
import LayoutPadding from "./layout-padding";
import Image from "next/image";
import { Button } from "@/modules/common/ui/button";
import { ChevronRight } from "lucide-react";

export default function BudgetManagment() {
  return (
    <LayoutPadding className='w-full flex flex-col space-y-8 lg:grid grid-cols-2 place-items-center gap-4 mt-16'>
      <div className='w-full'>
        <div className='relative sm:rounded-2xl sm:w-[32rem] aspect-[16/12] overflow-hidden'>
          <Image
            src={"/images/spendless1.jpg"}
            alt={"spendless"}
            fill
            className='object-cover'
          />
        </div>
      </div>

      <div className='flex flex-col space-y-4 sm:w-full'>
        <Text variant={"h1"} className='w-[18ch]'>
          Budget Managment
        </Text>
        <Text variant={"p"} className='text-foreground/50 w-[40ch]'>
          Create budgets for different categories, get alerts when you&apos;re
          overspending, and track your progress in real-time
        </Text>

        <Button
          variant={"link"}
          className='relative flex space-x-1 items-center w-max px-0 py-0 '>
          <Text variant={"p"} className='font-semibold'>
            Learn More
          </Text>
          <ChevronRight size={16} strokeWidth={1.5} />
        </Button>
      </div>
    </LayoutPadding>
  );
}
