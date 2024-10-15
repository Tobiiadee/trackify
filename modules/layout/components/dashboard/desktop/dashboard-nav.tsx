import { ClientLink } from "@/modules/layout/components/client-link";
import React from "react";

export default function DashboardNav() {
  return (
    <div className='flex items-center space-x-6'>
      <ClientLink href={""}>Dashboard</ClientLink>
      <ClientLink href={""}>Transaction</ClientLink>
      <ClientLink href={""}>Analytics</ClientLink>
      <ClientLink href={""}>Settings</ClientLink>
    </div>
  );
}
