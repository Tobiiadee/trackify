"use client";

import React from "react";
import DashboardCard from "./dashboard-card";
import { Text } from "@/modules/common/components/text";
import { Button } from "@/modules/common/ui/button";
import { ArrowBigDown, ArrowBigUp, ArrowUpDown } from "lucide-react";
import { useRouter } from "next/navigation";

export const transactions: TransactionItemProps[] = [
  {
    time: "12:00 AM",
    date: "22-01-23",
    name: "Groceries",
    amount: 100,
    transactionType: "income",
    status: "reversed",
  },
  {
    time: "2:00 PM",
    date: "22-07-23",
    name: "Books",
    amount: 290,
    transactionType: "expense",
    status: "processing",
  },
  {
    time: "4:00 PM",
    date: "21-06-23",
    name: "Car purchase",
    amount: 790,
    transactionType: "expense",
    status: "pending",
  },
  {
    time: "5:00 PM",
    date: "22-07-23",
    name: "Gift",
    amount: 50,
    transactionType: "income",
    status: "success",
  },
  {
    time: "10:00 PM",
    date: "15-07-23",
    name: "Furniture",
    amount: 1200,
    transactionType: "expense",
    status: "failed",
  },
];

export default function DashboardTransactions() {
  const router = useRouter();

  return (
    <DashboardCard className='w-full col-span-2 flex flex-col space-y-6 overflow-x-auto'>
      <div className='flex items-center justify-between'>
        <Text variant={"h5"} className='font-medium'>
          Recent Transaction
        </Text>
      </div>

      <div className='flex flex-col space-y-4 w-max'>
        <TransactionTableHeader />
        <div className='flex flex-col space-y-1 divide-y '>
          {transactions.map((transaction, index) => (
            <TransactionItem
              key={index}
              date={transaction.date}
              time={transaction.time}
              amount={transaction.amount}
              transactionType={transaction.transactionType}
              name={transaction.name}
              status={transaction.status}
            />
          ))}
        </div>
      </div>

      <Button
        onClick={() => router.push("/dashboard/transactions")}
        className='bg-blue-600 hover:bg-blue-700 text-background rounded-lg w-max'>
        <Text variant={"p"}>View All</Text>
      </Button>
    </DashboardCard>
  );
}

interface TransactionItemProps {
  date: string;
  time: string;
  name: string;
  amount: number;
  transactionType: "income" | "expense";
  status: "pending" | "processing" | "success" | "failed" | "reversed";
}

export function TransactionItem({
  date,
  time,
  name,
  amount,
  transactionType,
  status,
}: TransactionItemProps) {
  return (
    <div className='grid grid-cols-[1fr_1fr_1fr_1fr_0.5fr] py-2 w-full'>
      <div className='flex space-x-1 items-center'>
        <Text variant={"p"} className='text-xs font-medium'>
          {date}
        </Text>
        <Text variant={"p"} className='text-xs font-medium'>
          {time}
        </Text>
      </div>

      <div className='flex items-center pl-2 w-full space-x-1'>
        {transactionType === "expense" ? (
          <ArrowBigUp
            size={20}
            strokeWidth={1.5}
            stroke='#dc2626'
            className='text-foreground/60'
          />
        ) : (
          <ArrowBigDown
            size={20}
            strokeWidth={1.5}
            stroke='#16a34a'
            className='text-foreground/60'
          />
        )}
        <Text variant={"p"} className='text-xs font-medium'>
          {name}
        </Text>
      </div>

      <div className='w-full flex items-center pl-6'>
        <Text variant={"p"} className='font-medium'>
          ${amount.toFixed(2)}
        </Text>
      </div>

      <div className='w-full flex items-center pl-6'>
        {transactionType === "income" ? (
          <Text
            variant={"p"}
            className='text-xs font-medium px-2 py-1 text-green-600 bg-green-100 rounded-md'>
            Income
          </Text>
        ) : (
          <Text
            variant={"p"}
            className='text-xs font-medium px-2 py-1 text-red-600 bg-red-100 rounded-md'>
            Expened
          </Text>
        )}
      </div>
      <Text variant={"p"} className='text-xs font-medium capitalize'>
        {status}
      </Text>
    </div>
  );
}

export function TransactionTableHeader() {
  return (
    <div className='w-full grid grid-cols-[1fr_1fr_1fr_1fr_0.5fr] gap-4 py-2 border-t border-b'>
      <div className='flex space-x-2 items-center'>
        <ArrowUpDown
          size={20}
          strokeWidth={1.5}
          className='text-foreground/60'
        />
        <Text variant={"p"} className='text-foreground/60 text-xs'>
          Transaction Date
        </Text>
      </div>
      <div className='flex space-x-2 items-center'>
        <ArrowUpDown
          size={20}
          strokeWidth={1.5}
          className='text-foreground/60'
        />
        <Text variant={"p"} className='text-foreground/60 text-xs'>
          Transaction Name
        </Text>
      </div>
      <div className='flex space-x-2 items-center'>
        <ArrowUpDown
          size={20}
          strokeWidth={1.5}
          className='text-foreground/60'
        />
        <Text variant={"p"} className='text-foreground/60 text-xs'>
          Transaction Amount
        </Text>
      </div>
      <div className='flex space-x-2 items-center'>
        <ArrowUpDown
          size={20}
          strokeWidth={1.5}
          className='text-foreground/60'
        />
        <Text variant={"p"} className='text-foreground/60 text-xs'>
          Transaction
        </Text>
      </div>

      <div className='flex items-center'>
        <Text variant={"p"} className='text-foreground/60 text-xs'>
          Status
        </Text>
      </div>
    </div>
  );
}
