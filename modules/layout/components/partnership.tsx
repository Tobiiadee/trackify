import { Text } from "@/modules/common/components/text";
import React from "react";

export default function Partnership() {
  return (
    <div className='w-full h-32 flex items-center justify-center py-2 bg-foreground'>
      <Text variant={"p"} className='uppercase text-background'>
        our best partnership
      </Text>
      <div className='flex space-x-6 items-center'></div>
    </div>
  );
}
