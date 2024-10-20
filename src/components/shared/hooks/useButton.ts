import { colors } from "@src/resources/colors";

export const useButton = () => {
  const btnBgColor = (
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
    btnBgColor,
  };
};
