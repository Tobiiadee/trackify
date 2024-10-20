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
import { Text } from "./text";
import { ChevronDown } from "lucide-react";

export function PlansType() {
  const [type, setType] = React.useState("Set plan type");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className='w-full'>
      <Button variant='outline' className=' capitalize flex justify-between items-center'>
      <Text variant={"p"} className={`text-xs ${type =="Set plan type" ? "text-muted-foreground" : ""}`}>{type}</Text>

          <ChevronDown size={18} strokeWidth={1.5} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56'>
        <DropdownMenuRadioGroup value={type} onValueChange={setType}>
          <DropdownMenuRadioItem
            value='reccuring'
            className='flex justify-between items-center'>
            <Text variant={"p"} className='text-xs'>
              Reccuring
            </Text>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            value='one-time'
            className='flex justify-between items-center'>
            <Text variant={"p"} className='text-xs'>
              One-time
            </Text>
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
