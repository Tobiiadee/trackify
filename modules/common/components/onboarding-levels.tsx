import React from "react";
import YourDetails from "./onboarding-level/your-details";
import EmailVerification from "./onboarding-level/email-verification";
import { cn } from "@/lib/utils";
import { useOnboardingStore } from "@/modules/store/onboarding-store";
import AdditionalInformation from "./onboarding-level/additional-information";
import FinishUp from "./onboarding-level/finish-up";

export function OnboardingLevels({ isActive = true }: { isActive?: boolean }) {
  const { isVerifyEmail, isAddInfo, isFinishUp } = useOnboardingStore();

  return (
    <div className='col-span-1 flex flex-col space-y-6'>
      <YourDetails isActive={isActive} />
      <EmailVerification isActive={isVerifyEmail} />
      <AdditionalInformation isActive={isAddInfo} />
      <FinishUp isActive={isFinishUp} />
    </div>
  );
}

export function LevelAnimation({ isActive }: { isActive?: boolean }) {
  return (
    <div className='w-[2px] sm:h-[45px] lg:h-[30.5px] bg-foreground/20 absolute bottom-full left-1/2 transform -translate-1/2 -z-50'>
      <div
        className={cn(
          "h-full w-full ",
          isActive ? "bg-foreground" : "bg-transparent"
        )}
      />
    </div>
  );
}
