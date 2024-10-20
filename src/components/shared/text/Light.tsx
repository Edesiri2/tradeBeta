import { fontFamily } from "@src/resources/fonts/font-family";
import React from "react";
import { StyleSheet, Text, TextStyle, View, ViewStyle } from "react-native";
import { useText } from "../hooks";

type textProps = {
  children: React.ReactNode;
  sizeSmall?: boolean;
  sizeBody?: boolean;
  sizeMedium?: boolean;
  sizeLarge?: boolean;
  sizeXtraLarge?: boolean;
  black?: boolean;
  white?: boolean;
  darkGreen?: boolean;
  lightGreen?: boolean;
  warning?: boolean;
  mainColor?: boolean;
  blue?: boolean;
  darkGray?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
};

export const LightText: React.FC<textProps> = ({
  children,
  sizeSmall,
  sizeBody,
  sizeMedium,
  sizeLarge,
  sizeXtraLarge,
  black,
  white,
  darkGreen,
  lightGreen,
  warning,
  mainColor,
  blue,
  darkGray,
  style,
  textStyle,
}) => {
  const { textSize, textColor } = useText();
  const size = textSize(
    sizeSmall,
    sizeBody,
    sizeMedium,
    sizeLarge,
    sizeXtraLarge
  );
  const color = textColor(
    black,
    white,
    darkGreen,
    lightGreen,
    warning,
    mainColor,
    blue,
    darkGray
  );
  return (
    <View style={style}>
      <Text
        style={[
          styles.text,
          {
            fontSize: textStyle?.fontSize ? textStyle?.fontSize : size,
            color: textStyle?.color ? textStyle?.color : color,
            maxWidth: textStyle?.maxWidth ? textStyle?.maxWidth : undefined,
            alignSelf: textStyle?.alignSelf ? textStyle?.alignSelf : undefined,
            textAlign: textStyle?.textAlign ? textStyle?.textAlign : undefined,
            lineHeight: textStyle?.lineHeight
              ? textStyle?.lineHeight
              : undefined,
            marginBottom: textStyle?.marginBottom
              ? textStyle?.marginBottom
              : undefined,
            marginTop: textStyle?.marginTop ? textStyle?.marginTop : undefined,
          },
        ]}>
        {children && children}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: fontFamily.light,
  },
});
