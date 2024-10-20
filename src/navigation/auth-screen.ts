import { authScreenTypes } from "@src/types/types";
import { authScreenNames } from "./naviagtion-names";
import {
  CarouselSlider,
  RegisterInfo,
  RegistrationForm,
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
    screenName: authScreenNames.REGISTRATION_FORM,
    component: RegistrationForm,
  },
  {
    screenName: authScreenNames.USER_CATEGORIES,
    component: UserCategories,
  },
];
