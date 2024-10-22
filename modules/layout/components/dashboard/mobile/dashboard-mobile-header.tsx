import { Text } from "@/modules/common/components/text";
import { Button } from "@/modules/common/ui/button";
import { Search } from "lucide-react";
import Image from "next/image";
import React from "react";
import DashboardMobileMenu from "./dashboard-mobile-menu";

export default function DashboardMobileHeader() {
  return (
    <div className='flex lg:hidden items-center justify-between py-6'>
      <Profile />

      <div className='flex space-x-6 items-center'>
        <Button
          variant={"ghost"}
          className='px-2 active:border-blue-600 hover:bg-transparent active:bg-transparent'>
          <Search size={22} strokeWidth={1.5} />
        </Button>

        <DashboardMobileMenu />
      </div>
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
