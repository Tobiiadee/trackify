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

const categories = [
  "Groceries",
  "Rent/Mortgage",
  "Utilities",
  "Transportation",
  "Dining/Restaurants",
  "Entertainment",
  "Healthcare",
  "Savings",
  "Debt Repayment",
  "Education",
  "Shopping",
  "Investments",
];

export function PlansCategories() {
  const [category, setCategory] = React.useState("Set category");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className='w-full'>
        <Button
          variant='outline'
          className=' capitalize flex justify-between items-center'>
                    <Text variant={"p"} className={`text-xs ${category =="Set category" ? "text-muted-foreground" : ""}`}>{category}</Text>

          <ChevronDown size={18} strokeWidth={1.5} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent id="scroll" className='w-full max-h-[200px] overflow-y-auto'>
        <DropdownMenuRadioGroup value={category} onValueChange={setCategory}>
          {categories.map((category) => (
            <DropdownMenuRadioItem
              key={category}
              value={category}
              className='flex justify-between items-center'>
              <Text variant={"p"} className='text-xs'>
                {category}
              </Text>
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
