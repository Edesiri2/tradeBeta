import React from "react";
import { Screen } from "../../Screen";
import { RegularText } from "@src/components/shared/text";
import { BottomTabBarScreenProps } from "@src/router/types";
import { bottomTabScreenNames } from "@src/navigation";

export const Settings =
  ({}: BottomTabBarScreenProps<bottomTabScreenNames.SETTINGS>) => {
    return (
      <Screen>
        <RegularText>Settings</RegularText>
      </Screen>
    );
  };
