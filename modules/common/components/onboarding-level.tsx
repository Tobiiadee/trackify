"use client";

import { useOnboardingStore } from "@/modules/store/onboarding-store";
import React from "react";
import CreateAccount from "./create-account";
import VerifyEmailMain from "./verify-email-main";
import AdditionaInfoMain from "./additional-info-main";
import WelcomeToTrackify from "./welcome-to-trackify";

export default function OnboardingLevel() {
  const { isVerifyEmail, isAddInfo, isFinishUp } = useOnboardingStore();

  return (
    <>
      {!isVerifyEmail && <CreateAccount />}
      {isVerifyEmail && !isAddInfo && <VerifyEmailMain />}
      {isAddInfo && !isFinishUp && <AdditionaInfoMain />}
      {isFinishUp && <WelcomeToTrackify />}
    </>
  );
}
