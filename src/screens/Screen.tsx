import { colors } from "@src/resources/colors";
import { moderateScale, verticalScale } from "@src/resources/scaling";
import React from "react";
import { Platform, StatusBar, StyleSheet, View, ViewStyle } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type screenProps = {
  children: React.ReactNode;
  containerStyle?: ViewStyle;
  noSafeArea?: boolean;
};

export const Screen: React.FC<screenProps> = ({
  children,
  containerStyle,
  noSafeArea,
}) => {
  return (
    <>
      {noSafeArea ? (
        <View
          style={[
            styles.container2,
            {
              paddingHorizontal: moderateScale(-1),
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
            },
          ]}>
          {children}
        </SafeAreaView>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  container2: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop:
      Platform.OS === "android" ? StatusBar.currentHeight : verticalScale(30),
  },
});
