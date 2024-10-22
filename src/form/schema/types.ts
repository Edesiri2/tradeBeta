export type registrationFrmTypes = {
  email: string;
  password: string;
  referral_code: string;
};

export type customerFrmTypes = {
  email: string;
  password: string;
};

export type forgotPasswordFrmTypes = {
  email: string;
};

export type setNewPasswordFrmTypes = {
  new_password: string;
  confirm_password: string;
};
