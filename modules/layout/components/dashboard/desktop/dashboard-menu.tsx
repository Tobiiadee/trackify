import React from "react";
import { MenuItem } from "./menu-item";
import { ArrowLeftRight, Calculator, ClipboardPlus, Home, SquareDashedKanban } from "lucide-react";

export default function DashboardMenu() {
  return (
    <menu className='w-full flex flex-col h-full space-y-6'>
      <MenuItem href="/dashboard" tooltip="Home">
        <Home size={22} strokeWidth={1.5} />
      </MenuItem>
      <MenuItem href="/dashboard/transactions" tooltip="Transactions">
        <ArrowLeftRight size={22} strokeWidth={1.5} />
      </MenuItem>
      <MenuItem href="/dashboard/plans" tooltip="Plans">
        <SquareDashedKanban size={22} strokeWidth={1.5} />
      </MenuItem>
      <MenuItem href="/dashboard/reports"  tooltip="Reports">
        <ClipboardPlus size={22} strokeWidth={1.5} />
      </MenuItem>
      <MenuItem href="/dashboard/invoice" tooltip="Invoice">
        <Calculator size={22} strokeWidth={1.5} />
      </MenuItem>
    </menu>
  );
}
