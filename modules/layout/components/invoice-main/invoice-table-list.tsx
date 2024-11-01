import InputSearch from "@/modules/common/components/input-search";
import { Text } from "@/modules/common/components/text";
import React from "react";
import { FilterButton } from "../transactions-main/transaction-main";
import { Button } from "@/modules/common/ui/button";
import { Download } from "lucide-react";
import { cn } from "@/lib/utils";

export default function InvoiceTableList() {
  return (
    <div className='flex flex-col space-y-6 sm:border sm:px-2  pt-6 pb-2 rounded-lg w-full overflow-x-auto'>
      <div className='flex flex-col sm:flex-row sm:items-center space-y-4 justify-between w-full'>
        <Text variant={"h3"}>Invoice List</Text>
        <div className='flex flex-col sm:flex-row space-x-0 space-y-4 sm:space-y-0 sm:space-x-4 sm:items-center'>
          <InputSearch placeholder='Search invoice...' />
          <div className='flex space-x-4 items-center'>
            <FilterButton />
            <Button variant={"outline"} className='flex items-center space-x-2'>
              <Download size={20} strokeWidth={1.5} />
              <Text variant={"p"} className='text-xs hidden sm:block'>
                Export
              </Text>
            </Button>
          </div>
        </div>
      </div>

      <div className='flex flex-col space-y-6 overflow-x-auto w-max lg:w-full'>
        <TableHeader />
        <div className='flex flex-col'>
          {Array.from({ length: 10 }, (_, i) => i + 1).map((id) => (
            <TableListItem key={id} className='even:bg-foreground/5' />
          ))}
        </div>

        <div className='flex items-center justify-between px-2'>
          <Text variant={"p"} className='font-semibold'>
            1 of 5
          </Text>

          <div className='flex space-x-4 items-center'>
            <Button variant={"outline"} className='flex items-center space-x-2'>
              <Text variant={"p"} className='text-xs hidden sm:block'>
                Prev
              </Text>
            </Button>
            <Button variant={"outline"} className='flex items-center space-x-2'>
              <Text variant={"p"} className='text-xs hidden sm:block'>
                Next
              </Text>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableHeader() {
  return (
    <div
      className={
        "grid grid-cols-6 gap-4 bg-foreground/10 p-4 rounded-t-md w-full"
      }>
      <Text variant={"p"} className='font-medium'>
        Invoice ID
      </Text>
      <Text variant={"p"} className='font-medium'>
        Company Name
      </Text>
      <Text variant={"p"} className='font-medium'>
        Due Date
      </Text>
      <Text variant={"p"} className='font-medium'>
        Email
      </Text>
      <Text variant={"p"} className='font-medium'>
        Status
      </Text>
      <Text variant={"p"} className='font-medium'>
        Amount
      </Text>
    </div>
  );
}

type Status = "Pending" | "Success" | "Failed";

interface InvoiceTableItemProps {
  id: string;
  companyName: string;
  dueDate: string;
  email: string;
  status: Status;
  amount: string;
}

function TableListItem({ className }: { className?: string }) {
  const status = "Success";
  // Define colors for each status colors
  const statusColors = {
    Failed: {
      bgColor: "bg-red-100",
      textColor: "text-red-500",
    },
    Pending: {
      bgColor: "bg-yellow-100",
      textColor: "text-yellow-500",
    },
    Success: {
      bgColor: "bg-green-100",
      textColor: "text-green-500",
    },
  };

  // Get the colors based on the priority level
  const { bgColor, textColor } = statusColors[status];

  return (
    <div className={cn(className, "grid grid-cols-6 gap-4 px-4 py-3")}>
      <Text variant={"p"} className='font-medium'>
        #001
      </Text>
      <Text variant={"p"} className='font-medium'>
        Spotify
      </Text>
      <Text variant={"p"} className='font-medium'>
        12-07-24
      </Text>
      <Text variant={"p"} className='font-medium'>
        tobiiadee@gmail.com
      </Text>

      <div className={`${bgColor} ${textColor} py-0.5 px-1.5 w-max rounded`}>
        <Text variant={"p"} className={`text-center font-medium `}>
          Pending
        </Text>
      </div>

      <Text variant={"p"} className='font-medium'>
        #2000
      </Text>
    </div>
  );
}
