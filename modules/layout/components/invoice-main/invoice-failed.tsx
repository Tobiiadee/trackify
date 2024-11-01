import React from "react";
import DashboardCard from "../dashboad-main/dashboard-card";
import { Text } from "@/modules/common/components/text";
import { Button } from "@/modules/common/ui/button";
import { ArrowDown, EllipsisVertical } from "lucide-react";
import { InvoiceFailedChart } from "./invoice-failed-chart";

export default function InvoiceFailed() {
  return (
    <DashboardCard className='flex flex-col space-y-2 w-full'>
      <div className='flex items-center justify-between'>
        <Text variant={"p"} className="text-foreground/60">Failed Invoice</Text>
        <Button variant={"ghost"} className='rounded-full'>
          <EllipsisVertical size={20} strokeWidth={1.5} />
        </Button>
      </div>

      <div className='flex justify-between'>
        <div className='flex flex-col space-y-4'>
          <Text variant={"h3"} className=''>
            676
          </Text>

          <div className='flex items-center space-x-2 text-red-500'>
            <ArrowDown size={24} strokeWidth={1.5} />

            <Text variant={"p"} className='text-xs font-medium'>
              5.9%
            </Text>
          </div>
        </div>

        <InvoiceFailedChart />
      </div>
    </DashboardCard>
  );
}
