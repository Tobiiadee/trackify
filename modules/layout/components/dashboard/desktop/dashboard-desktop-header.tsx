import React from "react";
// import Logo from "../../../../common/components/logo";
// import DashboardNav from "./dashboard-nav";
import { Bell } from "lucide-react";
import { Separator } from "../../../../common/ui/separator";
import DashboardProfile from "../../../../common/components/dashboard-profile";
import InputSearch from "@/modules/common/components/input-search";

export default function DashboardDesktopHeader() {
  return (
    <div className='w-full py-5 flex justify-between items-center'>
      <div className='flex items-center'>
        <DashboardProfile />
        {/* <DashboardNav /> */}
      </div>

      <div className='flex space-x-4 items-center'>
        <Notification />

        <div className='h-8'>
          <Separator orientation='vertical' />
        </div>

        <InputSearch placeholder="Search..." />
      </div>
    </div>
  );
}

function Notification() {
  return (
    <div className='w-8 relative aspect-square rounded-full grid place-items-center border'>
      <Bell size={18} strokeWidth={1.5} />

      <div className='w-2 aspect-square absolute top-0 right-0 rounded-full bg-red-500' />
    </div>
  );
}
