import { type ParamListBase } from "@react-navigation/native";
import { type NativeStackScreenProps } from "@react-navigation/native-stack";
import { type BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { type DrawerScreenProps } from "@react-navigation/drawer";

//auth screen stack navigation
export interface AuthStackParamList extends ParamListBase {
  CarouselSlider: undefined;
  RegisterInfo: undefined;
  RegistrationForm: undefined;
  BusinessKYC: undefined;
  IndividualCategories: undefined;
  UserCategories: undefined;
}

export type AuthScreenProps<ScreenName extends keyof AuthStackParamList> =
  NativeStackScreenProps<AuthStackParamList, ScreenName>;

//bottom tab-bar screen navigation
export interface BottomTabBarStackParamList extends ParamListBase {
  //put screen names here
}

export type BottomTabBarScreenProps<
  ScreenName extends keyof BottomTabBarStackParamList
> = BottomTabScreenProps<BottomTabBarStackParamList, ScreenName>;

//native and app screen navigation
export interface RootStackParamList extends ParamListBase {
  //put app screen names here
}

export type RootStackScreenProps<ScreenName extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, ScreenName>;

//Drawer-navigator screen stack
export interface DrawerStackScreenParamList extends ParamListBase {
  //Put drawer stack screen names here
}

export type DrawerStackScreenProps<
  ScreenName extends keyof DrawerStackScreenParamList
> = DrawerScreenProps<DrawerStackScreenParamList, ScreenName>;
