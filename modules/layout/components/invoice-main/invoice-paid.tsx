import React from "react";
import DashboardCard from "../dashboad-main/dashboard-card";
import { Text } from "@/modules/common/components/text";
import { Button } from "@/modules/common/ui/button";
import { ArrowUp, EllipsisVertical } from "lucide-react";
import { InvoicePaidChart } from "./invoice-paid-chart";

export default function InvoicePaid() {
  return (
    <DashboardCard className='flex flex-col space-y-2 w-full'>
      <div className='flex items-center justify-between'>
        <Text variant={"p"} className="text-foreground/60">Paid Invoice</Text>
        <Button variant={"ghost"} className='rounded-full'>
          <EllipsisVertical size={20} strokeWidth={1.5} />
        </Button>
      </div>

      <div className='flex justify-between'>
        <div className='flex flex-col space-y-4'>
          <Text variant={"h3"} className=''>
            600
          </Text>

          <div className='flex items-center space-x-2 text-green-500'>
            <ArrowUp size={24} strokeWidth={1.5} />

            <Text variant={"p"} className='text-xs font-medium'>
              5.9%
            </Text>
          </div>
        </div>

        <InvoicePaidChart />
      </div>
    </DashboardCard>
  );
}
