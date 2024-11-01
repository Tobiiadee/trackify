import { Text } from "@/modules/common/components/text";
import InvoiceAdd from "@/modules/layout/components/invoice-main/invoice-add";
import InvoiceIntro from "@/modules/layout/components/invoice-main/invoice-intro";
// import InvoiceNew from "@/modules/layout/components/invoice-main/invoice-new";
import InvoiceTable from "@/modules/layout/components/invoice-main/invoice-table-list";
// import { useInvoiceStore } from "@/modules/store/invoice-store";
import React from "react";

export default function Index() {
  return (
    <div className='flex flex-col space-y-6'>
      <div className='flex items-center justify-between'>
        <Text variant={"h3"}>Bills & Invoices</Text>
        <InvoiceAdd />
      </div>

      <InvoiceIntro />
      <InvoiceTable />
    </div>
  );
}
