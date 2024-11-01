import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/modules/common/ui/sheet";
import { Button } from "@/modules/common/ui/button";
import { FilePenLine } from "lucide-react";
import { Text } from "@/modules/common/components/text";
import InvoiceAddEditForm, {
  InvoiceAddEditFormProps,
} from "./invoice-add-edit-form";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/modules/common/ui/tooltip";

const dummyData: InvoiceAddEditFormProps = {
  invoiceNumber: "AN-2345",
  issuedDate: "20-10-2023",
  dueDate: "17-10-2023",
  paymentDate: "29-10-2023",
  items: [
    {
      itemName: "First Landing Page",
      rate: 100,
      qty: 2,
      amount: 200,
    },
    {
      itemName: "Second Landing Page",
      rate: 100,
      qty: 2,
      amount: 200,
    },
  ],
};

interface InvoiceAddEditProps {}

export default function InvoiceAddEdit() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant={"ghost"}
                size={"icon"}
                className='border border-transparent  active:border-blue-600 rounded-md hover:bg-transparent'>
                <FilePenLine size={20} strokeWidth={1.5} />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <Text variant={"p"} className='text-xs'>
                Edit Invoice
              </Text>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </SheetTrigger>
      <SheetContent className='min-w-full sm:min-w-[80vw] lg:min-w-[60vw] overflow-y-auto '>
        <SheetHeader>
          <SheetTitle>
            <Text variant={"h3"}>New Invoice</Text>
          </SheetTitle>
        </SheetHeader>

        <InvoiceAddEditForm
          issuedDate={dummyData.issuedDate}
          dueDate={dummyData.dueDate}
          items={dummyData.items}
          invoiceNumber={dummyData.invoiceNumber}
          paymentDate={dummyData.paymentDate}
        />
      </SheetContent>
    </Sheet>
  );
}
