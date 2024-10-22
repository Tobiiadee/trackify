import Image from "next/image";
import React from "react";
import DashboardMenu from "./dashboard-menu";
import { ArrowRightFromLine, Settings } from "lucide-react";
import { MenuItem } from "./menu-item";
import { Button } from "@/modules/common/ui/button";

export default function DashboardDesktopSidebar() {
  return (
    <div className='hidden fixed left-0 top-0 z-50 h-screen w-20 border-r lg:flex flex-col justify-between items-center pt-4 pb-6'>
      <div className='flex flex-col space-y-16 items-center h-full'>
        <div className='relative'>
          <Image
            src={"/icons/icon512_rounded.png"}
            alt='icon'
            width={50}
            height={50}
          />
        </div>

        <DashboardMenu />
      </div>

      <div className=' flex flex-col space-y-6 items-center'>
        <MenuItem href="/dashboard/settings" tooltip="Settings">
          <Settings size={22} strokeWidth={1.5} />
        </MenuItem>

        <Button variant={"ghost"} size={"icon"} className="bg-foreground/10">
            <ArrowRightFromLine size={18} strokeWidth={1.5} />
        </Button>
      </div>
    </div>
  );
}
