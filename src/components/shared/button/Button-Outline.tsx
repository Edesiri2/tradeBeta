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

type buttonOutlineProps = {
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
  borderBlack?: boolean;
  borderWhite?: boolean;
  borderGreen?: boolean;
  borderLightGreen?: boolean;
  borderWarning?: boolean;
  borderMainColor?: boolean;
  borderBlue?: boolean;
  borderDarkGray?: boolean;
  isLoading?: boolean;
  disabled?: boolean;
};

export const ButtonOutline: React.FC<buttonOutlineProps> = ({
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
  borderBlack,
  borderWhite,
  borderGreen,
  borderLightGreen,
  borderWarning,
  borderMainColor,
  borderBlue,
  borderDarkGray,
  isLoading,
  disabled,
}) => {
  const { btnBgColor } = useButton();
  const borderColor = btnBgColor(
    borderBlack,
    borderWhite,
    borderGreen,
    borderLightGreen,
    borderWarning,
    borderMainColor,
    borderBlue,
    borderDarkGray
  );
  return (
    <TouchableOpacity
      disabled={isLoading ? isLoading : disabled || isLoading}
      onPress={onPress}
      style={[
        styles.button,
        {
          width: style?.width ? style?.width : "95%",
          borderWidth: style?.borderWidth ? style?.borderWidth : DVW(0.5),
          borderColor: style?.borderColor ? style?.borderColor : borderColor,
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
            mainColor={textMainColor && textMainColor}
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
    paddingVertical: Platform.OS === "ios" ? DVH(1.7) : DVH(1.4),
    alignSelf: "center",
    borderRadius: moderateScale(30),
    marginBottom: verticalScale(5),
  },
});
