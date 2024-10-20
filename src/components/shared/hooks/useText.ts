import { colors } from "@src/resources/colors";
import { font } from "@src/resources/scaling";

export const useText = () => {
  /**
   * @return text size based on selected font size
   */
  const textSize = (
    sizeSmall?: boolean,
    sizeBody?: boolean,
    sizeMedium?: boolean,
    sizeLarge?: boolean,
    sizeXtraLarge?: boolean
  ) => {
    if (sizeSmall) {
      return font.size14;
    } else if (sizeBody) {
      return font.size16;
    } else if (sizeMedium) {
      return font.size20;
    } else if (sizeLarge) {
      return font.size22;
    } else if (sizeXtraLarge) {
      return font.size26;
    }
  };

  /**
   * @return text color based on selected font color
   */
  const textColor = (
    black?: boolean,
    white?: boolean,
    darkGreen?: boolean,
    lightGreen?: boolean,
    warning?: boolean,
    mainColor?: boolean,
    blue?: boolean,
    darkGray?: boolean
  ) => {
    if (black) {
      return colors.black;
    } else if (white) {
      return colors.white;
    } else if (darkGreen) {
      return colors.dark_green;
    } else if (lightGreen) {
      return colors.light_green;
    } else if (warning) {
      return colors.warning;
    } else if (mainColor) {
      return colors.main_color;
    } else if (blue) {
      return colors.blue;
    } else if (darkGray) {
      return colors.darkGray;
    }
  };

  return {
    textSize,
    textColor,
  };
};
