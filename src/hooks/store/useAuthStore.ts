import { create } from "zustand";

type UserDataType = {
  token: string;
  id: number;
  firstname: string;
  lastname: string;
  username: string;
  email: string;
  mobile_code: string;
  mobile: string;
  full_mobile: string;
  refferal_user_id: string | null;
  referral_user_code: string;
  account_type: string;
  image: string | null;
  status: number;
  address: {
    address: string;
    city: string;
    zip: string | null;
    country: string;
    state: string;
  };
  email_verified: number;
  sms_verified: number;
  kyc_verified: number;
  ver_code: string | null;
  ver_code_send_at: string | null;
  two_factor_verified: number;
  two_factor_status: number;
  two_factor_secret: string | null;
  device_id: string | null;
  email_verified_at: string | null;
  deleted_at: string | null;
  created_at: string;
  updated_at: string;
  sudo_customer: string | null;
  sudo_account: string | null;
  stripe_card_holders: string | null;
  stripe_connected_account: string | null;
  fullname: string;
  userImage: string;
  stringStatus: {
    class: string;
    value: string;
  };
  lastLogin: string;
  kycStringStatus: {
    class: string;
    value: string;
  };
  wallets: {
    id: number;
    user_id: number;
    currency_id: number;
    balance: number;
    status: number;
    created_at: string;
    updated_at: string | null;
  }[];
};

interface IAuthStoreProps {
  userData: UserDataType;
  setUserData: (value: UserDataType) => void;
  isAuthenticated: boolean;
  setIsAuthenticated: (value: boolean) => void;
  userRole: string;
  setUserRole: (role: string) => void;
  isConsultant: () => boolean;
  isCustomer: () => boolean;
}

// Create Zustand store
export const useAuthStore = create<IAuthStoreProps>((set, get) => ({
  userData: {
    token: "",
    id: 0,
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    mobile_code: "",
    mobile: "",
    full_mobile: "",
    refferal_user_id: "",
    referral_user_code: "",
    account_type: "",
    image: "",
    status: 0,
    address: {
      address: "",
      city: "",
      zip: "",
      country: "",
      state: "",
    },
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
    stringStatus: {
      class: "",
      value: "",
    },
    lastLogin: "",
    kycStringStatus: {
      class: "",
      value: "",
    },
    wallets: [],
  },
  setUserData: (userData) => set({ userData }),
  isAuthenticated: false,
  setIsAuthenticated: (isAuthenticated) => set({ isAuthenticated }),
  userRole: '', 
  setUserRole: (role: string) => set({ userRole: role }), 
  isConsultant: () => get().userRole === 'Consultant', 
  isCustomer: () => get().userRole === 'Customer',
}));
