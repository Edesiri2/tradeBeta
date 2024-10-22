import * as yup from "yup";

export const registrationFrmSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email format") // Validates email format
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters long") // Optional: Minimum length requirement
    .required("Password is required"),
  referral_code: yup.string().required("referral code is required"),
});

export const customerFrmSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email format") // Validates email format
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters long") // Optional: Minimum length requirement
    .required("Password is required"),
});

export const forgotPasswordFrmSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email format") // Validates email format
    .required("Email is required"),
});

export const setNewPasswordFrmSchema = yup.object().shape({
  new_password: yup
    .string()
    .min(8, "Password must be at least 8 characters long") // Optional: Minimum length requirement
    .required("Password is required"),
  confirm_password: yup
    .string()
    .oneOf([yup.ref("new_password")], "Passwords must match") // Confirms that the password matches
    .required("Confirm password is required"),
});

export const individualCategoriesStep1FrmSchema = yup.object().shape({
  first_name: yup.string().required("first name is required"),
  last_name: yup.string().required("last name is required"),
  mobile_number: yup
    .string()
    .required("mobile number is required")
    .matches(/^[0-9]+$/, "field must be number only"),
  nin: yup
    .string()
    .required("NIN is required")
    .matches(/^[0-9]+$/, "field must be number only"),
});

export const individualCategoriesStep2FrmSchema = yup.object().shape({
  country: yup.string().required("country is required"),
  state: yup.string().required("state is required"),
  local_govt: yup.string().required("local government is required"),
  address_line: yup.string().required("address line is required"),
  postal_code: yup.string().required("postal code is required"),
});

export const individualCategoriesStep3FrmSchema = yup.object().shape({
  image: yup.string().required("image is required"),
});
