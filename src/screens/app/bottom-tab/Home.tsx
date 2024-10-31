import React from "react";
import { Screen } from "../../Screen";
import { RegularText } from "@src/components/shared/text";
import { BottomTabBarScreenProps } from "@src/router/types";
import { bottomTabScreenNames } from "@src/navigation";

export const Home =
  ({}: BottomTabBarScreenProps<bottomTabScreenNames.HOME>) => {
    return (
      <Screen>
        <RegularText>Home screen</RegularText>
      </Screen>
    );
  };
