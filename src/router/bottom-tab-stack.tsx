import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { BottomTabBarStackParamList } from "./types";
import { bottomTabScreenNames } from "@src/navigation";
import { bottomTabScreen } from "@src/navigation";
import { DVH, DVW, moderateScale } from "@src/resources/scaling";
import { Platform, StyleSheet } from "react-native";
import { AntDesign, Ionicons, FontAwesome6, Entypo } from "@expo/vector-icons";
import { colors } from "@src/resources/colors";
import { RegularText } from "@src/components/shared/text";

const Tab = createBottomTabNavigator<BottomTabBarStackParamList>();

export const BottomTabStack = () => {
  const returnBottomTabTextDesc = (desc: string) => {
    if (desc.toLowerCase() === bottomTabScreenNames.HOME.toLowerCase()) {
      return "Home";
    } else if (
      desc.toLowerCase() === bottomTabScreenNames.TRANSACTION.toLowerCase()
    ) {
      return "Transactions";
    } else if (desc.toLowerCase() === bottomTabScreenNames.CHAT.toLowerCase()) {
      return "Chat";
    } else if (
      desc.toLowerCase() === bottomTabScreenNames.SETTINGS.toLowerCase()
    ) {
      return "Settings";
    }
  };
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          height: Platform.OS === "ios" ? DVH(13) : DVH(11),
        },
        headerShown: false,
        tabBarLabel: ({ focused }) =>
          focused ? (
            <RegularText mainColor sizeSmall>
              {returnBottomTabTextDesc(route?.name)}
            </RegularText>
          ) : (
            <RegularText darkGray sizeSmall>
              {returnBottomTabTextDesc(route?.name)}
            </RegularText>
          ),
        tabBarIcon: ({ focused }) =>
          focused && route.name === bottomTabScreenNames.HOME ? (
            <FontAwesome6
              name='house'
              color={colors.main_color}
              size={moderateScale(25)}
            />
          ) : !focused && route.name === bottomTabScreenNames.HOME ? (
            <FontAwesome6
              name='house'
              color={colors.darkGray}
              size={moderateScale(25)}
            />
          ) : focused && route.name === bottomTabScreenNames.TRANSACTION ? (
            <AntDesign
              name='linechart'
              size={moderateScale(30)}
              color={colors.main_color}
            />
          ) : !focused && route.name === bottomTabScreenNames.TRANSACTION ? (
            <AntDesign
              name='linechart'
              size={moderateScale(30)}
              color={colors.darkGray}
            />
          ) : focused && route.name === bottomTabScreenNames.CHAT ? (
            <Entypo
              name='chat'
              size={moderateScale(30)}
              color={colors.main_color}
            />
          ) : !focused && route.name === bottomTabScreenNames.CHAT ? (
            <Entypo
              name='chat'
              size={moderateScale(30)}
              color={colors.darkGray}
            />
          ) : focused && route.name === bottomTabScreenNames.SETTINGS ? (
            <Ionicons
              name='settings'
              size={moderateScale(30)}
              color={colors.main_color}
            />
          ) : !focused && route.name === bottomTabScreenNames.SETTINGS ? (
            <Ionicons
              name='settings'
              size={moderateScale(30)}
              color={colors.darkGray}
            />
          ) : undefined,
      })}
      initialRouteName={bottomTabScreenNames.HOME}>
      {bottomTabScreen &&
        bottomTabScreen.map((screen, index) => (
          <Tab.Screen
            name={screen.screenName}
            component={screen.component}
            key={index}
          />
        ))}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  img: {
    width: DVW(12),
  },
});
