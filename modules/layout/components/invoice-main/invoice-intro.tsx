import React from "react";
import InvoicePaid from "./invoice-paid";
import InvoicePending from "./invoice-pending";
import InvoiceFailed from "./invoice-failed";

export default function InvoiceIntro() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
      <InvoicePaid />
      <InvoicePending />
      <InvoiceFailed />
    </div>
  );
}
