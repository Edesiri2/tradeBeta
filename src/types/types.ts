import {
  RootStackParamList,
  AuthStackParamList,
  BottomTabBarStackParamList,
  DrawerStackScreenParamList,
} from "@src/router/types";

export type authScreenTypes = {
  screenName: keyof AuthStackParamList;
  component: React.ComponentType<any>;
};

export type bottomTabScreenTypes = {
  screenName: keyof BottomTabBarStackParamList;
  component: React.ComponentType<any>;
};

export type drawerScreenTypes = {
  screenName: keyof DrawerStackScreenParamList;
  component: React.ComponentType<any>;
};

export type appScreenTypes = {
  screenName: keyof RootStackParamList;
  component: React.ComponentType<any>;
};
