import React from "react";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";
import { RegularText } from "./Regular";
import { StyleSheet } from "react-native";
import { verticalScale } from "@src/resources/scaling";

type errorTextProps = {
  error?: string;
};

export const ErrorText: React.FC<errorTextProps> = ({ error }) => {
  return (
    <Animated.View entering={FadeIn} exiting={FadeOut} style={styles.container}>
      <RegularText sizeSmall warning>
        {error}
      </RegularText>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: verticalScale(5),
  },
});
