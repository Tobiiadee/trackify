"use client";

import { Text } from "@/modules/common/components/text";
import React, { useState } from "react";

import { Button } from "@/modules/common/ui/button";
import { Download, ListFilter, Search, X } from "lucide-react";
import { Separator } from "@/modules/common/ui/separator";
import { Input } from "@/modules/common/ui/input";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/modules/common/ui/dropdown-menu";

import { Combobox } from "@/modules/common/components/custom-combox";
import { yearData } from "../dashboad-main/dashboard-intro";
import { TransactionItem, transactions, TransactionTableHeader } from "../dashboad-main/dashboard-transactions";

export default function TransactionMain() {
  const [value, setValue] = useState("");

  return (
    <div className='col-span-2 flex flex-col space-y-6 justify-between'>
      <div className='flex sm:items-center justify-between'>
        <div className='flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 sm:items-center'>
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

      <div className='flex flex-col space-y-6 border p-2 rounded-lg w-full'>
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
              <Text variant={"p"} className='text-xs hidden sm:block'>
                Download
              </Text>
            </Button>
          </div>
        </div>

        <FilterCustom />
        <div className='w-full overflow-x-auto'>
          <div className='flex flex-col space-y-6 w-max '>
            <TransactionTableHeader />
            <div
              id='scroll'
              className='flex flex-col divide-y space-y-0.5 max-h-[400px] overflow-y-auto'>
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
      </div>
    </div>
  );
}

export function FilterCustom() {
  const [isSearch, setIsSearch] = useState(false);

  return (
    <div className='w-full flex items-center justify-between'>
      {!isSearch && (
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
      )}

      {isSearch && (
        <div className='sm:hidden relative w-full'>
          <Input
            placeholder='Search transaction...'
            className=''
          />
        </div>
      )}

      <div className='flex items-center justify-end space-x-4 w-3/6'>
        <Input
          placeholder='Search transaction...'
          className='hidden sm:inline-block'
        />

        {!isSearch ? (
          <Button
            onClick={() => setIsSearch((prev) => !prev)}
            variant={"ghost"}
            size={"icon"}
            className='sm:hidden bg-transparent hover:bg-transparent border border-transparent active:border-blue-600'>
            <Search size={22} strokeWidth={1.5} />
          </Button>
        ) : (
          <Button
            onClick={() => setIsSearch((prev) => !prev)}
            variant={"ghost"}
            size={"icon"}
            className='sm:hidden bg-transparent hover:bg-transparent border border-transparent active:border-blue-600'>
            <X size={22} strokeWidth={1.5} />
          </Button>
        )}

        <FilterButton />
      </div>
    </div>
  );
}

export function FilterButton() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button
          variant={"outline"}
          className='flex space-x-2 items-center border-blue-600'>
          <ListFilter size={20} strokeWidth={1.5} className='text-blue-600' />
          <Text variant={"p"} className='text-blue-600 hidden sm:block'>
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
