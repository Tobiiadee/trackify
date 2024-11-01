import { create } from "zustand";

interface InvoiceStoreProps {
  isAddInvoice: boolean;
  setIsAddInvoice: (addInvoice: boolean) => void;
}

export const useInvoiceStore = create<InvoiceStoreProps>((set) => ({
  isAddInvoice: false,
  setIsAddInvoice: (isAddInvoice) => set(() => ({ isAddInvoice })),
}));
