import { Button } from "@/modules/common/ui/button";
import { Home } from "lucide-react";
import React from "react";

export default function DashboardMobileTab() {
  return (
    <div className='w-full shadow-md border-t absolute bottom-0 left-0 flex items-center justify-between py-4 px-6'>
      <Button variant={"ghost"} className='rounded-full py-7'>
        <Home size={30} strokeWidth={1.5} />
      </Button>
      <Button variant={"ghost"} className='rounded-full py-7'>
        <Home size={30} strokeWidth={1.5} />
      </Button>
      <Button variant={"ghost"} className='rounded-full py-7'>
        <Home size={30} strokeWidth={1.5} />
      </Button>
      <Button variant={"ghost"} className='rounded-full py-7'>
        <Home size={30} strokeWidth={1.5} />
      </Button>
      <Button variant={"ghost"} className='rounded-full py-7'>
        <Home size={30} strokeWidth={1.5} />
      </Button>
    </div>
  );
}

export function DrawerTrigger() {
  return <div></div>;
}
