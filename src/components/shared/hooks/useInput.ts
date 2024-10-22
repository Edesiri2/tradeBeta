import { colors } from "@src/resources/colors";
import { useState } from "react";

export const useInput = () => {
  const [textInputFocus, setTextInputFocus] = useState<boolean>(false);

  const borderColor = () => {
    if (textInputFocus) {
      return colors.black;
    } else if (!textInputFocus) {
      return colors.lightGray;
    } else {
      return undefined;
    }
  };

  const inputIconColor = () => {
    if (textInputFocus) {
      return colors.black;
    } else if (!textInputFocus) {
      return colors.black;
    } else {
      return undefined;
    }
  };

  //fires when the text-input is focused
  const onTextInputFocus = () => {
    setTextInputFocus(!textInputFocus);
    return textInputFocus;
  };

  //fires when the text-input is not focused
  const onBlurInputFocus = () => {
    setTextInputFocus(!textInputFocus);
    return textInputFocus;
  };

  return {
    onBlurInputFocus,
    onTextInputFocus,
    borderColor,
    inputIconColor,
    textInputFocus,
  };
};
