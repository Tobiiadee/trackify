import { Mail } from "lucide-react";
import React from "react";
import { Text } from "../text";
import { cn } from "@/lib/utils";
import { LevelAnimation } from "../onboarding-levels";

export default function EmailVerification({
  isActive,
}: {
  isActive?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex space-x-4",
        isActive ? "text-foreground" : "text-foreground/60"
      )}>
      <div className='relative'>
        <div className='relative w-9 aspect-square border border-foreground/60 rounded-md flex justify-center items-center shadow-md'>
          <Mail size={20} strokeWidth={1.5} />
          <LevelAnimation isActive={isActive} />
        </div>
      </div>

      <div className='flex flex-col space-y-1'>
        <Text variant={"p"} className='font-semibold'>
          Verify your email
        </Text>
        <Text variant={"p"} className='text-foreground/60 text-[11px]'>
          Enter your verification code
        </Text>
      </div>
    </div>
  );
}
