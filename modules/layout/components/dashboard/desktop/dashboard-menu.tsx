import React from "react";
import { MenuItem } from "./menu-item";
import { ArrowLeftRight, Calculator, ClipboardPlus, SquareDashedKanban } from "lucide-react";
import { DashboardIcon } from "@radix-ui/react-icons";

export default function DashboardMenu() {
  return (
    <menu className='w-full flex flex-col h-full space-y-6'>
      <MenuItem href="/dashboard" tooltip="Home">
        <DashboardIcon className="w-[18px] h-[18px]" />
      </MenuItem>
      <MenuItem href="/dashboard/transactions" tooltip="Transactions">
        <ArrowLeftRight size={22} strokeWidth={1.5} />
      </MenuItem>
      <MenuItem href="/dashboard/plans" tooltip="Plans">
        <SquareDashedKanban size={22} strokeWidth={1.5} />
      </MenuItem>
      <MenuItem href="/dashboard/budgets"  tooltip="Budgets">
        <ClipboardPlus size={22} strokeWidth={1.5} />
      </MenuItem>
      <MenuItem href="/dashboard/invoice" tooltip="Invoice">
        <Calculator size={22} strokeWidth={1.5} />
      </MenuItem>
    </menu>
  );
}
