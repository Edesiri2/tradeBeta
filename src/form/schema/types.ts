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

export type individualCategoriesStep1FrmTypes = {
  first_name: string;
  last_name: string;
  mobile_number: string;
  nin: string;
};

export type individualCategoriesStep2FrmTypes = {
  country: string;
  state: string;
  local_govt: string;
  address_line: string;
  postal_code: string;
};

export type individualCategoriesStep3FrmTypes = {
  image: string;
};
