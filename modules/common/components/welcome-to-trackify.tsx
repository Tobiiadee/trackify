"use client";

import React from "react";
import { Text } from "./text";
import { ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function WelcomeToTrackify() {
  const { push } = useRouter();

  return (
    <div className='grid lg:grid-cols-2 lg:gap-4 sm:pl-4 lg:pl-10'>
      <div className='pt-10 flex flex-col space-y-6'>
        <div className='flex flex-col space-y-1'>
          <Text variant={"h2"}>Welcome to Trackify</Text>
          <Text variant={"h3"} className='italic'>
            You&apos;re all set
          </Text>
        </div>

        <Text variant={"p"} className='text-foreground/60 italic'>
          Now that we know a bit about you, it&apos;s time to take control of
          your finances with Trackify. From tracking daily expenses to setting
          up your long-term financial goals, we&apos;ve got you covered every
          step of the way.
        </Text>

        <div className='flex flex-col space-y-2 pl-8'>
          <TextSub text='Track your first expense' />
          <TextSub text='Set up your budget' />
          <TextSub text='Explore your dashboard' />
        </div>

        <Text variant={"p"}>
          Your financial journey starts now, and we&apos;re excited to help you
          reach your goals!
        </Text>

        <div className='w-full flex justify-center'>
          <Button
            onClick={() => push("/dashboard")}
            type='button'
            className='w-[80%]'>
            Go to My Dashboard
          </Button>
        </div>
      </div>

      <div className='relative w-full h-full hidden lg:block'>
        <Image
          src='/images/hero-image.jpg'
          alt='welcome to trackify'
          fill
          className='w-full h-full object-cover'
        />
      </div>
    </div>
  );
}

function TextSub({ text }: { text: string }) {
  return (
    <div className='flex space-x-2 items-center'>
      <ChevronRight size={20} strokeWidth={2.5} className='font-semibold' />
      <Text variant={"p"} className='italic'>
        {text}
      </Text>
    </div>
  );
}
