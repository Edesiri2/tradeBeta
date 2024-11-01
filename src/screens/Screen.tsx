import { colors } from "@src/resources/colors";
import { moderateScale, verticalScale } from "@src/resources/scaling";
import React from "react";
import { Platform, StatusBar, StyleSheet, View, ViewStyle } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type screenProps = {
  children: React.ReactNode;
  containerStyle?: ViewStyle;
  noSafeArea?: boolean;
  bgColor?: string;
  height?: any;
};

export const Screen: React.FC<screenProps> = ({
  children,
  containerStyle,
  noSafeArea,
  bgColor,
  height,
}) => {
  return (
    <>
      {noSafeArea ? (
        <View
          style={[
            styles.container2,
            {
              paddingHorizontal: moderateScale(-1),
              backgroundColor: bgColor ? bgColor : colors.white,
              width: "100%",
              height: height ? height : "100%",
            },
          ]}>
          {children}
        </View>
      ) : (
        <SafeAreaView
          style={[
            styles.container,
            {
              paddingHorizontal: moderateScale(10),
              backgroundColor: bgColor ? bgColor : colors.white,
              height: height ? height : "100%",
            },
          ]}>
          {children}
        </SafeAreaView>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {},
  container2: {
    paddingTop:
      Platform.OS === "android" ? StatusBar.currentHeight : verticalScale(30),
  },
});
