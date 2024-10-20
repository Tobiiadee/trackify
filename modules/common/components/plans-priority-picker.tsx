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

type Priority = "low" | "medium" | "high";

export function PlansPriorityPicker() {
  const [priority, setPriority] = React.useState<Priority | null>(null);

  const priorityColors: Record<Priority, string> = {
    low: "bg-green-500",
    medium: "bg-yellow-500",
    high: "bg-red-500",
  };

  // Function to get the color based on priority, but handle null cases
  const getPriorityColor = (priority: Priority | null): string => {
    return priority ? priorityColors[priority] : "bg-gray-500"; // Default color if priority is null
  };

  const priorityColor = getPriorityColor(priority);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className='w-full'>
        <Button
          variant='outline'
          className='capitalize flex justify-between items-center'>
          <Text
            variant={"p"}
            className={`text-xs ${
              priority === null ? "text-muted-foreground" : ""
            }`}>
            {priority === null ? "Set priority" : priority}
          </Text>
          {/* Use the correct color for the priority indicator */}
          {priority !== null ? (
            <div
              className={`w-3 aspect-square rounded-full ${priorityColor}`}
            />
          ) : (
            <ChevronDown size={18} strokeWidth={1.5} />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56'>
        <DropdownMenuRadioGroup value={priority as string} onValueChange={(value) => setPriority(value as Priority)}>
          <DropdownMenuRadioItem
            value='low'
            className='flex justify-between items-center'>
            <Text variant={"p"} className='text-xs'>
              Low
            </Text>
            <div className='w-3 aspect-square rounded-full bg-green-500' />
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            value='medium'
            className='flex justify-between items-center'>
            <Text variant={"p"} className='text-xs'>
              Medium
            </Text>
            <div className='w-3 aspect-square rounded-full bg-yellow-500' />
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            value='high'
            className='flex justify-between items-center'>
            <Text variant={"p"} className='text-xs'>
              High
            </Text>
            <div className='w-3 aspect-square rounded-full bg-red-500' />
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
