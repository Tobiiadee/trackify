"use client";

import * as React from "react";

import { Button } from "@/modules/common/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/modules/common/ui/dropdown-menu";
import { Text } from "../../../common/components/text";
import { ChevronDown } from "lucide-react";

export function PlansContributionFrequency() {
  const [frequency, setFrequency] = React.useState("Set frequency");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className='w-full'>
      <Button variant='outline' className=' capitalize flex justify-between items-center'>
      <Text variant={"p"} className={`text-xs ${frequency =="Set frequency" ? "text-muted-foreground" : ""}`}>{frequency}</Text>

          <ChevronDown size={18} strokeWidth={1.5} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56'>
        <DropdownMenuRadioGroup value={frequency} onValueChange={setFrequency}>
          <DropdownMenuRadioItem
            value='weekly'
            className='flex justify-between items-center'>
            <Text variant={"p"} className='text-xs'>
              Weekly
            </Text>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            value='bi-weekly'
            className='flex justify-between items-center'>
            <Text variant={"p"} className='text-xs'>
              Bi-weekly
            </Text>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            value='monthly'
            className='flex justify-between items-center'>
            <Text variant={"p"} className='text-xs'>
              Monthly
            </Text>
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
