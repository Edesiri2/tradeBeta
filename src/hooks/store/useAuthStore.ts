import { create } from "zustand";

interface Address {
  address: string;
  city: string;
  zip: string;
  country: string;
  state: string;
}

interface StringStatus {
  class: string;
  value: string;
}

interface Wallet {
  id: number;
  user_id: number;
  currency_id: number;
  balance: number;
  status: number;
  created_at: string;
  updated_at: string;
}

type UserDataType = {
  id: number;
  firstname: string;
  lastname: string;
  username: string;
  email: string;
  mobile_code: string;
  mobile: string;
  full_mobile: string;
  refferal_user_id: number | null;
  referral_user_code: string;
  account_type: string;
  image: string;
  status: number;
  address: Address | null;
  email_verified: number;
  sms_verified: number;
  kyc_verified: number;
  ver_code: string;
  ver_code_send_at: string;
  two_factor_verified: number;
  two_factor_status: number;
  two_factor_secret: string;
  device_id: string;
  email_verified_at: string;
  deleted_at: string;
  created_at: string;
  updated_at: string;
  sudo_customer: string;
  sudo_account: string;
  stripe_card_holders: string;
  stripe_connected_account: string;
  fullname: string;
  userImage: string;
  stringStatus: StringStatus | null;
  lastLogin: string;
  kycStringStatus: StringStatus | null;
  wallets: Wallet[] | null;
};

interface IAuthStoreProps {
  userData: UserDataType;
  setUserData: (value: UserDataType) => void;
  isAuthenticated: boolean;
  setIsAuthenticated: (value: boolean) => void;
}

// Initialize default user data
const defaultUserData: UserDataType = {
  id: 0,
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  mobile_code: "",
  mobile: "",
  full_mobile: "",
  refferal_user_id: null,
  referral_user_code: "",
  account_type: "",
  image: "",
  status: 0,
  address: null,
  email_verified: 0,
  sms_verified: 0,
  kyc_verified: 0,
  ver_code: "",
  ver_code_send_at: "",
  two_factor_verified: 0,
  two_factor_status: 0,
  two_factor_secret: "",
  device_id: "",
  email_verified_at: "",
  deleted_at: "",
  created_at: "",
  updated_at: "",
  sudo_customer: "",
  sudo_account: "",
  stripe_card_holders: "",
  stripe_connected_account: "",
  fullname: "",
  userImage: "",
  stringStatus: null,
  lastLogin: "",
  kycStringStatus: null,
  wallets: null,
};

// Create Zustand store
export const useAuthStore = create<IAuthStoreProps>((set) => ({
  userData: defaultUserData,
  setUserData: (userData) => set({ userData }),
  isAuthenticated: false,
  setIsAuthenticated: (isAuthenticated) => set({ isAuthenticated }),
}));
