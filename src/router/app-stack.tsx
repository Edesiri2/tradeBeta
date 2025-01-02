import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack";
import { RootStackParamList } from "./types";
import { appScreen, appScreenNames } from "@src/navigation";
import React from "react";
import { useAuthStore } from "@src/hooks/store";

const ScreenStack = createNativeStackNavigator<RootStackParamList>();
const headerOptions: NativeStackNavigationOptions = { headerShown: false };

const Screen = () => {
  const { userRole } = useAuthStore();
  return (
    <ScreenStack.Navigator
      screenOptions={headerOptions}
      initialRouteName={
        userRole === "Customer"
          ? appScreenNames.BOTTOM_TAB
          : appScreenNames.CHAT_MESSAGE
      }
    >
      {appScreen &&
        appScreen.map((screen, index) => (
          <ScreenStack.Screen
            name={screen.screenName}
            key={index}
            component={screen.component}
          />
        ))}
    </ScreenStack.Navigator>
  );
};

export const AppStack = () => {
  return (
    <>
      <Screen />
    </>
  );
};
