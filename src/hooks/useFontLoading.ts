import { useState } from "react";
import * as Fonts from "expo-font";

export const useFontLoading = () => {
  const [fontLoading, setFontLoading] = useState<boolean>(true);

  const loadResourcesAndDataAsync = async () => {
    try {
      await Fonts.loadAsync({
        "semi-bold": require("../../assets/fonts/HelveticaNeueMedium.otf"),
        bold: require("../../assets/fonts/HelveticaNeueBold.otf"),
        regular: require("../../assets/fonts/HelveticaNeueRoman.otf"),
        light: require("../../assets/fonts/HelveticaNeueLight.otf"),
        "ultra-light": require("../../assets/fonts/HelveticaNeueUltraLight.otf"),
        thin: require("../../assets/fonts/HelveticaNeueThin.otf"),
      });
    } catch (error) {
      console.warn(error);
    } finally {
      setFontLoading(false);
    }
  };

  return {
    loadResourcesAndDataAsync,
    fontLoading,
  };
};
