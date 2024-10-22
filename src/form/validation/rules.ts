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
