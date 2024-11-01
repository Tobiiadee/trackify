"use client";

import React from "react";
import Logo from "./logo";
import { MoveLeft } from "lucide-react";
import { Text } from "./text";
import { Button } from "../ui/button";
import { OnboardingLevels } from "./onboarding-levels";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import OnboardingLevel from "./onboarding-level";
import { useOnboardingStore } from "@/modules/store/onboarding-store";

export default function Onboarding() {
  const { push } = useRouter();

  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 w-full h-full '>
      <div className='col-span-1 hidden bg-foreground/5 h-full sm:flex flex-col justify-between p-6 rounded-l-2xl '>
        <div className='flex flex-col space-y-16'>
          <Logo />
          <OnboardingLevels />
        </div>

        <div className='flex justify-between items-center w-full'>
          <Button
            onClick={() => push("/")}
            variant={"ghost"}
            className='flex space-x-2 px-0'>
            <MoveLeft size={18} strokeWidth={1.5} />
            <Text variant={"p"} className='font-medium'>
              Back to home
            </Text>
          </Button>

          <Button
            onClick={() => push("/sign-in")}
            variant={"ghost"}
            className='flex space-x-4 px-0'>
            <Text variant={"p"} className='font-medium'>
              Sign In
            </Text>
          </Button>
        </div>
      </div>
      {/* hidden for large screens */}
      <div className='col-span-2 flex flex-col items-center justify-between pb-8 w-full'>
        <div className='flex flex-col items-center space-y-4 w-full'>
          <div className='sm:hidden flex justify-between items-center w-full pt-4'>
            <Button
              onClick={() => push("/")}
              variant={"ghost"}
              className='flex space-x-2 px-0'>
              <MoveLeft size={18} strokeWidth={1.5} />
              <Text variant={"p"} className='font-medium'>
                Back to home
              </Text>
            </Button>

            <Button
              onClick={() => push("/sign-in")}
              variant={"ghost"}
              className='flex space-x-4 px-0'>
              <Text variant={"p"} className='font-medium'>
                Sign In
              </Text>
            </Button>
          </div>
          <OnboardingLevel />
        </div>

        <Progress />
      </div>
    </div>
  );
}

function Progress() {
  const { isVerifyEmail, isAddInfo, isFinishUp } = useOnboardingStore();
  return (
    <div className='flex space-x-2 justify-center items-center w-full'>
      <ProgressLevel isActive />
      <ProgressLevel isActive={isVerifyEmail} />
      <ProgressLevel isActive={isAddInfo} />
      <ProgressLevel isActive={isFinishUp} />
    </div>
  );
}

function ProgressLevel({ isActive }: { isActive?: boolean }) {
  return (
    <div
      className={cn(
        "w-20 h-2 rounded-sm",
        isActive ? "bg-foreground" : "bg-foreground/20"
      )}
    />
  );
}
