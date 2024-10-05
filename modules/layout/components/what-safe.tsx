import Image from "next/image";
import React from "react";
import LayoutPadding from "./layout-padding";
import { Text } from "@/modules/common/components/text";
import { Button } from "@/modules/common/ui/button";
import { ChevronRight } from "lucide-react";
import { Separator } from "@/modules/common/ui/separator";

export default function WhatSafe() {
  return (
    <LayoutPadding className='mt-16 flex flex-col space-y-10'>
      <WhatSafeImage />
      <div className='w-full flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-32'>
        <div className='flex flex-col space-y-5'>
          <div className='flex flex-col space-y-5'>
            <Text variant={"h1"} className='lg:w-[15ch]'>
              See what&apos;s safe to spend on
            </Text>
            <Text variant={"p"} className='text-foreground/50 w-[40ch] sm:w-[50ch]'>
              The first thing you’ll see when you open Trackify is your
              available balance—showing exactly how much you can safely spend.
              Trackify keeps track of your expenses, budgets, and financial
              goals, automatically allocating your deposits to cover bills,
              savings, and long-term investments. It’s smart, intuitive, and
              designed to help you stay on top of your financial game.
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
        </div>

        <Users />
      </div>
    </LayoutPadding>
  );
}

function WhatSafeImage() {
  return (
    <div className='relative w-full lg:w-max pl-10'>
      <div className='relative rounded-l-2xl sm:rounded-2xl w-full sm:w-[40rem] aspect-video overflow-hidden'>
        <Image
          src={"/images/spendless1.jpg"}
          alt={"spendless"}
          fill
          className='object-cover'
        />
      </div>
      <div className='absolute hidden lg:block top-[40%] left-[80%] rounded-2xl w-[30rem] aspect-video overflow-hidden'>
        <Image
          src={"/images/spendless2.jpg"}
          alt={"spendless"}
          fill
          className='object-cover'
        />
      </div>
    </div>
  );
}

function Users() {
  return (
    <div className='flex space-x-6'>
      <div className='flex flex-col space-y-2 items-center'>
        <Text variant={"h2"}>2M+</Text>
        <Text variant={"p"} className='text-foreground/50'>
          Users
        </Text>
      </div>
      <div>
        <Separator orientation='vertical' />
      </div>

      <div className='flex flex-col space-y-2 items-center'>
        <Text variant={"h2"}>50+</Text>
        <Text variant={"p"} className='text-foreground/50'>
          Supported Account
        </Text>
      </div>

      <div>
        <Separator orientation='vertical' />
      </div>
      <div className='flex flex-col space-y-2 items-center'>
        <Text variant={"h2"}>10K+</Text>
        <Text variant={"p"} className='text-foreground/50'>
          5 Ratings
        </Text>
      </div>
    </div>
  );
}
