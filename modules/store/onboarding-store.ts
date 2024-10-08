import { create } from "zustand";

interface OnboardingStore {
  isCreateAccount: boolean;
  setIsCreateAccount: (isCreateAccount: boolean) => void;
  isVerifyEmail: boolean;
  setIsVerifyEmail: (isVerifyEmail: boolean) => void;
  isAddInfo: boolean;
  setIsAddInfo: (isVerifyEmail: boolean) => void;
  isFinishUp: boolean;
  setIsFinishUp: (isVerifyEmail: boolean) => void;
}

export const useOnboardingStore = create<OnboardingStore>((set) => ({
  isCreateAccount: true,
  isVerifyEmail: false,
  isAddInfo: false,
  isFinishUp: false,
  setIsCreateAccount: (isCreateAccount) => set(() => ({ isCreateAccount })),
  setIsVerifyEmail: (isVerifyEmail) => set(() => ({ isVerifyEmail })),
  setIsAddInfo: (isAddInfo) => set(() => ({ isAddInfo })),
  setIsFinishUp: (isFinishUp) => set(() => ({ isFinishUp })),
}));
