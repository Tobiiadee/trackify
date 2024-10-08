import { UserIcon } from "lucide-react";
import React from "react";
import { Text } from "../text";
import { cn } from "@/lib/utils";

export default function YourDetails({ isActive }: { isActive?: boolean }) {
  return (
    <div
      className={cn(
        "flex space-x-4",
        isActive ? "text-foreground" : "text-foreground/60"
      )}>
      <div>
        <div className='w-9 aspect-square border border-foreground/60 rounded-md flex justify-center items-center shadow-md'>
          <UserIcon size={20} strokeWidth={1.5} />
        </div>
      </div>

      <div className='flex flex-col space-y-1'>
        <Text variant={"p"} className='font-semibold'>
          Your Details
        </Text>
        <Text variant={"p"} className='text-foreground/60 text-[11px]'>
          Provide an email address and password
        </Text>
      </div>
    </div>
  );
}
