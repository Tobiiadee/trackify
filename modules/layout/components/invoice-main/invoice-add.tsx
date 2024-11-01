import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/modules/common/ui/sheet";
import { Button } from "@/modules/common/ui/button";
import { Plus } from "lucide-react";
import { Text } from "@/modules/common/components/text";
import InvoiceAddForm from "./invoice-add-form";

export default function InvoiceAdd() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className='flex space-x-2 bg-blue-600 hover:bg-blue-700 text-background shadow rounded-md w-max'>
          <Plus size={20} strokeWidth={1.5} />
          <Text variant={"p"} className='text-background'>
            Add Invoice
          </Text>
        </Button>
      </SheetTrigger>
      <SheetContent className='min-w-full sm:min-w-[80vw] lg:min-w-[60vw] overflow-y-auto '>
        <SheetHeader>
          <SheetTitle>
            <Text variant={"h3"}>New Invoice</Text>
          </SheetTitle>
        </SheetHeader>

        <InvoiceAddForm />
      </SheetContent>
    </Sheet>
  );
}
