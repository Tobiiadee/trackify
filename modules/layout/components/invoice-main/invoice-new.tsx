import { Text } from "@/modules/common/components/text";
import { Button } from "@/modules/common/ui/button";
import React from "react";
import InvoiceNewDetails from "./invoice-new-details";
import InvoiceNewSetings from "./invoice-new-setings";
import { revalidatePath } from "next/cache";
import { useRouter } from "next/navigation";

export default function InvoiceNew() {
  return (
    <div className='flex flex-col space-y-6'>
      <div className='flex items-center justify-between'>
        <Text variant={"h3"}>New invoice</Text>
        <SaveCancelInvoice />
      </div>

      <Text variant={"p"} className='text-foreground/60 text-xs'>
        Bills & Invoice / New Invoice
      </Text>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
        <InvoiceNewDetails />
        <InvoiceNewSetings />
      </div>
    </div>
  );
}

function SaveCancelInvoice() {
  const router = useRouter();

  const handleSave = () => {
    router.push("/dashboard/invoice");
    revalidatePath("/dashboard/invoice");
  };

  const handleCancel = () => {
    router.push("/dashboard/invoice");
    revalidatePath("/dashboard/invoice");
  };

  return (
    <div className='flex space-x-4 items-center'>
      <Button
        onClick={handleSave}
        className='bg-blue-600 hover:bg-blue-700 text-background'>
        <Text variant={"p"} className='text-xs'>
          Save
        </Text>
      </Button>
      <Button
        onClick={handleCancel}
        variant={"outline"}
        className='flex items-center space-x-2'>
        <Text variant={"p"} className='text-xs'>
          Cancel
        </Text>
      </Button>
    </div>
  );
}
