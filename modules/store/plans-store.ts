import { create } from "zustand";

interface PlansStoreProps {
  addPlan: boolean;
  setAddPlan: (addPlan: boolean) => void;
  editPlan: boolean;
  setEditPlan: (editPlan: boolean) => void;
}

export const usePlansStore = create<PlansStoreProps>((set) => ({
  addPlan: false,
  setAddPlan: (addPlan) => set({ addPlan }),
  editPlan: false,
  setEditPlan: (editPlan) => set({ editPlan }),
}));
