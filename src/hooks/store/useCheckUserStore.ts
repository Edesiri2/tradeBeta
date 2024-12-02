import { create } from "zustand";

//all the user data object when user finally logs in
type checkUserDataType = {
  email: string;
  password: string;
  referral_code: string;
};

interface ICheckUserStoreProps {
  checkUser: checkUserDataType;
  setCheckUser: (value: checkUserDataType) => void;
}

export const useCheckUserStore = create<ICheckUserStoreProps>((set) => ({
  checkUser: {
    email: "",
    password: "",
    referral_code: "",
  },
  setCheckUser: (checkUser) => set({ checkUser: checkUser }),
}));
