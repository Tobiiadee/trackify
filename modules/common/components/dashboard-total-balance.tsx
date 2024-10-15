import DashboardCard from "@/modules/layout/components/dashboard-card";
import React from "react";
import { Text } from "./text";
import { Button } from "../ui/button";
import { MoveDownLeft, MoveUpRight } from "lucide-react";
import { Separator } from "../ui/separator";
import { Progress } from "../ui/progress";

export default function DashboardTotalBalance() {
  return (
    <DashboardCard className='w-full flex flex-col space-y-6'>
      <div className='flex items-center justify-between'>
        <Text variant={"p"} className='text-foreground/60 text-xs'>
          Total Balance
        </Text>
        <Text variant={"p"} className='text-foreground/60 text-xs'>
          From last month
        </Text>
      </div>

      <div className='flex items-center justify-between'>
        <Text variant={"h3"} className='text-foreground'>
          $32,550
        </Text>
        <div className='flex items-center justify-center p-1 bg-green-200 rounded'>
          <p className='text-xs text-green-600'>+12.20%</p>
        </div>
      </div>
      <div className='flex items-center space-x-1'>
        <Text variant={"p"} className='text-foreground/60 text-xs'>
          Balance from last month
        </Text>
        <Text variant={"p"} className='text-foreground'>
          $32,550
        </Text>
      </div>

      <div className='flex items-center space-x-6'>
        <Button
          variant={"ghost"}
          className='flex items-center space-x-2 bg-green-200 hover:bg-green-300'>
          <MoveDownLeft size={15} strokeWidth={2} className='text-green-600' />
          <Text
            variant={"p"}
            className='text-foreground/60 text-xs text-green-600'>
            Income
          </Text>
        </Button>
        <Button
          variant={"ghost"}
          className='flex items-center space-x-2 bg-red-200 hover:bg-red-300'>
          <MoveUpRight size={15} strokeWidth={2} className='text-red-600' />
          <Text
            variant={"p"}
            className='text-foreground/60 text-xs text-red-600'>
            Expened
          </Text>
        </Button>
      </div>
      <div className='w-full'>
        <Separator />
      </div>

      <div className='w-full flex flex-col space-y-2'>
        <div className='flex items-center justify-between'>
          <Text variant={"p"} className='text-foreground/60 text-xs'>
            Balance Today
          </Text>
          <Text variant={"p"} className='text-blue-600'>
            $12.56
          </Text>
        </div>
      </div>

      <div className='flex flex-col space-y-4'>
      <Progress value={33} />
        <div className='flex space-x-4 items-center'>
          <div className='flex items-center space-x-2'>
            <div className='w-2 aspect-square rounded-full bg-blue-200' />
            <Text variant={"p"} className='text-foreground/60 text-xs'>
              Spending
            </Text>
          </div>
          <div className='flex items-center space-x-2'>
            <div className='w-2 aspect-square rounded-full bg-blue-600' />
            <Text variant={"p"} className='text-foreground/60 text-xs'>
              Income
            </Text>
          </div>
        </div>
      </div>
    </DashboardCard>
  );
}
