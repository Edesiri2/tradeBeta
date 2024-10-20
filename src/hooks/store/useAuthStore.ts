import { create } from "zustand";

//all the user data object when user finally logs in
type userDataType = {
  id: string;
};

interface IAuthStoreProps {
  userData: userDataType;
  setUserData: (value: userDataType) => void;
  isAuthenticated: boolean;
  setIsAuthenticated: (value: boolean) => void;
}

export const useAuthStore = create<IAuthStoreProps>((set) => ({
  userData: {
    id: "",
  },
  setUserData: (userData) => set({ userData: userData }),
  isAuthenticated: false,
  setIsAuthenticated: (isAuthenticated) =>
    set({ isAuthenticated: isAuthenticated }),
}));
