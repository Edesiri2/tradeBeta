import { DVH, DVW, font, layout, moderateScale } from "@src/resources/scaling";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  ViewStyle,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";
import { colors } from "@src/resources/colors";
import { fontFamily } from "@src/resources/fonts/font-family";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";
import { RegularText } from "../text";
import { useInput } from "../hooks";
import { AntDesign, MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { getIconComponent } from "@src/helper/helper";

// Define available icon sets
const ICON_SETS: Record<string, any> = {
  AntDesign: AntDesign,
  MaterialIcons: MaterialIcons,
  FontAwesome: FontAwesome,
  // Add more icon sets as needed
};

type inputProps = {
  placeholder: string;
  // Dynamic icon props
  maxLength?: number;
  iconName?: string;
  iconFamily?: keyof typeof ICON_SETS; // Key of the icon sets
  iconSize?: number;
  label: string;
  dropDown?: boolean;
  onPressDropDown?: () => void;
  onSubmitEditing?: () => void;
  passwordInput?: boolean;
  editable?: boolean;
  selectTextOnFocus?: boolean;
  phoneNumberInput?: boolean;
  numberInput?: boolean;
  inputStyle?: ViewStyle;
  inputWidth?: number;
  error?: string;
  showErrorText?: boolean;
  onChangeText?: (value: any) => void;
  value?: any;
};

export const TextInputs: React.FC<inputProps> = ({
  placeholder,
  // Dynamic icon props
  maxLength,
  iconName,
  iconFamily = "AntDesign", // Default icon family if not provided
  iconSize = moderateScale(20), // Default size
  label,
  dropDown,
  onPressDropDown,
  onSubmitEditing,
  passwordInput,
  editable,
  selectTextOnFocus,
  phoneNumberInput,
  numberInput,
  inputStyle,
  inputWidth,
  error,
  showErrorText,
  ...props
}) => {
  const {
    borderColor,
    onBlurInputFocus,
    onTextInputFocus,
    inputIconColor,
    textInputFocus,
  } = useInput();
  // Dynamically render the icon
  const [IconComponent, setIconComponent] =
    useState<React.ComponentType<any> | null>(null);
  const [showPassword, setShowPassword] = useState<boolean>(true);

  //get border color of input
  const getBorderColor = () => {
    if (error) {
      return colors.warning;
    } else {
      return borderColor();
    }
  };

  //get icon color of icon
  const getIconColor = () => {
    if (error) {
      return colors.warning;
    } else {
      return inputIconColor();
    }
  };

  const onPressShowPassword = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    const loadIconComponent = async () => {
      try {
        const component = await getIconComponent(iconFamily);
        setIconComponent(() => component);
      } catch (error) {
        console.error(error);
      }
    };
    loadIconComponent();
  }, [iconFamily]);

  return (
    <>
      <View style={styles.textMainContainer}>
        {label && (
          <Text
            style={[
              styles.labelText,
              {
                color:
                  dropDown || editable === false ? colors.black : colors.black,
                marginBottom: moderateScale(5),
              },
            ]}>
            {label}
          </Text>
        )}
        <View
          style={[
            styles.textContainer,
            {
              alignSelf: inputStyle?.alignSelf
                ? inputStyle?.alignSelf
                : undefined,
              width: inputStyle ? inputStyle?.width : "100%",
              borderColor: getBorderColor(),
              backgroundColor:
                dropDown || editable === false
                  ? colors.white
                  : inputStyle?.backgroundColor
                  ? inputStyle?.backgroundColor
                  : colors.white,
              height: inputStyle?.height ? inputStyle.height : DVH(6),
            },
          ]}>
          {IconComponent && iconName && (
            <IconComponent
              name={iconName}
              size={iconSize}
              color={getIconColor()}
            />
          )}
          {passwordInput ? (
            <TextInput
              placeholder={placeholder && placeholder}
              style={[
                styles.textInput,
                {
                  color: colors.black,
                  width: inputWidth ? inputWidth : iconName ? "80%" : "90%",
                },
              ]}
              placeholderTextColor={colors.lightGray}
              keyboardType={
                numberInput || phoneNumberInput ? "number-pad" : "default"
              }
              {...props}
              onFocus={() => {
                onTextInputFocus();
              }}
              onBlur={() => {
                onBlurInputFocus();
              }}
              editable={dropDown ? false : editable}
              selectTextOnFocus={dropDown ? false : selectTextOnFocus}
              secureTextEntry={showPassword}
            />
          ) : (
            <TextInput
              maxLength={maxLength}
              placeholder={placeholder && placeholder}
              style={[
                styles.textInput,
                {
                  color: colors.black,
                  width:
                    iconName && dropDown
                      ? "80%"
                      : inputWidth
                      ? inputWidth
                      : iconName
                      ? "90%"
                      : "90%",
                },
              ]}
              placeholderTextColor={colors.darkGray}
              keyboardType={
                numberInput || phoneNumberInput ? "number-pad" : "default"
              }
              {...props}
              onFocus={() => {
                onTextInputFocus();
              }}
              onBlur={() => {
                onBlurInputFocus();
              }}
              editable={dropDown ? false : editable}
              selectTextOnFocus={dropDown ? false : selectTextOnFocus}
            />
          )}
          {/* to determine which icon to show beside text-input */}
          {passwordInput ? (
            <TouchableOpacity onPress={onPressShowPassword}>
              <FontAwesome
                name={showPassword ? "eye-slash" : "eye"}
                color={getIconColor()}
                size={moderateScale(20)}
              />
            </TouchableOpacity>
          ) : (
            dropDown && (
              <TouchableOpacity onPress={onPressDropDown}>
                <MaterialIcons
                  name='keyboard-arrow-down'
                  color={getIconColor()}
                  size={moderateScale(30)}
                />
              </TouchableOpacity>
            )
          )}
        </View>
        {showErrorText && error && (
          <Animated.View entering={FadeIn} exiting={FadeOut}>
            <RegularText sizeSmall warning>
              {error}
            </RegularText>
          </Animated.View>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  textMainContainer: {
    marginBottom: layout.size18,
    gap: layout.size4,
  },
  label: {
    position: "absolute",
    top: -10, // Move the label above the input
    left: 10, // Adjust as needed to position correctly // Background to match the parent container or screen
    paddingHorizontal: 5, // Padding to give the label some space
    zIndex: 10, // Ensures the label sits above the input field
  },
  textContainer: {
    paddingHorizontal: layout.size10,
    borderWidth: DVW(0.4),
    borderRadius: moderateScale(22),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    overflow: "hidden",
    gap: layout.size10,
    position: "relative", // Important for label positioning
  },
  textInput: {
    fontFamily: fontFamily.regular,
    fontSize: font.size14,
    paddingVertical: layout.size2,
    height: "100%",
  },
  labelText: {
    fontSize: font.size14,
  },
});
