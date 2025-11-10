import { create } from "zustand";

export const useDonationStore = create((set) => ({
  // Initial States
  newamount: "",
  newname: "",
  newemail: "",
  newcomment:"",
  newmobileNumber: "",
  newdonationType: "",
  newaddress: "",
  newpan:"",
  identityOption:"",
  newoptInFor80G: false,

  // Setter Functions
  newsetAmount: (newamount) => set({ newamount }),
  newsetComment: (newcomment) => set({ newcomment }),
  newsetName: (newname) => set({ newname }),
  newsetEmail: (newemail) => set({ newemail }),
  newsetMobileNumber: (newmobileNumber) => set({ newmobileNumber }),
  newsetDonationType: (newdonationType) => set({ newdonationType }),
  newsetAddress: (newaddress) => set({ newaddress }),
  newsetpan: (newpan) => set({ newpan }),
  newsetidentityOption: (newidentityOption) => set({ newidentityOption }),
  newsetOptInFor80G: (value) => set({ newoptInFor80G: value }),
  // Optional Reset Function
  resetDonationData: () =>
    set({
      newamount: "",
      newname: "",
      newemail: "",
      newmobileNumber: "",
      newdonationType: "",
      newaddress: "",
      newcomment:"",
    }),
}));
