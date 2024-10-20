"use client";

import * as React from "react";
import { Check, ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/modules/common/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/modules/common/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/modules/common/ui/popover";
import { Text } from "./text";

interface ComboboxProps<T> {
  items: { value: T; label: string }[];
  placeholder?: string;
  onSelect: (value: T) => void;
  selectedValue?: T;
  inputPlaceholder?: string;
  isSearch?: boolean;
  label?: string;
}

export function Combobox<T extends string>({
  items,
  placeholder = "Select item...",
  onSelect,
  selectedValue,
  inputPlaceholder = "Search...",
  isSearch = false,
  label
}: ComboboxProps<T>) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(placeholder);

  return (
    <div className='flex flex-col space-y-2 w-full h-full'>
      <Text variant={"p"}>{label}</Text>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild className="w-full">
          <Button
            variant='outline'
            role='combobox'
            aria-expanded={open}
            className='w-full text-xs justify-between capitalize'>
            {selectedValue
              ? items.find((item) => item.value === selectedValue)?.label
              : value}
            <ChevronDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
          </Button>
        </PopoverTrigger>
        <PopoverContent className='w-full p-0 max-h-[200px]'>
          <Command id="scroll" className="w-full  ">
            {isSearch && <CommandInput placeholder={inputPlaceholder} />}
            <CommandList id="scroll" className="w-full max-h-[200px]">
              <CommandEmpty>No item found.</CommandEmpty>
              <CommandGroup>
                {items.map((item) => (
                  <CommandItem
                  className="w-full text-xs"
                    key={item.value}
                    value={item.value}
                    onSelect={() => {
                      onSelect(item.value);
                      setValue(item.value);
                      setOpen(false);
                    }}>
                    <Check
                      className={cn(
                        "h-4 w-4",
                        selectedValue === item.value
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    />
                    {item.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
