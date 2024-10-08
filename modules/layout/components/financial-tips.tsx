import { Text } from "@/modules/common/components/text";
import { Button } from "@/modules/common/ui/button";
import { Blend, ChevronRight, DatabaseZap, FileKey2 } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function FinancialTips() {
  return (
    <div className='relative w-full sm:px-16 pt-16 pb-10 lg:pb-[14rem] bg-foreground/5 mt-10 flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-10'>
      <div className='relative rounded-r-2xl sm:rounded-2xl w-[90%] sm:w-[35rem] aspect-video overflow-hidden'>
        <Image
          src={"/images/spendless1.jpg"}
          alt={"spendless"}
          fill
          className='object-cover'
        />
      </div>

      <Tips />
      <div className='px-6 sm:px-0'>
        <MoreInfo />
      </div>
    </div>
  );
}

function Tips() {
  return (
    <div className='flex flex-col space-y-6 px-6'>
      <Text variant={"p"} className='text-foreground/50'>
        FINANCIAL TIPS
      </Text>
      <Text variant={"h2"} className='capitalize'>
        The best money saving tips
      </Text>

      <Text variant={"p"} className='text-foreground/50 sm:w-[43ch]'>
        Being wise with your money is the best way to save it. Here are some of
        the best tips to help you save money.
      </Text>

      <Button
        variant={"link"}
        className='relative flex space-x-1 items-center w-max px-0 py-0 '>
        <Text variant={"p"} className='font-semibold'>
          Read More
        </Text>
        <ChevronRight size={16} strokeWidth={1.5} />
      </Button>
    </div>
  );
}

function MoreInfo() {
  return (
    <div className='lg:absolute lg:-bottom-44 left-1/2 translate lg:-translate-x-1/2 flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8 items-start p-6 lg:p-14 rounded-2xl bg-foreground'>
      <div className='flex flex-col space-y-2 items-center'>
        <DatabaseZap size={24} strokeWidth={1.5} className='text-background' />
        <Text variant={"h5"} className='text-background uppercase'>
          Transparent
        </Text>
        <Text variant={"p"} className='text-background lg:w-[30ch]'>
          With Trackify, every transaction is clear and accounted for. You’ll
          always know where your money is going, with real-time updates and
          detailed insights into your spending. No hidden fees, no
          surprises—just full transparency at every step.
        </Text>
      </div>

      <div className='flex flex-col space-y-2 items-center'>
        <Blend size={24} strokeWidth={1.5} className='text-background' />
        <Text variant={"h5"} className='text-background uppercase'>
          Flexible
        </Text>
        <Text variant={"p"} className='text-background lg:w-[30ch]'>
          Trackify adapts to your financial lifestyle. Whether you’re budgeting
          for the month, saving for a goal, or managing unexpected expenses, the
          app offers flexible tools to help you stay in control. Customize
          categories, set limits, and adjust your goals anytime—Trackify moves
          with you.
        </Text>
      </div>

      <div className='flex flex-col space-y-2 items-center'>
        <FileKey2 size={24} strokeWidth={1.5} className='text-background' />
        <Text variant={"h5"} className='text-background uppercase'>
          Secure
        </Text>
        <Text variant={"p"} className='text-background lg:w-[30ch]'>
          Your data is safe with us. We use end-to-end encryption and secure
          authentication to protect your personal information.
        </Text>
      </div>
    </div>
  );
}
