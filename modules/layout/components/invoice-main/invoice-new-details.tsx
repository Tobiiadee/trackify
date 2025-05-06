import { Text } from "@/modules/common/components/text";
import React from "react";
import InvoiceAddEdit from "./invoice-add-edit";
import InvoiceSend from "./invoice-send";

export default function InvoiceNewDetails() {
  return (
    <div className='col-span-2 border rounded-lg p-4 flex flex-col space-y-8'>
      <div className='flex justify-between'>
        <div className='flex space-x-4'>
          <div>
            <div className='flex items-center justify-center rounded-full w-12 aspect-square shadow-md'></div>
          </div>

          <div className='flex flex-col space-y-1'>
            <Text variant={"h4"} className='font-semibold'>
              Invoice AN-2345
            </Text>
            <Text variant={"p"} className='font-semibold'>
              Due date: December 12, 2023
            </Text>
          </div>
        </div>

        <InvoiceAddEdit />
      </div>

      <div className='flex flex-col space-y-3'>
        <div className='flex items-center space-x-2'>
          <Text variant={"p"} className='text-foreground/60'>
            Issued By:
          </Text>
          <Text variant={"p"} className='font-semibold'>
            21-07-2023
          </Text>
        </div>

        <div className='flex items-center space-x-2'>
          <Text variant={"p"} className='text-foreground/60'>
            Due Date:
          </Text>
          <Text variant={"p"} className='font-semibold'>
            21-10-2023
          </Text>
        </div>

        <div className='flex items-center space-x-2'>
          <Text variant={"p"} className='text-foreground/60'>
            Invoice No:
          </Text>
          <Text variant={"p"} className='font-semibold'>
            AN-2345
          </Text>
        </div>
      </div>

      <div className='flex flex-col space-y-4'>
        <InvoiceDetailsItemHeader />
        <div className='flex flex-col space-y-6'>
          {Array.from({ length: 4 }).map((_, i) => (
            <InvoiceDetailsItem key={i} />
          ))}
        </div>
      </div>

      <div className='flex flex-col space-y-4'>
        <div className='flex items-center justify-between'>
          <Text variant={"p"} className='text-foreground/60'>
            Tax (15%):
          </Text>
          <Text variant={"p"} className='font-semibold'>
            #100.00
          </Text>
        </div>
        <div className='flex items-center justify-between'>
          <Text variant={"p"} className='text-foreground/60'>
            Subtotal:
          </Text>
          <Text variant={"p"} className='font-semibold'>
            #300.00
          </Text>
        </div>
        <div className='flex items-center justify-between'>
          <Text variant={"p"} className='text-foreground/60'>
            Discount (10%)
          </Text>
          <Text variant={"p"} className='font-semibold'>
            #150.00
          </Text>
        </div>
        <div className='flex items-center justify-between'>
          <Text variant={"p"} className='text-foreground font-semibold'>
            Total
          </Text>
          <Text variant={"p"} className='font-semibold'>
            #400.00
          </Text>
        </div>
      </div>

      <div className='w-full flex items-center justify-center pt-14'>
        <InvoiceSend />
      </div>
    </div>
  );
}

function InvoiceDetailsItem() {
  return (
    <div className='grid grid-cols-5 w-full px-4'>
      <div className='col-span-2'>
        <Text variant={"p"} className='text-foreground/60'>
          First Landing Page
        </Text>
      </div>
      <div className='col-span-1'>
        <Text variant={"p"} className='text-foreground'>
          #100.00
        </Text>
      </div>
      <div className='col-span-1'>
        <Text variant={"p"} className='text-foreground'>
          2
        </Text>
      </div>
      <div className='col-span-1'>
        <Text variant={"p"} className='text-foreground'>
          #100.00
        </Text>
      </div>
    </div>
  );
}
function InvoiceDetailsItemHeader() {
  return (
    <div className='grid grid-cols-5 w-full bg-foreground/10 p-4 rounded-t-md'>
      <div className='col-span-2'>
        <Text variant={"p"} className='text-foreground font-semibold'>
          Item Name
        </Text>
      </div>
      <div className='col-span-1'>
        <Text variant={"p"} className='text-foreground font-semibold'>
          Rate
        </Text>
      </div>
      <div className='col-span-1'>
        <Text variant={"p"} className='text-foreground font-semibold'>
          Qty
        </Text>
      </div>
      <div className='col-span-1'>
        <Text variant={"p"} className='text-foreground font-semibold'>
          Amount
        </Text>
      </div>
    </div>
  );
}
