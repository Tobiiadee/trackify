import { Text } from "@/modules/common/components/text";
import React from "react";
import LayoutPadding from "./layout-padding";
import Image from "next/image";
import { Button } from "@/modules/common/ui/button";
import { ChevronRight } from "lucide-react";

export default function RealTimeInsight() {
  return (
    <LayoutPadding className='w-full flex flex-col-reverse space-y-8 lg:grid grid-cols-2 lg:place-items-center gap-4 mt-16'>
      <div className='flex flex-col space-y-4 px-6 sm:px-0'>
        <Text variant={"h1"} className='w-[15ch]'>
          Real-Time Insight
        </Text>
        <Text variant={"p"} className='text-foreground/50 w-[45ch]'>
          Get real-time updates on your financial health with intuitive reports
          and personalized insights.
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

      <div className='w-full'>
        <div className='relative sm:rounded-2xl sm:w-[35rem] aspect-[16/12] overflow-hidden'>
          <Image
            src={"/images/spendless1.jpg"}
            alt={"spendless"}
            fill
            className='object-cover'
          />
        </div>
      </div>
    </LayoutPadding>
  );
}
