import React from "react";
import {
  Platform,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from "react-native";

import { DVH, DVW, moderateScale, verticalScale } from "@src/resources/scaling";
import { useButton } from "../hooks";
import { Loader } from "@src/common/Loader";
import { colors } from "@src/resources/colors";
import { SemiBoldText } from "../text";

type buttonProps = {
  title: string;
  style?: ViewStyle;
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  onPress: () => void;
  sizeSmall?: boolean;
  sizeBody?: boolean;
  sizeMedium?: boolean;
  sizeLarge?: boolean;
  sizeXtraLarge?: boolean;
  textBlack?: boolean;
  textWhite?: boolean;
  textDarkGreen?: boolean;
  textLightGreen?: boolean;
  textWarning?: boolean;
  textMainColor?: boolean;
  textBlue?: boolean;
  textDarkGray?: boolean;
  bgBlack?: boolean;
  bgWhite?: boolean;
  bgDarkGreen?: boolean;
  bgLightGreen?: boolean;
  bgWarning?: boolean;
  bgMainColor?: boolean;
  bgBlue?: boolean;
  bgDarkGray?: boolean;
  isLoading?: boolean;
  disabled?: boolean;
};

export const Button: React.FC<buttonProps> = ({
  title,
  style,
  onPress,
  rightIcon,
  leftIcon,
  sizeSmall,
  sizeBody,
  sizeMedium,
  sizeLarge,
  sizeXtraLarge,
  textBlack,
  textWhite,
  textDarkGreen,
  textLightGreen,
  textWarning,
  textMainColor,
  textBlue,
  textDarkGray,
  bgBlack,
  bgWhite,
  bgDarkGreen,
  bgLightGreen,
  bgWarning,
  bgMainColor,
  bgBlue,
  bgDarkGray,
  isLoading,
  disabled,
}) => {
  const { btnBgColor } = useButton();
  const bgColor = btnBgColor(
    bgBlack,
    bgWhite,
    bgDarkGreen,
    bgLightGreen,
    bgWarning,
    bgMainColor,
    bgBlue,
    bgDarkGray
  );
  return (
    <TouchableOpacity
      disabled={isLoading ? isLoading : disabled || isLoading}
      onPress={onPress}
      style={[
        styles.button,
        {
          backgroundColor: bgColor ? bgColor : style?.backgroundColor,
          width: style?.width ? style?.width : "95%",
          borderWidth: style?.borderColor ? DVW(0.2) : undefined,
          borderColor: style?.borderColor ? style?.borderColor : undefined,
        },
      ]}>
      {isLoading ? (
        <Loader size='small' color={colors.white} />
      ) : (
        <>
          {leftIcon && leftIcon}
          <SemiBoldText
            black={textBlack && textBlack}
            white={textWhite && textWhite}
            darkGreen={textDarkGreen && textDarkGreen}
            lightGreen={textLightGreen && textLightGreen}
            warning={textWarning && textWarning}
            mainColor={textMainColor && textWarning}
            blue={textBlue && textBlue}
            darkGray={textDarkGray && textDarkGray}
            sizeBody={sizeBody && sizeBody}
            sizeMedium={sizeMedium && sizeMedium}
            sizeSmall={sizeSmall && sizeSmall}
            sizeLarge={sizeLarge && sizeLarge}
            sizeXtraLarge={sizeXtraLarge && sizeXtraLarge}>
            {title}
          </SemiBoldText>
          {rightIcon && rightIcon}
        </>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: moderateScale(10),
    paddingVertical: Platform.OS === "ios" ? DVH(2) : DVH(1.7),
    alignSelf: "center",
    borderRadius: moderateScale(30),
    marginBottom: verticalScale(5),
  },
});
