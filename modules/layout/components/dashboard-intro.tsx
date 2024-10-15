"use client";

import { Combobox } from "@/modules/common/components/custom-combox";
import { Text } from "@/modules/common/components/text";
import { EllipsisVertical } from "lucide-react";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/modules/common/ui/dropdown-menu";

export const yearData = [
  {
    value: "january",
    label: "January",
  },
  {
    value: "february",
    label: "February",
  },
  {
    value: "march",
    label: "March",
  },
  {
    value: "april",
    label: "April",
  },
  {
    value: "may",
    label: "May",
  },
  {
    value: "june",
    label: "June",
  },
  {
    value: "july",
    label: "July",
  },
  {
    value: "august",
    label: "August",
  },
  {
    value: "september",
    label: "September",
  },
  {
    value: "october",
    label: "October",
  },
  {
    value: "november",
    label: "November",
  },
  {
    value: "december",
    label: "December",
  },
];

export default function DashboardIntro() {
  const [value, setValue] = useState("");

  return (
    <div className='flex items-center justify-between'>
      <div className='flex flex-col space-y-1'>
        <Text variant={"p"} className='font-medium'>
          Welcome, John
        </Text>
        <Text variant={"h3"}>Your Dashboard</Text>
      </div>

      <div className='flex items-center space-x-4 w-[200px]'>
        <Combobox items={yearData} onSelect={(value) => setValue(value)} placeholder="Filter by month" />
        <IntroButton />
      </div>
    </div>
  );
}

function IntroButton() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className='border rounded-md p-2'>
        <EllipsisVertical
          size={20}
          strokeWidth={1.5}
          className='text-foreground/60'
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent id="scroll" className='mr-10 mt-1'>
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
