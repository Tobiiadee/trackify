import { Text } from "@/modules/common/components/text";
import { Button } from "@/modules/common/ui/button";
import Link from "next/link";
import React from "react";

export default function KeepEasy() {
  return (
    <div className='relative w-full flex flex-col space-y-16 px-6 py-8 sm:p-16 bg-foreground/5 mt-10'>
      {/* <div className='grid place-items-center w-full'></div> */}
      <div className='flex flex-col space-y-6'>
        <Text variant={"h2"} className='capitalize'>
          Keep it easy for you to track your finances
        </Text>

        <Text variant={"p"} className='text-foreground/50 sm:w-[43ch]'>
          Access your finances from any device—desktop, tablet, or mobile.
          Install it as a PWA for quick access anytime, even offline
        </Text>
        <div className='flex items-center space-x-6'>
          <Button asChild className='w-max text-background'>
            <Link href={"/get-started"}>
              <Text variant={"p"}>Get Started</Text>
            </Link>
          </Button>

          <Button variant={"outline"} className='w-max bg-transparent'>
            <Text variant={"p"}>Download App</Text>
          </Button>
        </div>
      </div>
    </div>
  );
}
