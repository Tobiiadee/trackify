"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string;
  total_amount: number;
  transaction_date: string;
  transaction_name: string;
  status: "pending" | "processing" | "success" | "failed";
  note: string;
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "transaction date",
    header: "Transaction Date",
  },
  {
    accessorKey: "transaction name",
    header: "Transaction Name",
  },
  {
    accessorKey: "total amount",
    header: "Total Amount",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "note",
    header: "Note",
  },
  {
    accessorKey: "action",
    header: "Action",
  },
];
