import { authScreenTypes } from "@src/types/types";
import { authScreenNames } from "./naviagtion-names";
import {
  AlreadyHaveAcct,
  CarouselSlider,
  ForgotPassword,
  IndividualCategories,
  RegisterInfo,
  RegistrationForm,
  RegistrationOTP,
  SetNewPassword,
  UserCategories,
} from "@src/screens/auth";

export const authScreen: authScreenTypes[] = [
  {
    screenName: authScreenNames.CAROUSEL_SLIDER,
    component: CarouselSlider,
  },
  {
    screenName: authScreenNames.REGISTER_INFO,
    component: RegisterInfo,
  },
  {
    screenName: authScreenNames.USER_CATEGORIES,
    component: UserCategories,
  },
  {
    screenName: authScreenNames.ALREADY_HAVE_ACCT,
    component: AlreadyHaveAcct,
  },
  {
    screenName: authScreenNames.FORGOT_PASSWORD,
    component: ForgotPassword,
  },
  {
    screenName: authScreenNames.SET_NEW_PASSWORD,
    component: SetNewPassword,
  },
  {
    screenName: authScreenNames.REGISTRATION_FORM,
    component: RegistrationForm,
  },
  {
    screenName: authScreenNames.REGISTRATION_OTP,
    component: RegistrationOTP,
  },
  {
    screenName: authScreenNames.INDIVIDUAL_CATEGORIES,
    component: IndividualCategories,
  },
];
