import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/modules/common/ui/dropdown-menu";
import Image from "next/image";
import { Text } from "./text";
import { ChevronDownIcon } from "lucide-react";

export default function DashboardProfile() {
  return (
    <div className=''>
      <ProfileTrigger />
    </div>
  );
}

function ProfileTrigger() {
  return (
    <div className='flex items-center space-x-3'>
      <div>
        <div className='relative w-8 aspect-square overflow-hidden rounded-full'>
          <Image
            src={"/images/spendless1.jpg"}
            alt='avatar'
            fill
            className='object-cover'
          />
        </div>
      </div>

      <Text variant='p' className=''>
        John Doe
      </Text>
    </div>
  );
}

function DashboardDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <ProfileTrigger />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
