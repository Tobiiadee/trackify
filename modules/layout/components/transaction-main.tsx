"use client";

import { Text } from "@/modules/common/components/text";
import React, { useState } from "react";
import {
  TransactionItem,
  TransactionTableHeader,
  transactions,
} from "./dashboard-transactions";
import { Button } from "@/modules/common/ui/button";
import { Download, ListFilter } from "lucide-react";
import { Separator } from "@/modules/common/ui/separator";
import { Input } from "@/modules/common/ui/input";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/modules/common/ui/dropdown-menu";
import { yearData } from "./dashboard-intro";
import { Combobox } from "@/modules/common/components/custom-combox";

export default function TransactionMain() {
  const [value, setValue] = useState("");

  return (
    <div className='col-span-2 flex flex-col space-y-6 justify-between'>
      <div className='flex items-center justify-between'>
        <div className='flex space-x-6 items-center'>
          <div className='border rounded-lg p-2 flex items-center space-x-2'>
            <Text variant='p' className='font-semibold text-foreground/60'>
              In:
            </Text>
            <Text variant='h5'>$135,700.00</Text>
          </div>
          <div className='border rounded-lg p-2 flex items-center space-x-2'>
            <Text variant='p' className='font-semibold text-foreground/60'>
              Out:
            </Text>
            <Text variant='h5'>$135,700.00</Text>
          </div>
        </div>
        <div className=''>
          <Combobox
            items={yearData}
            onSelect={(value) => setValue(value)}
            placeholder='Filter by month'
          />
        </div>
      </div>

      <div className='flex flex-col space-y-6 border p-2 rounded-lg'>
        <div className='flex justify-between'>
          <div className='flex-col flex space-y-1'>
            <Text variant={"p"} className='font-semibold'>
              Transactions
            </Text>
            <Text variant={"p"} className='text-foreground/70 text-xs'>
              Sent and recieved transaction table list.
            </Text>
          </div>

          <div className=''>
            <Button variant={"outline"} className='flex items-center space-x-2'>
              <Download size={20} strokeWidth={1.5} />
              <Text variant={"p"} className='text-xs'>
                Download
              </Text>
            </Button>
          </div>
        </div>

        <Filter />

        <TransactionTableHeader />
        <div id="scroll" className='flex flex-col divide-y space-y-0.5 max-h-[400px] overflow-y-auto'>
          {transactions.map((transaction, index) => (
            <TransactionItem
              key={index}
              date={transaction.date}
              time={transaction.time}
              amount={transaction.amount}
              status={transaction.status}
              transactionType={transaction.transactionType}
              name={transaction.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
}



function Filter() {
  return (
    <div className='w-full flex items-center justify-between'>
      <div className='flex items-center border rounded-lg h-full w-max overflow-hidden'>
        <Button variant={"ghost"} className='rounded-none'>
          <Text variant={"p"} className='text-xs'>
            All
          </Text>
        </Button>
        <div className='h-full'>
          <Separator orientation='vertical' />
        </div>
        <Button variant={"ghost"} className='rounded-none'>
          <Text variant={"p"} className='text-xs'>
            Sent
          </Text>
        </Button>
        <div className='h-full'>
          <Separator orientation='vertical' />
        </div>
        <Button variant={"ghost"} className='rounded-none'>
          <Text variant={"p"} className='text-xs'>
            Recieved
          </Text>
        </Button>
      </div>

      <div className='flex items-center space-x-6 w-3/6'>
        <Input placeholder='Search transaction...' />
        <FilterButton />
      </div>
    </div>
  );
}

function FilterButton() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button
          variant={"outline"}
          className='flex space-x-2 items-center border-blue-600'>
          <ListFilter size={20} strokeWidth={1.5} className='text-blue-600' />
          <Text variant={"p"} className='text-blue-600'>
            Fliter
          </Text>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='mr-6'>
        <DropdownMenuItem>
          <Text variant={"p"} className='text-xs'>
            Status
          </Text>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Text variant={"p"} className='text-xs'>
            Category
          </Text>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Text variant={"p"} className='text-xs'>
            Type
          </Text>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
