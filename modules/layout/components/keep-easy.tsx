import { Text } from "@/modules/common/components/text";
import { Button } from "@/modules/common/ui/button";
import React from "react";

export default function KeepEasy() {
  return (
    <div className='relative w-full flex flex-col space-y-6 px-6 py-8 sm:p-16 bg-foreground/5 mt-10'>
      <Text variant={"h2"} className='capitalize'>
        Keep it easy for you to track your finances
      </Text>

      <Text variant={"p"} className='text-foreground/50 sm:w-[43ch]'>
        Access your finances from any device—desktop, tablet, or mobile. Install
        it as a PWA for quick access anytime, even offline
      </Text>

      <Button className='w-max'>
        <Text variant={"p"}>Download App</Text>
      </Button>
    </div>
  );
}
