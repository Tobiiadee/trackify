import { Text } from "@/modules/common/components/text";
import { Button } from "@/modules/common/ui/button";
import { Ellipsis } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function DashboardMobileHeader() {
  return (
    <div className='flex items-center justify-between py-6'>
      <Profile />

      <Button variant={"ghost"} className=''>
        <Ellipsis size={18} strokeWidth={1.5} />
      </Button>
    </div>
  );
}

function Profile() {
  return (
    <div className='flex space-x-4 items-center'>
      <div>
        <div className='w-10 aspect-square rounded-full relative overflow-hidden'>
          <Image
            src={"/images/spendless1.jpg"}
            alt='profile'
            fill
            className='object-cover'
            priority
          />
        </div>
      </div>

      <Text variant={"p"} className='font-semibold'>
        John Doe
      </Text>
    </div>
  );
}
